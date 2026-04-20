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

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
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

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
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
          <div className="mx-auto max-w-[1340px] px-6 pt-32 pb-20 sm:pt-36 sm:pb-24">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Услуги", href: "/uslugi" },
                { label: service.title },
              ]}
            />

            <div className="mt-8 max-w-[920px]">
              <p className="text-[15px] font-semibold text-[#9CC1E5]">{service.lead}</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">{service.title} на заказ</h1>
              <p className="mt-6 max-w-[860px] text-[20px] leading-8 text-[#A2BCD9]">{service.seoDescription}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-[15px] text-[#D7E5F7]">
                <span>{service.badge}</span>
                <span className="text-white/30">•</span>
                <span>Мелкосерийное и серийное производство</span>
                <span className="text-white/30">•</span>
                <span>Расчёт по чертежам, образцам и фото</span>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakty#kontakty"
                  className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
                >
                  Отправить заявку
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

        <section className="mx-auto max-w-[1340px] px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
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

            <aside className="rounded-[18px] border border-[#246D4E] bg-[#112634] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <h2 className="text-2xl font-extrabold text-white">Что выполняем</h2>
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

              <Link
                href="/kontakty#kontakty"
                className="mt-8 inline-flex h-12 items-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
              >
                Обсудить заказ
              </Link>
            </aside>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
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

            <article className="rounded-[18px] border border-[#2B3950] bg-[#162236] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
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
            <h2 className="text-3xl font-extrabold text-white">Рассчитаем {service.title.toLowerCase()} под вашу задачу</h2>
            <p className="mt-4 max-w-[900px] text-[17px] leading-8 text-[#B9D3E9]">
              Отправьте чертёж, образец, фото или техническое описание. Подскажем оптимальную технологию изготовления,
              уточним сроки и подготовим расчёт под мелкосерийное или серийное производство.
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
