import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  github?: string;
  demo?: string;
  tech: string[];
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        thumbnail: data.thumbnail || "/images/empty-content.png",
        github: data.github,
        demo: data.demo,
        tech: data.tech || [],
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allProjects;
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      thumbnail: data.thumbnail || "/images/empty-content.png",
      github: data.github,
      demo: data.demo,
      tech: data.tech || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading project file: ${error}`);
    return null;
  }
}
