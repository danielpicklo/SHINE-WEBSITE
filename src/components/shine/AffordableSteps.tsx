import { affordableSteps } from "@/lib/affordable-content";
import { ProcessStepsCarousel } from "@/components/shine/ProcessStepsCarousel";

export function AffordableSteps() {
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
        <ProcessStepsCarousel steps={affordableSteps} />
      </div>
    </section>
  );
}
