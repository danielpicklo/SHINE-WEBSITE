import { marketRateFeatures } from "@/lib/market-rate-content";
import { proofPoints } from "@/lib/shine-content";

export function MarketRateIncome() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1216px] px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
            How to Generate New Income With Shine
          </h2>
          <p className="mt-5 text-lg leading-[30px] text-[#0e0e0e] lg:text-xl">
            Shine’s solar programs allow multifamily properties to:
          </p>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {marketRateFeatures.map((feature) => (
            <div key={feature.title}>
              <span className="grid size-10 place-items-center rounded-md bg-accent text-[#0e0e0e]">
                <feature.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg tracking-[-0.4px] text-[#171717]">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-[22.5px] text-[#0e0e0e]">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-[1164px] rounded-lg bg-[#091500] bg-[radial-gradient(circle_at_center,rgba(246,232,73,0.18),transparent_70%)] px-6 py-9 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30">
          {proofPoints.map((point) => (
            <div key={point.figure} className="text-center">
              <p className="font-display text-5xl leading-none tracking-[-1.2px] text-accent lg:text-[60px] lg:leading-[72px]">
                {point.figure}
              </p>
              <p className="mt-1 font-display text-sm uppercase tracking-[0.7px] text-white">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
