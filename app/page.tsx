import AdvantagesSection from "./components/AdvantagesSection";
import AudienceSection from "./components/AudienceSection";
import CertificateSection from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";
import EquipmentSection from "./components/EquipmentSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import SeoTextSection from "./components/SeoTextSection";
import ServicesSection from "./components/ServicesSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "КВАРЦМЕТ",
  url: "https://kvartsmet.ru",
  foundingDate: "2000",
  telephone: "+7 (48532) 5-41-87",
  email: "info@quartzmet.ru",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Углич",
    streetAddress: "Рыбинское ш., 20Б",
    addressCountry: "RU",
  },
  areaServed: "Россия",
  description:
    "Металлообработка на заказ и изготовление деталей по чертежам, образцам и фото для производственных компаний по всей России.",
  makesOffer: [
    "Токарные работы",
    "Фрезерные работы",
    "Сварочные и сборочные работы",
    "Шлифовальные работы",
    "Термическая обработка",
    "Изготовление нестандартного оборудования",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какие данные нужны для расчёта заказа?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для расчёта подойдут чертёж, эскиз, фото детали, образец или техническое описание.",
      },
    },
    {
      "@type": "Question",
      name: "Берёте ли вы мелкосерийные и серийные партии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, КВАРЦМЕТ работает с мелкосерийным и серийным производством.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли заказать изготовление по образцу или фото?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, можно прислать фото, образец или техническое описание задачи для предварительного расчёта.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <Header />
      <Hero />
      <main className="bg-[#0C1529] text-white">
        <AudienceSection />
        <ServicesSection />
        <ProcessSection />
        <AdvantagesSection />
        <CertificateSection />
        <EquipmentSection />
        <GallerySection />
        <FaqSection />
        <SeoTextSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
