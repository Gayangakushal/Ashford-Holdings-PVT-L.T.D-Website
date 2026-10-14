import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { waitForIntroReadiness } from "@/lib/intro-readiness";

/** One intro per document load; internal navigation keeps the root mounted. */
export function BrandLoader({ onComplete }: { onComplete: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [finished, setFinished] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFinished(true);
      return;
    }
    const element = dialog.current;
    if (!element || typeof element.showModal !== "function") {
      setFinished(true);
      return;
    }
    // The SSR-open dialog covers the first paint; promote it to a modal on hydration.
    if (element.open) element.close();
    try {
      element.showModal();
    } catch {
      setFinished(true);
      return;
    }
    const controller = new AbortController();
    waitForIntroReadiness(controller.signal).then((result) => {
      if (controller.signal.aborted) return;
      if (result === "ready") setReady(true);
      else setFinished(true);
    });
    return () => {
      controller.abort();
      element.close();
    };
  }, []);

  useEffect(() => {
    if (!ready || finished) return;
    // If animation events are unavailable, do not trap the visitor in the intro.
    const timer = window.setTimeout(() => setLeaving(true), 2300);
    return () => window.clearTimeout(timer);
  }, [ready, finished]);

  useEffect(() => {
    if (finished) {
      dialog.current?.close();
      onComplete();
    }
  }, [finished, onComplete]);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => {
      dialog.current?.close();
      setFinished(true);
    }, 450);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  if (finished) return null;
  return (
    <>
      <noscript>
        <style>{".brand-loader { display: none !important; }"}</style>
      </noscript>
      <dialog
        ref={dialog}
        open
        className={`brand-loader${ready ? " is-playing" : " is-preparing"}${leaving ? " is-leaving" : ""}`}
        aria-label={`${site.name} welcome`}
        aria-busy={!ready}
        onCancel={(event) => event.preventDefault()}
      >
        <div className="brand-loader-grid" aria-hidden="true" />
        <div className="brand-loader-content">
          <div className="brand-loader-emblem">
            <span className="brand-loader-orbit" aria-hidden="true" />
            <span className="brand-loader-orbit orbit-inner" aria-hidden="true" />
            <img
              src="/assets/brand/ashford-holdings-logo.png"
              alt={site.name}
              width={1299}
              height={1211}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <p className="brand-loader-name">{site.name}</p>
          <p className="brand-loader-caption">{site.tagline}</p>
          <div
            className="brand-loader-line"
            aria-hidden="true"
            onAnimationEnd={(event) => {
              if (event.animationName === "ashford-line") setLeaving(true);
            }}
          />
        </div>
      </dialog>
    </>
  );
}
