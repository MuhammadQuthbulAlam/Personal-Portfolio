import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug?: string;
  };
};

export default async function BlogPost({ params }: Props) {
  if (!params?.slug) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 prose dark:prose-invert">
      <h1>{params.slug.replace(/-/g, " ")}</h1>
      <pre>{source}</pre>
    </article>
  );
}
