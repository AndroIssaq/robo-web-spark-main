import React from "react";
import { motion } from "framer-motion";

interface SectorsSectionProps {
  lang: string;
}

const sectorImages = {
  marketing: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=600&q=80',
  furniture: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=600&q=80',
  realEstate: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&w=600&q=80',
  interiorDesign: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=600&q=80',
  tourism: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&w=600&q=80',
};

const SectorsSection = ({ lang }: SectorsSectionProps) => {
  // بيانات القطاعات
  const sectors = [
    {
      id: 'marketing',
      imageUrl: sectorImages.marketing,
      titleAr: 'التسويق',
      titleEn: 'Marketing',
      descriptionAr: 'نقدم حلول تسويقية مبتكرة تساعد عملائنا على الوصول إلى جمهورهم المستهدف وتحقيق أهدافهم التسويقية بكفاءة.',
      descriptionEn: 'We offer innovative marketing solutions that help our clients reach their target audience and achieve their marketing goals efficiently.',
    },
    {
      id: 'furniture',
      imageUrl: sectorImages.furniture,
      titleAr: 'الأثاث',
      titleEn: 'Furniture',
      descriptionAr: 'نساعد شركات الأثاث على عرض منتجاتها بشكل جذاب وإنشاء تجربة تسوق سلسة عبر الإنترنت لعملائها.',
      descriptionEn: 'We help furniture companies showcase their products attractively and create a seamless online shopping experience for their customers.',
    },
    {
      id: 'realEstate',
      imageUrl: sectorImages.realEstate,
      titleAr: 'العقارات',
      titleEn: 'Real Estate',
      descriptionAr: 'نوفر حلول رقمية متكاملة لقطاع العقارات تساعد على عرض العقارات وتسويقها بشكل فعال وجذب المشترين المحتملين.',
      descriptionEn: 'We provide integrated digital solutions for the real estate sector that help showcase properties and market them effectively to attract potential buyers.',
    },
    {
      id: 'interiorDesign',
      imageUrl: sectorImages.interiorDesign,
      titleAr: 'التصميم الداخلي',
      titleEn: 'Interior Design',
      descriptionAr: 'نساعد مصممي الديكور الداخلي على إبراز أعمالهم وإنشاء منصات رقمية تعكس إبداعهم وتجذب العملاء المهتمين.',
      descriptionEn: 'We help interior designers highlight their work and create digital platforms that reflect their creativity and attract interested clients.',
    },
    {
      id: 'tourism',
      imageUrl: sectorImages.tourism,
      titleAr: 'السياحة',
      titleEn: 'Tourism',
      descriptionAr: 'نقدم حلول رقمية متكاملة لقطاع السياحة تساعد على الترويج للوجهات السياحية وتحسين تجربة الحجز والاستكشاف.',
      descriptionEn: 'We provide integrated digital solutions for the tourism sector that help promote tourist destinations and improve the booking and exploration experience.',
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      id="sectors"
      className="px-6 py-14 bg-white dark:bg-black/90"
    >
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-3xl font-bold text-center text-gray-800 dark:text-mint mb-1"
      >
        {lang === "ar" ? "القطاعات التي نخدمها" : "Sectors We Serve"}
      </motion.h2>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-gray-600 dark:text-white/70 mb-10 text-center max-w-2xl mx-auto"
      >
        {lang === "ar" 
          ? "نقدم حلولاً مخصصة تلبي احتياجات مختلف القطاعات بتقنيات حديثة وتصاميم مبتكرة" 
          : "We provide customized solutions that meet the needs of various sectors with modern technologies and innovative designs"}
      </motion.p>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sectors.map((sector) => (
          <motion.div
            key={sector.id}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-neutral-950 rounded-2xl border border-mint/10 shadow-md overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:border-mint/60 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={sector.imageUrl}
                alt={lang === "ar" ? sector.titleAr : sector.titleEn}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-4">
                  {lang === "ar" ? sector.titleAr : sector.titleEn}
                </h3>
              </div>
            </div>
            <div className="p-4 flex-grow">
              <p className="text-gray-700 dark:text-white/70 text-sm">
                {lang === "ar" ? sector.descriptionAr : sector.descriptionEn}
              </p>
            </div>
            <div className="p-4 pt-0"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectorsSection;