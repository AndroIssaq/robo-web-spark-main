import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect , useState , useRef} from "react";
import { Link } from "react-router-dom";
interface PricingSectionProps {
  data: any;
  lang: string;
}

const PricingSection = ({ data, lang }: PricingSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  useEffect(() => {
    const widget = document.getElementById("voiceflow-chat");

    if (widget && widget.shadowRoot) {
      const chatContainer = widget.shadowRoot.querySelector(".vfrc-widget");
      const overlay = widget.shadowRoot.querySelector("._1wkq7nf7");

      if (chatContainer && overlay) {
        if (isWidgetVisible) {
          chatContainer.classList.add("_1wkq7nf1");
          chatContainer.classList.remove("_1wkq7nf2");
          overlay.classList.add("_1wkq7nf8");
        } else {
          chatContainer.classList.remove("_1wkq7nf1");
          chatContainer.classList.add("_1wkq7nf2");
          overlay.classList.remove("_1wkq7nf8");
        }
      }

      // منع إغلاق الويدجت عند الضغط داخلها
      const handleClickOutside = (event) => {
        if (!widget.shadowRoot) return;

        // التحقق إذا كان الكليك حصل داخل الـ widget
        const clickedInsideWidget = event.composedPath().some(
          (el) => el.classList && el.classList.contains("vfrc-chat")
        );

        if (!clickedInsideWidget) {
          setIsWidgetVisible(false);
        }
      };

      if (isWidgetVisible) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }

      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isWidgetVisible]);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsWidgetVisible(!isWidgetVisible);
  };
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      id="pricing"
      className="px-6 py-14 bg-white dark:bg-black/90"
    >
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-3xl font-bold text-center text-gray-800 dark:text-mint mb-1"
      >
        {lang === "ar" ? "خطط الأسعار" : "Pricing Plans"}
      </motion.h2>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-gray-600 dark:text-white/70 mb-10 text-center max-w-2xl mx-auto"
      >
        {lang === "ar" ? "اختر الخطة المناسبة لاحتياجاتك" : "Choose the plan that fits your needs"}
      </motion.p>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {/* الباقة المناسبة */}
        <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-mint/5 to-mint/20 dark:from-mint/10 dark:to-mint/30 rounded-2xl border border-mint/30 shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:border-mint/60 hover:shadow-xl"
        >
          <div className="p-8 flex-grow">
            <div className="bg-mint/10 dark:bg-mint/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-mint font-medium text-sm">
                {lang === "ar" ? "الباقة القياسية" : "Standard Package"}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-mint mb-4 flex items-end gap-2">
              4,500 <span className="text-lg font-normal text-gray-600 dark:text-white/70">{lang === "ar" ? "ج.م" : "EGP"}</span>
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "تصميم حديث وعصري بأحدث معايير 2025" : "Modern design with latest 2025 standards"}
                </span>
              </li>
                <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "دومين وهوست مجاني لأول سنة " : " Free domain and hosting for the first year"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "مخصص حسب مجالك ونشاط شركتك" : "Customized for your business field"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "اضافة شات بوت ذكي مثل سارة" : "Smart chatbot like Sarah"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "صفحة رئيسية جذابة ومصممة باحتراف" : "Attractive and professionally designed homepage"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80">
                  {lang === "ar" ? "لوحة تقارير تساعدك تتابع أداء موقعك" : "Dashboard to track your website performance"}
                </span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
          <button
           id='toggle-widget-btn'
           onClick={handleButtonClick}
  className="px-6 py-2 w-full  rounded-[2em] bg-mint text-black font-bold shadow transition hover:bg-mint-dark hidden md:block"
>
{isWidgetVisible ? (lang === "ar" ? "إخفاء الشات" : "Hide chat") : (lang === "ar" ? "  اشتري من سارة و احصل علي خصم 15% " : "Try buying from Sara")}
</button>
 <Link to={"/buy-now"}

  className="px-6 py-2 mt-[15px] w-full text-center  rounded-[2em] bg-green-300 text-black font-bold shadow transition hover:bg-mint-dark hidden md:block"
>
{isWidgetVisible ? (lang === "ar" ? "إخفاء الشات" : "Hide chat") : (lang === "ar" ? " اشتري من غير ما تكلم سارة" : "   Buy without talking to Sara")}
</Link>
          </div>
        </motion.div>

        {/* الباقة المخصصة */}
        <motion.div
       variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
       whileHover={{ y: -10, transition: { duration: 0.3 } }}
       className="bg-white dark:bg-neutral-950 rounded-2xl border border-mint/20 shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:border-mint/50 hover:shadow-xl"

        >
          <div className="p-8 flex-grow">
            <div className="bg-mint/20 dark:bg-mint/30 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-mint font-bold text-sm">
                {lang === "ar" ? "الباقة المخصصة" : "Custom Package"}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-mint mb-4">
              {lang === "ar" ? "سعر مخصص" : "Custom Price"}
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center justify-center text-center text-[30px] gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-white/80 font-extrabold">
                  {lang === "ar" ? " تواصل معنا لعمل الموقع الذي تحلم به بكل المميزات التي تريدها " : "Contact us to create the website of your dreams with all the features you want"}
                </span>
              </li>
              
            </ul>
          </div>
          <div className="p-8 pt-0">
            <Button
              className="w-full bg-gradient-to-r from-mint to-mint/80 hover:from-mint/90 hover:to-mint/70 text-black font-medium py-3 rounded-xl transition-all"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default PricingSection;
/*
variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="bg-white dark:bg-neutral-950 rounded-2xl border border-mint/20 shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:border-mint/50 hover:shadow-xl"



*/