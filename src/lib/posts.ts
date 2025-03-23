import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string[];
  content: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const category = data.category
        ? data.category.split(",").map((cat: string) => cat.trim())
        : undefined;

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPosts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const category = data.category
      ? data.category.split(",").map((cat: string) => cat.trim())
      : undefined;

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      category,
      content,
    };
  } catch (error) {
    throw new Error(`Error reading post file: ${error}`);
  }
}
