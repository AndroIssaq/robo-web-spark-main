/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Title from "../App Components/Title";
 
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
 
export const WayOfWork = ({ data, lang }: { data: TimelineEntry[], lang?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
 
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
 console.log(lang);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });
 
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
 
  return (
    <div
      className="w-full bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
    <Title title={'كيف نبدأ العمل ؟ '} des={'طريقة العمل هي التي تميزنا عن الاخرين'}/>
 
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-10 md:pt-40 md:gap-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
              <div className={`h-10 absolute w-10 rounded-full bg-white dark:bg-black flex items-center justify-center ${lang === 'ar' ? 'right-3 md:right-3 left-auto' : 'left-3 md:left-3'}`}>
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className={`hidden md:block text-xl md:text-5xl font-bold text-neutral-500 ${lang === 'ar' ? 'md:pr-20 text-right' : 'md:pl-20'}`}> 
                {item.title}
              </h3>
            </div>
            <div className={`relative w-full ${lang === 'ar' ? 'md:pr-4 md:pl-20 text-right' : 'pl-20 pr-4 md:pl-4'}`}>
              <h3 className={`md:hidden block text-2xl mb-4 font-bold text-neutral-500 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={
            `absolute top-0 overflow-hidden w-[10px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-20 ` +
            (lang === 'ar' ? 'lg:right-8 left-2 md:left-2' : ' left-8')
          }
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[10px] bg-gradient-to-t from-second via-third to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};