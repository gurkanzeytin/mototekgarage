export type MotorcycleStatus = 'available' | 'reserved' | 'sold';

export interface Motorcycle {
  id: string;
  slug: string;
  title: string;
  price: number;
  currency: string;
  year: number;
  km: number;
  engine_cc: number;
  brand: string;
  model: string;
  type: 'SuperSport' | 'Naked' | 'Touring' | 'Scooter' | 'Chopper' | 'Enduro';
  abs: boolean;
  description: string;
  status: MotorcycleStatus;
  images: string[];
  specs: Record<string, string>;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}