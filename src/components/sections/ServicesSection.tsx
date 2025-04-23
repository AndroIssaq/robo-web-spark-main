import { motion } from "framer-motion";
import websties from "../../lovable-uploads/laptop.jpg";

interface ServicesSectionProps {
  data: any;
  lang: string;
}

const ServicesSection = ({ data, lang }: ServicesSectionProps) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      id="services" 
      className="px-6 py-14 bg-white dark:bg-black/90"
    >
      <motion.h2 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-3xl font-bold text-gray-800 dark:text-mint mb-1"
      >
        {lang === "ar" ? data?.ar?.services?.heading : data?.services?.heading}
      </motion.h2>
      <motion.p 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-gray-600 dark:text-white/70 mb-10 max-w-xl"
      >
        {lang === "ar" ? data?.ar?.services?.desc : data?.services?.desc}
      </motion.p>
      <motion.div 
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col gap-12"
      >
        {(lang === "ar" ? data?.ar?.services?.list : data?.services?.list)?.map((ser: any, i: number) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={`flex flex-col md:${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'} items-center md:items-stretch bg-white dark:bg-neutral-950 rounded-2xl border border-mint/10 shadow-md overflow-hidden`}
          >
            {/* Image Section */}
            <div className={`flex-shrink-0 flex justify-center items-center md:w-2/5 p-6`}>
              <img
                src={ser.img} 
                alt={ser.title}
                className="rounded-xl h-40 w-64 object-cover shadow-md"
                loading="lazy"
              />
            </div>
            {/* Content Section */}
            <div className="flex flex-col justify-center md:w-2/5 p-6 gap-2">
              <h4 className="font-orbitron font-bold text-2xl text-gray-900 dark:text-mint mb-2">{ser.title}</h4>
              <p className="text-gray-700 dark:text-white/70 text-base mb-4">{ser.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection; 