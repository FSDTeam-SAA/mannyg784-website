import { ContactCards } from "@/components/website/PageSections/ContatctUs/ContactCards";
import Map from "@/components/website/PageSections/ContatctUs/Map";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Stone Tile and Certified Masonry Specialists AZ",
  description:
    "Explore construction portfolio examples showcasing premium stonework, brick, and custom designs. See real projects and get inspired by our expert craftsmanship in Arizona.",
};

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762641971/hero-4_kybnli.png"
        titleHighlight="Contact Us Elite Stone"
        titleMain="Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "Contact Us" }}
      />
      <ContactCards />
      <GetInTouch />
      <Map />
    </div>
  );
}
