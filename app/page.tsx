import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { Section, Button } from '../components/Components';
import { SERVICES, FAQS } from '../lib/mockData';
import WorkshopGallery from '../components/WorkshopGallery';

const Hero = () => (
  <div className="relative h-[85vh] flex items-center">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/hero-motor.jpg"
        alt="Motorcycle Workshop"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="max-w-2xl">
        <div className="inline-block px-3 py-1 mb-6 border border-brand-accent/30 bg-brand-accent/10 rounded-full">
          <span className="text-brand-accent font-medium text-sm tracking-wide uppercase">Pendik'in 1 Numaralı Servisi</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Tutkunuz İçin <br />
          <span className="text-brand-accent">Profesyonel</span> Dokunuş
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Garantili servis hizmeti, ekspertiz ve profesyonel bakım.
          Sürüş keyfiniz hiç bitmesin diye buradayız.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button to="/randevu" variant="primary" className="text-xl px-10 py-4 font-bold shadow-brand-accent/30 hover:scale-105 transition-transform">
            Servis Randevusu Al
          </Button>
        </div>
        <div className="mt-12 flex gap-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">10+</span>
            <span className="text-sm text-gray-400">Yıllık Tecrübe</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">5000+</span>
            <span className="text-sm text-gray-400">Mutlu Müşteri</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="bg-brand-surface border-y border-gray-800">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
        <ShieldCheck className="w-10 h-10 text-brand-accent shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Garantili İşçilik</h3>
          <p className="text-gray-400 text-sm">Yaptığımız her işlemin arkasındayız. Yedek parça ve işçilik garantisi.</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
        <Clock className="w-10 h-10 text-brand-accent shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Hızlı Teslimat</h3>
          <p className="text-gray-400 text-sm">Motorunuzu en kısa sürede, eksiksiz olarak size teslim ediyoruz.</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
        <Star className="w-10 h-10 text-brand-accent shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Uzman Kadro</h3>
          <p className="text-gray-400 text-sm">Sertifikalı ve markalarda uzmanlaşmış teknisyen kadrosu.</p>
        </div>
      </div>
    </div>
  </div>
);

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />

      {/* Services Preview */}
      <Section className="bg-brand-surface relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Profesyonel Hizmetler</h2>
          <p className="text-gray-400">Motosikletiniz için ihtiyacınız olan her şey tek çatı altında.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, idx) => (
            <Link key={service.id} href={`/servis/${service.slug}`} className="flex items-center p-6 bg-brand-bg border border-gray-800 rounded-xl hover:border-brand-accent transition-all group">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-6 group-hover:bg-brand-accent transition-colors shrink-0">
                <span className="text-xl font-bold text-white group-hover:text-white">{(idx + 1).toString().padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{service.shortDescription}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                <ArrowRight className="text-brand-accent" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Workshop Carousel */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Atölyemizden Kareler</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Son teknoloji ekipmanlar ve temiz işçilik. Motosikletinize kendi motorumuz gibi bakıyoruz.
              Şeffaf servis anlayışımızla işlemleriniz yapılırken atölyemizi ziyaret edebilir,
              kalite standartlarımızı yerinde görebilirsiniz.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-accent">7/24</span>
                <span className="text-sm text-gray-500">Güvenlik</span>
              </div>
              <div className="w-px bg-gray-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-accent">%100</span>
                <span className="text-sm text-gray-500">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <WorkshopGallery />
          </div>
        </div>
      </Section>

      {/* Google Maps Location */}
      <Section className="bg-gradient-to-br from-brand-surface to-brand-bg border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Konumumuz</h2>
            <a
              href="https://maps.app.goo.gl/NG8X4Dczy9Sk4R1Z7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-accent/90 transition-all hover:scale-105 shadow-lg shadow-brand-accent/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Yol Tarifi Al
            </a>
          </div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9608619657115!2d29.260378100000004!3d40.872733100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadded2cef3c29%3A0xa8e1e80d09fc4d3!2sMOTO%20TEK%20GARAGE!5e0!3m2!1str!2str!4v1766487092081!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tek Moto Pendik Garage Location"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
