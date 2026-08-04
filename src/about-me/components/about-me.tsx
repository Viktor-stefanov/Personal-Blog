import { Container } from "@/shared/components/container";
import { Section } from "@/shared/components/section";

export function AboutMe() {
  return (
    <Section>
      <Container className="flex flex-col gap-xl">
        <h1>about</h1>
        <div className="prose">
          <p>
            Placeholder. This page exists so the one nav link that is supposed to
            resolve does.
          </p>
        </div>
      </Container>
    </Section>
  );
}
