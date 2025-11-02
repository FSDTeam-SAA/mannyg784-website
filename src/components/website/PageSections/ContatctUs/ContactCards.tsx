import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Contactinfos = [
  {
    id: 1,
    icon: "phone",
    title: "Phone Number",
    description: "+2345-678998",
  },
  {
    id: 2,
    icon: "phone",
    title: "Phone Number",
    description: "+2345-678998",
  },
  {
    id: 3,
    icon: "phone",
    title: "Phone Number",
    description: "+2345-678998",
  },
];

export const ContactCards = () => {
  return (
    <section className="py-16 bg-transparent text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-2">
            Our Process – Elite Stone Builders AZ LLC
          </h2>
          <p className="text-gray-500 text-base">
            A streamlined approach ensuring quality results and satisfied
            clients.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Contactinfos.map((Contactinfo) => (
            <Card
              key={Contactinfo.id}
              className="bg-white border border-gray-800 rounded-xl hover:border-[#CA9520] transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Number Circle */}
                <div className="w-20 h-20 flex justify-center items-center  bg-[#CA9520]/10 text-[#CA9520] rounded-full font-semibold mb-4">
                  {Contactinfo.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg  font-semibold mb-2 text-gray-800">
                  {Contactinfo.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {Contactinfo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
