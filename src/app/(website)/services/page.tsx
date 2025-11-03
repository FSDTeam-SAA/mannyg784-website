import ProcessCards from "@/components/website/PageSections/Services/ProcessCards";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import Section from "@/components/website/ReusableSection/Section";

export default function Page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-4.png"
        titleHighlight="Services Elite Stone"
        titleMain="Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "Services" }}
        height="70vh"
      />

      <Section
        heading="Stone Works"
        text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
        imageFront="/images/experience-2.png"
        imageBack="/images/experience-1.jpg"
        showButtons={true}
        reverse={false}
      />

      <Section
        heading="Stone Veneer"
        text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
        imageFront="/images/experience-2.png"
        imageBack="/images/experience-1.jpg"
        showButtons={true}
        reverse={true}
      />

      <Section
        heading="Brick Veneer"
        text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
        imageFront="/images/experience-2.png"
        imageBack="/images/experience-1.jpg"
        showButtons={true}
        reverse={false}
      />

      <ProcessCards />
      <GetInTouch />
    </div>
  );
}
