import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(source);
    return { slug: file.replace(".mdx", ""), title: data.title };
  });

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <a href={`/blog/${post.slug}`} className="text-blue-600">
            {post.title}
          </a>
        </div>
      ))}
    </main>
  );
}
