"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    src: "/images/Gallery-1.jpg",
    title: "Stone Wall Construction",
    description: "Mesa, AZ",
  },
  {
    src: "/images/Gallery-2.jpg",
    title: "Classic Cottage",
    description: "Modern brick & stone design",
  },
  {
    src: "/images/Gallery-3.jpg",
    title: "Urban House",
    description: "Large glass windows & rustic walls",
  },
  {
    src: "/images/Gallery-4.jpg",
    title: "Hill View Home",
    description: "Scenic view & natural tone",
  },
  {
    src: "/images/Gallery-5.jpg",
    title: "Luxury Residence",
    description: "Premium stone finish & outdoor area",
  },
  {
    src: "/images/Gallery-6.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-7.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-8.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-9.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-10.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-11.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-12.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-13.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-14.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-15.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-16.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "/images/Gallery-17.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
];

const layoutClasses: string[] = [
  "col-span-3 row-span-4", // 1
  "col-span-6 row-span-2 col-start-4", // 2
  "col-span-3 row-span-2 col-start-10", // 3
  "col-span-3 row-span-2 col-start-4 row-start-3", // 4
  "col-span-6 row-span-2 col-start-7 row-start-3", // 5
  "col-span-6 row-span-2 row-start-5", // 6
  "col-span-3 row-span-2 col-start-7 row-start-5", // 7
  "col-span-3 row-span-4 col-start-10 row-start-5", // 8
  "col-span-6 row-span-2 col-start-4 row-start-7", // 9
  "col-span-3 row-span-4 col-start-1 row-start-7", // 10
  "col-span-3 row-span-2 col-start-4 row-start-9", // 11
  "col-span-6 row-span-2 col-start-7 row-start-9", // 12
  "col-span-3 row-span-2 row-start-11", // 13
  "col-span-6 row-span-2 col-start-4 row-start-11", // 14
  "col-span-3 row-span-4 col-start-10 row-start-11", // 15
  "col-span-3 row-span-2 col-start-7 row-start-13", // 16
  "col-span-6 row-span-2 col-start-1 row-start-13", // 17
  "col-span-3 row-span-2 col-start-10 row-start-13", // 18
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <section className="relative w-full text-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-yellow-400">
          All Gallery
        </h1>

        {/* ✅ Responsive Grid */}
        <div
          className="
            grid gap-5
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-12 lg:auto-rows-[minmax(150px,1fr)]
          "
        >
          {images.map((item, index) => {
            const positionClass =
              layoutClasses[index] && index < layoutClasses.length
                ? `block ${layoutClasses[index]}`
                : "col-span-1";

            return (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${positionClass}`}
              >
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/70 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery modal"
              className="absolute top-2 right-4 text-white text-5xl font-bold hover:text-yellow-400 cursor-pointer"
            >
              &times;
            </button>

            <div className="w-full rounded-lg shadow-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

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
