"use client";

import React from 'react';
import { Section, Button } from '../../components/Components';
import { SITE_CONFIG } from '../../lib/mockData';
import { MessageCircle, Clock, Calendar } from 'lucide-react';

export default function AppointmentPage() {
    return (
        <div className="pt-12 pb-20">
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse">
                            <MessageCircle className="w-10 h-10 text-green-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">WhatsApp ile Hızlı Randevu</h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Form doldurmakla uğraşmayın. Uzman ekibimizle doğrudan WhatsApp üzerinden iletişime geçerek
                        müsaitlik durumunu öğrenin ve randevunuzu anında oluşturun.
                    </p>

                    <div className="bg-brand-surface border border-gray-800 rounded-2xl p-8 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center p-4">
                                <Clock className="w-8 h-8 text-brand-accent mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Hızlı Dönüş</h3>
                                <p className="text-gray-400 text-sm">Mesai saatleri içinde ortalama 15 dakika içinde yanıt veriyoruz.</p>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <Calendar className="w-8 h-8 text-brand-accent mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Esnek Planlama</h3>
                                <p className="text-gray-400 text-sm">Size en uygun gün ve saati birlikte belirleyelim.</p>
                            </div>
                        </div>
                    </div>

                    <Button
                        to={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                        variant="primary"
                        className="text-xl px-12 py-5 bg-[#25D366] hover:bg-[#128C7E] border-none shadow-lg shadow-green-500/20 w-full md:w-auto"
                    >
                        <MessageCircle className="w-6 h-6 mr-3" />
                        WhatsApp ile Randevu Oluştur
                    </Button>

                    <p className="mt-6 text-sm text-gray-500">
                        Direkt hat: <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-400 hover:text-white transition-colors">{SITE_CONFIG.phoneDisplay}</a>
                    </p>
                </div>
            </Section>
        </div>
    );
}
