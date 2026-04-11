import AdvantagesSection from "./components/AdvantagesSection";
import AudienceSection from "./components/AudienceSection";
import ContactSection from "./components/ContactSection";
import EquipmentSection from "./components/EquipmentSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "КВАРЦМЕТ",
  url: "https://kvartsmet.ru",
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
    "Металлообработка и изготовление деталей по чертежам, образцам и фото для производственных компаний по всей России.",
  makesOffer: [
    "Токарные работы",
    "Фрезерные работы",
    "Сварочные и сборочные работы",
    "Изготовление деталей по чертежам",
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <Hero />
      <main className="bg-[#0C1529] text-white">
        <AudienceSection />
        <ServicesSection />
        <ProcessSection />
        <AdvantagesSection />
        <EquipmentSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
