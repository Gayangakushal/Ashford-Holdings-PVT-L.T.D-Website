import { useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppLink, ButtonLink } from "@/components/site/Buttons";
import { Logo } from "@/components/site/Logo";
import { addressOneLine, navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button"));
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (!firstEl || !lastEl) return;
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={cn("site-header", scrolled && "is-scrolled", open && "is-open")}>
        <div className="container-x site-header-inner">
          <Logo className="site-header-logo" />
          <nav aria-label="Primary" className="site-nav">
            <ul>
              {navigation.map((item) => (
                <li key={item.to}>
                  <AppLink
                    href={item.to}
                    className="site-nav-link"
                    aria-current={isActive(item.to) ? "page" : undefined}
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header-actions">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="btn-sm hidden xl:inline-flex"
            >
              Start a project
            </ButtonLink>
            <button
              ref={triggerRef}
              type="button"
              className="menu-trigger lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => (open ? close() : setOpen(true))}
            >
              <span className="t-tech text-paper">{open ? "Close" : "Menu"}</span>
              <span aria-hidden="true" className="menu-trigger-icon">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn("mobile-menu", open && "is-open")}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-menu-grid tech-grid" aria-hidden="true" />
        <div className="container-x mobile-menu-inner">
          <div className="mobile-menu-top">
            <Logo onClick={() => setOpen(false)} />
            <button type="button" className="menu-trigger" onClick={close}>
              <span className="t-tech text-paper">Close</span>
              <span aria-hidden="true" className="menu-trigger-icon is-x">
                <span />
                <span />
              </span>
            </button>
          </div>
          <nav aria-label="Mobile" className="mobile-menu-nav">
            <ol>
              {navigation.map((item, i) => (
                <li key={item.to} style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}>
                  <AppLink
                    href={item.to}
                    className="mobile-menu-link"
                    aria-current={isActive(item.to) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-menu-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mobile-menu-label">{item.label}</span>
                  </AppLink>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mobile-menu-foot">
            <ButtonLink
              href="/contact"
              variant="primary"
              className="w-full justify-between"
              onClick={() => setOpen(false)}
            >
              Start a project
            </ButtonLink>
            <div className="mt-6 grid gap-1.5">
              <a href={site.phoneHref} className="t-small hover:text-paper">
                {site.phone}
              </a>
              <a href={site.emailHref} className="t-small hover:text-paper">
                {site.email}
              </a>
              <p className="t-tech mt-2">{addressOneLine}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
