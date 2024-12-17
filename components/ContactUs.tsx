"use client";
import React from "react";
import clsx from "clsx";
import fonts from "@/styles/fonts";
import Button from "./Button";

const EMAIL = "jim@spydergluellc.com";

const ContactUs = () => {
  const [subject, setSubject] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");
  return (
    <section
      id="contact-us"
      className="z-10 flex w-full flex-col gap-4 bg-black-1 py-16"
    >
      <div className="m-auto rounded-xl bg-green-4 px-32 py-12">
        <h2
          className={clsx(
            fonts.rozhaOne,
            "text-center text-7xl tracking-wide",
            "text-cream",
          )}
        >
          Contact Us
        </h2>
        <div className="mx-auto flex w-full max-w-[400px] flex-col gap-4">
          <input
            className="rounded-full px-4 py-2"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="min-h-[200px] rounded-xl px-4 py-2"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ resize: "none" }}
          />
          <a
            href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
            target="_blank"
          >
            <Button>Send!</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
