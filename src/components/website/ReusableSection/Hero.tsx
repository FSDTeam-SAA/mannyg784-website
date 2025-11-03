import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  imageSrc: string;
  titleHighlight: string;
  titleMain: string;
  breadcrumb: {
    current: string;
    previous?: string;
  };
  height?: string;
}

export default function Hero({
  imageSrc,
  titleHighlight,
  titleMain,
  breadcrumb,
  height = "80vh",
}: HeroProps) {
  return (
    <div className={`relative w-full h-[${height}]`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={`${titleMain} hero image`}
        fill
        className="object-cover brightness-75"
      />

      {/* Center Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-4xl md:text-6xl font-bold text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-[#E0A523]">{titleHighlight}</span>{" "}
          <span className="text-white">{titleMain}</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-6 left-6 md:left-20 flex items-center gap-2 text-gray-200 font-medium text-sm md:text-base">
        {breadcrumb.previous && (
          <>
            <span className="hover:text-white cursor-pointer transition">
              {breadcrumb.previous}
            </span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
        <span className="text-[#E0A523]">{breadcrumb.current}</span>
      </div>
    </div>
  );
}
