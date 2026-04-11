import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#equipment", label: "Оборудование" },
  { href: "#gallery", label: "Примеры работ" },
  { href: "#contacts", label: "Контакты" },
];

const logoSrc = "/logo.png";

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
      <div className="mx-auto max-w-[1340px] px-6 pt-14 pb-8">
        <div className="rounded-[24px] border border-[#2B9D65]/35 bg-[linear-gradient(135deg,#13263B_0%,#173541_55%,#14322B_100%)] p-8 shadow-[0_26px_60px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[700px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9AE8B8]">Связь без барьеров</p>
              <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Нет чертежа? Просто свяжитесь с нами и опишите задачу
              </h3>
              <p className="mt-4 text-[18px] leading-8 text-[#B6CCE5]">
                Подскажем технологию изготовления, поможем определиться с материалом и подготовим расчёт даже по
                фото, эскизу или описанию детали.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#contacts"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#4ADE80] px-6 text-[17px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_38px_rgba(74,222,128,0.24)]"
              >
                Оставить заявку
              </a>
              <a
                href="tel:+74853254187"
                className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/12 px-6 text-[17px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/35 hover:bg-white/[0.04]"
              >
                Позвонить инженеру
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr_1.1fr]">
          <div>
            <Image src={logoSrc} alt="КВАРЦМЕТ" width={300} height={74} unoptimized className="h-auto w-[210px] md:w-[260px]" />
            <p className="mt-6 max-w-[420px] text-[18px] leading-8 text-[#93ACCE]">
              Серийное и мелкосерийное производство металлических деталей по чертежам, образцам, фото и техническому описанию.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-white">Навигация</h3>
            <nav className="mt-5 space-y-3 text-[18px] text-[#97B0D1]">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block transition duration-300 hover:translate-x-1 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-white">Контакты</h3>
            <div className="mt-5 space-y-4 text-[18px] text-[#97B0D1]">
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
              <p className="pl-8 text-[16px] text-[#89A3C7]">пн-пт 08:00–17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1340px] px-6 py-6 text-center text-[16px] text-[#89A3C7]">
          © 2026 КВАРЦМЕТ. Все права защищены.
        </div>
      </div>
    </footer>
  );
}