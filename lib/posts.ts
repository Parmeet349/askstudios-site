// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import rehypeHighlight from "rehype-highlight";
import readingTime from "reading-time";

export type PostFrontMatter = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  author?: {
    name?: string;
    email?: string;
    twitter?: string;
    avatar?: string;
  };
  image?: string;
};

const POSTS_PATH = path.join(process.cwd(), "content", "blog");

function getPostFilePaths() {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs.readdirSync(POSTS_PATH).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getAllPosts() {
  const files = getPostFilePaths();

  const posts = files
    .map((fileName) => {
      const fullPath = path.join(POSTS_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.mdx?$/, "");
      return {
        slug,
        ...(data as PostFrontMatter),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

/**
 * Return { frontMatter, contentHtml, reading }
 */
export async function getPostBySlug(slug: string) {
  const possibleExt = [".mdx", ".md"];
  let fullPath = "";
  for (const ext of possibleExt) {
    const attempt = path.join(POSTS_PATH, `${slug}${ext}`);
    if (fs.existsSync(attempt)) {
      fullPath = attempt;
      break;
    }
  }

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const reading = readingTime(content);

  // Convert Markdown / MDX (without JSX execution) to HTML for server rendering
  const processed = await remark()
    .use(html as any)
    // @ts-ignore rehype plugin - used for code highlighting (install rehype-highlight)
    .use(rehypeHighlight as any)
    .process(content);

  const contentHtml = processed.toString();

  return {
    slug: path.basename(fullPath, path.extname(fullPath)),
    frontMatter: data as PostFrontMatter,
    contentHtml,
    reading,
  };
}
