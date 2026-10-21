import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { headerCta, navItems } from "@/lib/shine-content";
import { TextLink } from "./TextLink";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0e0e0e] text-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-20">
        <Link to="/" className="shrink-0" aria-label="Shine home">
          <img src="/homepage/logo-header.png" alt="Shine" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <TextLink
              key={item.label}
              item={item}
              className="font-sans text-base font-medium text-white"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={headerCta.href}
            className="hidden bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black sm:inline-flex"
          >
            {headerCta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 lg:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <TextLink
              key={item.label}
              item={item}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-base"
            />
          ))}
          <Link
            to={headerCta.href}
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black"
          >
            {headerCta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
