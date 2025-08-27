import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const timeline = [
    { year: "2024–Present", title: "Data Analyst", desc: "Building dashboards and data products." },
    { year: "2022–2024", title: "BI Intern", desc: "Learned SQL, Python, and visualization best practices." },
    { year: "2018–2022", title: "B.S. in Analytics", desc: "Education & certifications." },
  ];

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
      <p className="mt-3 max-w-prose text-black/70">
        I specialize in turning data into decisions. I enjoy collaborating with stakeholders, designing
        scalable data models, and crafting insightful dashboards across Excel, Tableau, and Power BI.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Currently Studying</h2>
        <div className="mt-3 rounded-lg border border-black/10 bg-white/70 p-4">
          <div className="text-primary font-medium">🎓 JustIT Data Analyst Bootcamp (2025)</div>
          <ul className="list-disc pl-5 mt-2 text-sm text-black/80 space-y-1">
            <li>Advanced statistical programming in Python and SQL</li>
            <li>Data modeling with R Studio</li>
            <li>Business intelligence with Tableau and Power BI</li>
            <li>Azure Data Fundamentals</li>
            <li>Data storytelling and presentation techniques</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Professional Background</h2>
        <ul className="mt-3 list-disc pl-5 text-black/80 space-y-1">
          <li>Education Sales Consultant with data analysis experience</li>
          <li>Sports development background demonstrating analytical thinking</li>
          <li>Client relationship management and stakeholder engagement</li>
          <li>Financial reporting and data management experience</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Journey</h2>
        <div className="mt-4 space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="rounded-lg border border-black/10 bg-white/70 p-4">
              <div className="text-sm text-black/60">{t.year}</div>
              <div className="font-medium">{t.title}</div>
              <p className="text-sm text-black/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


