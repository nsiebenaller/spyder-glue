import clsx from "clsx";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div className="fixed left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-black-0 to-black-2" />
        <div
          className={clsx(
            "",
            process.env.NODE_ENV === "production"
              ? "bg-[url('/spyder-glue/bg.png')]"
              : "bg-[url('/bg.png')]",
            "fixed top-0 z-0 h-full w-full bg-cover bg-no-repeat",
          )}
        />
        <Hero />
        <OurStory />
        <Products />
        <Banner />
        <Resources />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
