import { ButtonLink } from "@/shared/components/button-link";
import { Container } from "@/shared/components/container";
import { Lead } from "@/shared/components/lead";
import { Portrait } from "@/shared/components/portrait";
import { PostCard } from "@/shared/components/post-card";
import { PostList } from "@/shared/components/post-list";
import { Quote } from "@/shared/components/quote";
import { Section } from "@/shared/components/section";
import { SectionLabel } from "@/shared/components/section-label";
import { Cursor, TermLine, Terminal } from "@/shared/components/terminal";
import { postPath } from "@/shared/routing/paths";
import { POSTS } from "@/shared/utils/posts";
import { NOT_FOUND } from "../utils/content";

const SUGGESTION_COUNT = 3;

export function NotFoundPage() {
  const { wantedPath, headline, lead, actions, portrait, quote, suggestions } =
    NOT_FOUND;
  // the pinned post is a fine suggestion here, so this reads POSTS rather than
  // LATEST_POSTS
  const suggested = POSTS.slice(0, SUGGESTION_COUNT);

  return (
    <>
      <Section>
        <Container>
          {/* the column width is spelled out literally in both places because
              Tailwind only generates classes it can find as static source text */}
          <div className="grid items-start gap-3xl lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="flex flex-col gap-2xl">
              <Terminal>
                <TermLine prompt>cat {wantedPath}</TermLine>
                <TermLine tone="muted">
                  cat: {wantedPath}:{" "}
                  <span className="ok">No such file or directory</span>
                </TermLine>
                <TermLine prompt>echo $?</TermLine>
                <TermLine tone="out">404</TermLine>
                <TermLine prompt>
                  <Cursor />
                </TermLine>
              </Terminal>

              <h1>{headline}</h1>
              <Lead>{lead}</Lead>

              <div className="flex flex-wrap gap-md">
                <ButtonLink
                  href={actions.primary.href}
                  variant="primary"
                  size="lg"
                >
                  {actions.primary.label}
                </ButtonLink>
                <ButtonLink href={actions.secondary.href} size="lg">
                  {actions.secondary.label}
                </ButtonLink>
              </div>
            </div>

            <div className="flex flex-col gap-lg">
              <Portrait
                src={portrait.src}
                alt={portrait.alt}
                caption={portrait.caption}
                sizes="360px"
              />
              <Quote variant="comment" cite={quote.cite}>
                {quote.text}
              </Quote>
            </div>
          </div>
        </Container>
      </Section>

      {suggested.length > 0 ? (
        <Section rule>
          <Container className="flex flex-col gap-xl">
            <SectionLabel index="01" hint={suggestions.hint}>
              {suggestions.label}
            </SectionLabel>
            <PostList>
              {suggested.map((post) => (
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
