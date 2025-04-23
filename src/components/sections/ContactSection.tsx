import { motion } from "framer-motion";

interface ContactSectionProps {
  data: any;
  dir: string;
}

const ContactSection = ({ data, dir }: ContactSectionProps) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
      id="contact" 
      className="px-6 py-14 bg-white dark:bg-black"
    >
      <div className="md:max-w-xl mx-auto">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-3xl font-bold text-gray-800 dark:text-mint mb-3"
        >
          {data.contact.heading}
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mb-8 text-gray-600 dark:text-white/80"
        >
          {data.contact.desc}
        </motion.p>
        <motion.form 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col gap-5 bg-gray-50 dark:bg-black border-2 border-mint/15 rounded-2xl p-8 shadow-lg" 
          dir={dir}
        >
          <motion.input 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={data.contact.name} 
            className="rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint" 
          />
          <motion.input 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={data.contact.email} 
            type="email" 
            className="rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint"
          />
          <motion.textarea 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={data.contact.message} 
            className="rounded px-4 py-3 h-28 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint"
          />
          <motion.button 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full mt-3 bg-mint text-black font-bold py-2 rounded-lg hover:bg-mint-dark transition"
          >
            {data.contact.send}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection; 