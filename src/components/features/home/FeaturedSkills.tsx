// @ts-nocheck
import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import { skills } from "@/data/site";

export default function FeaturedSkills() {
  return (
    <section className="py-12">
      <Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-ink-700">Tools & Technologies</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}