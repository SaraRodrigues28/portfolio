import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Link from "next/link";
import GrowthChart from "@/components/GrowthChart";

export default function Home() {
  return (
    <div className="pb-16">
      <Hero />
      <Skills />
      <section className="container mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold">About</h2>
        <p className="text-black/70 mt-2 max-w-prose">
          I’m a data analyst with a passion for transforming complex datasets into clear narratives
          and business outcomes. My work spans dashboard design, automation, modeling, and cloud
          data pipelines.
        </p>
        <Link href="/about" className="inline-block mt-4 text-primary font-medium hover:opacity-80">
          Read more →
        </Link>
      </section>

      <section className="container mt-12">
        {/* <GrowthChart /> */}
      </section>
    </div>
  );
}
