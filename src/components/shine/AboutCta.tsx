import { Link } from "@tanstack/react-router";

const photos = [
  "/about/collage-5.jpg",
  "/about/collage-1.jpg",
  "/about/collage-6.jpg",
  "/about/collage-3.jpg",
  "/about/collage-4.jpg",
  "/about/collage-2.jpg",
];

export function AboutCta() {
  return (
    <section className="bg-[linear-gradient(226deg,#122a00_2%,#0e0e0e_72%)] py-16 text-white lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="grid grid-cols-3 gap-3">
          {photos.map((src) => (
            <img key={src} src={src} alt="" className="aspect-[3/4] w-full object-cover" />
          ))}
        </div>
        <div>
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
