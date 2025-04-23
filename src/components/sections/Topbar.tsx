import React from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun, Languages } from "lucide-react";
import { MobileMenuButton } from "@/components/ui/mobile-menu-button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Language } from "@/hooks/useLanguage";
import logo from '/lovable-uploads/cropped_image.png'

interface TopbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  lang: Language;
  setLang: (value: Language) => void;
  data: any;
}

const Topbar = ({ isDark, setIsDark, lang, setLang, data }: TopbarProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navLinks = [
    { href: "#hero", label: data.nav.home },
    { href: "#about", label: data.nav.about },
    { href: "#services", label: data.nav.services },
    { href: "#assistant", label: data.nav.assistant },
    { href: "#contact", label: data.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-mint/20 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between px-2 py-2 sm:px-4 sm:py-3 md:px-8 w-full gap-y-2">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-wrap sm:gap-3 md:gap-4 min-w-0">
          <img
            src={logo} 
            alt="Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-widest text-black dark:text-white select-none whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
            ROBO<span className="text-mint-dark">WEB</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-6 items-center flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-base font-semibold text-gray-800 dark:text-white transition hover:bg-mint/10 hover:text-mint-dark focus:bg-mint/10 focus:text-mint-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
          {/* Theme Switcher */}
          <Switch
            checked={isDark}
            onCheckedChange={setIsDark}
            lang={lang}
            aria-label="Theme switch"
            className={isDark ? "dark" : ""}
          />
          <span className="hidden sm:inline-flex items-center font-bold text-xs text-gray-800 dark:text-mint/90">
            {isDark ? (
              <Moon className="w-4 h-4 mr-1 text-mint" />
            ) : (
              <Sun className="w-4 h-4 mr-1" />
            )}
            {isDark ? data.nav.dark : data.nav.light}
          </span>

          {/* Language Toggle */}
          <Toggle
            pressed={lang === "ar"}
            onPressedChange={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label="Change language"
            className="bg-mint/10 border-mint text-mint px-2 py-1 text-xs font-bold hover:bg-mint/20"
          >
            <Languages className="inline w-4 h-4 mr-1" />
            {lang === "en" ? "AR" : "EN"}
          </Toggle>

          {/* Contact Button (desktop) */}
 

          {/* Mobile Menu Button */}
          <span className="md:hidden">
            <MobileMenuButton onClick={() => setDrawerOpen(true)} />
          </span>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="p-6 pt-8 bg-white dark:bg-black">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-4 py-2 text-lg font-semibold text-gray-800 dark:text-white transition hover:bg-mint/10 hover:text-mint-dark focus:bg-mint/10 focus:text-mint-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Switch
              checked={isDark}
              onCheckedChange={setIsDark}
              lang={lang}
              aria-label="Theme switch"
              className={isDark ? "dark" : ""}
            />
            <Toggle
              pressed={lang === "ar"}
              onPressedChange={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label="Change language"
              className="bg-mint/10 border-mint text-mint px-2 py-1 text-xs font-bold hover:bg-mint/20"
            >
              <Languages className="inline w-4 h-4 mr-1" />
              {lang === "en" ? "AR" : "EN"}
            </Toggle>
            <button
  className="w-full px-6 py-2 rounded-[2em] bg-mint text-black font-bold shadow transition hover:bg-mint-dark"
>
  اشتري من سارة
</button>
          </div>
        </DrawerContent>
      </Drawer>
    </motion.header>
  );
};

export default Topbar; 