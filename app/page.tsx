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
        <section className="z-10 bg-cream py-20">
          <div className="m-auto grid max-w-[400px] grid-rows-[min-content_min-content] justify-center gap-4">
            <span>
              <h3
                className={clsx(
                  "text-green-4 inline-block scale-y-[1.5] transform whitespace-nowrap text-[48px] font-bold uppercase tracking-tighter",
                  "bg-gradient-to-b from-green-2 to-green-3 bg-clip-text text-transparent",
                )}
              >
                Stronger then Steel
              </h3>
            </span>
            <p className="text-lg tracking-wide text-gray-500">
              Discover the exceptional strength of SpyderGlue and learn more
              about how it can transform your projects today!
            </p>
            <span>
              <button className="rounded-full bg-black-2 px-4 py-2 tracking-wider text-cream hover:bg-black-1">
                Learn More
              </button>
            </span>
          </div>
        </section>
        <Products />
        <Banner />
        <Resources />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
