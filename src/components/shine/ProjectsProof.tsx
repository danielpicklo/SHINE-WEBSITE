import { proofPoints } from "@/lib/shine-content";

export function ProjectsProof() {
  return (
    <section className="bg-[#091500] bg-[radial-gradient(circle_at_center,rgba(246,232,73,0.12),transparent_70%)] px-5 py-9 lg:px-12">
      <div className="mx-auto grid max-w-[1068px] gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30">
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
    </section>
  );
}
