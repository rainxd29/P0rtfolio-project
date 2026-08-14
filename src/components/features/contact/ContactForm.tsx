// @ts-nocheck
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const initialState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to an email service (e.g. EmailJS, Formspree) or your API.
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-700/50 focus:outline-none focus:ring-2 focus:ring-sage-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-700/50 focus:outline-none focus:ring-2 focus:ring-sage-400"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="resize-none rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-700/50 focus:outline-none focus:ring-2 focus:ring-sage-400"
        />
        <Button type="submit" variant="primary" className="self-start">
          Send Message
        </Button>
        {submitted && <p className="text-sm font-medium text-ink-700">Thanks for reaching out! I'll get back to you soon.</p>}
      </form>
    </Card>
  );
}