import GallerySection from "@/components/website/PageSections/Gallery/GallerySection";
import Hero from "@/components/website/ReusableSection/Hero";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="/images/hero-3.png"
        titleHighlight="All Gallery Elite Stone"
        titleMain="Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "All Gallery" }}
      />
      <GallerySection />
    </div>
  );
}
