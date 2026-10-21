export function ProjectsHero() {
  return (
    <section className="relative isolate flex min-h-[400px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white lg:min-h-[444px]">
      <img
        src="/projects/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36">
        <h1 className="text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
          Shine&apos;s Projects
        </h1>
        <p className="mt-6 max-w-[772px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]">
          See how affordable housing and market-rate multifamily communities create new income and
          cut operating costs.
        </p>
      </div>
    </section>
  );
}
