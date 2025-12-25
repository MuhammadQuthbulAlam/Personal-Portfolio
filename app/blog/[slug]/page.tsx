import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: any) {
  const post = getPostBySlug(params.slug);
  return { title: post.title };
}

export default function BlogDetail({ params }: any) {
  try {
    const post = getPostBySlug(params.slug);

    return (
      <article className="max-w-3xl mx-auto px-6 py-20 prose dark:prose-invert">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>

        {/* RENDER MDX SEBAGAI HTML */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    );
  } catch {
    notFound();
  }
}
