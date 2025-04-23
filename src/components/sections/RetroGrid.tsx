"use client";

import { RetroGrid } from "../magicui/retro-grid";

export function RetroGridDemo({isDark, lang}) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-mint via-mint-dark to-black bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
      ROBOWEB-SOLUTION
      </span>

      <RetroGrid lightLineColor="rgba(46,233,192,0.85)" darkLineColor="rgba(15,199,169,0.85)" />
    </div>
  );
}
