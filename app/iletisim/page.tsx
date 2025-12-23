"use client";

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Section, Button } from '../../components/Components';
import { SITE_CONFIG } from '../../lib/mockData';

export default function ContactPage() {
    return (
        <div className="pt-12 pb-20">
            <Section>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">İletişim</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Sorularınız, servis randevuları veya satılık motorlar hakkında bilgi almak için bize ulaşın.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Sol Taraf: İletişim Bilgileri */}
                    <div className="space-y-6">
                        {/* Telefon Kartı */}
                        <div className="bg-brand-surface p-8 rounded-2xl border border-gray-800 flex items-start gap-4 transition-colors hover:border-brand-accent/50">
                            <div className="p-3 bg-brand-bg rounded-lg text-brand-accent shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Telefon</h3>
                                <p className="text-gray-400 mb-2 text-sm">Mesai saatleri içerisinde arayabilirsiniz.</p>
                                <a href={`tel:${SITE_CONFIG.phone}`} className="text-xl font-semibold text-white hover:text-brand-accent transition-colors">
                                    {SITE_CONFIG.phone}
                                </a>
                            </div>
                        </div>

                        {/* Adres Kartı */}
                        <div className="bg-brand-surface p-8 rounded-2xl border border-gray-800 flex items-start gap-4 transition-colors hover:border-brand-accent/50">
                            <div className="p-3 bg-brand-bg rounded-lg text-brand-accent shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Adres</h3>
                                <p className="text-gray-400 text-lg leading-snug">
                                    Kaynarca, Necip Fazıl Cd No : 4,<br />
                                    34890 Pendik/İstanbul
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/NG8X4Dczy9Sk4R1Z7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-brand-accent hover:text-white text-sm font-medium transition-colors border-b border-brand-accent/30 pb-0.5"
                                >
                                    Yol Tarifi Al &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Saatler Kartı */}
                        <div className="bg-brand-surface p-8 rounded-2xl border border-gray-800 flex items-start gap-4 transition-colors hover:border-brand-accent/50">
                            <div className="p-3 bg-brand-bg rounded-lg text-brand-accent shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                                <h3 className="text-lg font-bold text-white mb-1">Çalışma Saatleri</h3>
                                {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day) => (
                                    <div key={day} className="flex items-center justify-between py-1 border-b border-gray-800 last:border-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                            <span className="text-green-500 font-medium">{day}</span>
                                        </div>
                                        <span className="text-white font-medium">08:00 - 22:00</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf: Harita */}
                    <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden border border-gray-800 relative bg-gray-900 shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9608619657115!2d29.260378100000004!3d40.872733100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadded2cef3c29%3A0xa8e1e80d09fc4d3!2sMOTO%20TEK%20GARAGE!5e0!3m2!1str!2str!4v1766487092081!5m2!1str!2str"
                            frameBorder="0"
                            scrolling="no"
                            title="Tek Moto Pendik Konum"
                            style={{ filter: "grayscale(1) invert(1) contrast(0.8) brightness(1.2)" }}
                            className="absolute inset-0 w-full h-full"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div className="absolute bottom-4 left-4 bg-brand-surface/90 backdrop-blur border border-gray-700 p-3 rounded-lg shadow-lg max-w-xs pointer-events-none">
                            <p className="text-xs text-gray-400">Tek Moto Pendik Garage</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
