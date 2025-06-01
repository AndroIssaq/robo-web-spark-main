import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface ContactSectionProps {
  data: any;
  dir: string;
  lang: string;
}

const ContactSection = ({ data, dir, lang }: ContactSectionProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const message = messageRef.current?.value || "";
    try {
      const webhookUrl = "https://hook.eu2.make.com/hs7tjikmg86asax20qf6vtbwrowhj8nh";
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message })
      });
      if (!res.ok) throw new Error("Network error");
      setSuccess(true);
      if (nameRef.current) nameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (err) {
      setError(lang === "ar" ? "حدث خطأ أثناء الإرسال" : "An error occurred while sending");
    } finally {
      setLoading(false);
    }
  };

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
          {lang === "ar" ? data?.ar?.contact?.heading : data?.contact?.heading}
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mb-8 text-gray-600 dark:text-white/80"
        >
          {lang === "ar" ? data?.ar?.contact?.desc : data?.contact?.desc}
        </motion.p>
        <motion.form 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col gap-5 bg-gray-50 dark:bg-black border-2 border-mint/15 rounded-2xl p-8 shadow-lg" 
          dir={dir}
          onSubmit={handleSubmit}
        >
          <motion.input 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={lang === "ar" ? data?.ar?.contact?.name : data?.contact?.name} 
            className="rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint" 
            ref={nameRef}
          />
          <motion.input 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
            type="tel"
            className={` ${lang==="ar"? "text-right":"text-left"} rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint`}
            ref={phoneRef}
          />
          <motion.textarea 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            placeholder={lang === "ar" ? data?.ar?.contact?.message : data?.contact?.message} 
            className="rounded px-4 py-3 h-28 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint"
            ref={messageRef}
          />
          <motion.button 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading}
            className="w-full mt-3 bg-mint text-black font-bold py-2 rounded-lg hover:bg-mint-dark transition disabled:opacity-60"
          >
            {loading
              ? (lang === "ar" ? "جاري الإرسال..." : "Sending...")
              : (lang === "ar" ? data?.ar?.contact?.send : data?.contact?.send)}
          </motion.button>
          {success && (
            <div className="text-green-600 dark:text-green-400 text-center mt-2">
              {lang === "ar" ? "تم الإرسال بنجاح!" : "Sent successfully!"}
            </div>
          )}
          {error && (
            <div className="text-red-600 dark:text-red-400 text-center mt-2">{error}</div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;