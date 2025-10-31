import Banner from "@/components/website/PageSections/HomePage/Banner";
import EliteStoneCard from "@/components/website/PageSections/HomePage/EliteStoneCard";
import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";

export default function page() {
  return (
    <div>
      <Banner />
      <EliteStoneCard />
      <ServiceCard />
    </div>
  );
}
