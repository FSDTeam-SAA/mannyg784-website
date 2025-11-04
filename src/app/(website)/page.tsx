import { AboutEliteStone } from "@/components/website/PageSections/HomePage/AboutEliteStone";
import Banner from "@/components/website/PageSections/HomePage/Banner";
import EliteStoneCard from "@/components/website/PageSections/HomePage/EliteStoneCard";
import Experience from "@/components/website/PageSections/HomePage/Experience";
import OurProject from "@/components/website/PageSections/HomePage/OurProject";
import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";

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
