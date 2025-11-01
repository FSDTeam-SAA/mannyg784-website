import Banner from "@/components/website/PageSections/HomePage/Banner";
import EliteStoneCard from "@/components/website/PageSections/HomePage/EliteStoneCard";
import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";

export default function page() {
  return (
    <div>
      <Banner />
      <EliteStoneCard />
      <ServiceCard />
      <GetInTouch />
    </div>
  );
}
