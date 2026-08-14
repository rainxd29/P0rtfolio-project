// @ts-nocheck
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { profile } from "@/data/site";

const items = [
  {
    icon: Mail,
    label: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: profile.location,
    href: null,
  },
];

const socials = [
  {
    icon: ExternalLink,
    href: profile.social.github,
    label: "GitHub",
  },
  {
    icon: ExternalLink,
    href: profile.social.tiktok,
    label: "TikTok",
  },
  {
    icon: ExternalLink,
    href: profile.social.instagram,
    label: "Instagram",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-ink-950">
          Contact Details
        </h3>

        <ul className="flex flex-col gap-3">
          {items.map(({ icon: Icon, label, href }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-ink-800"
            >
              <Icon size={18} className="text-ink-700" />

              {href ? (
                <a
                  href={href}
                  className="hover:text-ink-950"
                >
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-ink-950">
          Find Me Online
        </h3>

        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="rounded-full bg-sage-400/20 p-3 text-ink-800 hover:bg-sage-400/40"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}