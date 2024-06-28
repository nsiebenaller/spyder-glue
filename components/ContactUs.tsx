import React from "react";
import clsx from "clsx";
import { rozhaOne } from "@/styles/fonts";
import Button from "./Button";

const EMAIL = "nicholas@agrograph.com";

const ContactUs = () => {
  return (
    <section className="z-10 flex w-full flex-col gap-4 bg-black-1 py-16">
      <h2
        className={clsx(
          rozhaOne.className,
          "text-center text-7xl tracking-wide",
          "text-cream",
        )}
      >
        Contact Us
      </h2>
      <div className="mx-auto flex w-full max-w-[400px] flex-col gap-4">
        <input placeholder="Subject" />
        <input placeholder="Body" />
        <a
          href={`mailto:${EMAIL}?subject=I want glue!&body=gimme glue plz`}
          target="_blank"
        >
          <Button>Send!</Button>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
