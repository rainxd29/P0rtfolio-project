// @ts-nocheck
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "@/components/common/Container";
import { navLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-mint-100/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-ink-950">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-11 w-11 rounded-full object-cover"
          />
          {profile.name.split(" ")[0]}
          <span className="text-ink-700">.</span>
        </NavLink>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-ink-800 transition-colors hover:text-ink-950",
                  isActive && "text-ink-950 font-semibold underline underline-offset-8 decoration-2 decoration-sage-400"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-ink-950" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink-900/10 bg-mint-100 px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn("text-base font-medium text-ink-800", isActive && "text-ink-950 font-semibold")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}