"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import { Section, Button, Input } from '../../components/Components';
import { ListingCard } from '../../components/ListingCard';
import { Motorcycle } from '../../types';

export default function ListingsPage() {
    const [listings, setListings] = useState<Motorcycle[]>([]);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        type: 'all',
        minPrice: '',
        maxPrice: '',
    });

    useEffect(() => {
        async function fetchListings() {
            try {
                const res = await fetch('/api/listings');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setListings(data);
                }
            } catch (error) {
                console.error('Failed to fetch listings', error);
            } finally {
                setLoading(false);
            }
        }
        fetchListings();
    }, []);

    // Helper to format number with dots (e.g. 7000 -> 7.000)
    const formatPrice = (value: string) => {
        // Remove non-digits
        const clean = value.replace(/\D/g, '');
        // Format with thousands separator
        return clean.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    // Helper to get clean number for filtering
    const getCleanPrice = (formatted: string) => {
        return parseInt(formatted.replace(/\./g, '')) || 0;
    };

    const handlePriceChange = (field: 'minPrice' | 'maxPrice', value: string) => {
        const formatted = formatPrice(value);
        setFilters({ ...filters, [field]: formatted });
    };

    const filteredListings = useMemo(() => {
        return listings.filter(l => {
            const matchesSearch = l.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                l.brand.toLowerCase().includes(filters.search.toLowerCase());
            const matchesType = filters.type === 'all' || l.type === filters.type;

            const price = l.price;
            const min = filters.minPrice ? getCleanPrice(filters.minPrice) : 0;
            const max = filters.maxPrice ? getCleanPrice(filters.maxPrice) : Infinity;
            const matchesPrice = price >= min && price <= max;

            return matchesSearch && matchesType && matchesPrice;
        });
    }, [filters, listings]);

    const uniqueTypes = Array.from(new Set(listings.map(l => l.type)));

    return (
        <div className="pt-8">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Satılık Motosikletler</h1>
                        <p className="text-gray-400">Stoklarımızdaki güncel motosikletleri inceleyin.</p>
                    </div>
                    <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden w-full">
                        <Filter className="w-4 h-4 mr-2" /> Filtrele
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6 bg-brand-surface p-6 rounded-xl border border-gray-800 h-fit sticky top-24`}>
                        <div className="flex justify-between items-center lg:hidden mb-4">
                            <h3 className="font-bold">Filtreler</h3>
                            <button onClick={() => setShowFilters(false)}><X /></button>
                        </div>

                        <Input
                            label="Arama"
                            placeholder="Marka veya model ara..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />

                        <div>
                            <label className="text-sm font-medium text-gray-300 mb-2 block">Kategori</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="type"
                                        checked={filters.type === 'all'}
                                        onChange={() => setFilters({ ...filters, type: 'all' })}
                                        className="text-brand-accent focus:ring-brand-accent bg-gray-800 border-gray-600"
                                    />
                                    <span className="text-sm text-gray-300">Tümü</span>
                                </label>
                                {uniqueTypes.map(type => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="type"
                                            checked={filters.type === type}
                                            onChange={() => setFilters({ ...filters, type })}
                                            className="text-brand-accent focus:ring-brand-accent bg-gray-800 border-gray-600"
                                        />
                                        <span className="text-sm text-gray-300">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                label="Min Fiyat"
                                placeholder="0"
                                type="text"
                                value={filters.minPrice}
                                onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                            />
                            <Input
                                label="Max Fiyat"
                                placeholder="Max"
                                type="text"
                                value={filters.maxPrice}
                                onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                            />
                        </div>

                        <Button
                            variant="ghost"
                            className="w-full text-sm"
                            onClick={() => setFilters({ search: '', type: 'all', minPrice: '', maxPrice: '' })}
                        >
                            Filtreleri Temizle
                        </Button>
                    </div>

                    {/* Grid */}
                    <div className="lg:col-span-3">
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <span className="text-brand-accent">Yükleniyor...</span>
                            </div>
                        ) : filteredListings.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredListings.map(l => (
                                    <ListingCard key={l.id} listing={l} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-brand-surface rounded-xl border border-gray-800 border-dashed">
                                <p className="text-gray-400 text-lg">Aradığınız kriterlere uygun ilan bulunamadı.</p>
                                <Button variant="ghost" onClick={() => setFilters({ search: '', type: 'all', minPrice: '', maxPrice: '' })} className="mt-4">
                                    Filtreleri Temizle
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
