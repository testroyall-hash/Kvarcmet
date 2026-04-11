const audienceCards = [
  {
    title: "Машиностроительные предприятия",
    description: "Серийное производство деталей и узлов",
    metric: "Серии до 5 000 шт.",
    icon: FactoryIcon,
  },
  {
    title: "Сервисные центры",
    description: "Запчасти и комплектующие под заказ",
    metric: "Срочные поставки",
    icon: WrenchIcon,
  },
  {
    title: "Строительные организации",
    description: "Металлоконструкции и крепёж",
    metric: "От мелких партий до крупных узлов",
    icon: BuildingIcon,
  },
  {
    title: "Производственные компании",
    description: "Нестандартное оборудование и оснастка",
    metric: "Работаем по ТЗ и образцам",
    icon: HardHatIcon,
  },
];

function FactoryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20V7.75A1.75 1.75 0 0 1 5.75 6H10v5l4-3v3l4-3V20" />
      <path d="M3 20h18" />
      <path d="M8 15h.01M12 15h.01M16 15h.01" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M14.5 5.5a4.5 4.5 0 0 0 4.84 5.9l-7.7 7.7a2 2 0 1 1-2.83-2.83l7.7-7.7a4.5 4.5 0 0 0-5.9-4.84l2.3 2.3-2.8 2.8-2.3-2.3a4.5 4.5 0 0 0 5.9 5.9" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 20V6.75A1.75 1.75 0 0 1 8.75 5h6.5A1.75 1.75 0 0 1 17 6.75V20" />
      <path d="M4 20h16" />
      <path d="M10 8.5h1M13 8.5h1M10 11.5h1M13 11.5h1M10 14.5h1M13 14.5h1" />
      <path d="M7 9H5.75A1.75 1.75 0 0 0 4 10.75V20M17 10h1.25A1.75 1.75 0 0 1 20 11.75V20" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 14.5a6 6 0 0 1 12 0" />
      <path d="M12 8V4.75" />
      <path d="M8.25 9.4 7.2 7.6M15.75 9.4l1.05-1.8" />
      <path d="M4 14.5h16V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5Z" />
    </svg>
  );
}

export default function AudienceSection() {
  return (
    <section id="services" className="bg-[#202C3F] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
            Для кого мы работаем
          </h2>
          <p className="mt-5 text-[18px] leading-8 text-[#93ADD0]">
            Мы специализируемся на B2B-заказах для производственных и промышленных компаний
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-4 md:grid-cols-2">
          {audienceCards.map(({ title, description, metric, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[12px] border border-[#3A4960] bg-[#202C3F] px-8 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.01)] transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#173541] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.14)]">
                <Icon />
              </div>
              <h3 className="mt-5 text-[17px] font-extrabold leading-7 text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[#8EABC9]">{description}</p>
              <p className="mt-4 text-[14px] font-semibold text-[#4ADE80]">{metric}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[450px] rounded-[10px] border border-[#2B9D65] bg-[#1F3D45] px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <p className="text-[20px] font-extrabold text-[#4ADE80]">Минимальный заказ от 30 000 ₽</p>
            <p className="mt-2 text-[15px] leading-6 text-[#9AC5D2]">Серийное и мелкосерийное производство для бизнеса</p>
          </div>
        </div>
      </div>
    </section>
  );
}
