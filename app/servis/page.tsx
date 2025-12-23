"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, CircleDot, Hammer, ClipboardCheck } from 'lucide-react';
import { Section, Button } from '../../components/Components';
import { SERVICES } from '../../lib/mockData';

// Helper to render icon dynamically
const IconMap: Record<string, React.ElementType> = {
    'Wrench': Wrench,
    'CircleDot': CircleDot,
    'Hammer': Hammer,
    'ClipboardCheck': ClipboardCheck
};

export default function ServicesPage() {
    return (
        <div className="pt-12">
            <Section className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Hizmetlerimiz</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Motosikletiniz için ihtiyacınız olan her şey, uzman ellerde.
                    Bakımdan onarıma, lastikten ekspertize kadar geniş hizmet yelpazesi.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 gap-12">
                    {SERVICES.map((service, idx) => {
                        const Icon = IconMap[service.icon] || Wrench;
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={service.id} id={service.slug} className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={
                                            service.slug === 'lastik-degisimi' ? '/images/lastik-rot-balans.jpg' :
                                                service.slug === 'hasar-onarim' ? '/images/hasar-onarim.jpg' :
                                                    service.slug === 'ekspertiz' ? '/images/ekspertiz.jpg' :
                                                        service.slug === 'periyodik-bakim' ? '/images/periyodik-bakim.jpg' :
                                                            `https://picsum.photos/seed/${service.slug}/800/500`
                                        }
                                        alt={service.title}
                                        className="rounded-2xl shadow-2xl border border-gray-800 w-full object-cover h-64 md:h-80 hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-surface border border-gray-700 text-brand-accent mb-2">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{service.fullDescription}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                        {service.features.map(f => (
                                            <li key={f} className="flex items-center text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4">
                                        <Button to="/randevu" variant="outline">
                                            Randevu Al
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <Section className="bg-brand-surface mt-12 text-center border-y border-gray-800">
                <h2 className="text-3xl font-bold mb-4">Motosikletiniz Bizimle Güvende</h2>
                <p className="text-gray-400 mb-8">Hemen randevu alın, zaman kaybetmeyin.</p>
                <Button to="/randevu" variant="primary" className="px-8 py-4 text-lg">Online Randevu Oluştur</Button>
            </Section>
        </div>
    );
}
