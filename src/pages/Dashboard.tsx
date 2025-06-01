import React, { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight, Home, Settings, Layout, Image, Type, Save, LogOut, Menu, X, Edit, Trash2, Plus, Eye, FileText, Users, MessageSquare, Moon, Sun } from "lucide-react";

const Dashboard = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [lang, setLang] = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  // بيانات الأقسام المختلفة
  const [sections, setSections] = useState({
    hero: {
      title: lang === "ar" ? "الصفحة الرئيسية" : "Home",
      badge: lang === "ar" ? "تقنية الويب" : "Web Technology",
      description: lang === "ar" ? "نحن نقدم حلول ويب مبتكرة" : "We provide innovative web solutions",
      image: "/lovable-uploads/af0bb2cb-5eec-47b9-8b7e-5bb148803c00.png",
      buttonText: lang === "ar" ? "تحدث معنا" : "Talk to us"
    },
    about: {
      title: lang === "ar" ? "من نحن" : "About Us",
      description: lang === "ar" ? "شركة متخصصة في تطوير الويب" : "A company specialized in web development",
      image: "/lovable-uploads/26866a74-9396-4d39-82bc-fbac2434c3c8.png"
    },
    services: {
      title: lang === "ar" ? "خدماتنا" : "Our Services",
      description: lang === "ar" ? "نقدم مجموعة متنوعة من الخدمات" : "We offer a variety of services",
      items: [
        {
          title: lang === "ar" ? "تطوير الويب" : "Web Development",
          description: lang === "ar" ? "تطوير مواقع ويب متطورة" : "Developing advanced websites",
          image: "/lovable-uploads/website.jpg"
        },
        {
          title: lang === "ar" ? "روبوتات الدردشة" : "Chatbots",
          description: lang === "ar" ? "روبوتات دردشة ذكية" : "Smart chatbots",
          image: "/lovable-uploads/a-smiling-girl-robot-with-mint-green-and-black-sui (2).png"
        },
        {
          title: lang === "ar" ? "المساعد الصوتي" : "Voice Assistant",
          description: lang === "ar" ? "مساعدات صوتية ذكية" : "Smart voice assistants",
          image: "/lovable-uploads/a-customer-service-happy-girl-robot-in-black-and-m.jpg"
        },
        {
          title: lang === "ar" ? "حلول ذكية" : "Smart Solutions",
          description: lang === "ar" ? "حلول تقنية ذكية" : "Smart technical solutions",
          image: "/lovable-uploads/smart solutiaons.png"
        }
      ]
    },
    assistant: {
      title: lang === "ar" ? "المساعد" : "Assistant",
      description: lang === "ar" ? "مساعدنا الذكي جاهز لمساعدتك" : "Our smart assistant is ready to help you",
      image: "/lovable-uploads/26866a74-9396-4d39-82bc-fbac2434c3c8.png"
    },
    contact: {
      title: lang === "ar" ? "اتصل بنا" : "Contact Us",
      description: lang === "ar" ? "تواصل معنا للاستفسارات" : "Contact us for inquiries",
      email: "info@roboweb.com",
      phone: "+123456789",
      address: lang === "ar" ? "شارع الرياض، المملكة العربية السعودية" : "Riyadh Street, Saudi Arabia"
    },
    footer: {
      copyright: lang === "ar" ? "جميع الحقوق محفوظة © 2023" : "All rights reserved © 2023",
      links: [
        { title: lang === "ar" ? "الشروط والأحكام" : "Terms and Conditions", url: "#" },
        { title: lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy", url: "#" },
        { title: lang === "ar" ? "الدعم" : "Support", url: "#" }
      ]
    }
  });

  // تحديث البيانات عند تغيير اللغة
  useEffect(() => {
    // تحديث البيانات حسب اللغة المختارة
    setSections(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        title: lang === "ar" ? "الصفحة الرئيسية" : "Home",
        badge: lang === "ar" ? "تقنية الويب" : "Web Technology",
        description: lang === "ar" ? "نحن نقدم حلول ويب مبتكرة" : "We provide innovative web solutions",
        buttonText: lang === "ar" ? "تحدث معنا" : "Talk to us"
      },
      about: {
        ...prev.about,
        title: lang === "ar" ? "من نحن" : "About Us",
        description: lang === "ar" ? "شركة متخصصة في تطوير الويب" : "A company specialized in web development"
      },
      // تحديث باقي الأقسام بنفس الطريقة
    }));
  }, [lang]);

  // حفظ التغييرات
  const handleSave = (section, data) => {
    setSections(prev => ({
      ...prev,
      [section]: data
    }));
    toast.success(lang === "ar" ? "تم حفظ التغييرات بنجاح" : "Changes saved successfully");
    setEditMode(false);
  };

  // تغيير الصورة
  const handleImageChange = (section, imageUrl) => {
    setSections(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        image: imageUrl
      }
    }));
  };

  // إضافة عنصر جديد (مثل خدمة جديدة)
  const handleAddItem = (section) => {
    if (section === "services") {
      setSections(prev => ({
        ...prev,
        services: {
          ...prev.services,
          items: [
            ...prev.services.items,
            {
              title: lang === "ar" ? "خدمة جديدة" : "New Service",
              description: lang === "ar" ? "وصف الخدمة" : "Service description",
              image: "/lovable-uploads/placeholder.svg"
            }
          ]
        }
      }));
    }
  };

  // حذف عنصر
  const handleDeleteItem = (section, index) => {
    if (section === "services") {
      setSections(prev => ({
        ...prev,
        services: {
          ...prev.services,
          items: prev.services.items.filter((_, i) => i !== index)
        }
      }));
    }
  };

  // مكون تحرير القسم
  const SectionEditor = ({ section, data }) => {
    const [editData, setEditData] = useState(data);

    const handleChange = (field, value) => {
      setEditData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleItemChange = (index, field, value) => {
      if (section === "services") {
        const newItems = [...editData.items];
        newItems[index] = {
          ...newItems[index],
          [field]: value
        };
        setEditData(prev => ({
          ...prev,
          items: newItems
        }));
      }
    };

    return (
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>{lang === "ar" ? "العنوان" : "Title"}</Label>
            <Input 
              value={editData.title} 
              onChange={(e) => handleChange("title", e.target.value)} 
            />
          </div>
          
          {editData.description !== undefined && (
            <div className="space-y-2">
              <Label>{lang === "ar" ? "الوصف" : "Description"}</Label>
              <Textarea 
                value={editData.description} 
                onChange={(e) => handleChange("description", e.target.value)} 
              />
            </div>
          )}
          
          {editData.badge !== undefined && (
            <div className="space-y-2">
              <Label>{lang === "ar" ? "الشارة" : "Badge"}</Label>
              <Input 
                value={editData.badge} 
                onChange={(e) => handleChange("badge", e.target.value)} 
              />
            </div>
          )}
          
          {editData.buttonText !== undefined && (
            <div className="space-y-2">
              <Label>{lang === "ar" ? "نص الزر" : "Button Text"}</Label>
              <Input 
                value={editData.buttonText} 
                onChange={(e) => handleChange("buttonText", e.target.value)} 
              />
            </div>
          )}
          
          {editData.image !== undefined && (
            <div className="space-y-2">
              <Label>{lang === "ar" ? "الصورة" : "Image"}</Label>
              <div className="flex items-center gap-2">
                <Input 
                  value={editData.image} 
                  onChange={(e) => handleChange("image", e.target.value)} 
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    // هنا يمكن إضافة مربع حوار لاختيار الصورة
                    const newImage = prompt(lang === "ar" ? "أدخل رابط الصورة الجديدة" : "Enter new image URL");
                    if (newImage) handleChange("image", newImage);
                  }}
                >
                  <Image className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 border rounded-md overflow-hidden">
                <img 
                  src={editData.image} 
                  alt={editData.title} 
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = "/lovable-uploads/placeholder.svg";
                  }}
                />
              </div>
            </div>
          )}
          
          {section === "services" && editData.items && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>{lang === "ar" ? "الخدمات" : "Services"}</Label>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    const newItems = [...editData.items];
                    newItems.push({
                      title: lang === "ar" ? "خدمة جديدة" : "New Service",
                      description: lang === "ar" ? "وصف الخدمة" : "Service description",
                      image: "/lovable-uploads/placeholder.svg"
                    });
                    setEditData(prev => ({ ...prev, items: newItems }));
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  {lang === "ar" ? "إضافة خدمة" : "Add Service"}
                </Button>
              </div>
              
              {editData.items.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          const newItems = editData.items.filter((_, i) => i !== index);
                          setEditData(prev => ({ ...prev, items: newItems }));
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "العنوان" : "Title"}</Label>
                      <Input 
                        value={item.title} 
                        onChange={(e) => handleItemChange(index, "title", e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "الوصف" : "Description"}</Label>
                      <Textarea 
                        value={item.description} 
                        onChange={(e) => handleItemChange(index, "description", e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "الصورة" : "Image"}</Label>
                      <div className="flex items-center gap-2">
                        <Input 
                          value={item.image} 
                          onChange={(e) => handleItemChange(index, "image", e.target.value)} 
                        />
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => {
                            const newImage = prompt(lang === "ar" ? "أدخل رابط الصورة الجديدة" : "Enter new image URL");
                            if (newImage) handleItemChange(index, "image", newImage);
                          }}
                        >
                          <Image className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2 border rounded-md overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-32 object-cover"
                          onError={(e) => {
                            e.target.src = "/lovable-uploads/placeholder.svg";
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {section === "contact" && (
            <>
              <div className="space-y-2">
                <Label>{lang === "ar" ? "البريد الإلكتروني" : "Email"}</Label>
                <Input 
                  value={editData.email} 
                  onChange={(e) => handleChange("email", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === "ar" ? "رقم الهاتف" : "Phone"}</Label>
                <Input 
                  value={editData.phone} 
                  onChange={(e) => handleChange("phone", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === "ar" ? "العنوان" : "Address"}</Label>
                <Input 
                  value={editData.address} 
                  onChange={(e) => handleChange("address", e.target.value)} 
                />
              </div>
            </>
          )}
          
          {section === "footer" && editData.links && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>{lang === "ar" ? "الروابط" : "Links"}</Label>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    const newLinks = [...editData.links];
                    newLinks.push({
                      title: lang === "ar" ? "رابط جديد" : "New Link",
                      url: "#"
                    });
                    setEditData(prev => ({ ...prev, links: newLinks }));
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  {lang === "ar" ? "إضافة رابط" : "Add Link"}
                </Button>
              </div>
              
              {editData.links.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input 
                    value={link.title} 
                    onChange={(e) => {
                      const newLinks = [...editData.links];
                      newLinks[index] = { ...newLinks[index], title: e.target.value };
                      setEditData(prev => ({ ...prev, links: newLinks }));
                    }} 
                    placeholder={lang === "ar" ? "عنوان الرابط" : "Link title"}
                  />
                  <Input 
                    value={link.url} 
                    onChange={(e) => {
                      const newLinks = [...editData.links];
                      newLinks[index] = { ...newLinks[index], url: e.target.value };
                      setEditData(prev => ({ ...prev, links: newLinks }));
                    }} 
                    placeholder={lang === "ar" ? "رابط URL" : "URL"}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => {
                      const newLinks = editData.links.filter((_, i) => i !== index);
                      setEditData(prev => ({ ...prev, links: newLinks }));
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
              
              <div className="space-y-2">
                <Label>{lang === "ar" ? "حقوق النشر" : "Copyright"}</Label>
                <Input 
                  value={editData.copyright} 
                  onChange={(e) => handleChange("copyright", e.target.value)} 
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={() => setEditMode(false)}
          >
            {lang === "ar" ? "إلغاء" : "Cancel"}
          </Button>
          <Button 
            onClick={() => handleSave(section, editData)}
          >
            <Save className="h-4 w-4 mr-1" />
            {lang === "ar" ? "حفظ التغييرات" : "Save Changes"}
          </Button>
        </div>
      </div>
    );
  };

  // مكون عرض القسم
  const SectionViewer = ({ section, data }) => {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <Button 
            variant="outline" 
            onClick={() => setEditMode(true)}
          >
            <Edit className="h-4 w-4 mr-1" />
            {lang === "ar" ? "تعديل" : "Edit"}
          </Button>
        </div>
        
        {data.description && (
          <p className="text-muted-foreground">{data.description}</p>
        )}
        
        {data.image && (
          <div className="border rounded-md overflow-hidden">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-60 object-cover"
              onError={(e) => {
                e.target.src = "/lovable-uploads/placeholder.svg";
              }}
            />
          </div>
        )}
        
        {section === "hero" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "الشارة:" : "Badge:"}</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">{data.badge}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "نص الزر:" : "Button Text:"}</span>
              <span>{data.buttonText}</span>
            </div>
          </div>
        )}
        
        {section === "services" && data.items && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.items.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="border rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        e.target.src = "/lovable-uploads/placeholder.svg";
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {section === "contact" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "البريد الإلكتروني:" : "Email:"}</span>
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "رقم الهاتف:" : "Phone:"}</span>
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "العنوان:" : "Address:"}</span>
              <span>{data.address}</span>
            </div>
          </div>
        )}
        
        {section === "footer" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">{lang === "ar" ? "الروابط:" : "Links:"}</h3>
              <ul className="space-y-1">
                {data.links.map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>{link.title}</span>
                    <span className="text-muted-foreground text-sm">({link.url})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lang === "ar" ? "حقوق النشر:" : "Copyright:"}</span>
              <span>{data.copyright}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // قائمة الأقسام للشريط الجانبي
  const sidebarSections = [
    { id: "hero", name: lang === "ar" ? "الصفحة الرئيسية" : "Home", icon: <Home className="h-5 w-5" /> },
    { id: "about", name: lang === "ar" ? "من نحن" : "About Us", icon: <Users className="h-5 w-5" /> },
    { id: "services", name: lang === "ar" ? "خدماتنا" : "Our Services", icon: <Layout className="h-5 w-5" /> },
    { id: "assistant", name: lang === "ar" ? "المساعد" : "Assistant", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "contact", name: lang === "ar" ? "اتصل بنا" : "Contact Us", icon: <FileText className="h-5 w-5" /> },
    { id: "footer", name: lang === "ar" ? "تذييل الصفحة" : "Footer", icon: <Layout className="h-5 w-5" /> },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-black text-white" : "bg-white text-black"}`}>
      {/* الشريط العلوي */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 md:px-6">
          <div className="flex items-center mr-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold tracking-wider ml-2">
              ROBO<span className="text-mint-dark">WEB</span>
            </h1>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">{lang === "ar" ? "العربية" : "English"}</span>
              <Switch 
                checked={lang === "en"}
                onCheckedChange={(checked) => setLang(checked ? "en" : "ar")}
                lang={lang}
              />
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Switch 
                checked={isDark}
                onCheckedChange={setIsDark}
              />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/lovable-uploads/robot1-DLBxN0gl.png" alt="Avatar" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{lang === "ar" ? "حسابي" : "My Account"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  {lang === "ar" ? "الإعدادات" : "Settings"}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  {lang === "ar" ? "تسجيل الخروج" : "Logout"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* الشريط الجانبي للجوال */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <SheetHeader>
            <SheetTitle>{lang === "ar" ? "لوحة التحكم" : "Dashboard"}</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <nav className="flex flex-col gap-2">
              {sidebarSections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {section.icon}
                  <span className="ml-2">{section.name}</span>
                </Button>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* المحتوى الرئيسي */}
      <div className="flex">
        {/* الشريط الجانبي للشاشات الكبيرة */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-background pt-16 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:sticky md:translate-x-0 ${isSidebarOpen ? "w-64" : "w-0 md:w-16"}`}
        >
          <ScrollArea className="flex-1 py-4">
            <nav className="flex flex-col gap-2 px-2">
              {sidebarSections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className={`justify-start ${!isSidebarOpen && "md:justify-center"}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.icon}
                  {isSidebarOpen && <span className="ml-2">{section.name}</span>}
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* المحتوى الرئيسي */}
        <main className={`flex-1 pt-16 px-4 md:px-6 ${isSidebarOpen ? "md:ml-64" : "md:ml-16"}`}>
          <div className="mx-auto max-w-4xl py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                {sidebarSections.find(s => s.id === activeSection)?.name}
              </h1>
              <Button 
                variant="outline" 
                onClick={() => window.open("/", "_blank")}
              >
                <Eye className="h-4 w-4 mr-1" />
                {lang === "ar" ? "معاينة الموقع" : "Preview Site"}
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                {editMode ? (
                  <SectionEditor 
                    section={activeSection} 
                    data={sections[activeSection]} 
                  />
                ) : (
                  <SectionViewer 
                    section={activeSection} 
                    data={sections[activeSection]} 
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;