import { Container } from "@/shared/components/container";
import { Link } from "@/shared/components/link";
import { Section } from "@/shared/components/section";
import { SectionLabel } from "@/shared/components/section-label";
import { Tag, TagRow } from "@/shared/components/tag";
import { TermLine, Terminal } from "@/shared/components/terminal";
import { ABOUT } from "../utils/content";
import { Hero } from "./hero";

export function AboutMe() {
  const { roles, ongoing, stacks, contact } = ABOUT;

  return (
    <>
      <Hero />

      <Section rule>
        <Container className="flex flex-col gap-xl">
          <SectionLabel index="01" hint="since 2021">
            git log --oneline
          </SectionLabel>
          <ol className="timeline">
            {roles.map((role) => (
              <li key={`${role.company}-${role.dates}`}>
                <span className="dates">{role.dates}</span>
                <div className="body">
                  <div className="head">
                    <span className="role">{role.role}</span>
                    <span className="sep">·</span>
                    <span className="company">{role.company}</span>
                    <span className="place">{role.place}</span>
                  </div>
                  <p className="line">{role.line}</p>
                  <TagRow>
                    {role.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </TagRow>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-xl">
          <SectionLabel index="02">always on</SectionLabel>
          <div className="posts" data-layout="grid">
            {ongoing.map((item) => (
              <div key={item.title} className="card">
                <span className="meta">{item.period}</span>
                <h3 className="title">{item.title}</h3>
                <p className="excerpt">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-xl">
          <SectionLabel index="03">cat stack.txt</SectionLabel>
          <div className="stack">
            {stacks.map((group) => (
              <div key={group.label} className="group">
                <span className="label">{group.label}</span>
                <div className="items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section rule>
        <Container className="flex flex-col gap-xl">
          <SectionLabel index="04">reach me</SectionLabel>
          <Terminal>
            <TermLine prompt>contact --list</TermLine>
            <TermLine tone="muted">
              <span className="label">email</span>
              <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            </TermLine>
            <TermLine tone="muted">
              <span className="label">github</span>
              <Link href={contact.github.href}>{contact.github.label}</Link>
            </TermLine>
            <TermLine tone="muted">
              <span className="label">where</span>
              {contact.location}
            </TermLine>
            <TermLine tone="comment">{contact.availability}</TermLine>
          </Terminal>
        </Container>
      </Section>
    </>
  );
}
