import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/** ====== CV DATA (extracted exactly from your PDF) ====== */
const CV = {
  name_en: "Wael Ahmed Mohamed Shaheen",
  name_ar: "وائل أحمد محمد شاهين",
  title_en: "General Accountant",
  title_ar: "محاسب عام",
  location_en: "Alexandria, Egypt",
  location_ar: "الإسكندرية، مصر",
  dob: "18/03/1999",
  nationality_en: "Egyptian",
  nationality_ar: "مصري",
  marital_en: "Single",
  marital_ar: "أعزب",
  military_en: "Military Service: Completed",
  military_ar: "الخدمة العسكرية: مُكتملة",
  email: "acc.waelahmedshaheen@gmail.com",
  phone_primary: "+966 572861683",
  linkedin: "https://www.linkedin.com/in/wael-shaheen18",
  whatsapp_link: "https://wa.me/966572861683",
  cv_file: "/CV.pdf",
  profile: "/profile.png",
  objective_en:
    "Detail-oriented and highly skilled General Accountant with 3 years of experience in managing financial records, preparing reports, reconciling accounts, and ensuring compliance with accounting standards. Proven track record in improving financial processes, reducing discrepancies, and providing actionable insights for decision-making. Strong proficiency in accounting software and advanced Excel functions. Seeking to leverage expertise to contribute to the financial health of a dynamic organization.",
  objective_ar:
    "محاسب عام دقيق وذو مهارات عالية مع 3 سنوات خبرة في إدارة السجلات المالية، إعداد التقارير، تسويات الحسابات، وضمان الالتزام بالمعايير المحاسبية. لدي سجل مثبت في تحسين العمليات المالية وتقليل الفروقات وتقديم رؤى قابلة للتنفيذ لدعم اتخاذ القرار. متمكن من برامج المحاسبة ووظائف الإكسل المتقدمة، وأسعى لتوظيف خبرتي لدعم الصحة المالية لمؤسسة ديناميكية.",
  education: [
    {
      en: "Alexandria University, Faculty of Commerce — BSc of Accounting (Grade: Very Good) — 2021",
      ar: "جامعة الإسكندرية، كلية التجارة — بكالوريوس محاسبة (التقدير: جيد جدًا) — 2021",
    },
  ],
extra_certs: [
  {
    en: "Professional Financial Accountant (P.F.A)",
    ar: "محاسب مهني مالي (P.F.A)"
  },
  {
    en: "Cost Accounting — EAAC Center",
    ar: "محاسبة التكاليف — مركز EAAC"
  }
],

  certificates: [
    { en: "Professional Financial Accountant (P.F.A)", ar: "محاسب مهني مالي (P.F.A)", img: "/certificates/professional-financial-accountant.jpg" },
    { en: "Cost Accounting — EAAC Center", ar: "محاسبة التكاليف — مركز EAAC", img: "/certificates/cost-accounting.jpg" },
    { en: "Financial Models Using Excel — almentor ", ar: "النماذج المالية باستخدام إكسل — المنتور ", img: "/certificates/financial-models-using-excel.jpg" },
    { en: "Experience Letter — Waleed Abdhafez Accounting Office", ar: "خطاب خبرة — مكتب وليد عبد الحافظ للمحاسبة", img: "/certificates/waleed-abdhafez.jpg" },
    { en: "Experience Certificate — Dr. Mohamed Feteha Accounting Office", ar: "شهادة خبرة — مكتب د/ محمد فتحه للمحاسبة", img: "/certificates/dr-mohamed-feteha.jpg" },
    { en: "Technical Training Script — Professional Financial Accountant ", ar: "Technical Training Script — Professional Financial Accountant ", img: "/certificates/technical-training-script.jpg" },
  ],
  experience: [
    {
      role_en: "General Accountant",
      role_ar: "محاسب عام",
      company_en: "Nutopia for Food & Beverage LLC ",
      company_ar: "Nutopia for Food & Beverage LLC ",
      company_link: "https://www.nutopiaegypt.com/en",
      period_en: "05/2023 – Present",
      period_ar: "05/2023 – الآن",
      bullets_en: [
        "Financial Reporting & Analysis :Prepare detailed financial reports, analyze variances, and provideactionable insights to senior management for improved decision-making.",
        "General Ledger Management: Maintain and update the general ledger, ensuring accurate recording of all financial transactions in accordance with accounting principles.",
        "Account Reconciliation: Perform monthly and quarterly reconciliations for bank accounts, and other financial statements, resolving discrepancies promptly.",
        "Month-End & Year-End Closures: Assist in the preparation and completion of month-end and year-end closings, ensuring timely and accurate reporting for financial statements.",
        "Tax Preparation & Filing: Prepare and file tax returns in compliance with local regulations, ensuring accuracy and timely submission.",
        "Accounts Payable & Receivable: Manage and process accounts payable and receivable, ensuring that all invoices are paid/received on time and reconciled appropriately.",
        "Financial Audits: Assist in internal and external audits, providing necessary documents, supporting data,and explanations to ensure compliance and transparency."
      ],
      bullets_ar: [
        "إعداد التقارير والتحليل المالي: إعداد تقارير مالية تفصيلية، وتحليل الفروقات، وتقديم رؤى قابلة للتنفيذ للإدارة العليا لدعم اتخاذ قرارات أكثر فاعلية.",
        "إدارة الدفاتر المحاسبية: الحفاظ على تحديث دفتر الأستاذ العام وضمان تسجيل جميع المعاملات المالية بدقة وفقًا للمبادئ المحاسبيةوالمعايير.",
        "تسويات الحسابات: إجراء التسويات الشهرية والربع سنوية للحسابات البنكية  وكافة البيانات المالية، ومعالجة الفروقات بشكل فوري.",
        "الإغلاقات المالية الشهرية والسنوية: المساهمة في إعداد وإنهاء الإغلاقات الشهرية والسنوية وضمان دقة وسرعة التقارير المالية.",
        "إعداد وتقديم الإقرارات الضريبية: إعداد الإقرارات الضريبية وتقديمها وفقًا للوائح المحلية، مع ضمان الدقة والالتزام بالمواعيد المحددة.",
        "الحسابات العملاء والموردين: إدارة ومعالجة الحسابات العملاء والموردين وضمان سداد الفواتير وتحصيل المستحقات في مواعيدها وتسويتها بالشكل المناسب.",
        "المراجعات المالية: المساعدة في المراجعات الداخلية والخارجية من خلال توفير المستندات والبيانات الداعمة والتفسيرات اللازمة لضمان الالتزام والشفافية."
      ],
    },
    {
      role_en: "Junior Accountant",
      role_ar: "محاسب مبتدئ",
      company_en: "Waleed Abdhafez Accounting Office",
      company_ar: "مكتب وليد عبد الحافظ للمحاسبة",
      period_en: "03/2021 – 01/2023",
      period_ar: "03/2021 – 01/2023",
      bullets_en: [
        "Document Review & Entry Transfer: Reviewed daily financial documents and accurately transferred them to the American journal, ensuring correct classification and timely posting.",
        "Ledger & Trial Balance Preparation: Assisted in the preparation and review of the assistant ledger and trial balance, ensuring accuracy and completeness of financial data.",
        "Transaction Recording: Recorded sales, purchases, customer collections, and payments to suppliers, maintaining accurate and up-to-date financial records.",
        "Account Reconciliation: Supported account reconciliation processes, ensuring all entries matched bank statements and other records, addressing discrepancies as needed."
      ],
      bullets_ar: [
        "مراجعة المستندات اليومية وإثبات القيود: مراجعة المستندات المالية اليومية بدقة، وإثباتها في اليومية الأمريكية مع ضمان التصنيف الصحيح والتسجيل .",
        "إعداد ومراجعة دفتر الأستاذ وميزان المراجعة: المساعدة في إعداد ومراجعة دفاتر الأستاذ المساعدة وميزان المراجعة، مع ضمان دقة واكتمال البيانات المالية.",
        "تسجيل العمليات المالية: تسجيل المبيعات والمشتريات وتحصيلات العملاء ومدفوعات الموردين بدقة، والحفاظ على سجلات مالية محدثة بشكل مستمر.",
        "تسويات الحسابات: دعم عمليات تسوية الحسابات، وضمان مطابقة جميع القيود مع كشوف الحسابات البنكية والسجلات الأخرى، ومعالجة الفروقات عند ظهورها."
      ],
    },
    {
      role_en: "Trainee Accountant",
      role_ar: "متدرب محاسبة",
      company_en: "Dr. Mohamed Feteha Accounting Office",
      company_ar: "مكتب د/ محمد فتحه للمحاسبة",
      period_en: "09/2020 – 12/2020",
      period_ar: "09/2020 – 12/2020",
      bullets_en: [
        "Financial Accounting Fundamentals: Gained in-depth knowledge of the basics of financial accounting,focusing on key principles and their practical applications.",
        "Financial Statement Analysis: Developed a strong understanding of financial statements, including the interpretation of balance sheets, and income statements, along with their complementary explanations.",
        "Documentary Review & Verification: Assisted in reviewing operational cycles and ensuring that actual documents matched entries in the American Journal, ensuring accuracy and compliance with accounting standards."
      ],
      bullets_ar: [
        "أساسيات المحاسبة المالية: اكتساب معرفة معمقة بأساسيات المحاسبة المالية، مع التركيز على المبادئ الرئيسية وتطبيقاتها العملية.",
        "تتحليل القوائم المالية: تطوير فهم قوي للقوائم المالية، بما في ذلك تحليل الميزانية العمومية وقائمة الدخل مع التفسيرات المكملة لها.",
        "مراجعة وتدقيق المستندات: المساهمة في مراجعة الدورات التشغيلية والتأكد من مطابقة المستندات الفعلية للقيود المسجلة في اليومية الأمريكية، لضمان الدقة والالتزام بالمعايير المحاسبية."
      ],
    },
  ],
  skills_soft_en: [
    "Data Analysis & Reporting",
    "Teamwork & Independence",
    "Continuous Learning & Professional Development"
  ],
  skills_soft_ar: [
    "تحليل البيانات وإعداد التقارير",
    "العمل ضمن فريق أو بشكل مستقل",
    "شغف بالتعلم والتطوير المهني"
  ],
skills_tech_en: [
  "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
  "Advanced Excel",
  "ERP Systems",
  "QuickBooks",
  "Data Analysis Specialist"
],
skills_tech_ar: [
  "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
  "Excel متقدم",
  "أنظمة ERP",
  "QuickBooks",
  "أخصائي تحليل البيانات"
],

  languages: [
    { en: "Arabic — Native", ar: "العربية — لغة أم" },
    { en: "English — Good", ar: "الإنجليزية — جيد" },
  ],
};

/** ====== UI helpers ====== */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
});

const SectionTitle = ({ children, lang }) => (
  <motion.h2
    {...fadeUp()}
    className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-8 ${lang === "ar" ? "text-right" : "text-left"}`}
  >
    {children}
  </motion.h2>
);

/** ====== Main Component ====== */
export default function WaelPortfolio() {
function ThankYouPopup({ lang }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-[80] max-w-sm p-5 rounded-2xl shadow-xl border bg-white"
    >
      <div className="flex items-start gap-3 relative">
        <span className="text-2xl">🎉</span>
        <div className="flex-1">
          <p className="font-semibold text-gray-800">
            {lang === "en"
              ? "Thanks for browsing my profile!"
              : "شكرًا لتصفحك بروفايلي!"}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {lang === "en"
              ? "Feel free to contact me through:"
              : "يسعدني تواصلك من خلال:"}
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://wa.me/966572861683"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-green-500 text-white text-sm hover:bg-green-600"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/wael-shaheen18"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* زرار إغلاق */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ❌
        </button>
      </div>
    </motion.div>
  );
}

  const [lang, setLang] = useState("en");
  const isRTL = lang === "ar";

  const ui = useMemo(
    () => ({
      nav: {
        about: lang === "en" ? "About" : "نبذة",
        experience: lang === "en" ? "Experience" : "الخبرات",
        education: lang === "en" ? "Education" : "التعليم",
        skills: lang === "en" ? "Skills" : "المهارات",
        certificates: lang === "en" ? "Certificates" : "الشهادات",
        contact: lang === "en" ? "Contact" : "تواصل",
        download: lang === "en" ? "Download CV" : "تحميل السيرة",
        switch: lang === "en" ? "العربية" : "English",
      },
      labels: {
        objective: lang === "en" ? "Objective" : "الهدف الوظيفي",
        softSkills: lang === "en" ? "Soft Skills" : "مهارات شخصية",
        techSkills: lang === "en" ? "Technical Skills" : "مهارات تقنية",
        nationality: lang === "en" ? "Nationality" : "الجنسية",
        marital: lang === "en" ? "Marital Status" : "الحالة الاجتماعية",
        military: lang === "en" ? "Military" : "الخدمة العسكرية",
      },
    }),
    [lang]
  );

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* ===== Sticky Nav ===== */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            {lang === "en" ? "Wael Ahmed" : "وائل أحمد"}
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Education", "#education"],
              ["Skills", "#skills"],
              ["Certificates", "#certificates"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="px-3 py-1.5 rounded-2xl hover:bg-slate-100">
                {ui.nav[label.toLowerCase()]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={CV.cv_file}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:bg-slate-100"
              download
            >
              {ui.nav.download}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:bg-slate-100"
            >
              {ui.nav.switch}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="relative min-h-[78vh] flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16">
          <motion.div {...fadeUp()} className={`relative ${isRTL ? "md:order-2" : ""}`}>
            <div className="aspect-[5/6] w-full overflow-hidden rounded-3xl border bg-white shadow-sm">
              <img src={CV.profile} alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {lang === "en" ? CV.name_en : CV.name_ar}
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-600">{lang === "en" ? CV.title_en : CV.title_ar}</p>
            <div className={`mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600 ${isRTL ? "justify-end" : ""}`}>
              <span>📍 {lang === "en" ? CV.location_en : CV.location_ar}</span>
              <span>🎂 {CV.dob}</span>
              <span>🌍 {lang === "en" ? CV.nationality_en : CV.nationality_ar}</span>
              <span>👤 {lang === "en" ? CV.marital_en : CV.marital_ar}</span>
              <span>🎖️ {lang === "en" ? CV.military_en : CV.military_ar}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-slate-100">LinkedIn</a>
              <a href={`mailto:${CV.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-slate-100">Email</a>
              <a href={CV.whatsapp_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-slate-100">WhatsApp</a>
              <a href={CV.cv_file} download className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-slate-100">{ui.nav.download}</a>
            </div>
          </motion.div>
        </div>

        {/* subtle gradient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>
      </section>

      {/* ===== Objective ===== */}
      <section id="about" className="px-6 py-16">
        <SectionTitle lang={lang}>{ui.labels.objective}</SectionTitle>
        <motion.p {...fadeUp(0.1)} className={`max-w-4xl mx-auto text-gray-700 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
          {lang === "en" ? CV.objective_en : CV.objective_ar}
        </motion.p>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience" className="px-6 py-16 bg-slate-50">
        <SectionTitle lang={lang}>{ui.nav.experience}</SectionTitle>
        <div className="max-w-5xl mx-auto relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
          {CV.experience.map((job, i) => (
            <motion.div key={i} {...fadeUp(0.05 * i)} className={`relative pl-12 py-6 ${isRTL ? "text-right" : ""}`}>
              <div className="absolute left-3 top-9 h-3 w-3 rounded-full bg-indigo-500" />
              <div className="rounded-2xl bg-white border p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{lang === "en" ? job.role_en : job.role_ar}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-slate-100">{lang === "en" ? job.period_en : job.period_ar}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
  <span>{lang === "en" ? job.company_en : job.company_ar}</span>
  {job.company_link && (
    <a
      href={job.company_link}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 hover:underline"
                       >
                     🔗
                  </a>
                    )}
                 </p>
                <ul className={`list-disc ${isRTL ? "ml-0 mr-6" : "ml-6"} mt-3 space-y-1 text-sm text-gray-700`}>
                  {(lang === "en" ? job.bullets_en : job.bullets_ar).map((b, idx) => {
                  const [head, ...rest] = b.split(":");   // نقسم النص عند أول :
                   return (
                <li key={idx}>
               <strong>{head}:</strong> {rest.join(":")}
                   </li>
                      );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Education ===== */}
      <section id="education" className="px-6 py-16">
        <SectionTitle lang={lang}>{ui.nav.education}</SectionTitle>
        <div className="max-w-5xl mx-auto grid gap-6">
          {CV.education.map((e, i) => (
            <motion.div key={i} {...fadeUp(0.04 * i)} className="rounded-2xl border p-5 bg-white shadow-sm">
              <p className={`text-gray-700 ${isRTL ? "text-right" : "text-left"}`}>{lang === "en" ? e.en : e.ar}</p>
            </motion.div>
          ))}
        </div>
      </section>

{/* ===== Extra Certificates ===== */}
<section id="extra-certs" className="px-6 py-16 bg-white">
  <SectionTitle lang={lang}>
    {lang === "en" ? "Special Certificates" : "شهادات إضافية"}
  </SectionTitle>
  <div className="max-w-5xl mx-auto grid gap-6">
    {CV.extra_certs.map((c, i) => (
      <motion.div
        key={i}
        {...fadeUp(0.04 * i)}
        className="rounded-2xl border p-5 bg-white shadow-sm"
      >
        <p className={`text-gray-700 ${isRTL ? "text-right" : "text-left"}`}>
          {lang === "en" ? c.en : c.ar}
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* ===== Skills ===== */}
      <section id="skills" className="px-6 py-16 bg-white">
        <SectionTitle lang={lang}>{ui.nav.skills}</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`font-semibold mb-3 ${isRTL ? "text-right" : "text-left"}`}>{ui.labels.softSkills}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(lang === "en" ? CV.skills_soft_en : CV.skills_soft_ar).map((s, i) => (
                <motion.div key={i} {...fadeUp(0.03 * i)} className="p-4 rounded-xl border bg-slate-50 hover:bg-slate-100 transition">{s}</motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`font-semibold mb-3 ${isRTL ? "text-right" : "text-left"}`}>{ui.labels.techSkills}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(lang === "en" ? CV.skills_tech_en : CV.skills_tech_ar).map((s, i) => (
                <motion.div key={i} {...fadeUp(0.03 * i)} className="p-4 rounded-xl border bg-slate-50 hover:bg-slate-100 transition">{s}</motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Certificates Gallery (with animations) ===== */}
      <CertificatesSection lang={lang} isRTL={isRTL} />
      
      {/* ===== Contact ===== */}
      <section id="contact" className="px-6 py-16 bg-white">
        <SectionTitle lang={lang}>{ui.nav.contact}</SectionTitle>
        <div className={`max-w-5xl mx-auto flex flex-wrap gap-3 ${isRTL ? "justify-end" : ""}`}>
          <a href={`mailto:${CV.email}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-100">📧 {CV.email}</a>
          <a href={CV.whatsapp_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-100">📱 {CV.phone_primary}</a>
          <span className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm bg-slate-50">☎️ {CV.phone_alt}</span>
          <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-100">🔗 LinkedIn</a>
          <a href={CV.cv_file} download className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-100">⬇️ {ui.nav.download}</a>
        </div>
      </section>
      {/* هنا البوب أب */}
      <ThankYouPopup lang={lang} />
    </div>
  );
}

/** ====== Certificates sub-component with Lightbox & Animations ====== */
function CertificatesSection({ lang, isRTL }) {
  const [active, setActive] = useState(null); // index | null

  return (
    <section id="certificates" className="px-6 py-16 bg-slate-50">
      <SectionTitle lang={lang}>{lang === "en" ? "Certificates Gallery" : "معرض الشهادات"}</SectionTitle>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CV.certificates.map((c, i) => (
          <motion.button
            key={c.img}
            {...fadeUp(0.04 * i)}
            onClick={() => setActive(i)}
            className="group block overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <motion.img
              src={c.img}
              alt={lang === "en" ? c.en : c.ar}
              className="h-56 w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
            <div className={`p-3 text-sm text-gray-700 ${isRTL ? "text-right" : "text-left"}`}>
              {lang === "en" ? c.en : c.ar}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-black/70 p-4 flex items-center justify-center" onClick={() => setActive(null)}>
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
  src={CV.certificates[active].img} 
  alt="cert" 
  className="max-h-[80vh] w-auto max-w-full mx-auto object-contain" 
/>
            <div className={`p-4 text-sm text-gray-700 flex items-center justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span>{lang === "en" ? CV.certificates[active].en : CV.certificates[active].ar}</span>
              <button onClick={() => setActive(null)} className="px-3 py-1.5 rounded-xl border hover:bg-slate-100">
                {lang === "en" ? "Close" : "إغلاق"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
