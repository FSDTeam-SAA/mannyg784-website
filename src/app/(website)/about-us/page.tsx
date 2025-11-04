import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import { Whychooseus } from "@/components/website/PageSections/Services/Whychooseus";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import Section from "@/components/website/ReusableSection/Section";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-2.jpg"
        titleHighlight="About Us"
        titleMain=" Elite Stone Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "About Us" }}
      />

      {/* Our Mission  */}
      <Section
        heading="Stone Works"
        text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.
 
        Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
        imageFront="/images/about-1.jpg"
        imageBack="/images/about-2.jpg"
        showButtons={false}
        reverse={false}
      />
      {/* Our vision */}
      <Section
        heading="Our vision"
        text={`To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.
        To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.`}
        imageFront="/images/about-3.jpg"
        imageBack="/images/about-4.jpg"
        showButtons={false}
        reverse={true}
      />

      {/* why choose us section */}
      <Whychooseus />

      {/* Our vision */}
      <div className="pb-10">
        <Section
          heading="Our vision"
          text={`To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.
        To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.`}
          imageFront="/images/experience-2.png"
          imageBack="/images/experience-1.jpg"
          showButtons={true}
          reverse={true}
        />
      </div>

      <ServiceCard />

      <GetInTouch />
    </div>
  );
}
