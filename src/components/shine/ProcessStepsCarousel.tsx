import { useState } from "react";

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export function ProcessStepsCarousel({ steps }: { steps: ProcessStep[] }) {
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-w-0">
      <h3 className="text-2xl tracking-[-0.6px]">What We Cover :</h3>
      <div
        className="mt-4 flex gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const el = event.currentTarget;
          const max = el.scrollWidth - el.clientWidth;
          setProgress(max > 0 ? el.scrollLeft / max : 0);
        }}
      >
        {steps.map((step) => (
          <article
            key={step.n}
            className="relative flex h-[408px] w-[300px] shrink-0 flex-col justify-start overflow-hidden rounded-lg p-6 sm:w-[360px]"
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
      <div className="relative mt-2 h-1 w-full bg-white/20">
        <div
          className="absolute top-0 h-1 w-24 bg-white"
          style={{ left: `calc((100% - 6rem) * ${progress})` }}
        />
      </div>
    </div>
  );
}
