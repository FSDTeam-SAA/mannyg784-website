"use client";

export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/image/Waterfall.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      ></video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white ">
        <h1
          className="text-2xl md:text-[60px] font-semibold leading-[72px] mb-4 font-playfair text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Elite Stone Builders AZ LLC
        </h1>
        <p
          className="text-md font-normal leading-[27px] mb-6 font-poppins my-0 md:my-5 text-white max-w-2xl"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Elite craftsmanship in custom stone, tile, and masonry for homes &
          businesses across the Valley.
        </p>
        <div className="flex gap-6">
          <button className="w-[148px]   py-3 flex flex-col justify-end items-center gap-5 bg-[#E0A523] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors  cursor-pointer">
            <span className="text-[#FCFBF8]  text-center text-base font-medium   font-poppins">
              Quote A Request
            </span>
          </button>
          <button className="w-[148px]  hover:text-black  py-3 flex flex-col justify-end items-center gap-5 border border-[#F8F9FA] text-white font-semibold rounded-lg transition-colors  cursor-pointer">
            <span className="text-[#FCFBF8]  text-center text-base font-medium   font-poppins">
              Our Services
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
