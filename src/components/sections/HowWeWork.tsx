import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Title from "@/components/App Components/Title";

// Import images
import concept from '../../../public/lovable-uploads/develop (3).jpg';
import concept2 from '../../../public/lovable-uploads/concept2.jpg';
import concept3 from '../../../public/lovable-uploads/concept3.jpg';
import concept4 from '../../../public/lovable-uploads/concept4.jpeg';
import design from '../../../public/lovable-uploads/design (1).jpg';
import design2 from '../../../public/lovable-uploads/design (2).jpg';
import design3 from '../../../public/lovable-uploads/design (3).jpg';
import design4 from '../../../public/lovable-uploads/Designer (30).jpeg';
import develop from '../../../public/lovable-uploads/develop (1).jpg';
import develop2 from '../../../public/lovable-uploads/develop (2).jpg';
import develop3 from '../../../public/lovable-uploads/develop (3).jpg';
import develop4 from '../../../public/lovable-uploads/develop (4).jpg';
import { WayOfWork } from "../ui/WayOfWork";
// TODO: Replace this with your actual language state or context
const currentLang = typeof window !== 'undefined' && document.documentElement.lang === 'ar' ? 'ar' : 'en';


export function HowWeWork() {
  const data = [
    {
      title: "فهم رؤيتك",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          فهم رؤيتك وأهدافك لإنشاء أساس متين. نحدد نطاق المشروع وأهدافه والمتطلبات الرئيسية.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={concept}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={concept2}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={concept3}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={concept4}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "التصميم",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          نصمم تصميمات جذابة بصريًا وسهلة الاستخدام. نركز على الجماليات وسهولة الاستخدام والتوافق مع هوية علامتك التجارية.

          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
         تصاميم ثلاثية الابعاد - انيقة - جذابة  وحديثة
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={design}
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={design2}
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={design3}
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={design4}
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "بدأ برمجة الموقع",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          إنشاء موقع  يعمل بكامل طاقته ويستجيب للمتطلبات. نحن نضمن أنه قوي وآمن ومُحسَّن للأداء.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            ويمكنك التعديل عليه كلما رغبت في ذلك ,  فقط تواصل معنا
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={develop}
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={develop2}
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={develop3}
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={develop4}
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <WayOfWork data={data} lang={currentLang} />
    </div>
  );
}