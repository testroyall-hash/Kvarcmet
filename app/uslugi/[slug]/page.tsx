import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ArrowIcon, CheckIcon, ServiceIcon } from "../../components/ServiceIcons";
import { getServiceBySlug, services } from "../../data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: PageProps<"/uslugi/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Услуга не найдена | КВАРЦМЕТ",
    };
  }

  return {
    title: `${service.title} на заказ | КВАРЦМЕТ`,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/uslugi/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | КВАРЦМЕТ`,
      description: service.seoDescription,
      url: `https://kvartsmet.ru/uslugi/${service.slug}`,
      siteName: "КВАРЦМЕТ",
      locale: "ru_RU",
      type: "website",
    },
  };
}

export default async function ServicePage(props: PageProps<"/uslugi/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C1529] text-white">
        <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#0F1C33_0%,#1B2940_55%,#163527_100%)]">
          <div className="mx-auto max-w-[1340px] px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Услуги", href: "/uslugi" },
                { label: service.title },
              ]}
            />

            <div className="mt-8 max-w-[980px]">
              <p className="text-[15px] font-semibold text-[#9CC1E5]">{service.lead}</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">{service.title} на заказ</h1>
              <p className="mt-6 max-w-[900px] text-[19px] leading-8 text-[#A2BCD9] sm:text-[20px]">{service.seoDescription}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {service.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[14px] text-[#D7E5F7]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakty#kontakty"
                  className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
                >
                  Получить расчёт
                </Link>
                <Link
                  href="/uslugi"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/12 px-6 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/35 hover:bg-white/[0.03]"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                  Все услуги
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-8">
              <div className="flex items-center gap-3 text-[#4ADE80]">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
                <h2 className="text-2xl font-extrabold text-white">Что входит в услугу</h2>
              </div>
              <p className="mt-5 text-[17px] leading-8 text-[#A5BFDB]">{service.intro}</p>
              <div className="mt-6 space-y-4">
                {service.details.map((item) => (
                  <p key={item} className="text-[16px] leading-8 text-[#8FA9CC]">
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <aside className="rounded-[18px] border border-[#246D4E] bg-[#112634] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
              <h2 className="text-2xl font-extrabold text-white">Технические возможности</h2>
              <ul className="mt-6 space-y-3">
                {service.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-[12px] bg-[#182F41] px-4 py-3 text-[15px] leading-6 text-[#D5E5F7]">
                    <span className="mt-0.5 text-[#4ADE80]">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.equipment ? (
                <>
                  <h3 className="mt-8 text-lg font-extrabold text-white">Оборудование</h3>
                  <ul className="mt-4 space-y-3 text-[15px] leading-6 text-[#A2BDD8]">
                    {service.equipment.map((item) => (
                      <li key={item} className="rounded-[12px] border border-white/10 bg-white/[0.04] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="mt-8 rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-4 text-[14px] leading-7 text-[#BBD1E8]">
                Отправьте чертёж или фото детали, и мы подготовим расчёт стоимости и сроков под ваш объём партии.
              </div>

              <Link
                href="/kontakty#kontakty"
                className="mt-6 inline-flex h-12 items-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
              >
                Обсудить заказ
              </Link>
            </aside>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-8">
              <h2 className="text-2xl font-extrabold text-white">Когда заказывают эту услугу</h2>
              <ul className="mt-6 space-y-3">
                {service.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-[#A5BFDB]">
                    <span className="mt-1 text-[#4ADE80]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-8">
              <h2 className="text-2xl font-extrabold text-white">Почему это выгодно заказчику</h2>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-[#A5BFDB]">
                    <span className="mt-1 text-[#4ADE80]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-8 rounded-[20px] border border-[#27573D] bg-[linear-gradient(135deg,#13243A_0%,#16312B_100%)] p-8 shadow-[0_22px_52px_rgba(0,0,0,0.22)] sm:p-10">
            <h2 className="text-3xl font-extrabold text-white">Получите расчёт по услуге {service.title.toLowerCase()}</h2>
            <p className="mt-4 max-w-[900px] text-[17px] leading-8 text-[#B9D3E9]">
              Отправьте чертёж, образец, фото или техническое описание. Подскажем оптимальную технологию изготовления, уточним сроки и подготовим коммерческий расчёт под ваш заказ.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakty#kontakty"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
              >
                Отправить чертёж или фото
              </Link>
              <a
                href="tel:+74853254187"
                className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/12 px-6 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/35 hover:bg-white/[0.03]"
              >
                Позвонить инженеру
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
