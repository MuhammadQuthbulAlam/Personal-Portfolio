import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const Post = await import(`../posts/${params.slug}.mdx`);
    return (
      <article className="prose dark:prose-invert max-w-3xl mx-auto px-6 py-20">
        <Post.default />
      </article>
    );
  } catch {
    notFound();
  }
}
