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
  phone_primary: "+20 01060060771",
  phone_alt: "01289867071",
  linkedin: "https://www.linkedin.com/in/wael-shaheen18",
  whatsapp_link: "https://wa.me/201060060771",
  cv_file: "/CV.pdf",
  profile: "/Yellow and Black Simple Professional LinkedIn Profile Picture-artguru.png",
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
  certificates: [
    { en: "Professional Financial Accountant (P.F.A)", ar: "محاسب مهني مالي (P.F.A)", img: "/certificates/Professional Financial Accountant (P.F.A).jpg" },
    { en: "Cost Accounting — EAAC Center", ar: "محاسبة التكاليف — مركز EAAC", img: "/certificates/Cost Accounting.jpg" },
    { en: "Financial Models Using Excel — almentor (09-03-2024)", ar: "النماذج المالية باستخدام إكسل — المنتر (09-03-2024)", img: "/certificates/Financial Models Using Excel.jpg" },
    { en: "Experience Letter — Waleed Abdhafez Accounting Office", ar: "خطاب خبرة — مكتب وليد عبد الحافظ للمحاسبة", img: "/certificates/Waleed Abdhafez Accounting Office.jpg" },
    { en: "Experience Certificate — Dr. Mohamed Feteha Accounting Office", ar: "شهادة خبرة — مكتب د/ محمد فتحه للمحاسبة", img: "/certificates/Dr. Mohamed Feteha Accounting Office.jpg" },
    { en: "Technical Training Script — New Haven Academy (20-03-2023)", ar: "Technical Training Script — New Haven Academy (20-03-2023)", img: "/certificates/Technical Training Script.jpg" },
  ],
  experience: [
    {
      role_en: "General Accountant",
      role_ar: "محاسب عام",
      company_en: "Nutopia for Food & Beverage LLC",
      company_ar: "Nutopia for Food & Beverage LLC",
      period_en: "05/2023 – Present",
      period_ar: "05/2023 – الآن",
      bullets_en: [
        "Prepare detailed financial reports, analyze variances, and provide actionable insights to senior management.",
        "Maintain and update the general ledger per accounting principles.",
        "Perform monthly/quarterly reconciliations for bank accounts, credit cards, and statements; resolve discrepancies.",
        "Assist in month-end & year-end closings ensuring timely and accurate reporting.",
        "Prepare and file taxes in compliance with local regulations.",
        "Manage Accounts Payable & Receivable to ensure on-time processing and reconciliation.",
        "Assist in internal and external audits with required documentation and explanations."
      ],
      bullets_ar: [
        "إعداد تقارير مالية تفصيلية وتحليل الانحرافات وتقديم رؤى قابلة للتنفيذ للإدارة العليا.",
        "المحافظة على تحديث دفتر الأستاذ العام وفق المبادئ المحاسبية.",
        "إجراء التسويات الشهرية/الربع سنوية للحسابات البنكية وبطاقات الائتمان وكشوف الحساب وحل الفروقات.",
        "المساعدة في إغلاقات نهاية الشهر/السنة مع ضمان الدقة والالتزام بالمواعيد.",
        "إعداد وتقديم الإقرارات الضريبية وفق القوانين المحلية.",
        "إدارة حسابات الدائنين والمدينين لضمان المعالجة في الوقت المناسب والتسوية.",
        "المساعدة في المراجعات الداخلية والخارجية بالمستندات اللازمة والتوضيحات."
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
        "Reviewed daily financial documents and transferred them to the American journal with correct classification.",
        "Assisted in preparation/review of subsidiary ledger and trial balance.",
        "Recorded sales, purchases, customer collections, and supplier payments accurately.",
        "Supported account reconciliation processes and addressed discrepancies."
      ],
      bullets_ar: [
        "مراجعة المستندات اليومية وتحويلها بدقة إلى اليومية الأمريكية مع التصنيف الصحيح.",
        "المساعدة في إعداد ومراجعة الدفاتر المساعدة وميزان المراجعة.",
        "تسجيل المبيعات والمشتريات وتحصيلات العملاء ومدفوعات الموردين بدقة.",
        "دعم عمليات تسوية الحسابات ومعالجة الفروقات."
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
        "Learned financial accounting fundamentals and practical applications.",
        "Developed understanding of financial statements and their analysis.",
        "Reviewed operational cycles and verified documents vs American Journal entries."
      ],
      bullets_ar: [
        "تعلم أساسيات المحاسبة المالية وتطبيقاتها العملية.",
        "تطوير فهم القوائم المالية وتحليلها.",
        "مراجعة الدورات التشغيلية والتحقق من تطابق المستندات مع القيود في اليومية الأمريكية."
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
    "QuickBooks"
  ],
  skills_tech_ar: [
    "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
    "Excel متقدم",
    "أنظمة ERP",
    "QuickBooks"
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
            {lang === "en" ? "Wael Shaheen" : "وائل شاهين"}
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
              <span>🪪 {lang === "en" ? CV.nationality_en : CV.nationality_ar}</span>
              <span>❤️ {lang === "en" ? CV.marital_en : CV.marital_ar}</span>
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
                <p className="text-sm text-gray-600 mt-1">{lang === "en" ? job.company_en : job.company_ar}</p>
                <ul className={`list-disc ${isRTL ? "ml-0 mr-6" : "ml-6"} mt-3 space-y-1 text-sm text-gray-700`}>
                  {(lang === "en" ? job.bullets_en : job.bullets_ar).map((b, idx) => <li key={idx}>{b}</li>)}
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
            <img src={CV.certificates[active].img} alt="cert" className="w-full h-auto" />
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
