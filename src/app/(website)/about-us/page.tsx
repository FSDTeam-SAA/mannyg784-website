import OurMission from "@/components/website/PageSections/AboutUs/OurMission";
import { Whychooseus } from "@/components/website/PageSections/Services/Whychooseus";
import Hero from "@/components/website/ReusableSection/Hero";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-2.jpg"
        titleHighlight="About Us"
        titleMain=" Elite Stone Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "About Us" }}
      />
      <OurMission />
      <Whychooseus />
    </div>
  );
}
