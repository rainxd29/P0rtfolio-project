// @ts-nocheck
import Hero from "@/components/features/home/Hero";
import FeaturedSkills from "@/components/features/home/FeaturedSkills";
import FeaturedProjects from "@/components/features/home/FeaturedProjects";
import CtaBanner from "@/components/features/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSkills />
      <FeaturedProjects />
      <CtaBanner />
    </>
  );
}