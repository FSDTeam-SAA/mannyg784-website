import ProcessCards from "@/components/website/PageSections/Services/ProcessCards";
import Hero from "@/components/website/ReusableSection/Hero";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-2.jpg"
        titleHighlight="Services Elite"
        titleMain="Stone Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "Services" }}
      />

      <ProcessCards />
    </div>
  );
}
