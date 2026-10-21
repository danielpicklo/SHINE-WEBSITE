export function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#00161c] py-20 text-white lg:py-24">
      <img
        src="/homepage/quote-bg.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,22,28,0.78)]" />
      <div className="relative mx-auto flex max-w-[824px] flex-col items-center px-5 text-center">
        <img
          src="/homepage/logo-equity.png"
          alt="Equity Residential"
          className="h-12 w-auto"
        />
        <blockquote className="mt-8 text-[32px] leading-[1.2] tracking-[-1.2px] sm:text-5xl lg:text-[60px] lg:leading-[72px]">
          “The <span className="text-accent">best solar project</span> EQR ever built is with
          Shine.”
        </blockquote>
        <p className="mt-8 text-xl leading-[30px]">Kyle Hendricks</p>
        <p className="mt-1 text-base leading-[22.5px]">
          VP, Head of Sustainability, Equity Residential
        </p>
      </div>
    </section>
  );
}
