export function CalculatorPlaceholder() {
  return (
    <section id="calculator" className="scroll-mt-20 bg-[#ececec] py-16 lg:py-24">
      <div className="mx-auto max-w-[980px] px-5 text-center">
        <h2 className="text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
          Calculate Your Income Potential With Solar
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#171717] lg:text-lg">
          Use the calculator for a quick preliminary estimate. For a free, detailed analysis,{" "}
          <a href="/contact" className="underline">
            get in touch with us here
          </a>
          .
        </p>
        <div className="mt-10 border border-[#d0d0d0] bg-white px-6 py-16 text-left sm:px-10">
          <p className="font-display text-2xl tracking-[-0.6px] text-[#171717]">
            Calculator coming soon
          </p>
          <p className="mt-3 max-w-xl text-base leading-[22.5px] text-[#525252]">
            Shine is still finishing this tool. Request a free analysis and the team will estimate
            system size, production, and potential NOI for your property or portfolio.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black"
          >
            Request a free analysis
          </a>
        </div>
      </div>
    </section>
  );
}
