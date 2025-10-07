"use client";

import { useEffect, useMemo, useState } from "react";
import { LATEST_RISK_SCORES } from "@/data/latestRiskScores";

function getNextIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  const next = currentIndex + 1;
  return next >= total ? 0 : next;
}

export default function RotatingRiskBadge() {
  // Badge désactivé pour le marché FR
  return null;
  /*
  const items = useMemo(() => LATEST_RISK_SCORES, []);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => getNextIndex(prev, items.length));
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  if (items.length === 0) return null;
  const current = items[index];

  return (
    <div className="fixed left-4 bottom-4 z-40 max-w-xs sm:max-w-sm">
      <div className="rounded-xl border border-gray-200 bg-white/90 backdrop-blur shadow-lg p-3 sm:p-4 text-gray-800">
        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
          <span className="text-lg">📍</span>
          <span className="text-xs sm:text-sm font-medium text-gray-600">Derniers scores générés</span>
        </div>
        <div className="text-sm sm:text-base font-semibold">
          {current.firstName} — {current.industry}
        </div>
      </div>
    </div>
  );
  */
}


