import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Internal links go through the router; external/tel/mailto links stay plain anchors. */
export function AppLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode } & Omit<ComponentProps<"a">, "href">) {
  if (href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) {
    return (
      <Link to={href} className={className} {...(rest as Record<string, unknown>)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 10"
      aria-hidden="true"
      className={cn("btn-arrow h-2.5 w-5", className)}
      fill="none"
    >
      <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  return (
    <AppLink href={href} className={cn("btn", `btn-${variant}`, className)} {...rest}>
      <span className="btn-label">{children}</span>
      <Arrow />
    </AppLink>
  );
}

/** Small mono uppercase link with a travelling arrow. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppLink href={href} className={cn("text-link", className)}>
      <span>{children}</span>
      <Arrow />
    </AppLink>
  );
}
