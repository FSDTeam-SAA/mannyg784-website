// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import React from "react";

// export const AboutEliteStone = () => {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-8">
//           {/* Left Side – Images */}
//           <div className="flex flex-col gap-4">
//             <div>
//               <Image
//                 src="/images/service1.jpg"
//                 alt="service image"
//                 className="object-cover rounded-lg shadow-md"
//                 width={400}
//                 height={300}
//               />
//             </div>
//             <div className="flex gap-4">
//               <Image
//                 src="/images/service1.jpg"
//                 alt="service image"
//                 className="object-cover rounded-lg shadow-md"
//                 width={190}
//                 height={150}
//               />
//               <Image
//                 src="/images/service1.jpg"
//                 alt="service image"
//                 className="object-cover rounded-lg shadow-md"
//                 width={190}
//                 height={150}
//               />
//             </div>
//           </div>

//           {/* Right Side – Content */}
//           <div className="max-w-lg text-start">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               About Elite Stone Builders AZ LLC
//             </h2>

//             <h2 className="text-3xl font-bold mb-4 text-gray-800">Experience the Excellence, Build with the Best!</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Elite Stone Builders AZ LLC is your trusted partner in providing
//               superior quality stone construction solutions. Built on the core
//               values of integrity, craftsmanship, and customer satisfaction, we
//               offer an unmatched blend of style, functionality, and durability
//               in our work. Our team of highly skilled professionals brings
//               decades of experience and a commitment to excellence, ensuring we
//               exceed client expectations at every turn. Specialized in custom
//               stone projects, we cater to both residential and commercial needs
//               across Arizona.
//             </p>

//             <div className="flex gap-4 items-center ">
//                 <Button
//                   variant="outline"
//                   className="w-20 border border-white text-white bg-[#CA9520] rounded-lg font-medium
//                              transition-all duration-300
//                              group-hover:bg-transparent cursor-pointer hover:border-[#CA9520] group-hover:text-black group-hover:border-[#CA9520]"

//                 >
//                   See More
//                 </Button>
//                  <Button
//                   variant="outline"
//                   className="w-20 border border-white text-white bg-[#CA9520] rounded-lg font-medium
//                              transition-all duration-300
//                              group-hover:bg-transparent cursor-pointer hover:border-[#CA9520] group-hover:text-black group-hover:border-[#CA9520]"

//                 >
//                   Call Now
//                 </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const AboutEliteStone = () => {
  return (
    <section className="py-16 bg-white text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side – Images */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div>
              <Image
                src="/images/service1.jpg"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-full"
                width={600}
                height={400}
              />
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/hero-3.jpg"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-1/2"
                width={290}
                height={200}
              />
              <Image
                src="/images/hero.png"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-1/2"
                width={290}
                height={200}
              />
            </div>
          </div>

          {/* Right Side – Content */}
          <div className="max-w-xl w-full lg:w-1/2">
            <h3 className="text-lg font-bold text-[#CA9520] mb-2">
              About Elite Stone{" "}
              <span className="font-semibold">Builders AZ LLC</span>
            </h3>

            <h2
              className="text-4xl text-gray-800 font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Experience the Excellence, Build with the Best!
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-md">
              Elite Stone Builders AZ LLC is your trusted partner in providing
              superior quality stone construction solutions. Built on the core
              values of integrity, craftsmanship, and customer satisfaction, we
              offer an unmatched blend of style, functionality, and durability
              in our work. Our team of highly skilled professionals brings
              decades of experience and a commitment to excellence, ensuring we
              exceed client expectations at every turn. Specialized in custom
              stone projects, we cater to both residential and commercial needs
              across Arizona.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#CA9520] hover:bg-transparent cursor-pointer hover:text-[#CA9520] border border-[#CA9520] rounded-lg px-5 py-2 font-medium transition-all duration-300">
                More About
              </Button>
              <Button className="border border-[#CA9520] text-[#CA9520] bg-transparent cursor-pointer hover:bg-[#CA9520] hover:text-white rounded-lg px-5 py-2 font-medium transition-all duration-300">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
