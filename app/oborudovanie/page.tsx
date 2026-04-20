import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { equipmentCategories, equipmentShowcase } from "../data/equipment";

export const metadata: Metadata = {
  title: "Оборудование и производственные возможности | КВАРЦМЕТ",
  description:
    "Парк оборудования КВАРЦМЕТ: токарные и фрезерные станки с ЧПУ и универсальные станки, шлифовка, координатно-расточные работы, сварка, заготовка и электроэрозионная резка.",
  keywords: [
    "оборудование для металлообработки",
    "парк станков",
    "токарные станки с ЧПУ",
    "фрезерные станки с ЧПУ",
    "электроэрозионная резка",
    "координатно расточные работы",
    "металлообработка Углич",
  ],
  alternates: {
    canonical: "/oborudovanie",
  },
  openGraph: {
    title: "Оборудование и производственные возможности | КВАРЦМЕТ",
    description:
      "Станочный парк и производственные возможности КВАРЦМЕТ для металлообработки на заказ: токарка, фрезеровка, шлифовка, сварка, заготовка и электроэрозия.",
    url: "https://kvartsmet.ru/oborudovanie",
    siteName: "КВАРЦМЕТ",
    locale: "ru_RU",
    type: "website",
  },
};

export default function EquipmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C1529] pt-28 text-white sm:pt-32">
        <section className="border-b border-white/10 bg-[linear-gradient(135deg,#0F1C33_0%,#1B2940_58%,#163527_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6">
            <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9FE8BE]">Парк оборудования КВАРЦМЕТ</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Оборудование и производственные возможности для металлообработки на заказ
            </h1>
            <p className="mt-6 text-[18px] leading-8 text-[#A5BFDB] sm:text-[19px]">
              Собственный станочный парк позволяет выполнять токарные, фрезерные, шлифовальные, сверлильные,
              координатно-расточные, сварочные, слесарно-заготовительные и электроэрозионные работы без лишней передачи
              заказа сторонним подрядчикам.
            </p>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#111A2D] py-14 sm:py-16">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {equipmentShowcase.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]">
                  <div className="relative min-h-[220px]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-[20px] font-extrabold text-white">{item.title}</h2>
                    <p className="mt-3 text-[14px] leading-6 text-[#B8CCE5]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6">
            <div className="grid gap-6">
              {equipmentCategories.map((category) => (
                <article key={category.slug} className="rounded-[24px] border border-white/10 bg-[#142036] px-5 py-6 shadow-[0_22px_48px_rgba(0,0,0,0.14)] sm:px-7 sm:py-7">
                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.05fr_1.25fr] lg:gap-8">
                    {category.image ? (
                      <div className="relative min-h-[260px] overflow-hidden rounded-[20px]">
                        <Image src={category.image} alt={category.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 28vw" />
                      </div>
                    ) : (
                      <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-6">
                        <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-white">{category.title}</h2>
                        <p className="mt-4 text-[16px] leading-7 text-[#A7BFDB]">{category.summary}</p>
                      </div>
                    )}

                    <div>
                      {category.image ? <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-white">{category.title}</h2> : null}
                      {category.image ? <p className="mt-4 text-[16px] leading-7 text-[#A7BFDB]">{category.summary}</p> : null}
                      <p className="mt-4 text-[15px] leading-7 text-[#4ADE80]">{category.productionValue}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {category.stats.map((stat) => (
                          <span key={stat} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] text-[#D7E4F4]">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {category.groups.map((group) => (
                        <div key={group.title} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
                          <h3 className="text-[18px] font-bold text-white">{group.title}</h3>
                          <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#A9C1DD]">
                            {group.models.map((model) => (
                              <li key={model}>{model}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
