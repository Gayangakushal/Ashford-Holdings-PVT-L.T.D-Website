import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

/** One intro per document load; internal navigation keeps the root mounted. */
export function BrandLoader({ onComplete }: { onComplete: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [finished, setFinished] = useState(false);
  const [leaving, setLeaving] = useState(false);

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
    element.showModal();
    const timer = window.setTimeout(() => setLeaving(true), 1800);
    return () => {
      window.clearTimeout(timer);
      element.close();
    };
  }, []);

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
    <dialog
      ref={dialog}
      className={`brand-loader${leaving ? " is-leaving" : ""}`}
      aria-label={`${site.name} welcome`}
      onCancel={() => setFinished(true)}
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
          />
        </div>
        <p className="brand-loader-name">{site.name}</p>
        <p className="brand-loader-caption">{site.tagline}</p>
        <div className="brand-loader-line" aria-hidden="true" />
      </div>
      <button type="button" className="brand-loader-skip" onClick={() => setFinished(true)}>
        Skip intro
      </button>
    </dialog>
  );
}
