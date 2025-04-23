import { VelocityScroll } from "../magicui/scroll-based-velocity"; 

export function WeAreTheBest({lang}: {lang: string}) {
  return (
    <div className="relative my-[50px] flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>{lang === "ar" ? " انت تستحق الافضل ونحن الافضل" : "You Deserve The Best, and We Are The Best"}</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
