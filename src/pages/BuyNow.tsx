import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Topbar from "@/components/sections/Topbar";
import { useLanguage } from "@/hooks/useLanguage";
import { useDarkMode } from "@/hooks/useDarkMode";
import { toast } from "@/components/ui/sonner";
import ConfettiCanvas from "react-confetti-canvas";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  // Language state
  const [lang, setLang] = useLanguage();
  const [isDark, setIsDark] = useDarkMode();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const [remainingCompanies] = useState(6); // ثابت أو اجعله ديناميكي
  const [bannerTop, setBannerTop] = useState(0);
  // Form state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const packageRef = useRef<HTMLSelectElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  // Banner scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setBannerTop(Math.min(scrollTop, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Egyptian phone validation function
  function isEgyptianPhone(phone: string) {
    // Accepts: 01X[0-2,5]{1}[0-9]{7} (e.g. 010, 011, 012, 015)
    // Allows optional +20 or 0020 prefix
    const regex = /^(\+?2?0)?1[0125][0-9]{8}$/;
    return regex.test(phone.trim());
  }

  // Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const selectedPackage = packageRef.current?.value || "";
    const notes = notesRef.current?.value || "";

    // Phone validation
    if (!isEgyptianPhone(phone)) {
      setLoading(false);
      const msg = lang === "ar"
        ? "يرجى إدخال رقم هاتف مصري صحيح (مثال: 010xxxxxxxx)"
        : "Please enter a valid Egyptian phone number (e.g. 010xxxxxxxx)";
      toast.error(msg, { duration: 4000, style: { background: '#ef4444', color: '#fff' } });
      return;
    }

    try {
      const webhookUrl = "https://hook.eu2.make.com/r6v74lu6ir34x28x7xajnfc9pyiewlj8";
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, selectedPackage, notes })
      });
      if (!res.ok) throw new Error("Network error");
      setSuccess(true);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        navigate("/");
      }, 4000); // Hide confetti and redirect after 4s
      if (nameRef.current) nameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (packageRef.current) packageRef.current.value = "";
      if (notesRef.current) notesRef.current.value = "";
    } catch (err) {
      setError(lang === "ar" ? "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى." : "An error occurred while sending your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-white dark:bg-black text-gray-800 dark:text-mint font-orbitron`} dir={dir} lang={lang}>
      {showConfetti && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <ConfettiCanvas confettiNumber={250} fadeOut/>
        </div>
      )}
      {/* Fixed Banner with counter */}
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
      <Topbar isDark={isDark} setIsDark={setIsDark} lang={lang} setLang={setLang} data={{}} />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-mint/10 to-mint/20 dark:from-black dark:via-neutral-950 dark:to-mint-dark/10 px-4 py-16 font-orbitron"
      >
        <div className="w-full max-w-lg bg-white/90 dark:bg-black/80 rounded-3xl shadow-2xl border border-mint/30 p-8 md:p-12 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-mint text-center mb-2">
            {lang === "ar" ? "أكمل عملية الشراء" : "Complete Your Purchase"}
          </h1>
          <p className="text-center text-gray-700 dark:text-mint/80 mb-8">
            {lang === "ar"
              ? "املأ بياناتك لإتمام الطلب والحصول على باقة موقعك مع العروض الحصرية!"
              : "Fill in your details to finish your order and get your website package with exclusive offers!"}
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              required
              placeholder={lang === "ar" ? "اسمك" : "Your Name"}
              className="rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint border border-mint/10"
            />
            <input
              ref={phoneRef}
              type="tel"
              required
              placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
              className={` ${lang==="ar"? "text-right":"text-left"} rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint`}
            />
            <select
              ref={packageRef}
              required
              className="rounded px-4 py-3 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint border border-mint/10"
              defaultValue=""
              style={{ background: isDark ? '#111' : undefined, color: isDark ? '#a7f3d0' : undefined }}
            >
              <option value="" disabled>{lang === "ar" ? "اختر الباقة" : "Select Package"}</option>
              <option value="standard">{lang === "ar" ? "الباقة المناسبة" : "Standard Website Package"}</option>
              <option value="custom">{lang === "ar" ? "باقة مخصصة" : "Custom Website Package"}</option>
              <option value="ai">{lang === "ar" ? "موقع + شات بوت ذكي" : "AI Website + Chatbot"}</option>
            </select>
            <textarea
              ref={notesRef}
              placeholder={lang === "ar" ? "ملاحظات إضافية (اختياري)" : "Additional notes (optional)"}
              className="rounded px-4 py-3 h-24 bg-white dark:bg-mint/10 text-gray-800 dark:text-mint focus:outline-none focus:ring-2 focus:ring-mint border border-mint/10"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-3 bg-mint text-black font-bold py-3 rounded-xl hover:bg-mint-dark transition disabled:opacity-60 shadow-lg"
            >
              {loading ? (lang === "ar" ? "جاري التنفيذ..." : "Processing...") : (lang === "ar" ? "إتمام الطلب" : "Finish Order")}
            </button>
            {success && (
              <div className="text-green-600 dark:text-green-400 text-center mt-2">
                {lang === "ar" ? "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." : "Your order has been sent successfully! We will contact you soon."}
              </div>
            )}
            {/* Removed inline error for phone, now handled by toast */}
            {error && (
              <div className="text-red-600 dark:text-red-400 text-center mt-2">{error}</div>
            )}
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default BuyNow;
