"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from './Components';
import { SITE_CONFIG } from '../lib/mockData';

// Custom WhatsApp Icon Component for the sticky button
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Anasayfa', path: '/' },

    { name: 'Hizmetlerimiz', path: '/servis' },
    { name: 'Randevu', path: '/randevu' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-gray-800">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">TEK MOTO</span>
              <span className="text-xs text-brand-accent tracking-widest font-semibold">PENDİK GARAGE</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${pathname === link.path ? 'text-brand-accent' : 'text-gray-300'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-t border-gray-800 absolute w-full left-0">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block text-base font-medium text-gray-300 hover:text-brand-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-brand-surface border-t border-gray-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-white">TEK MOTO GARAGE</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Pendik Kaynarca Mahallesinin en güvenilir motosiklet servisi ve ikinci el satış noktası. Tutkumuz, sizin güvenliğiniz ve sürüş keyfiniz.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/tek_moto_pendik_garage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>

          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-gray-400">

            <li><Link href="/servis" className="hover:text-brand-accent">Servis Hizmetleri</Link></li>
            <li><Link href="/randevu" className="hover:text-brand-accent">Randevu Al</Link></li>
            <li><Link href="/iletisim" className="hover:text-brand-accent">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/servis/periyodik-bakim" className="hover:text-brand-accent">Periyodik Bakım</Link></li>
            <li><Link href="/servis/lastik-degisimi" className="hover:text-brand-accent">Lastik Değişimi</Link></li>
            <li><Link href="/servis/hasar-onarim" className="hover:text-brand-accent">Hasar Onarım</Link></li>
            <li><Link href="/servis/ekspertiz" className="hover:text-brand-accent">Ekspertiz</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">İletişim</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>{SITE_CONFIG.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>{SITE_CONFIG.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 font-medium">● Açık</span>
              <span>Pzt-Pzr 08:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; 2025 Tek Moto Pendik Garage. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <Link href="/kvkk" className="hover:text-white">KVKK</Link>
          <Link href="/cerez" className="hover:text-white">Çerez Politikası</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
};