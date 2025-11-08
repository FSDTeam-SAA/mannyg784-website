import GallerySection from "@/components/website/PageSections/Gallery/GallerySection";
import Hero from "@/components/website/ReusableSection/Hero";

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762642008/hero-3_pyndbk.png"
        titleHighlight="All Gallery Elite Stone"
        titleMain="Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "All Gallery" }}
      />
      <GallerySection />
    </div>
  );
}
