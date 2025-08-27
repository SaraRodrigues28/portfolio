import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { PluggableList } from "unified";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getProjectBySlug(slug);
  if (!data) return {};
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
    openGraph: {
      title: data.frontmatter.title,
      description: data.frontmatter.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getProjectBySlug(slug);
  if (!data) return notFound();

  const { frontmatter, content } = data;

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{frontmatter.title}</h1>
      <p className="mt-2 text-black/70 max-w-prose">{frontmatter.description}</p>
      <div className="mt-8 prose prose-sm md:prose-base max-w-none prose-headings:scroll-mt-24">
        {frontmatter.contentType === "html" ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]] as PluggableList}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}


