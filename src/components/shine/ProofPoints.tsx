import { useEffect, useRef, useState } from "react";
import { proofPoints } from "@/lib/shine-content";

function parseFigure(figure: string) {
  const match = figure.match(/^([\d,.]+)(.*)$/);
  if (!match) {
    return { value: 0, suffix: figure, decimals: 0 };
  }
  const numeric = match[1].replace(/,/g, "");
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  return {
    value: Number(numeric),
    suffix: match[2],
    decimals,
  };
}

function formatValue(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }
  return Math.round(value).toLocaleString("en-US");
}

function AnimatedFigure({ figure }: { figure: string }) {
  const { value, suffix, decimals } = parseFigure(figure);
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <p
      ref={ref}
      className="font-display text-5xl leading-none tracking-[-1.2px] text-accent lg:text-[60px] lg:leading-[72px]"
    >
      {formatValue(display, decimals)}
      {suffix}
    </p>
  );
}

export function ProofPointsBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg bg-[#091500] bg-[radial-gradient(circle_at_center,rgba(246,232,73,0.18),transparent_70%)] px-6 py-9 lg:px-12 ${className}`}
    >
      <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30">
        {proofPoints.map((point) => (
          <div key={point.figure} className="text-center">
            <AnimatedFigure figure={point.figure} />
            <p className="mt-1 font-display text-sm uppercase tracking-[0.7px] text-white">
              {point.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProofPointsRow() {
  return (
    <div className="mx-auto grid max-w-[1068px] gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30">
      {proofPoints.map((point) => (
        <div key={point.figure} className="text-center">
          <AnimatedFigure figure={point.figure} />
          <p className="mt-1 font-display text-sm uppercase tracking-[0.7px] text-white">
            {point.label}
          </p>
        </div>
      ))}
    </div>
  );
}
