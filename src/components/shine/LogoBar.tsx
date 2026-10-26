import { customerLogos } from "@/lib/shine-content";

export function LogoBar() {
  const logos = [...customerLogos, ...customerLogos];

  return (
    <section className="overflow-hidden bg-[#0e0e0e] py-12" aria-label="Customers">
      <div className="flex w-max animate-marquee items-center gap-10 px-5 lg:gap-16">
        {logos.map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={logo.src}
            alt={index < customerLogos.length ? logo.name : ""}
            aria-hidden={index >= customerLogos.length ? true : undefined}
            className="h-10 w-auto max-w-none shrink-0 object-contain mix-blend-screen lg:h-12"
          />
        ))}
      </div>
    </section>
  );
}
