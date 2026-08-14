// @ts-nocheck
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-ink-950 px-8 py-16 text-center text-mint-100">
          <h2 className="text-3xl font-bold sm:text-4xl">Let's work together</h2>
          <p className="max-w-md text-mint-100/70">Have a project in mind or just want to say hi? My inbox is always open.</p>
          <Button to="/contact" variant="primary" className="bg-sage-400 text-ink-950 hover:bg-mint-100">
            Get In Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}