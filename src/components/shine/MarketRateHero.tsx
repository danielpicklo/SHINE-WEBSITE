const button =
  "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black";

export function MarketRateHero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white">
      <img src="/market-rate/hero.jpg" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36">
        <h1 className="text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
          Increase NOI With Solar
        </h1>
        <p className="mt-6 max-w-[772px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]">
          Did you know solar creates new income lines for market-rate multifamily properties? By
          installing small solar systems on resident meters, Shine turns your property’s electrical
          load into a recurring revenue stream — on top of savings from common area solar.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a href="/contact" className={button}>
            Calculate my Solar NOI
          </a>
          <a
            href="/contact"
            className="border-b border-white px-2 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-white"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
