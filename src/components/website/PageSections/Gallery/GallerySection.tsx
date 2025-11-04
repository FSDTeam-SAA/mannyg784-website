"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    src: "/images/hero-4.png",
    title: "Stone Wall Construction",
    description: "Mesa, AZ",
  },
  {
    src: "/images/experience-2.png",
    title: "Classic Cottage",
    description: "Modern brick & stone design",
  },
  {
    src: "/images/hero-2.jpg",
    title: "Urban House",
    description: "Large glass windows & rustic walls",
  },
  {
    src: "/images/hero-3.png",
    title: "Hill View Home",
    description: "Scenic view & natural tone",
  },
  {
    src: "/images/home-2.png",
    title: "Luxury Residence",
    description: "Premium stone finish & outdoor area",
  },
  {
    src: "/images/experience-1.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <section className="relative w-full   text-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-yellow-400">
          All Gallery
        </h1>

        {/* Screenshot-style Grid Layout */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ${
            selectedImage ? "blur-sm scale-[0.98]" : ""
          }`}
        >
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/60 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-5xl font-bold hover:text-yellow-400 cursor-pointer"
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-yellow-400">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
