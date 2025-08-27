import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  technologies: string[];
  date?: string;
  thumbnail?: string;
  readTime?: string;
  contentType?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getProjectBySlug(slug: string): { frontmatter: ProjectFrontmatter; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  return { frontmatter: data as ProjectFrontmatter, content };
}

export function getAllProjects() {
  return getProjectSlugs()
    .map((slug) => {
      const data = getProjectBySlug(slug);
      if (!data) return null;
      return { slug, ...data.frontmatter };
    })
    .filter(Boolean) as Array<{ slug: string } & ProjectFrontmatter>;
}


