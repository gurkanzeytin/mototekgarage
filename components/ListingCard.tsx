"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Gauge, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Motorcycle } from '../types';
import { Badge } from './Components';

export const ListingCard: React.FC<{ listing: Motorcycle }> = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <div className="group bg-brand-surface rounded-xl overflow-hidden border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <Link href={`/satilik-motorlar/${listing.slug}`} className="block w-full h-full">
          <img
            src={listing.images[currentImageIndex]}
            alt={listing.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
        </Link>

        <div className="absolute top-4 right-4 pointer-events-none">
          <Badge status={listing.status} />
        </div>

        {/* Carousel Arrows */}
        {listing.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-accent transform -translate-x-2 group-hover:translate-x-0 duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-accent transform translate-x-2 group-hover:translate-x-0 duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {listing.images.slice(0, 5).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-brand-accent' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-brand-accent transition-colors">
            {listing.title}
          </h3>
        </div>

        <p className="text-2xl font-bold text-brand-accent mb-4">
          {listing.price.toLocaleString('tr-TR')} {listing.currency}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-textSec" />
            <span>{listing.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-brand-textSec" />
            <span>{listing.km.toLocaleString()} KM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 bg-gray-800 rounded">{listing.engine_cc} cc</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 border border-gray-700 rounded">{listing.type}</span>
          </div>
        </div>

        <Link
          href={`/satilik-motorlar/${listing.slug}`}
          className="mt-auto w-full py-3 bg-gray-800 hover:bg-brand-accent text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium group-hover:shadow-lg"
        >
          İncele
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};