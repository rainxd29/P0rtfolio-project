// @ts-nocheck
import Container from "@/components/common/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { skills } from "@/data/site";

export default function SkillsList() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill} className="text-center font-medium text-ink-900">
              {skill}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}