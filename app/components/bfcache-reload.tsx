"use client";

import { useEffect } from "react";

export default function BFCacheReload() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetToTop = () => {
      if (window.location.pathname === "/" && window.location.hash) {
        window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const isBackForward = navigation?.type === "back_forward";

      if (event.persisted || isBackForward) {
        requestAnimationFrame(() => {
          resetToTop();
          window.dispatchEvent(new Event("renovacare:resume"));
          requestAnimationFrame(resetToTop);
        });
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return null;
}
