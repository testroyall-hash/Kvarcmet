"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "../data/services";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/oborudovanie", label: "Оборудование" },
  { href: "/#primery-rabot", label: "Наши работы" },
  { href: "/kontakty", label: "Контакты" },
];

const logoSrc = "/logo.svg";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isScrolled ? "border-b border-white/10 bg-[#0D172A]/88 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.16)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-4 px-4 py-4 text-white sm:px-6 sm:py-5">
        <Link href="/" className="shrink-0 transition hover:opacity-95" aria-label="КВАРЦМЕТ — на главную" onClick={closeMobileMenu}>
          <Image src={logoSrc} alt="КВАРЦМЕТ" width={300} height={74} unoptimized className="h-auto w-[156px] sm:w-[190px] md:w-[230px]" />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-semibold text-[#A2B6D2] lg:flex">
          <Link href="/" className="nav-link transition duration-300 hover:text-white">
            Главная
          </Link>

          <div className="group relative">
            <Link href="/uslugi" className="nav-link inline-flex items-center gap-2 transition duration-300 hover:text-white">
              Услуги
              <ChevronDownIcon />
            </Link>
            <div className="pointer-events-none absolute top-full left-1/2 w-[360px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="rounded-[18px] border border-white/10 bg-[#132038]/96 p-3 shadow-[0_24px_54px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <Link
                  href="/uslugi"
                  className="flex rounded-[12px] px-4 py-3 text-[14px] font-semibold text-[#D9E7F7] transition hover:bg-white/[0.04] hover:text-white"
                >
                  Все услуги
                </Link>
                <div className="my-2 h-px bg-white/8" />
                <div className="grid gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/uslugi/${service.slug}`}
                      className="rounded-[12px] px-4 py-3 text-[14px] leading-6 text-[#AFC4E3] transition hover:bg-white/[0.04] hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="nav-link transition duration-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right text-[13px] leading-5 text-[#8EA5C4]">
            <a
              href="tel:+74853254187"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#D5E3F5] transition hover:text-white"
            >
              <PhoneIcon />
              +7 (48532) 5-41-87
            </a>
            <p>пн-пт 08:00-17:00</p>
          </div>
          <Link
            href="/kontakty#kontakty"
            className="inline-flex h-11 items-center rounded-[8px] bg-[#4ADE80] px-5 text-[15px] font-semibold text-[#07111F] transition duration-300 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(74,222,128,0.26)]"
          >
            Отправить заявку
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.05] text-white transition hover:bg-white/[0.08] lg:hidden"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[#0D172A]/96 px-4 pb-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-[1340px] pt-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-12 items-center rounded-[12px] border border-white/8 bg-white/[0.03] px-4 py-3 text-[16px] font-semibold text-[#DCE8F7] transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="overflow-hidden rounded-[14px] border border-white/8 bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((value) => !value)}
                  className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left text-[16px] font-semibold text-[#DCE8F7]"
                >
                  <span>Услуги</span>
                  <ChevronDownIcon className={`h-4 w-4 transition ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen ? (
                  <div className="space-y-1 border-t border-white/8 px-2 py-2">
                    <Link
                      href="/uslugi"
                      onClick={closeMobileMenu}
                      className="block rounded-[10px] px-3 py-3 text-[15px] font-semibold text-white transition hover:bg-white/[0.06]"
                    >
                      Все услуги
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/uslugi/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="block rounded-[10px] px-3 py-3 text-[14px] leading-6 text-[#ABC0DE] transition hover:bg-white/[0.06] hover:text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+74853254187"
                onClick={closeMobileMenu}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] border border-white/10 px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-white/[0.05]"
              >
                <PhoneIcon />
                +7 (48532) 5-41-87
              </a>
              <Link
                href="/kontakty#kontakty"
                onClick={closeMobileMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-[#4ADE80] px-4 py-3 text-[15px] font-semibold text-[#07111F] transition hover:brightness-110"
              >
                Отправить заявку
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
