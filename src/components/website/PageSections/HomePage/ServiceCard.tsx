// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import Image from "next/image";

// export default function ServiceCard() {
//   return (
//     <div>
//       <div className="container space-y-6 py-12">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold">
//             We offer a wide{" "}
//             <span className="text-#CA9520">range of services</span>{" "}
//           </h2>
//         </div>

//         <div className="flex justify-center items-center">
//           <div className="flex space-x-4">
//             {/* <Card className="p-6 bg-amber-50 hover:transition-transform hover:bg-gray-500 hover:delay-75"> */}
//             <Card className="p-6 bg-amber-50 hover:transition-transform hover:scale-105 hover:bg-gray-500 hover:delay-75 hover:shadow-lg">
//               <CardHeader>
//                 <Image
//                   src="/images/service1.jpg"
//                   alt="Service 1"
//                   width={150}
//                   height={150}
//                 />
//               </CardHeader>
//               <CardContent>
//                 <h2>Service 1</h2>
//                 <p>
//                   At Elite Stone Builders AZ LLC, we&apos;re proud to offer our
//                   exceptional Stone Works service, setting the gold standard in
//                   the industry. With unmatched
//                 </p>
//                 <Button className="mt-4 bg-b-#CA9520 hover:bg-amber-600 text-white">
//                   See More
//                 </Button>
//               </CardContent>
//             </Card>
//             {/* <div className="card p-6 border rounded bg-amber-50">
//               <h3>Service 2</h3>
//               <p>Description of Service 2.</p>
//             </div>
//             <div className="card p-6 border rounded bg-amber-50">
//               <h3>Service 3</h3>
//               <p>Description of Service 3.</p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       ServiceCard Component
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Stone Works",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Stone Works service, setting the gold standard in the industry. With unmatched craftsmanship and attention to detail.",
    image: "/images/service1.jpg",
  },
  {
    title: "Stone Veneer",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Stone Veneer service, setting the gold standard in the industry. With unmatched craftsmanship and detail.",
    image: "/images/service2.jpg",
  },
  {
    title: "Brick Veneer",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Brick Veneer service, setting the gold standard in the industry. With unmatched quality and precision.",
    image: "/images/service3.jpg",
  },
];

export default function ServiceCard() {
  return (
    <section
      className="bg-gray-300 text-white py-16"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 text-center space-y-10">
        {/* Accessible heading */}
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-semibold"
        >
          We offer a wide{" "}
          <span className="text-[#CA9520]">range of services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-[#0D0D0D] border border-neutral-800 overflow-hidden pt-0 rounded-2xl 
                         transition-transform duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={service.image}
                  alt={`${service.title} service example`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Text */}
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg text-start text-gray-300 font-semibold group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed text-start group-hover:text-gray-700">
                  {service.description}
                </p>
              </CardContent>

              {/* CTA Button (React to Card Hover) */}
              <CardFooter className="flex justify-start p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-1/2 border border-white text-white bg-transparent rounded-lg font-medium
                             transition-all duration-300
                             group-hover:bg-[#CA9520] cursor-pointer group-hover:text-black group-hover:border-[#CA9520]"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  See More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* All Services Button */}
        <Button
          variant="outline"
          className="mt-8 bg-white border border-white text-gray-900 font-semibold px-8 cursor-pointer py-3 rounded-xl
                     transition-all duration-300
                     hover:bg-[#CA9520] hover:text-black hover:border-[#CA9520]"
          aria-label="View all our services"
        >
          All Services
        </Button>
      </div>
    </section>
  );
}
