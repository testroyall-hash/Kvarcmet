import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/oborudovanie", label: "Оборудование" },
  { href: "/#primery-rabot", label: "Наши работы" },
  { href: "/kontakty", label: "Контакты" },
];

const logoSrc = "/logo.svg";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.75 7.75A2.25 2.25 0 0 1 7 5.5h10A2.25 2.25 0 0 1 19.25 7.75v8.5A2.25 2.25 0 0 1 17 18.5H7a2.25 2.25 0 0 1-2.25-2.25v-8.5Z" />
      <path d="m5.5 7 6.5 5 6.5-5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20.25s6-5.86 6-10.5a6 6 0 1 0-12 0c0 4.64 6 10.5 6 10.5Z" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111A2F] text-white">
      <div className="mx-auto max-w-[1340px] px-4 pt-12 pb-8 sm:px-6 sm:pt-14">
        <div className="animate-rise rounded-[24px] border border-[#2B9D65]/35 bg-[linear-gradient(135deg,#13263B_0%,#173541_55%,#14322B_100%)] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[700px]">
              <p className="text-[14px] font-semibold text-[#9AE8B8]">Обсудим ваш заказ</p>
              <h3 className="mt-4 text-[28px] font-extrabold leading-9 text-white sm:text-4xl">
                Если нет полного комплекта документации, поможем стартовать с тем, что есть
              </h3>
              <p className="mt-4 text-[16px] leading-7 text-[#B6CCE5] sm:text-[18px] sm:leading-8">
                Рассматриваем чертежи, фото, образцы и техническое описание. Подскажем технологию изготовления, предложим
                оптимальный маршрут производства и подготовим расчёт.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakty#kontakty"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-[#4ADE80] px-6 text-[16px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_38px_rgba(74,222,128,0.24)] sm:text-[17px]"
              >
                Отправить запрос
              </Link>
              <a
                href="tel:+74853254187"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white/12 px-6 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/35 hover:bg-white/[0.04] sm:text-[17px]"
              >
                Позвонить инженеру
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1.1fr] md:gap-12">
          <div>
            <Image src={logoSrc} alt="КВАРЦМЕТ" width={300} height={74} unoptimized className="h-auto w-[180px] sm:w-[210px] md:w-[260px]" />
            <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-[#93ACCE] sm:mt-6 sm:text-[18px] sm:leading-8">
              Металлообработка на заказ для промышленных предприятий: изготовление деталей, узлов и нестандартного оборудования
              по чертежам, образцам и фото.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-white">Навигация</h3>
            <nav className="mt-5 space-y-3 text-[16px] text-[#97B0D1] sm:text-[18px]">
              <Link href="/" className="block transition duration-300 hover:translate-x-1 hover:text-white">
                Главная
              </Link>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block transition duration-300 hover:translate-x-1 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-white">Контакты</h3>
            <div className="mt-5 space-y-4 text-[16px] text-[#97B0D1] sm:text-[18px]">
              <a href="tel:+74853254187" className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-white">
                <PhoneIcon />
                +7 (48532) 5-41-87
              </a>
              <a href="mailto:info@quartzmet.ru" className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-white">
                <MailIcon />
                info@quartzmet.ru
              </a>
              <p className="flex items-center gap-3">
                <MapPinIcon />
                Рыбинское ш., 20Б, Углич
              </p>
              <p className="pl-8 text-[15px] text-[#89A3C7] sm:text-[16px]">пн-пт 08:00-17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1340px] px-4 py-6 text-center text-[15px] text-[#89A3C7] sm:px-6 sm:text-[16px]">
          © 2000-2026 КВАРЦМЕТ. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
