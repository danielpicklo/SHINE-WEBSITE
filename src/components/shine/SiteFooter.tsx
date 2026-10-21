import { Link } from "@tanstack/react-router";
import { footerColumns } from "@/lib/shine-content";
import { TextLink } from "./TextLink";

export function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-[320px_1fr] lg:px-20 lg:pb-12 lg:pt-16">
        <div>
          <Link to="/" aria-label="Shine home">
            <img src="/homepage/logo-footer.png" alt="Shine" className="h-11 w-auto" />
          </Link>
          <p className="mt-8 text-base">Solar for Multifamily.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-display text-sm uppercase tracking-[0.7px] text-accent">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <TextLink item={link} className="text-sm font-semibold text-white" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-5 py-12 lg:px-20">
        <p className="text-xs">© 2026 Shine. All rights reserved.</p>
      </div>
    </footer>
  );
}
