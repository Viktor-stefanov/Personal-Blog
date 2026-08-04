import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/shared/components/container";
import { Section } from "@/shared/components/section";
import { POSTS } from "@/shared/utils/posts";

type PostPageProps = { params: Promise<{ slug: string }> };

// every post is known at build time, so an unlisted slug is a 404 rather than a
// request-time render
export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((entry) => entry.slug === slug);

  return { title: post?.title, description: post?.excerpt };
}

export default async function Page({ params }: PostPageProps) {
  const { slug } = await params;
  const post = POSTS.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const { default: Post } = await import(`@content/posts/${slug}.mdx`);

  return (
    <Section>
      <Container className="flex flex-col gap-xl">
        <header className="flex flex-col gap-md">
          <div className="meta flex flex-wrap items-center gap-md">
            {post.date}
            <span className="text-accent">{post.topic}</span>
            {post.duration}
          </div>
          <h1>{post.title}</h1>
        </header>

        <article className="prose">
          <Post />
        </article>
      </Container>
    </Section>
  );
}
