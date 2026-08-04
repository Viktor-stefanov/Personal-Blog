import { ButtonLink } from "@/shared/components/button-link";
import { Container } from "@/shared/components/container";
import { Lead } from "@/shared/components/lead";
import { Portrait } from "@/shared/components/portrait";
import { Quote } from "@/shared/components/quote";
import { Section } from "@/shared/components/section";
import { SideCard } from "@/shared/components/side-card";
import { Cursor, TermLine, Terminal } from "@/shared/components/terminal";
import { LANDING } from "../utils/content";

export function Hero() {
  const { whoami, stack, headline, lead, actions, portrait, reading, quote } =
    LANDING;

  return (
    <Section>
      <Container>
        {/* the column width is spelled out literally in both places because
            Tailwind only generates classes it can find as static source text */}
        <div className="grid items-start gap-3xl lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col gap-2xl">
            <Terminal>
              <TermLine prompt>whoami</TermLine>
              <TermLine tone="out">
                {whoami.name} <span className="text-muted">{whoami.rest}</span>
              </TermLine>
              <TermLine prompt>cat stack.txt</TermLine>
              <TermLine>{stack}</TermLine>
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
            <SideCard
              label={reading.label}
              value={reading.value}
              sub={reading.sub}
            />
            <Quote variant="comment" cite={quote.cite}>
              {quote.text}
            </Quote>
          </div>
        </div>
      </Container>
    </Section>
  );
}
