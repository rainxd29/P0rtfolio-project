// @ts-nocheck
import Container from "@/components/common/Container";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/10 bg-ink-950 text-mint-100">
      <Container className="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-mint-100/70">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-mint-100/80 hover:text-mint-100"
          >
            GitHub
          </a>

          <a
            href={profile.social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="text-mint-100/80 hover:text-mint-100"
          >
            Tiktok
          </a>

          <a
            href={profile.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-mint-100/80 hover:text-mint-100"
          >
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  );
}