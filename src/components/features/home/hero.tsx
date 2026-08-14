// @ts-nocheck
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sage-400/30 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start gap-6">
         <span className="rounded-full bg-ink-900/5 px-4 py-1.5 text-sm font-medium text-ink-800">
          ────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────
         </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name}
            <span className="block text-ink-700">{profile.role}</span>
          </h1>
          <p className="max-w-xl text-lg text-ink-800">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button to="/projects" variant="primary">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        <img
          src="/images/profile.jpg"
          alt={profile.name}
          className="w-full max-w-sm flex-shrink-0 rounded-2xl object-cover shadow-lg lg:w-[380px]"
        />
      </Container>
    </section>
  );
}