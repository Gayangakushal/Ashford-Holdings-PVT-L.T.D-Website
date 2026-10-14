/** Wait only for the first screen and brand assets; never wait for lazy images. */
export function waitForIntroReadiness(
  signal: AbortSignal,
  budgetMs = 6000,
): Promise<"ready" | "failed" | "timeout" | "aborted"> {
  return new Promise((resolve) => {
    const cleanups: (() => void)[] = [];
    let settled = false;
    const finish = (result: "ready" | "failed" | "timeout" | "aborted") => {
      if (settled) return;
      settled = true;
      cleanups.forEach((cleanup) => cleanup());
      resolve(result);
    };
    const timeout = window.setTimeout(() => finish("timeout"), budgetMs);
    cleanups.push(() => window.clearTimeout(timeout));
    const abort = () => finish("aborted");
    signal.addEventListener("abort", abort, { once: true });
    cleanups.push(() => signal.removeEventListener("abort", abort));
    if (signal.aborted) {
      abort();
      return;
    }

    const prepare = () => {
      if (settled) return;
      const images = Array.from(document.images).filter((image) => {
        const rect = image.getBoundingClientRect();
        return (
          image.closest(".brand-loader") ||
          image.fetchPriority === "high" ||
          (image.loading !== "lazy" &&
            rect.width > 0 &&
            rect.top < window.innerHeight &&
            rect.bottom > 0)
        );
      });
      const imageTasks = images.map(
        (image) =>
          new Promise<void>((done, fail) => {
            const loaded = () => {
              if (!image.naturalWidth) {
                fail(new Error("Critical image unavailable"));
                return;
              }
              if (typeof image.decode === "function") image.decode().then(done, fail);
              else done();
            };
            if (image.complete) {
              loaded();
              return;
            }
            const errored = () => fail(new Error("Critical image unavailable"));
            image.addEventListener("load", loaded, { once: true });
            image.addEventListener("error", errored, { once: true });
            cleanups.push(() => {
              image.removeEventListener("load", loaded);
              image.removeEventListener("error", errored);
            });
          }),
      );
      Promise.all([document.fonts?.ready, ...imageTasks]).then(
        () => finish("ready"),
        () => finish("failed"),
      );
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", prepare, { once: true });
      cleanups.push(() => document.removeEventListener("DOMContentLoaded", prepare));
    } else prepare();
  });
}
