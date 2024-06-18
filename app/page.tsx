import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div
          className={clsx(
            "fixed top-0 z-0 h-full w-full bg-[url('/bg.png')] bg-cover",
          )}
        />
        <Hero />
        <OurStory />
        <Products />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
