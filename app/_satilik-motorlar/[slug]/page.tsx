"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Section, Button, Badge } from '../../../components/Components';
import { ListingCard } from '../../../components/ListingCard';
import { SITE_CONFIG } from '../../../lib/mockData';
import { Motorcycle } from '../../../types';

export default function ListingDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [listing, setListing] = useState<Motorcycle | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState<string>('');
    const [relatedListings, setRelatedListings] = useState<Motorcycle[]>([]);

    useEffect(() => {
        if (!slug) return;

        async function fetchData() {
            setLoading(true);
            try {
                // Fetch current listing
                const res = await fetch(`/api/listings/${slug}`);
                if (!res.ok) throw new Error('Not found');
                const data = await res.json();
                setListing(data);
                if (data.images && data.images.length > 0) {
                    setActiveImage(data.images[0]);
                }

                // Fetch related listings (simple implementation: fetch all and filter)
                // In production, this should be a separate API call with params
                const resAll = await fetch('/api/listings');
                const allData = await resAll.json();
                if (Array.isArray(allData)) {
                    const related = allData
                        .filter((l: Motorcycle) => l.type === data.type && l.id !== data.id)
                        .slice(0, 3);
                    setRelatedListings(related);
                }

            } catch (error) {
                console.error(error);
                setListing(null);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [slug]);


    if (loading) {
        return (
            <div className="pt-20 pb-20 text-center">
                <p className="text-white">Yükleniyor...</p>
            </div>
        );
    }

    if (!listing) {
        return (
            <div className="pt-20 pb-20 text-center">
                <p className="text-white text-xl mb-4">İlan bulunamadı</p>
                <Button to="/satilik-motorlar" variant="outline">İlanlara Dön</Button>
            </div>
        );
    }

    const whatsappMessage = `Merhaba, ${listing.title} (ID: ${listing.id}) ilanı hakkında bilgi almak istiyorum.`;
    const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <Link href="/satilik-motorlar" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    İlanlara Dön
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                            {/* Fallback image if no images */}
                            <img src={activeImage || 'https://via.placeholder.com/800x600?text=No+Image'} alt={listing.title} className="w-full h-full object-contain" />
                        </div>
                        {listing.images && listing.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-2">
                                {listing.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(img)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-brand-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl md:text-4xl font-bold text-white">{listing.title}</h1>
                            <Badge status={listing.status} />
                        </div>

                        <div className="text-4xl font-bold text-brand-accent mb-8">
                            {listing.price.toLocaleString('tr-TR')} {listing.currency}
                        </div>

                        <div className="bg-brand-surface rounded-xl p-6 border border-gray-800 mb-8">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Özellikler</h3>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Yıl</span>
                                    <span className="font-medium">{listing.year}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">KM</span>
                                    <span className="font-medium">{listing.km.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Motor Hacmi</span>
                                    <span className="font-medium">{listing.engine_cc} cc</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tipi</span>
                                    <span className="font-medium">{listing.type}</span>
                                </div>
                                {listing.specs && Object.entries(listing.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                        <span className="text-gray-400">{key}</span>
                                        <span className="font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-2">Açıklama</h3>
                            <p className="text-gray-300 leading-relaxed">{listing.description}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button to={whatsappLink} variant="primary" fullWidth className="py-4 text-lg">
                                WhatsApp ile İletişime Geç
                            </Button>
                            <p className="text-xs text-center text-gray-500">
                                Bu ilana WhatsApp üzerinden mesaj göndererek KVKK metnini onaylamış olursunuz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {relatedListings.length > 0 && (
                <Section className="mt-12 border-t border-gray-800">
                    <h2 className="text-2xl font-bold mb-8">Benzer İlanlar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedListings.map(l => (
                            <ListingCard key={l.id} listing={l} />
                        ))}
                    </div>
                </Section>
            )}
        </div>
    );
}
