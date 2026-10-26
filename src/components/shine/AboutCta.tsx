import { Link } from "@tanstack/react-router";

const collage = [
  {
    src: "/about/cta-collage-1.jpg",
    className:
      "absolute left-[calc(50%+21px)] top-2 h-[240px] w-[160px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover object-[30%_center]",
  },
  {
    src: "/about/cta-collage-5.jpg",
    className:
      "absolute left-[calc(50%-155px)] top-[59px] h-[189px] w-[160px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover",
  },
  {
    src: "/about/cta-collage-6.jpg",
    className:
      "absolute left-[calc(50%+197px)] top-[134px] h-[114px] w-[160px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover",
  },
  {
    src: "/about/cta-collage-3.jpg",
    className:
      "absolute left-[calc(50%-192px)] top-64 size-[192px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover object-[35%_center]",
  },
  {
    src: "/about/cta-collage-4.jpg",
    className:
      "absolute left-1/2 top-64 h-[240px] w-[160px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover",
  },
  {
    src: "/about/cta-collage-2.jpg",
    className:
      "absolute left-[calc(50%+192px)] top-64 h-[160px] w-[192px] -translate-x-1/2 overflow-hidden",
    imgClassName: "absolute inset-0 size-full object-cover object-[40%_center]",
  },
] as const;

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(226deg,#122a00_2%,#0e0e0e_72%)] py-16 text-white">
      <img
        src="/about/cta-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[40%] top-[10%] h-[80%] w-auto max-w-none opacity-5 mix-blend-screen lg:left-[43%]"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Mobile: simple stacked grid */}
        <div className="grid grid-cols-3 gap-2 lg:hidden">
          {collage.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt=""
              className="aspect-[3/4] w-full object-cover"
            />
          ))}
        </div>

        {/* Desktop: Figma staggered collage */}
        <div className="relative hidden h-[496px] lg:block">
          {collage.map((item) => (
            <div key={item.src} className={item.className}>
              <img src={item.src} alt="" className={item.imgClassName} />
            </div>
          ))}
        </div>

        <div className="relative">
          <h2 className="max-w-lg text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
            See the Results of a Shine Project
          </h2>
          <Link
            to="/case-studies"
            className="mt-10 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black"
          >
            Check out our case studies here
          </Link>
        </div>
      </div>
    </section>
  );
}
