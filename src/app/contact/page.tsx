import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <p className="mt-2 text-black/70 max-w-prose">
        Let’s collaborate. Send a message and I’ll get back to you within 1–2 business days.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <div className="space-y-3">
          <div className="rounded-lg border border-black/10 bg-white/70 p-4">
            <div className="font-medium">LinkedIn</div>
            <a className="text-primary" href="https://www.linkedin.com/in/sara-rodrigues-862a341bb/" target="_blank" rel="noreferrer">
            https://www.linkedin.com/in/sara-rodrigues-862a341bb/
            </a>
          </div>
          <div className="rounded-lg border border-black/10 bg-white/70 p-4">
            <div className="font-medium">GitHub</div>
            <a className="text-primary" href="https://github.com/SaraRodrigues28" target="_blank" rel="noreferrer">
            https://github.com/SaraRodrigues28
            </a>
          </div>
          {/* <div className="rounded-lg border border-black/10 bg-white/70 p-4">
            <div className="font-medium">Location</div>
            <p className="text-black/70">City, Country</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}


