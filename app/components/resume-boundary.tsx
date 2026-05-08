"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";

export default function ResumeBoundary({ children }: { children: ReactNode }) {
  const [resumeKey, setResumeKey] = useState(0);

  useEffect(() => {
    const remount = () => setResumeKey((current) => current + 1);

    const handlePageShow = (event: PageTransitionEvent) => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const isBackForward = navigation?.type === "back_forward";

      if (event.persisted || isBackForward) {
        remount();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("renovacare:resume", remount as EventListener);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("renovacare:resume", remount as EventListener);
    };
  }, []);

  return <Fragment key={resumeKey}>{children}</Fragment>;
}
