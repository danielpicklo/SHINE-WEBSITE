export function CoverageMap() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f1] py-16 lg:py-24">
      <img
        src="/homepage/map-wash.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-65"
      />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <h2 className="text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
          Turning Energy Into NOI Across the USA
        </h2>
        <img
          src="/homepage/map.png"
          alt="Map of the United States showing Shine projects that are built, under construction, or both. Total built: 11.3 MW. Total under construction: 24.4 MW, as of September 2026."
          className="mx-auto mt-10 w-full max-w-[1100px]"
        />
      </div>
    </section>
  );
}
