const button =
  "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black";

export function AboutStory() {
  return (
    <section className="bg-[linear-gradient(217deg,#122a00_34%,#0e0e0e_58%)] text-white lg:grid lg:grid-cols-2">
      <div className="flex items-center px-5 py-16 lg:px-16 lg:py-24">
        <div className="max-w-[514px]">
          <h1 className="text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
            It started
            <br />
            with our own apartment units.
          </h1>
          <div className="mt-5 space-y-5 text-lg leading-[30px] sm:text-xl">
            <p>
              Before founding Shine, Owen Barrett and Earl Mohler acquired 650 apartment units and
              self-performed solar on their own properties from 2018 - 2021. When other multifamily
              property owners started asking them for solar, Shine was born.
            </p>
            <p>
              Today, we’re the only solar EPC that captures 100% of the electrical load in
              affordable housing and market-rate multifamily communities — and turns it into NOI.
            </p>
            <p>
              We developed our own software and operating model because traditional solar EPCs
              required property owners and operators to juggle multiple vendors. Shine built what
              didn’t exist: one team for every phase of a solar project, from underwriting to
              maintenance.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
      </div>
      <img
        src="/about/story.jpg"
        alt="Shine founders on a multifamily property"
        className="h-[420px] w-full object-cover lg:h-full lg:min-h-[720px]"
      />
    </section>
  );
}
