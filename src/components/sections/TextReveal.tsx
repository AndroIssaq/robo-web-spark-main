import { TextReveal } from "../magicui/text-reveal";

export function TextRevealComponent({ lang }: { lang: string }) {
  const content =
    lang === "ar"
      ? "روبوويب: منصتك الذكية لبناء مواقع احترافية بسهولة وسرعة وبدون تعقيد. استمتع بتجربة تصميم عصرية تدعم نمو أعمالك وتلبي جميع احتياجاتك التقنية."
      : "RoboWeb: Your smart platform to build professional websites easily and quickly, without complexity. Enjoy a modern design experience that supports your business growth and meets all your technical needs.";
  return <TextReveal>{content}</TextReveal>;
}
