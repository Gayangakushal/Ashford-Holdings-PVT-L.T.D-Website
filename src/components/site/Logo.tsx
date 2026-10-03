import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Exact user-supplied artwork, displayed without recolouring or distortion.
 */
export function Logo({
  className,
  onClick,
}: {
  className?: string | undefined;
  onClick?: (() => void) | undefined;
}) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn("logo-link", className)}
      onClick={onClick}
    >
      <img
        src="/assets/brand/ashford-holdings-logo.png"
        alt={site.name}
        width={1299}
        height={1211}
        className="logo-img"
        decoding="async"
      />
      <span className="logo-name">{site.name}</span>
    </Link>
  );
}
