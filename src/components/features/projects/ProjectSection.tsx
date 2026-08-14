// @ts-nocheck
import ProjectGrid from "@/components/features/projects/ProjectGrid";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/site";

export default function ProjectSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="My Projects"
          description="A collection of things I've built and worked on."
        />
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}