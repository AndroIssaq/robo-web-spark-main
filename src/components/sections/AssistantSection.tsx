import { motion } from "framer-motion";
import chat from "../../lovable-uploads/a-smiling-girl-robot-with-mint-green-and-black-sui (1).png";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    voiceflow?: any;
    __vfLoaded?: boolean;
  }
}

interface AssistantSectionProps {
  data: any;
  lang?: 'ar' | 'en'; // Optional language prop
}

const ar = {
  heading: <><span className="text-mint">اشترى أي باقة للمواقع من سارة</span><br />واحصل على <span className="text-mint">15% خصم</span></>,
  desc: 'اغتنم الفرصة الآن! احصل على خصم 15% عند شرائك لأي باقة من باقات تصميم المواقع عبر سارة مساعدتنا الذكية. استمتع بتجربة احترافية ودعم كامل في كل خطوة.',
  features: [
    {
      title: 'توصيات ذكية',
      desc: 'يتعلم مساعدنا الذكي تفضيلاتك ويقدم توصيات مخصصة مناسبة لك.'
    },
    {
      title: 'شراء فوري',
      desc: 'جرب تشتري من سارة واحصل علي خصم 15%'
    },
    {
      title: 'دعم فوري',
      desc: 'احصل على إجابات فورية لأسئلتك حول المنتجات وخدماتنا على مدار الساعة.'
    }
  ],
  button: 'جرب الشراء من سارة',
  dir: 'rtl',
  align: 'text-right',
};

const en = {
  heading: <><span className="text-mint">Buy any website package from Sara</span><br />and get <span className="text-mint">15% off</span></>,
  desc: 'Take advantage now! Get 15% off when you purchase any website design package through Sara, our smart assistant. Enjoy a professional experience and full support every step of the way.',
  features: [
    {
      title: 'Smart Recommendations',
      desc: 'Our smart assistant learns your preferences and provides personalized recommendations.'
    },
    {
      title: 'Instant Purchase',
      desc: 'Try buying from Sara and get 15% off.'
    },
    {
      title: 'Instant Support',
      desc: 'Get instant answers to your questions about our products and services 24/7.'
    }
  ],
  button: 'Try buying from Sara',
  dir: 'ltr',
  align: 'text-left',
};

const AssistantSection = ({ data, lang }: AssistantSectionProps) => {
  // ...existing code

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  
  useEffect(() => {
    // Close the widget when clicking outside of it
    const handleClickOutside = (event: any) => {
      const widget = document.getElementById('voiceflow-chat');
      if (!widget) return;

      const path: any[] = typeof event.composedPath === 'function' ? event.composedPath() : [];
      const clickedInsideWidget = path.some(
        (el) => el && (el.id === 'voiceflow-chat' || (el.classList && el.classList.contains('vfrc-chat')))
      );

      if (!clickedInsideWidget) {
        try { window.voiceflow?.chat?.close?.(); } catch {}
        setIsWidgetVisible(false);
      }
    };

    if (isWidgetVisible) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isWidgetVisible]);

  const handleButtonClick = async (event: any) => {
    event.stopPropagation();
    // Toggle close if already visible
    if (isWidgetVisible) {
      try { window.voiceflow?.chat?.close?.(); } catch {}
      setIsWidgetVisible(false);
      return;
    }

    const config = {
      verify: { projectID: '68060269b55d846dc89272b5' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      voice: { url: 'https://runtime-api.voiceflow.com' },
    } as const;

    const openChat = () => {
      try {
        window.voiceflow?.chat?.open?.();
        setIsWidgetVisible(true);
      } catch {}
    };

    const ensureScriptLoaded = () => new Promise<void>((resolve) => {
      if (window.voiceflow && window.voiceflow.chat) return resolve();

      const waitForChat = (timeoutMs = 5000) => {
        const start = Date.now();
        const tick = () => {
          if (window.voiceflow && window.voiceflow.chat) return resolve();
          if (Date.now() - start > timeoutMs) return resolve();
          setTimeout(tick, 100);
        };
        tick();
      };

      const inject = (src: string, type: 'module' | 'text/javascript') => {
        const tag = document.createElement('script');
        tag.src = src;
        tag.type = type;
        tag.async = true;
        tag.onload = () => waitForChat(5000);
        tag.onerror = () => waitForChat(1500);
        document.body.appendChild(tag);
      };

      // If an existing tag is present but wrong type, remove it
      const nextSel = 'script[src*="cdn.voiceflow.com/widget-next/bundle.mjs"]';
      const legacySel = 'script[src*="cdn.voiceflow.com/widget/bundle.mjs"]';
      const existingNext = document.querySelector(nextSel) as HTMLScriptElement | null;
      const existingLegacy = document.querySelector(legacySel) as HTMLScriptElement | null;

      if (existingNext && existingNext.type !== 'module') existingNext.parentNode?.removeChild(existingNext);
      if (existingLegacy && existingLegacy.type !== 'text/javascript') existingLegacy.parentNode?.removeChild(existingLegacy);

      // Inject modern first, then fallback to legacy after a short delay if still not ready
      inject('https://cdn.voiceflow.com/widget-next/bundle.mjs', 'module');
      setTimeout(() => {
        if (!(window.voiceflow && window.voiceflow.chat)) {
          inject('https://cdn.voiceflow.com/widget/bundle.mjs', 'text/javascript');
        }
      }, 800);
    });

    await ensureScriptLoaded();
    // Ensure the global window.voiceflow is actually ready
    if (!window.voiceflow || !window.voiceflow.chat) {
      await new Promise<void>((resolve) => {
        const start = Date.now();
        const tick = () => {
          if (window.voiceflow && window.voiceflow.chat) return resolve();
          if (Date.now() - start > 5000) return resolve();
          setTimeout(tick, 100);
        };
        tick();
      });
    }

    // Initialize chat once
    const alreadyInitialized = window.__vfLoaded || !!document.getElementById('voiceflow-chat');
    if (!alreadyInitialized) {
      try { window.voiceflow.chat.load(config); window.__vfLoaded = true; } catch {}
      // wait until widget mounts (best-effort)
      await new Promise<void>((resolve) => {
        const start = Date.now();
        const tick = () => {
          if (document.getElementById('voiceflow-chat')) return resolve();
          if (Date.now() - start > 3000) return resolve();
          requestAnimationFrame(tick);
        };
        tick();
      });
    }

    openChat();
  };
  
  // Language selection (default to Arabic)
  const t = lang === 'en' ? en : ar;
  const sectionDir = t.dir;
  const align = t.align;

  // Default to Arabic if no lang prop
  // (You can change to English by default if you want)


  // Example icons (replace with your own or use Heroicons/TablerIcons as needed)
  const icons = [
    (
      <svg key="icon1" className="w-6 h-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2v-5a2 2 0 00-2-2h-1m-4 0h-1a2 2 0 00-2 2v5a2 2 0 002 2h1" /></svg>
    ),
    (
      <svg key="icon2" className="w-6 h-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V10" /></svg>
    ),
    (
      <svg key="icon3" className="w-6 h-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  ];

  // Responsive RTL/LTR support
  const isRTL = typeof document !== 'undefined' && document.documentElement.dir === 'rtl';

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      id="assistant"
      dir={sectionDir}
      className={`px-4 md:px-12 py-12 md:py-20 flex flex-col ${sectionDir === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 bg-gradient-to-br from-white via-mint/5 to-mint/10 dark:from-black dark:via-neutral-950 dark:to-mint-dark/10 font-orbitron overflow-hidden`}
    >
      {/* Image Right */}
      <motion.div 
       
        className="flex-1 flex justify-center items-center"
      >
        <motion.div
          className="rounded-2xl lg:w-[70%] w-[100%] overflow-hidden shadow-2xl border-2 border-mint/70 bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-950 dark:to-black p-2 flex items-center justify-center"
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={chat}
            alt="AI Assistant Illustration"
            className="w-full h-full object-contain rounded-xl bg-white dark:bg-black"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
      {/* Content left */}
      <motion.div
        variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
        className={`flex-1 w-full max-w-xl flex flex-col items-start justify-center ${align}`}
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 leading-tight ${align}`}>
          {t.heading}
        </h2>
        <p className={`text-gray-700  dark:text-white/80 text-base mb-8 max-w-lg ${align}`}>
          {t.desc}
        </p>
        {/* Features */}
        <div className="w-full flex flex-col gap-4 mb-8">
          {t.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/90 dark:bg-neutral-900/80 border border-mint/20 rounded-xl p-4">
              {icons[i]}
              <div className="flex-1">
                <div className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</div>
                <div className="text-gray-700 dark:text-white/70 text-sm">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-start">
           <button
           id='toggle-widget-btn'
           onClick={handleButtonClick}
  className="px-6 py-2 w-full  rounded-[2em] bg-mint text-black font-bold shadow transition hover:bg-mint-dark hidden md:block"
>
{isWidgetVisible ? (lang === "ar" ? "إخفاء الشات" : "Hide chat") : (lang === "ar" ? "جرب تشتري من سارة" : "Try buying from Sara")}
</button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AssistantSection;