// @ts-nocheck
import Container from "@/components/common/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/site";

export default function AboutIntro() {
  return (
    <section className="pt-20 pb-8">
      <Container>
        <SectionHeading eyebrow="About Me" title="Get to know me" />
        <p className="max-w-2xl text-lg leading-relaxed text-ink-800">{profile.bio}</p>
      </Container>
    </section>
  );
}