import { AboutEliteStone } from "@/components/website/PageSections/HomePage/AboutEliteStone";
import Banner from "@/components/website/PageSections/HomePage/Banner";
import EliteStoneCard from "@/components/website/PageSections/HomePage/EliteStoneCard";
import Experience from "@/components/website/PageSections/HomePage/Experience";
import OurProject from "@/components/website/PageSections/HomePage/OurProject";
import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Stone Builders AZ | Custom Stone & Masonry Experts",
  description:
    "Get expert stone, tile, and masonry work from Arizona’s trusted pros. Choose our professional construction services for quality, durability, and standout craftsmanship.",
};

export default function page() {
  return (
    <div>
      <Banner />
      <AboutEliteStone />
      <EliteStoneCard />
      <ServiceCard />
      <Experience />
      <OurProject />
      <GetInTouch />
    </div>
  );
}
