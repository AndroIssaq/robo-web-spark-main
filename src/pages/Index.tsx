import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";

// Import sections
import SectorsSection from "@/components/sections/SectorsSection";

import Topbar from "@/components/sections/Topbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AssistantSection from "@/components/sections/AssistantSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
;

// Images
const imgHero = "/lovable-uploads/af0bb2cb-5eec-47b9-8b7e-5bb148803c00.png";
const imgService1 = "/lovable-uploads/26866a74-9396-4d39-82bc-fbac2434c3c8.png";
const imgService2 = "/lovable-uploads/web3-laptop.jpg"; // Updated to new reference image
const imgService3 = "/lovable-uploads/e761f882-4bb3-4245-a4de-ec22710a1232.png";
const imgService4 = "/lovable-uploads/d1f82716-b9b6-4e9e-84b7-1e4ee33bc7d5.png";
const imgAssistant = "/lovable-uploads/26866a74-9396-4d39-82bc-fbac2434c3c8.png";
const imgCEO = "/lovable-uploads/0e418321-507f-445d-aad2-744014bf152e.png";
// services  Images
const laptop = '/lovable-uploads/website.jpg'; 
const chatbot = '/lovable-uploads/a-smiling-girl-robot-with-mint-green-and-black-sui (2).png'; 
const voice = '/lovable-uploads/a-customer-service-happy-girl-robot-in-black-and-m.jpg'; 
const tech = '/lovable-uploads/smart solutiaons.png'; 
// HowWeWork images as strings
const concept = '/concept1 (1).jpg'; 
const concept2 = '/develop (3).jpg'; 
const concept3 = '/Designer (31).jpeg'; 
const concept4 = '/Designer (31).jpeg'; 
const design = '/design (1).jpg'; 
const design2 = '/design (2).jpg'; 
const design3 = '/design (3).jpg'; 
const design4 = '/Designer (30).jpeg'; 
const develop = '/develop (1).jpg'; 
const develop2 = '/develop (2).jpg'; 
const develop3 = '/develop (3).jpg'; 
const develop4 = '/develop (4).jpg'; 

import { WeAreTheBest } from "@/components/sections/WeAreTheBest";
import { TextRevealComponent } from "@/components/sections/TextReveal";
import { RetroGridDemo } from "@/components/sections/RetroGrid";
import PricingSection from "@/components/sections/PricingSection";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Translations
const t = {
  en: {
    nav: {
      home: "Home", about: "About", services: "Services", assistant: "Assistant", contact: "Contact", dark: "Dark mode", light: "Light mode", lang: "Language"
    },
    hero: {
      badge: "Expert Website & AI Solutions",
      title: <>Modern. <span className="text-mint">Elegant.</span> AI-powered.</>,
      desc: "RoboWeb builds stunning websites and integrates next-gen AI – chatbots, voice assistants, automation and more, tailored to your vision.",
      talk: "Let's Talk"
    },
    about: {
      heading: "About RoboWeb",
      desc: "Specialists in modern, creative web design and seamless AI integration. Our team turns ideas into digital masterpieces, merging style with smart technology.",
      keywords: ["Web Design","AI Chatbots","Voice Assistants","Automation"],
      ceo: { role: "CEO · andro issac", quote: "Designing the future means blending art, code and intelligence. At RoboWeb, every pixel and algorithm tells your story." }
    },
    services: {
      heading: "Our Services",
      desc: "We help you build powerful online presences and interactive digital experiences with these core offerings:",
      list: [
        { img: laptop, title: "Website Creation", desc: "Custom, responsive websites crafted with the latest visual trends." },
        { img: chatbot, title: "AI Chatbots", desc: "AI-powered chatbots for better support and smarter interactions, 24/7." },
        { img: voice, title: "AI Voice Assistants", desc: "Voice-based AI for modern, natural client engagement and automation." },
        { img: tech, title: "smart Solutions", desc: "Clinic booking system , automations, analytics, and custom digital development for your needs."}
      ]
    },
    assistant: {
      badge: "New: Meet Your RoboWeb Assistant!",
      heading: <>Transform your business with AI &amp; <span className="text-gradient">get 25% off</span></>,
      points: [
        "Personal demo of RoboWeb's AI assistant",
        "Free consultation for new clients",
        "25% discount for first-time projects"
      ],
      book: "Book a Demo"
    },
    contact: {
      heading: "Contact Us",
      desc: "Ready to bring your vision to life? Fill out the form and our experts will get in touch!",
      name: "Your Name", email: "Email", message: "Message", send: "Send Message"
    },
    footer: {
      copyright: (new Date().getFullYear()),
      right: "All rights reserved.",
      credit: <>Made with <span className="text-mint">💚</span> for visionary brands</>
    },
    testimonials: {
      title: "What People Say About Us",
      description: "Join thousands of satisfied clients who have transformed their businesses with our AI solutions",
      list: [
        {
          author: {
            name: "Amira Hassan",
            handle: "@amira_tech",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
          },
          text: "RoboWeb's AI chatbot has revolutionized our customer service. Response times have improved by 80% and customer satisfaction is at an all-time high.",
          href: "https://twitter.com/amira_tech"
        },
        {
          author: {
            name: "Mohamed El-Sayed",
            handle: "@mohamed_ai",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          text: "The voice assistant integration has transformed our business operations. Our team can now focus on strategic tasks while routine processes are automated.",
          href: "https://twitter.com/mohamed_ai"
        },
        {
          author: {
            name: "Nour Ahmed",
            handle: "@nour_web",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
          },
          text: "Our new website with RoboWeb's AI features has significantly increased our online presence. The smart recommendations and personalized user experience are outstanding."
        }
      ]
    },
    howWeWork: {
      heading: "How We Work",
      desc: "Our proven process ensures your project's success from start to finish",
      steps: [
        {
          title: "Understanding Your Vision",
          content: (
            <div>
              <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                Understanding your vision and goals to create a solid foundation. We define the project scope, objectives, and key requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={concept}
                  alt="concept"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={concept2}
                  alt="concept"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={concept3}
                  alt="concept"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={concept4}
                  alt="concept"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          )
        },
        {
          title: "Design",
          content: (
            <div>
              <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                We design visually appealing and user-friendly designs. We focus on aesthetics, usability, and alignment with your brand identity.
              </p>
              <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                3D designs - elegant - attractive and modern
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={design}
                  alt="design"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={design2}
                  alt="design"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={design3}
                  alt="design"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={design4}
                  alt="design"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          )
        },
        {
          title: "Development",
          content: (
            <div>
              <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-4">
                Creating a fully functional and responsive website. We ensure it's robust, secure, and optimized for performance.
              </p>
              <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                And you can modify it whenever you want, just contact us
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={develop}
                  alt="development"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={develop2}
                  alt="development"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={develop3}
                  alt="development"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={develop4}
                  alt="development"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          )
        }
      ]
    },
    ar: {
      nav: {
        home: "الرئيسية", about: "من نحن", services: "خدماتنا", assistant: "المساعد", contact: "اتصل بنا", dark: "الوضع الليلي", light: "الوضع النهاري", lang: "اللغة"
      },
      hero: {
        badge: "خبراء إنشاء المواقع وحلول الذكاء الاصطناعي",
        title: <>حديث. <span className="text-mint">أنيق.</span> مدعوم بالذكاء الاصطناعي.</>,
        desc: "تبني RoboWeb مواقع مذهلة وتدمج الذكاء الاصطناعي الحديث - روبوتات الدردشة، المساعدات الصوتية، الأتمتة والمزيد وفق رؤيتك.",
        talk: "تواصل معنا"
      },
      about: {
        heading: "عن RoboWeb",
        desc: "متخصصون في التصميم الإبداعي للمواقع والدمج السلس للذكاء الاصطناعي. نحول الأفكار إلى روائع رقمية تجمع بين الأناقة والتقنية الذكية.",
        keywords: ["تصميم مواقع", "روبوتات دردشة", "مساعدات صوتية", "أتمتة"],
        ceo: { role: "المدير التنفيذي ·  اندرو اسحق", quote: "تصميم المستقبل يبدأ بدمج الفن والبرمجة والذكاء. في RoboWeb، كل بكسل وخوارزمية يروي قصتك." }
      },
      services: {
        heading: "خدماتنا",
        desc: "نساعدك في بناء حضور قوي وتجارب رقمية تفاعلية عبر هذه الخدمات الأساسية:",
        list: [
          { img: laptop, title: "إنشاء المواقع", desc: "مواقع مخصصة متجاوبة مع أحدث التصاميم العصرية." },
          { img: chatbot, title: "روبوتات الذكاء الاصطناعي", desc: "روبوتات دردشة ذكية لدعم أفضل وتفاعل أذكى على مدار الساعة." },
          { img: voice, title: "مساعدات صوتية بالذكاء الاصطناعي", desc: "مساعدات صوتية حديثة لتواصل طبيعي وأتمتة متطورة." },
          { img: tech, title: "حلول ذكية", desc: " نظام حجز عيادات والأتمتة والتحليلات والتطوير الرقمي حسب احتياجاتك."}
        ]
      },
      assistant: {
        badge: "جديد: تعرّف على مساعد RoboWeb!",
        heading: <>حوّل عملك بالذكاء الاصطناعي <span className="text-gradient">واحصل على خصم 25٪</span></>,
        points: [
          "عرض شخصي لمساعد RoboWeb الذكي",
          "استشارة مجانية للعملاء الجدد",
          "خصم 25٪ على أول مشروع"
        ],
        book: "احجز عرض تجريبي"
      },
      contact: {
        heading: "تواصل معنا",
        desc: "جاهز لتحقيق رؤيتك؟ املأ النموذج وسيتواصل معك خبراؤنا!",
        name: "اسمك", email: "البريد الإلكتروني", message: "رسالتك", send: "إرسال الرسالة"
      },
      footer: {
        copyright: (new Date().getFullYear()),
        right: "جميع الحقوق محفوظة.",
        credit: <>بكل <span className="text-mint">💚</span> للرؤى المستقبلية</>
      },
      testimonials: {
        title: "ماذا يقول الناس عنا",
        description: "انضم إلى آلاف العملاء الراضين الذين حولوا أعمالهم باستخدام حلول الذكاء الاصطناعي لدينا",
        list: [
          {
            author: {
              name: "أميرة حسن",
              handle: "@amira_tech",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "لقد أحدث روبوت الدردشة الذكي من RoboWeb ثورة في خدمة عملائنا. تحسنت أوقات الاستجابة بنسبة 80٪ ووصلت رضا العملاء إلى أعلى مستوياتها.",
            href: "https://twitter.com/amira_tech"
          },
          {
            author: {
              name: "محمد السيد",
              handle: "@mohamed_ai",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "لقد غير دمج المساعد الصوتي عمليات أعمالنا بالكامل. يمكن لفريقنا الآن التركيز على المهام الاستراتيجية بينما تتم أتمتة العمليات الروتينية.",
            href: "https://twitter.com/mohamed_ai"
          },
          {
            author: {
              name: "نور أحمد",
              handle: "@nour_web",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "لقد زاد موقعنا الجديد مع ميزات الذكاء الاصطناعي من RoboWeb من وجودنا على الإنترنت بشكل كبير. التوصيات الذكية وتجربة المستخدم المخصصة متميزة."
          }
        ]
      },
      howWeWork: {
        heading: "كيف نبدأ العمل ؟",
        desc: "طريقة العمل هي التي تميزنا عن الاخرين",
        steps: [
          {
            title: "فهم رؤيتك",
            content: (
              <div>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                  فهم رؤيتك وأهدافك لإنشاء أساس متين. نحدد نطاق المشروع وأهدافه والمتطلبات الرئيسية.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={concept}
                    alt="concept"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={concept2}
                    alt="concept"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={concept3}
                    alt="concept"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={concept4}
                    alt="concept"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            )
          },
          {
            title: "التصميم",
            content: (
              <div>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                  نصمم تصميمات جذابة بصريًا وسهلة الاستخدام. نركز على الجماليات وسهولة الاستخدام والتوافق مع هوية علامتك التجارية.
                </p>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                  تصاميم ثلاثية الابعاد - انيقة - جذابة وحديثة
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={design}
                    alt="design"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={design2}
                    alt="design"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={design3}
                    alt="design"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={design4}
                    alt="design"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            )
          },
          {
            title: "بدأ برمجة الموقع",
            content: (
              <div>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-4">
                  إنشاء موقع يعمل بكامل طاقته ويستجيب للمتطلبات. نحن نضمن أنه قوي وآمن ومُحسَّن للأداء.
                </p>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                  ويمكنك التعديل عليه كلما رغبت في ذلك، فقط تواصل معنا
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={develop}
                    alt="development"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={develop2}
                    alt="development"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={develop3}
                    alt="development"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <img
                    src={develop4}
                    alt="development"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            )
          }
        ]
      }
    }
  }
};

const Index = () => {
  useEffect(() => {
    document.title = "RoboWeb - Creative Mint World";
  }, []);

  const [isDark, setIsDark] = useDarkMode();
  const [lang, setLang] = useLanguage();
  const [remainingCompanies] = useState(6); // عداد ثابت الآن
  console.log(lang);
  const dir = lang === "ar" ? "rtl" : "ltr";
  const [bannerTop, setBannerTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBannerTop(65);
      } else {
        setBannerTop(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility function for deep merging two objects
function deepMerge(target: any, source: any): any {
  // Prefer target if it is a primitive (string, number, boolean) and is not undefined/null
  if (
    (typeof target !== 'object' || target === null) && target !== undefined && target !== null
  ) {
    return target;
  }
  // If either value is a React element, return target if defined, else source
  if (
    (typeof target === 'object' && target !== null && '$$typeof' in target) ||
    (typeof source === 'object' && source !== null && '$$typeof' in source)
  ) {
    return target !== undefined ? target : source;
  }
  // If either is an array, always use target if defined, else source
  if (Array.isArray(target) || Array.isArray(source)) {
    return Array.isArray(target) ? target : source;
  }
  if (typeof target !== 'object' || target === null) return source;
  if (typeof source !== 'object' || source === null) return target;
  const merged = { ...source, ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (key in target) {
        merged[key] = deepMerge(target[key], source[key]);
      } else {
        merged[key] = source[key];
      }
    }
  }
  return merged;
}



const data = deepMerge(t[lang], t.en);

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-white dark:bg-black text-gray-800 dark:text-mint font-orbitron`} dir={dir} lang={lang}>
      {/* Smart Banner with counter */}
      <div
        className="fixed left-0 w-full flex justify-center items-center py-2 px-4 md:py-3 md:px-0 z-[30] transition-all duration-300"
        style={{ top: bannerTop, pointerEvents: 'none' }}
      >
        <div
          className="backdrop-blur-md bg-mint/20 dark:bg-mint/10 border border-mint/40 rounded-2xl shadow-lg px-6 py-2 md:py-3 text-center flex items-center gap-3 animate-fade-in"
          style={{ pointerEvents: 'auto' }}
        >
          <span className="inline-block text-mint font-bold text-base md:text-lg tracking-wider">
            {lang === "ar"
              ? `متبقي ${remainingCompanies} من أصل 10 شركات للاستفادة من العرض`
              : `${remainingCompanies} out of 10 companies left for the offer`}
          </span>
          <span className="ml-2 animate-pulse text-2xl">🎉</span>
        </div>
      </div>
      {/* Spacer for fixed banner */}
      <div className="h-20 md:h-20"></div>
      <Topbar isDark={isDark} setIsDark={setIsDark} lang={lang} setLang={setLang} data={data} />
      <HeroSection data={data} lang={lang} isDark={isDark} />
      <AssistantSection data={data} lang={lang}/>
      <SectorsSection lang={lang}/>
      <PricingSection lang={lang}/>
      <AboutSection data={data} lang={lang} />
      <TextRevealComponent lang={lang} />
      <WeAreTheBest lang={lang} />
    
      <TestimonialsSection
        lang={lang}
      />
      <ContactSection data={data} dir={dir} lang={lang} />
      <Footer data={data} />
    </div>
  );
};

export default Index;

