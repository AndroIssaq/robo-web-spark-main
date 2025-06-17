import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/TextRotate"
import { Language } from "@/hooks/useLanguage"
import { ReactElement, useCallback } from "react"
import { Waves } from "@/components/ui/waves-background"

interface HeroSectionProps {
  data: {
    ar: any
    hero: {
      badge: string;
      title: ReactElement;
      desc: string;
      talk: string;
    };
  };
  lang: Language;
  isDark: boolean;
}

const HeroSection = ({ data, lang, isDark }: HeroSectionProps) => {
  const handleLearnMoreClick = useCallback(() => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleAssistantClick = useCallback(() => {
    const assistantSection = document.getElementById('assistant');
    if (assistantSection) {
      assistantSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const textRotateItems = lang === "en" 
    ? ["innovative", "powerful", "intelligent", "amazing", "stand out"]
    : ["مبتكر", "قوي", "ذكي", "مذهل", "متميز"];

  return (
    <section id="hero" className={`min-h-screen ${isDark ? "bg-black" : "bg-white"} pt-32 pb-16 md:pb-24 flex flex-col items-center justify-center relative overflow-hidden`}>
      {/* Waves Background */}
      <Waves
        lineColor={isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      
      {/* Decorative Elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDark ? "bg-mint/10" : "bg-mint/5"} rounded-full blur-3xl -z-10`} />
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${isDark ? "bg-mint/10" : "bg-mint/5"} rounded-full blur-3xl -z-10`} />
      
      <div className="w-full px-4  md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`order-2 lg:order-1 ${lang === "ar" ? "lg:order-2" : ""}`}
          >
            <div className="flex flex-col items-center space-y-6">
              <LayoutGroup>
                <motion.div layout className="flex flex-col space-y-2">
                  <motion.span layout className={`text-mint-dark text-lg font-orbitron ${isDark ? "text-mint" : "text-mint-dark"}`}>
                    {lang === "ar" ? data?.ar?.hero?.badge : data?.hero?.badge}
                  </motion.span>
                  <motion.h1 layout className={`text-5xl md:text-7xl lg:text-8xl font-bold  ${isDark ? "text-mint" : "text-black"} font-orbitron ${lang === "ar" ? "text-right w-full" : ""}`}>
                    <span className={lang === "ar" ? "inline-block ml-2" : "inline-block mr-2"}>
                      {lang === "en" ? "Make your website " : "اجعل موقعك "}
                    </span>
                    <TextRotate
                      texts={textRotateItems}
                      mainClassName={`${isDark ? "text-mint" : "text-mint-dark"} inline-block overflow-hidden ${lang === "ar" ? "text-center" : ""}`}
                      staggerDuration={0.05}
                      rotationInterval={3000}
                     
                      splitBy="words"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </motion.h1>
                </motion.div>
              </LayoutGroup>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-xl md:text-2xl lg:text-3xl ${isDark ? "text-mint/80" : "text-gray-700"} w-full font-orbitron`}
              >
                {lang === "ar" ? data?.ar?.hero?.desc : data?.hero?.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 font-orbitron"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-mint text-black px-8 py-3 rounded-lg font-bold hover:bg-mint-dark transition-colors text-xl"
                  onClick={handleAssistantClick}
                >
                  {lang === "en" ? "Get 15% Discount" : "احصل علي 15% خصم"}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`border-2 ${isDark ? "border-mint text-mint" : "border-mint-dark text-mint-dark"} px-8 py-3 rounded-lg font-bold hover:bg-mint/10 transition-colors text-lg`}
                  onClick={handleLearnMoreClick}
                >
                  {lang === "en" ? "Learn More" : "اعرف المزيد"}
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center gap-8 pt-8"
              >
                <div className="flex flex-col">
                  <span className={`text-3xl font-bold ${isDark ? "text-mint" : "text-mint-dark"}`}>100+</span>
                  <span className={`text-sm ${isDark ? "text-mint/70" : "text-gray-600"}`}>
                    {lang === "en" ? "Projects Completed" : "مشروع مكتمل"}
                  </span>
                </div>
                <div className={`w-px h-12 ${isDark ? "bg-mint/20" : "bg-mint/10"}`}></div>
                <div className="flex flex-col">
                  <span className={`text-3xl font-bold ${isDark ? "text-mint" : "text-mint-dark"}`}>50+</span>
                  <span className={`text-sm ${isDark ? "text-mint/70" : "text-gray-600"}`}>
                    {lang === "en" ? "Happy Clients" : "عميل سعيد"}
                  </span>
                </div>
                <div className={`w-px h-12 ${isDark ? "bg-mint/20" : "bg-mint/10"}`}></div>
                <div className="flex flex-col">
                  <span className={`text-3xl font-bold ${isDark ? "text-mint" : "text-mint-dark"}`}>24/7</span>
                  <span className={`text-sm ${isDark ? "text-mint/70" : "text-gray-600"}`}>
                    {lang === "en" ? "Support" : "دعم فني"}
                  </span>
                </div>
              </motion.div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
