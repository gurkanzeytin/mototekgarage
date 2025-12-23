import { Motorcycle, ServiceItem, Testimonial, FaqItem } from '../types';

export const SITE_CONFIG = {
  name: "Tek Moto Pendik",
  phone: "+90 551 635 18 02",
  phoneDisplay: "+90 551 635 18 02",
  whatsapp: "905516351802",
  address: "Kaynarca, Necip Fazıl Cd No : 4, 34890 Pendik/İstanbul",
  mapsLink: "https://maps.google.com",
  instagram: "@tek_moto_pendik_garage"
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    slug: 'periyodik-bakim',
    title: 'Periyodik Bakım',
    shortDescription: 'Motorunuzun ömrünü uzatan kapsamlı periyodik bakım hizmetleri.',
    fullDescription: 'Her marka ve model motosiklet için üretici standartlarına uygun periyodik bakım hizmeti sunuyoruz. Yağ değişimi, filtre kontrolleri, fren sistemi bakımı ve genel check-up işlemlerini titizlikle gerçekleştiriyoruz.',
    icon: 'Wrench',
    features: ['Motor Yağı & Filtre Değişimi', 'Hava Filtresi Kontrolü', 'Fren Hidroliği Değişimi', 'Zincir Temizlik & Yağlama', 'Genel Vida Sıkımı']
  },
  {
    id: '2',
    slug: 'lastik-degisimi',
    title: 'Lastik Değişimi & Balans',
    shortDescription: 'Profesyonel ekipmanlarla lastik değişimi ve balans ayarı.',
    fullDescription: 'Sürüş güvenliğiniz için en kritik bileşen olan lastiklerinizi profesyonel makine parkurumuzda değiştiriyoruz. Dijital balans cihazımız ile titreşimsiz bir sürüş garanti ediyoruz.',
    icon: 'CircleDot',
    features: ['Sökme & Takma', 'Dijital Balans', 'Subap Kontrolü', 'Lastik Basınç Ayarı']
  },
  {
    id: '3',
    slug: 'hasar-onarim',
    title: 'Hasar Onarım & Kaporta',
    shortDescription: 'Kaza sonrası hasar tespiti ve orijinal parça ile onarım.',
    fullDescription: 'Kaza sonrası motosikletinizin eski kondisyonuna dönmesi için detaylı hasar tespiti ve onarım hizmeti. Grenaj tamiri, boya işlemleri ve şase kontrolleri.',
    icon: 'Hammer',
    features: ['Hasar Tespiti', 'Orijinal Yedek Parça', 'Grenaj Boya & Tamir', 'Sigorta İşlemleri Desteği']
  },
  {
    id: '4',
    slug: 'ekspertiz',
    title: 'Motosiklet Ekspertiz',
    shortDescription: 'İkinci el alımlarında güven veren detaylı ekspertiz raporu.',
    fullDescription: 'Yeni bir motosiklet almadan önce bize uğrayın. Motor bloğu, şase, elektronik aksam ve yürüyen aksam kontrolleri ile sürpriz masraflardan korunun.',
    icon: 'ClipboardCheck',
    features: ['Motor Kompresyon Testi', 'Şase Lazer Kontrolü', 'Elektronik Arıza Tespiti', 'Kaporta & Boya Kontrolü']
  }
];

export const LISTINGS: Motorcycle[] = [
  {
    id: '101',
    slug: 'yamaha-mt-07-2023',
    title: 'Yamaha MT-07 2023',
    price: 385000,
    currency: 'TL',
    year: 2023,
    km: 4500,
    engine_cc: 689,
    brand: 'Yamaha',
    model: 'MT-07',
    type: 'Naked',
    abs: true,
    status: 'available',
    description: 'Hatasız, boyasız, tramersiz. Rodaj bakımı yetkili serviste yapılmıştır. Ekstra olarak koruma takozları ve radyatör koruma mevcuttur.',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625345639141-8f5530182522?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Silindir': 'Çift',
      'Soğutma': 'Sıvı',
      'Vites': '6 İleri',
      'Yakıt': 'Benzin',
      'Renk': 'Tech Black'
    }
  },
  {
    id: '102',
    slug: 'honda-cbr-650r-2022',
    title: 'Honda CBR 650R 2022',
    price: 420000,
    currency: 'TL',
    year: 2022,
    km: 12000,
    engine_cc: 649,
    brand: 'Honda',
    model: 'CBR 650R',
    type: 'SuperSport',
    abs: true,
    status: 'reserved',
    description: 'Kapalı garaj motorudur. Sadece hafta sonları kullanılmıştır. Quickshifter mevcuttur. Zincir dişli seti yeni değişti.',
    images: [
      'https://images.unsplash.com/photo-1615172282427-9a5752d358cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Silindir': 'Dört',
      'Soğutma': 'Sıvı',
      'Vites': '6 İleri',
      'Yakıt': 'Benzin',
      'Renk': 'Mat Siyah'
    }
  },
  {
    id: '103',
    slug: 'vespa-gts-300-2021',
    title: 'Vespa GTS 300 Super',
    price: 290000,
    currency: 'TL',
    year: 2021,
    km: 8000,
    engine_cc: 278,
    brand: 'Vespa',
    model: 'GTS 300',
    type: 'Scooter',
    abs: true,
    status: 'available',
    description: 'Şehir içi kullanım için ideal. Tüm bakımları zamanında yapıldı. Orijinal topcase ve siperlik camı ile birlikte verilecektir.',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480536762335-901f4c7d0d61?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Silindir': 'Tek',
      'Soğutma': 'Sıvı',
      'Vites': 'Otomatik (CVT)',
      'Yakıt': 'Benzin',
      'Renk': 'Sarı'
    }
  },
  {
    id: '104',
    slug: 'bmw-r-1250-gs-2020',
    title: 'BMW R 1250 GS Adventure',
    price: 950000,
    currency: 'TL',
    year: 2020,
    km: 35000,
    engine_cc: 1254,
    brand: 'BMW',
    model: 'R 1250 GS',
    type: 'Enduro',
    abs: true,
    status: 'sold',
    description: 'Dünya turuna hazır. 3 lü çanta seti, navigasyon hazırlığı ve sis farları dahil. Yetkili servis bakımlı.',
    images: [
      'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625043484555-47841a752840?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Silindir': 'Boxer Çift',
      'Soğutma': 'Sıvı/Hava',
      'Vites': '6 İleri',
      'Yakıt': 'Benzin',
      'Renk': 'HP Style'
    }
  },
  {
    id: '105',
    slug: 'ducati-monster-2023',
    title: 'Ducati Monster 937',
    price: 550000,
    currency: 'TL',
    year: 2023,
    km: 1500,
    engine_cc: 937,
    brand: 'Ducati',
    model: 'Monster',
    type: 'Naked',
    abs: true,
    status: 'available',
    description: 'Neredeyse sıfır. İhtiyaç fazlası satılık. Quickshifter, Traction Control, Wheelie Control aktif.',
    images: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599819811267-3a137b02db4d?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Silindir': 'L-Twin',
      'Soğutma': 'Sıvı',
      'Vites': '6 İleri',
      'Yakıt': 'Benzin',
      'Renk': 'Ducati Red'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    role: 'MT-07 Sahibi',
    comment: 'Servis kalitesi muazzam. Ustalar çok ilgili ve işin ehli. Motorumun periyodik bakımı için geldim, çok memnun kaldım.',
    avatar: 'https://picsum.photos/id/1011/100/100'
  },
  {
    id: '2',
    name: 'Selin Demir',
    role: 'Vespa Kullanıcısı',
    comment: 'Lastik değişimi ve varyatör bakımı yaptırdım. Bekleme salonu çok rahattı, çay kahve ikramı harika. Teşekkürler Tek Moto.',
    avatar: 'https://picsum.photos/id/1027/100/100'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Pazar günleri açık mısınız?',
    answer: 'Hayır, servisimiz Pazar günleri kapalıdır. Hafta içi 09:00-19:00 ve Cumartesi 10:00-18:00 saatleri arasında hizmet vermekteyiz.'
  },
  {
    question: 'Ekspertiz raporu veriyor musunuz?',
    answer: 'Evet, ikinci el motosiklet alım-satım işlemleriniz için detaylı teknik ekspertiz hizmeti sunuyoruz.'
  },
  {
    question: 'Randevusuz gelebilir miyim?',
    answer: 'Acil durumlar dışında, size daha iyi hizmet verebilmek adına randevu almanızı rica ediyoruz. WhatsApp üzerinden hızlıca randevu oluşturabilirsiniz.'
  }
];
