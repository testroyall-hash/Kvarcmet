import Link from "next/link";
import { services } from "../data/services";
import { ArrowIcon, ServiceIcon } from "./ServiceIcons";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#1A2436] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Услуги металлообработки и производственные направления</h2>
          <p className="mt-4 text-[16px] leading-7 text-[#97AFD0] sm:mt-5 sm:text-[18px] sm:leading-8">
            Основное направление КВАРЦМЕТ — металлообработка на заказ для предприятий: изготовление деталей по чертежам, выпуск узлов, сварка, сборка и запуск партий в производство.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {services.map(({ slug, title, description, badge, lead, icon }) => (
            <Link
              key={slug}
              href={`/uslugi/${slug}`}
              className="group animate-rise rounded-[16px] border border-[#394860] bg-[#1D293B] px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:px-6 sm:py-6"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#153142] text-[#4ADE80] transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <ServiceIcon icon={icon} />
                </div>
                <span className="text-right text-[11px] font-semibold uppercase tracking-[0.12em] text-[#AFC5E4] sm:text-[12px] sm:tracking-[0.16em]">
                  {lead}
                </span>
              </div>
              <h3 className="mt-5 text-[20px] font-extrabold leading-7 text-white sm:mt-6 sm:text-[22px] sm:leading-8">{title}</h3>
              <p className="mt-3 max-w-[340px] text-[14px] leading-6 text-[#93ADD0] sm:text-[15px] sm:leading-7">{description}</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4 sm:mt-6 sm:pt-5">
                <span className="text-[13px] font-semibold text-[#4ADE80] sm:text-[14px]">{badge}</span>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 transition duration-300 group-hover:text-[#4ADE80] sm:text-[14px]">
                  Подробнее
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
