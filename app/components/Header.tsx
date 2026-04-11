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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-8 px-6 py-6 text-white">
        <div className="shrink-0">
          <Image src={logoSrc} alt="КВАРЦМЕТ" width={300} height={74} unoptimized className="h-auto w-[210px] md:w-[260px]" />
        </div>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold text-slate-400 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition duration-300 hover:-translate-y-0.5 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right text-[13px] leading-5 text-slate-400">
            <a
              href="tel:+74853254187"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              <PhoneIcon />
              +7 (48532) 5-41-87
            </a>
            <p>пн-пт 08:00–17:00</p>
          </div>
          <a
            href="#contacts"
            className="inline-flex h-10 items-center rounded-[8px] bg-[#4ADE80] px-5 text-[15px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(74,222,128,0.26)]"
          >
            Отправить чертёж
          </a>
        </div>
      </div>
    </header>
  );
}