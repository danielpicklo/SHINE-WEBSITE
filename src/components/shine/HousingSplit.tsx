import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { housingColumns, proofPoints } from "@/lib/shine-content";

export function HousingSplit() {
  return (
    <section id="housing" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-2">
        {housingColumns.map((column, index) => (
          <div
            key={column.eyebrow}
            className={`flex flex-col justify-between gap-12 px-6 py-10 lg:px-9 lg:py-9 ${
              index === 0 ? "border-b border-[#d0d0d0] lg:border-b-0 lg:border-r" : ""
            }`}
          >
            <div>
              <p className="flex items-center gap-2 font-display text-xs uppercase tracking-[1.92px] text-[#0a0a0a]">
                <span className="size-2 bg-accent" />
                {column.eyebrow}
              </p>
              <h2 className="mt-4 text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
                {column.title}
              </h2>
              <ul className="mt-8 space-y-5 pl-4">
                {column.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-[22.5px] text-[#0e0e0e]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to={column.href}
              className="mt-10 flex items-center gap-2 border-b-2 border-accent pb-1 font-display text-sm tracking-[-0.28px] text-[#0a0a0a]"
            >
              {column.link}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
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
