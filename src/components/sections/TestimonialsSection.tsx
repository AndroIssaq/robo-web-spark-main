import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";


const reviewsAr = [
  {
    name: "أحمد علي",
    username: "@ahmed.ali",
    body: "خدمة روبوويب وفرت علينا وقت وجهد كبير في أتمتة العمليات اليومية للشركة. النتائج مذهلة!",
    img: "https://avatar.vercel.sh/ahmed.ali",
  },
  {
    name: "سارة محمد",
    username: "@sara.mohamed",
    body: "منصة روبوويب ساعدتنا في زيادة إنتاجية الفريق من خلال حلول الذكاء الاصطناعي المتقدمة.",
    img: "https://avatar.vercel.sh/sara.mohamed",
  },
  {
    name: "محمود حسن",
    username: "@mahmoud.hassan",
    body: "الدعم الفني من روبوويب سريع واحترافي. أنصح أي شركة ترغب في التحول الرقمي بالتعامل معهم.",
    img: "https://avatar.vercel.sh/mahmoud.hassan",
  },
  {
    name: "دينا إبراهيم",
    username: "@dina.ibrahim",
    body: "حلول روبوويب ساعدتنا على تحليل بيانات العملاء بشكل أذكى واتخاذ قرارات أفضل.",
    img: "https://avatar.vercel.sh/dina.ibrahim",
  },
  {
    name: "يوسف مصطفى",
    username: "@youssef.mostafa",
    body: "أدوات روبوويب للذكاء الاصطناعي جعلت عملياتنا أكثر مرونة وسرعة في السوق المصري.",
    img: "https://avatar.vercel.sh/youssef.mostafa",
  },
  {
    name: "منى خالد",
    username: "@mona.khaled",
    body: "منصة روبوويب سهلت علينا دمج الأتمتة في أعمالنا بدون الحاجة لخبرة تقنية كبيرة.",
    img: "https://avatar.vercel.sh/mona.khaled",
  },
];

const reviewsEn = [
  {
    name: "Ahmed Ali",
    username: "@ahmed.ali",
    body: "RoboWeb saved us a lot of time and effort automating our daily operations. The results are amazing!",
    img: "https://avatar.vercel.sh/ahmed.ali",
  },
  {
    name: "Sara Mohamed",
    username: "@sara.mohamed",
    body: "RoboWeb's platform helped boost our team's productivity with advanced AI solutions.",
    img: "https://avatar.vercel.sh/sara.mohamed",
  },
  {
    name: "Mahmoud Hassan",
    username: "@mahmoud.hassan",
    body: "RoboWeb's support team is fast and professional. Highly recommend for any business going digital.",
    img: "https://avatar.vercel.sh/mahmoud.hassan",
  },
  {
    name: "Dina Ibrahim",
    username: "@dina.ibrahim",
    body: "RoboWeb solutions helped us analyze customer data smarter and make better decisions.",
    img: "https://avatar.vercel.sh/dina.ibrahim",
  },
  {
    name: "Youssef Mostafa",
    username: "@youssef.mostafa",
    body: "RoboWeb's AI tools made our operations more agile and faster in the Egyptian market.",
    img: "https://avatar.vercel.sh/youssef.mostafa",
  },
  {
    name: "Mona Khaled",
    username: "@mona.khaled",
    body: "RoboWeb made it easy to integrate automation into our business with no technical hassle.",
    img: "https://avatar.vercel.sh/mona.khaled",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsSection({lang}) {
 
  console.log(lang);
  const reviews = lang === "ar" ? reviewsAr : reviewsEn;
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);


  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="mb-6 mt-4 text-3xl font-bold text-center">
        {lang === "ar" ? "آراء عملائنا" : "What Our Clients Say"}
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
