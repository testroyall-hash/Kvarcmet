import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";

export const metadata: Metadata = {
  title: "Услуги металлообработки | КВАРЦМЕТ",
  description:
    "Токарные, фрезерные, сварочные, шлифовальные, термические и сборочные работы, а также изготовление нестандартного оборудования на заказ.",
  alternates: {
    canonical: "/uslugi",
  },
  openGraph: {
    title: "Услуги металлообработки | КВАРЦМЕТ",
    description:
      "Услуги КВАРЦМЕТ: металлообработка на заказ, изготовление деталей и оборудования по чертежам, образцам и фото.",
    url: "https://kvartsmet.ru/uslugi",
    siteName: "КВАРЦМЕТ",
    locale: "ru_RU",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C1529] pt-28 text-white sm:pt-32">
        <section className="border-b border-white/10 bg-[linear-gradient(135deg,#0F1C33_0%,#1B2940_58%,#163527_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9FE8BE]">Услуги КВАРЦМЕТ</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Металлообработка и изготовление оборудования на заказ
            </h1>
            <p className="mt-6 text-[19px] leading-8 text-[#A5BFDB]">
              Выполняем токарные, фрезерные, сварочные, шлифовальные, слесарно-сборочные и термические работы,
              а также производим нестандартное оборудование для промышленных предприятий.
            </p>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
