// @ts-nocheck
import Container from "@/components/common/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectGrid from "@/components/features/projects/ProjectGrid";
import { projects } from "@/data/site";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-16">
      <Container>
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" description="A few things I've recently built." />
        <ProjectGrid projects={featured} />
        <div className="mt-10">
          <Button to="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}