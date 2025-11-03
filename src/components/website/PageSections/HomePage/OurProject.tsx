"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function OurProject() {
  const projects = [
    {
      image: "/images/project1.jpg",
      title: "Residential Stonework",
      location: "Mesa, AZ",
    },
    {
      image: "/images/project2.jpg",
      title: "Outdoor Patio Masonry",
      location: "Scottsdale, AZ",
    },
    {
      image: "/images/project3.jpg",
      title: "Custom Brick Wall",
      location: "Phoenix, AZ",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sliderRef = React.useRef<Slider>(null);

  return (
    <section className="bg-[#FFF] py-20 px-4 text-center">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
          Our <span className="text-[#E0A523]">Project</span>
        </h2>

        {/* Slider */}
        <div className="relative rounded-2xl overflow-hidden">
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="rounded-2xl object-cover w-full h-[450px]"
                />
                {/* Caption */}
                <div className="absolute bottom-5 left-5 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <ExternalLink size={16} color="white" />
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Prev / Next Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#E0A523] p-2 rounded-full transition"
          >
            <ArrowLeft className="text-black" size={18} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#E0A523] hover:bg-[#c7911d] p-2 rounded-full transition"
          >
            <ArrowRight className="text-white" size={18} />
          </button>
        </div>

        {/* Gallery Button */}
        <div className="mt-8">
          <button className="bg-[#E0A523] hover:bg-[#c7911d] text-white font-medium px-6 py-2 rounded-md transition">
            All Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
