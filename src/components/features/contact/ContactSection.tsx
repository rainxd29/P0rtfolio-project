// @ts-nocheck
import Container from "@/components/common/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactInfo from "@/components/features/contact/ContactInfo";

export default function ContactSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's talk" description="Fill out the form below or reach out through any of my socials." />
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
}