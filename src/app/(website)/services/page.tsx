import ProcessCards from "@/components/website/PageSections/Services/ProcessCards";
import Hero from "@/components/website/ReusableSection/Hero";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-4.png"
        titleHighlight="Our"
        titleMain="Services"
        breadcrumb={{ previous: "Home", current: "Services" }}
        height="70vh"
      />
      <ProcessCards />
    </div>
  );
}
