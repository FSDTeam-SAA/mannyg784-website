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

      <div id="stone-works">
        <Section
          heading="Stone Works"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="/images/about-1.jpg"
          imageBack="/images/service-1.jpg"
          showButtons={true}
          reverse={false}
        />
      </div>

      <div id="stone-veneer">
        <Section
          heading="Stone Veneer"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="/images/service-5.jpg"
          imageBack="/images/hero-3.jpg"
          showButtons={true}
          reverse={true}
        />
      </div>

      <div id="brick-veneer">
        <Section
          heading="Brick Veneer"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="/images/about-6.jpg"
          imageBack="/images/about-7.jpg"
          showButtons={true}
          reverse={false}
        />
      </div>

      <ProcessCards />
      <GetInTouch />
    </div>
  );
}
