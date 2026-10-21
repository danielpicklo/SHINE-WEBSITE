import horizontal from "@/assets/shine-horizontal.png.asset.json";
import icon from "@/assets/shine-icon.png.asset.json";

export function ShineIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src={icon.url}
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}

export function ShineLogo({
  className = "",
  tone = "current",
}: {
  className?: string;
  tone?: "current" | "accent";
}) {
  return (
    <img
      src={horizontal.url}
      alt="Shine"
      className={`h-7 w-auto object-contain ${
        tone === "accent" ? "invert" : ""
      } ${className}`}
    />
  );
}
