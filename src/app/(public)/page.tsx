
import AboutPreview from "@/components/public/home/AboutPreview";
import ServicesPreview from "@/components/public/home/ServicesPreview";
import FeaturedProjects from "@/components/public/home/FeaturedProjects";
import ContactCTA from "@/components/public/home/ContactCTA";
import Hero from "@/components/public/home/Hero";

export default function HomePage() {

  return (
    <>
      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <FeaturedProjects />

      <ContactCTA />
    </>

  );
}