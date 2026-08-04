import { Container } from "@/shared/components/container";
import { PostCard } from "@/shared/components/post-card";
import { PostList, RAIL_MIN_POSTS } from "@/shared/components/post-list";
import { Section } from "@/shared/components/section";
import { SectionLabel } from "@/shared/components/section-label";
import { TermLine, Terminal } from "@/shared/components/terminal";
import { postPath } from "@/shared/routing/paths";
import { LATEST_POSTS, PINNED_POST } from "@/shared/utils/posts";
import { LANDING } from "../utils/content";
import { Hero } from "./hero";

export function LandingPage() {
  const rail = LATEST_POSTS.length >= RAIL_MIN_POSTS;

  return (
    <>
      <Hero />

      {PINNED_POST ? (
        <Section rule>
          <Container className="flex flex-col gap-xl">
            <SectionLabel index="01">pinned</SectionLabel>
            <PostCard
              variant="pinned"
              href={postPath(PINNED_POST.slug)}
              title={PINNED_POST.title}
              excerpt={PINNED_POST.excerpt}
              date={PINNED_POST.date}
              topic={PINNED_POST.topic}
              duration={PINNED_POST.duration}
              more="read the writeup →"
              side={
                <Terminal variant="quiet">
                  {LANDING.pinnedSide.map((line, index) => (
                    <TermLine key={index} prompt={line.prompt} tone={line.tone}>
                      {line.text}
                    </TermLine>
                  ))}
                </Terminal>
              }
            />
          </Container>
        </Section>
      ) : null}

      {LATEST_POSTS.length > 0 ? (
        <Section>
          <Container className="flex flex-col gap-xl">
            <SectionLabel index="02" hint={rail ? "scroll →" : undefined}>
              {rail ? "latest" : "other works"}
            </SectionLabel>
            <PostList>
              {LATEST_POSTS.map((post) => (
                <PostCard
                  key={post.slug}
                  href={postPath(post.slug)}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  topic={post.topic}
                  tags={post.tags}
                  more={`${post.duration} →`}
                />
              ))}
            </PostList>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
