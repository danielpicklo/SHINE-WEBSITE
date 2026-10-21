import { Link } from "@tanstack/react-router";
import type { SiteLink } from "@/lib/shine-content";

export function TextLink({
  item,
  className,
  onClick,
}: {
  item: SiteLink;
  className?: string;
  onClick?: () => void;
}) {
  if (!item.href) {
    return <span className={className}>{item.label}</span>;
  }

  // Path-only routes use the router; hash URLs (e.g. /#calculator) stay plain anchors.
  if (item.href.startsWith("/") && !item.href.includes("#")) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
}
