import { useState } from "react";
import { affordableSteps } from "@/lib/affordable-content";

export function AffordableSteps() {
  const [progress, setProgress] = useState(0);

  return (
    <section className="overflow-hidden bg-[#0e0e0e] py-16 text-white lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-5 lg:grid-cols-[400px_1fr] lg:gap-16 lg:px-20">
        <div>
          <h2 className="text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]">
            One Solar Expert for All Stages of Your Project
          </h2>
          <p className="mt-5 text-base leading-[22.5px]">
            A typical solar project involves a portfolio consultant, a solar provider to design,
            permit, and build the system, a separate software company for resident billing, and a
            monitoring vendor to keep it all running.{" "}
            <strong>Shine does all of it ourselves.</strong>
          </p>
          <p className="mt-4 text-base leading-[22.5px]">
            From the first feasibility analysis to years of ongoing maintenance, we own the
            lifecycle of your solar program and stay accountable every step of the way.
          </p>
          <a
            href="/contact"
            className="mt-12 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black"
          >
            Calculate my income with solar
          </a>
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl tracking-[-0.6px]">What We Cover :</h3>
          <div
            className="mt-4 flex gap-6 overflow-x-auto pb-3"
            onScroll={(event) => {
              const el = event.currentTarget;
              const max = el.scrollWidth - el.clientWidth;
              setProgress(max > 0 ? el.scrollLeft / max : 0);
            }}
          >
            {affordableSteps.map((step) => (
              <article
                key={step.n}
                className="relative flex h-[408px] w-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-lg p-6 sm:w-[360px]"
              >
                <img
                  src={step.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-[#0e0e0e]/40" />
                <div className="relative">
                  <h4 className="text-[30px] leading-10 tracking-[-0.6px] text-accent">
                    {step.n}. {step.title}
                  </h4>
                  <p className="mt-5 text-base leading-[22.5px]">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="relative mt-2 h-1 w-full max-w-[280px] bg-white/20">
            <div
              className="absolute top-0 h-1 w-24 bg-white"
              style={{ left: `calc((100% - 6rem) * ${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
