import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const PortfolioPage = () => {
  const { t, language } = useApp();
  const [activeFilter, setActiveFilter] = useState(t("all"));

  useEffect(() => {
    // Scroll progress functionality
    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progressHeight + "%";
      }
    };

    // Animation on scroll for portfolio items
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".portfolio-item");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    };

    // Set initial state for animated elements
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  // مصفوفة المشاريع مع الصور الأصلية (جميع الصور المطلوبة)
  const portfolioItems = [
    // الصور السابقة (21 مشروع)
    {
      category: t("print"),
      title: language === "ar" ? "تهنئة شهر رمضان" : "Ramadan Greeting Card",
      description:
        language === "ar"
          ? "بطاقة معايدة بمناسبة حلول شهر رمضان المبارك"
          : "Greeting card for the holy month of Ramadan",
      image: "/images/portfolio/ramdan.jpg",
    },
    {
      category: t("print"),
      title: language === "ar" ? "بروشور أنس الطيب" : "Anas Al-taib Brochure",
      description:
        language === "ar"
          ? "بروشور تعريفي يوضح الخدمات والمهارات في تطوير الويب والتصميم"
          : "Informational brochure showcasing web development and design skills",
      image: "/images/portfolio/BROCH002 copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "قهوة بن قف" : "Bun Quf Coffee",
      description:
        language === "ar"
          ? "تصميم إعلاني لمقهى بن قف"
          : "Advertising design for Bun Quf coffee shop",
      image: "/images/portfolio/coffee.jpg",
    },
    {
      category: t("print"),
      title:
        language === "ar" ? "ملصق مشروب الفراولة" : "Strawberry Drink Poster",
      description:
        language === "ar"
          ? "ملصق إعلاني لمشروب طبيعي بنكهة الفراولة الخضراء - اطلب الآن"
          : "Poster for natural green strawberry drink - Order Now",
      image: "/images/portfolio/dreank poster.png",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "مجموعة نايك الجديدة" : "New Nike Collection",
      description:
        language === "ar"
          ? "إعلان عن أحدث مجموعة أحذية رياضية من نايك"
          : "Advertisement for the latest Nike sports shoes collection",
      image: "/images/portfolio/Nike .jpg",
    },
    {
      category: t("branding"),
      title:
        language === "ar"
          ? "بطاقة عمل أنس الطيب"
          : "Anas Al-taib Business Card",
      description:
        language === "ar"
          ? "تصميم بطاقة عمل احترافية لمصمم جرافيك"
          : "Professional business card design for a graphic designer",
      image: "/images/portfolio/Stack Business Card Mock-Up copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "متجر الجوكر" : "Joker Store",
      description:
        language === "ar"
          ? "إعلان متجر لبيع الألعاب وحسابات بوجي والشحن"
          : "Store advertisement selling games, PUBG accounts, and top-ups",
      image: "/images/portfolio/اعلان الجوكر copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "الموسم الجديد قادم" : "New Season Coming",
      description:
        language === "ar"
          ? "إعلان تشويقي عن قدوم الموسم الجديد مبكراً"
          : "Teaser for the new season arriving earlier",
      image: "/images/portfolio/الاعلان.jpg",
    },
    {
      category: t("print"),
      title:
        language === "ar" ? "آية من سورة الرحمن" : "Verse from Surah Ar-Rahman",
      description:
        language === "ar"
          ? "تصميم دعائي بنص قرآني (وَعِبَادُ الرَّحْمَٰنِ...)"
          : "Design featuring a Quranic verse",
      image: "/images/portfolio/السرعة.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "ساندوتش لذيذ" : "Delicious Sandwich",
      description:
        language === "ar"
          ? "إعلان لمطعم برغر وساندوتشات - اطلب الآن"
          : "Burger and sandwich restaurant advertisement - Order Now",
      image: "/images/portfolio/sandwich.jpg",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "عصير أورانجو" : "Orango Juice",
      description:
        language === "ar"
          ? "عصير برتقال طبيعي 100% - هوية منتج طازج"
          : "100% natural orange juice - Fresh product branding",
      image: "/images/portfolio/برتقالي فاتح.png",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "شوكولاتة Highland" : "Highland Chocolate",
      description:
        language === "ar"
          ? "تصميم عبوة شوكولاتة داكنة فاخرة 50 جرام"
          : "Packaging design for premium dark chocolate 50gm",
      image: "/images/portfolio/تطبيق الشكولاته copy.jpg",
    },
    {
      category: t("print"),
      title: language === "ar" ? "سقطرى الحبيبة" : "Beloved Socotra",
      description:
        language === "ar"
          ? "تصميم سياحي لجزيرة سقطرى اليمنية - اليمن سقطرى"
          : "Tourism design for Socotra Island, Yemen",
      image: "/images/portfolio/سقطرى الحبيبة copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "سيارة جيب جديدة" : "New Jeep",
      description:
        language === "ar"
          ? "إعلان سيارة جيب متاحة للطلب الجديد"
          : "New Jeep advertisement available for order",
      image: "/images/portfolio/سيارة جيب copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "تويوتا راف فور" : "Toyota RAV4",
      description:
        language === "ar"
          ? "أفضل خيار لسيارة RAV4 - تواصل معنا"
          : "The best choice for RAV4 - Contact us",
      image: "/images/portfolio/سيارة راف فور copy.jpg",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "صرافة الحزمي" : "Al-Hazmi Exchange",
      description:
        language === "ar"
          ? "خدمات الدفع الإلكتروني والتحويلات - حمل التطبيق الآن"
          : "Electronic payment and transfer services - Download the app now",
      image: "/images/portfolio/صرافة الحزمي.jpg",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "صرافة جيب" : "Pocket Exchange",
      description:
        language === "ar"
          ? "خدمة مالية في جيبك - فلوسك كأنها في جيبك"
          : "Financial service in your pocket - Your money as if in your pocket",
      image: "/images/portfolio/صرافة جيب copy.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "موعد مع القهوة" : "Coffee Time",
      description:
        language === "ar"
          ? "لقد حان الآن موعد كوب من القهوة - تصميم إعلاني"
          : "It's time for a cup of coffee - Advertising design",
      image: "/images/portfolio/موعد مع القهوة copy.jpg",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "نيولوجيا" : "Ewlogia",
      description:
        language === "ar"
          ? "خدمات برمجة تطبيقات الجوال وتجويم الأفكار إلى منتجات عالية الجودة"
          : "Mobile app development and turning ideas into high-quality products",
      image: "/images/portfolio/نيولوجيا.jpg",
    },
    {
      category: t("branding"),
      title: language === "ar" ? "عمان برودباند" : "Oman Broadband",
      description:
        language === "ar"
          ? "خدمات إنترنت عالية الجودة في سلطنة عمان"
          : "High-quality internet services in Oman",
      image: "/images/portfolio/oman.jpg",
    },
    {
      category: t("socialMedia"),
      title: language === "ar" ? "تيك مي" : "Take Me",
      description:
        language === "ar"
          ? "تطبيق طلب سيارات الأجرة - مشوارك معنا بلمسة"
          : "Taxi booking app - Your ride with us",
      image: "/images/portfolio/friday.png",
    },

    // ========== الصور الجديدة ==========
    {
      category: t("branding"),
      title:
        language === "ar" ? "شركة بي إم سي الحضار" : "BMC Hadhramaut Company",
      description:
        language === "ar"
          ? "إعلان تجاري لشركة بي إم سي الحضار للتجارة - أرز عالي الجودة"
          : "Commercial advertisement for BMC Hadhramaut Trading Company - High quality rice",
      image: "/images/portfolio/rice.jpg",
    },
    {
      category: t("socialMedia"),
      title:
        language === "ar"
          ? "تصميم إنستقرام تفاعلي"
          : "Instagram Interactive Post",
      description:
        language === "ar"
          ? "تصميم منشور إنستقرام يعرض عدد الإعجابات والتعليقات"
          : "Instagram post design showing likes and comments",
      image: "/images/portfolio/تمرين الانستقرام copy.jpg",
    },
    {
      category: t("socialMedia"),
      title:
        language === "ar"
          ? "برجر كنج - سيأخذك الطعام إلى هناك"
          : "Burger King - Food Takes You There",
      description:
        language === "ar"
          ? "إعلان لبرجر كنج بشعار سيأخذك الطعام إلى هناك"
          : 'Burger King advertisement with slogan "Food Takes You There"',
      image: "/images/portfolio/تكليف برجر كنج.jpg",
    },
  ];

  // الفئات الموجودة (بدون إضافة فئات جديدة)
  const filters = [
    t("all"),
    t("branding"),
    t("socialMedia"),
    t("print"),
    t("logos"),
  ];

  const filteredItems =
    activeFilter === t("all")
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div id="scroll-progress"></div>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">{t("portfolioTitle")}</h2>
          <p className="section-subtitle">{t("portfolioSubtitle")}</p>
        </div>
      </section>

      <section className="portfolio section-padding">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div className="portfolio-item" key={index}>
                <div className="portfolio-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="portfolio-category">{item.category}</span>
                  <a href="#" className="portfolio-link">
                    <i
                      className={`fas ${language === "ar" ? "fa-arrow-left" : "fa-arrow-right"}`}
                    ></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
