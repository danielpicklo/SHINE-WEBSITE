import { customerLogos } from "@/lib/shine-content";

export function LogoBar() {
  return (
    <section className="overflow-hidden bg-[#0e0e0e] py-12" aria-label="Customers">
      <div className="flex items-center justify-start gap-10 overflow-x-auto px-5 lg:justify-center lg:gap-16 lg:px-0">
        {customerLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            style={{ width: logo.width }}
            className="h-10 w-auto max-w-none shrink-0 object-contain lg:h-12"
          />
        ))}
      </div>
    </section>
  );
}
