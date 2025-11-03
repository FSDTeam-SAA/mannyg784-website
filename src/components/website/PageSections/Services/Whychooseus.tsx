import Image from "next/image";
import React from "react";

export const Whychooseus = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-12 gap-10">
          {/* Text Section */}
          <div className="max-w-lg">
            <div className="">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gray-800">why </span>
                <span className="text-yellow-500">choose us</span>
              </h2>
            </div>{" "}
            <div className="">
              <p className="text-gray-500 leading-relaxed">
                Choose us for our unmatched expertise in stone building,
                commitment to superior craftsmanship, and dedication to customer
                satisfaction. We promise quality, reliability, and affordability
                in every project we undertake.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-fit">
            {/* Big Background Image */}
            <Image
              src="/images/why2.jpg"
              alt="whyimage2"
              width={500}
              height={500}
              className="rounded-md object-cover"
            />

            {/* Small Overlapping Image */}
            <div className="absolute -bottom-8 -left-40 z-10">
              <Image
                src="/images/why1.jpg"
                alt="whyimage1"
                width={200}
                height={200}
                className="rounded-md object-cover shadow-xl border-4 border-black/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
