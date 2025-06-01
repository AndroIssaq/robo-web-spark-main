import { motion } from "framer-motion";
import CEOImage from "../../CEO.jpg";

interface AboutSectionProps {
  data: any;
  lang: string;
}

const AboutSection = ({ data, lang }: AboutSectionProps) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about" 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-14 items-center bg-gray-50 dark:bg-black/90 overflow-hidden"
    >
      {/* About/Team Side */}
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
        <motion.img 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          src="/lovable-uploads/26866a74-9396-4d39-82bc-fbac2434c3c8.png" 
          alt="Team working on futuristic tablet" 
          loading="lazy"
          className="rounded-2xl w-full h-80 object-cover shadow-xl mb-6"
        />
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-2xl md:text-3xl font-bold mb-1 text-gray-800 dark:text-white"
        >
          {lang === "ar" ? data?.ar?.about?.heading : data?.about?.heading}
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-gray-600 dark:text-mint-dark mb-4"
        >
          {lang === "ar" ? data?.ar?.about?.desc : data?.about?.desc}
        </motion.p>
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex gap-3 flex-wrap text-xs"
        >
          {(lang === "ar" ? data?.ar?.about?.keywords : data?.about?.keywords)?.map((k: string, i: number) => (
            <motion.span 
              key={i} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="px-3 py-1 bg-mint/15 rounded-full text-mint"
            >
              {k}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* CEO Portrait + Quote */}
      <motion.div 
        variants={{ hidden: { opacity: 0, x: 0 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
        className="flex flex-col items-center"
      >
        <motion.img 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          src={CEOImage }
          alt={lang === "ar" ? data?.ar?.about?.ceo?.name : data?.about?.ceo?.name}
          loading="lazy"
          className="w-60 h-80 object-cover rounded-xl border-4 border-mint/40 shadow-xl" 
        />
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mt-6 text-center"
        >
          <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xl font-bold text-mint"
          >
            {lang === "ar" ? data?.ar?.about?.ceo?.role : data?.about?.ceo?.role}
          </motion.h3>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-gray-700 dark:text-white/90 text-base mt-3 font-light italic"
          >
            "{lang === "ar" ? data?.ar?.about?.ceo?.quote : data?.about?.ceo?.quote}"
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection; 