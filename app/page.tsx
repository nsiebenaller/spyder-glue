import Background from "@/components/Background";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import ContactUs from "@/components/ContactUs";
import CTASection from "@/components/CTASection";
import ImportantVideo from "@/components/ImportantVideo";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Background />
      <Hero />
      <OurStory />
      <CTASection />
      <Products />
      <Banner />
      <ImportantVideo />
      <Resources />
      <ContactUs />
    </main>
  );
}
