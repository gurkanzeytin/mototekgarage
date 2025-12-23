"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WorkshopGallery = () => {
    const images = [
        "/images/gallery/workshop-01.jpg",
        "/images/gallery/workshop-02.jpg",
        "/images/gallery/workshop-03.jpg",
        "/images/gallery/workshop-04.jpg",
        "/images/gallery/workshop-05.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative group w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            {/* Main Image */}
            <img
                src={images[currentIndex]}
                alt={`Atölye Görsel ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-accent text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0"
                aria-label="Önceki"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-accent text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 transform translate-x-[10px] group-hover:translate-x-0"
                aria-label="Sonraki"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-brand-accent w-6' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkshopGallery;
