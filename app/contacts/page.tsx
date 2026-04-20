import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Контакты | КВАРЦМЕТ",
  description:
    "Контакты КВАРЦМЕТ: телефон, email, адрес и форма для отправки чертежей, фотографий деталей и заявок на производство.",
  alternates: {
    canonical: "/kontakty",
  },
};

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.75 7.75A2.25 2.25 0 0 1 7 5.5h10A2.25 2.25 0 0 1 19.25 7.75v8.5A2.25 2.25 0 0 1 17 18.5H7a2.25 2.25 0 0 1-2.25-2.25v-8.5Z" />
      <path d="m5.5 7 6.5 5 6.5-5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20.25s6-5.86 6-10.5a6 6 0 1 0-12 0c0 4.64 6 10.5 6 10.5Z" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  );
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0C1529] text-white">
        <section className="border-b border-white/10 bg-[linear-gradient(135deg,#0F1C33_0%,#1B2940_58%,#163527_100%)] pt-40 pb-20 sm:pt-44">
          <div className="mx-auto max-w-[1340px] px-6">
            <div className="mx-auto max-w-[840px] text-center">
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9FE8BE]">Контакты КВАРЦМЕТ</p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
                Отправьте задачу, чертёж или фото детали удобным способом
              </h1>
              <p className="mt-6 text-[19px] leading-8 text-[#A5BFDB]">
                Быстро связываемся, уточняем требования и подготавливаем расчёт по металлообработке, сварке,
                сборке и изготовлению оборудования.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <a
                href="tel:+74853254187"
                className="rounded-[18px] border border-white/10 bg-[#182235] p-6 text-left transition hover:-translate-y-1 hover:border-[#4ADE80]/35 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              >
                <span className="inline-flex rounded-full bg-[#173541] p-3 text-[#4ADE80]">
                  <PhoneIcon />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-white">Позвонить</h2>
                <p className="mt-3 text-[17px] text-[#D6E4F7]">+7 (48532) 5-41-87</p>
                <p className="mt-2 text-[15px] leading-7 text-[#95B0D0]">Пн-пт с 08:00 до 17:00. Ответим по срокам, материалам и запуску заказа.</p>
              </a>

              <a
                href="mailto:info@quartzmet.ru"
                className="rounded-[18px] border border-white/10 bg-[#182235] p-6 text-left transition hover:-translate-y-1 hover:border-[#4ADE80]/35 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              >
                <span className="inline-flex rounded-full bg-[#173541] p-3 text-[#4ADE80]">
                  <MailIcon />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-white">Написать</h2>
                <p className="mt-3 text-[17px] text-[#D6E4F7]">info@quartzmet.ru</p>
                <p className="mt-2 text-[15px] leading-7 text-[#95B0D0]">Отправляйте чертежи, фото, эскизы и техническое описание задачи.</p>
              </a>

              <article className="rounded-[18px] border border-white/10 bg-[#182235] p-6 text-left">
                <span className="inline-flex rounded-full bg-[#173541] p-3 text-[#4ADE80]">
                  <MapPinIcon />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-white">Приехать</h2>
                <p className="mt-3 text-[17px] text-[#D6E4F7]">Рыбинское ш., 20Б, Углич</p>
                <p className="mt-2 text-[15px] leading-7 text-[#95B0D0]">Производственная площадка и обсуждение задач по предварительному согласованию.</p>
              </article>
            </div>

            <div className="mt-12 overflow-hidden rounded-[22px] border border-white/10 bg-[#182235] p-3 shadow-[0_20px_46px_rgba(0,0,0,0.18)]">
              <iframe
                src="https://yandex.com/map-widget/v1/org/quartzmet/97237042982/?ll=38.333844%2C57.539947&z=17"
                width="100%"
                height="420"
                allowFullScreen
                loading="lazy"
                className="block rounded-[16px] border-0"
                title="Карта расположения предприятия КварцМет"
              />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
