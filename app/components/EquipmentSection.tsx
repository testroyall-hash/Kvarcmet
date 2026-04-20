import Image from "next/image";
import Link from "next/link";
import { equipmentCategories, equipmentShowcase } from "../data/equipment";

export default function EquipmentSection() {
  const featuredCards = equipmentCategories.slice(0, 6);

  return (
    <section id="oborudovanie" className="relative overflow-hidden bg-[#243246] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-22"
        style={{ backgroundImage: "url('/equipment-showcase-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(36,50,70,0.88),_rgba(36,50,70,0.92))]" />
      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#9FE8BE]">Собственный станочный парк</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Производственные возможности</h2>
          <p className="mt-5 text-[16px] leading-7 text-[#9AB2D1] sm:text-[18px] sm:leading-8">
            Производственная база КВАРЦМЕТ позволяет выполнять полный цикл металлообработки: от точной обработки деталей и узлов
            до сварки, сборки, доводки и выпуска нестандартного оборудования под задачи предприятия.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {equipmentShowcase.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[20px] border border-white/10 bg-[#182235]/80 shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
              <div className="relative min-h-[220px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
              </div>
              <div className="p-5">
                <h3 className="text-[20px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#A9C1DD]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {featuredCards.map((card) => (
            <article
              key={card.slug}
              className="overflow-hidden rounded-[16px] border border-white/12 bg-[#1B2A3E]/82 backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/35 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
            >
              {card.image ? (
                <div className="relative min-h-[200px]">
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              ) : null}
              <div className="px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-[20px] font-extrabold leading-7 text-white sm:text-[21px] sm:leading-8">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#99AFCD]">{card.summary}</p>
                <p className="mt-4 text-[14px] leading-6 text-[#4ADE80]">{card.productionValue}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.stats.slice(0, 2).map((stat) => (
                    <span key={stat} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-[12px] text-[#D2E0F1]">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-14">
          <Link
            href="/oborudovanie"
            className="inline-flex min-h-13 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.04] px-6 py-3 text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/40 hover:bg-white/[0.06] hover:text-[#4ADE80] sm:min-h-14 sm:px-8 sm:text-[17px]"
          >
            Посмотреть полный перечень оборудования
          </Link>
        </div>
      </div>
    </section>
  );
}
