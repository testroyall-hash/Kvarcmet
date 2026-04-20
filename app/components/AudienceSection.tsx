const audienceCards = [
  {
    title: "Машиностроительные предприятия",
    description: "Изготовление деталей, узлов и оснастки для серийного и мелкосерийного производства.",
    metric: "Производственные партии",
    icon: FactoryIcon,
  },
  {
    title: "Ремонтные и сервисные компании",
    description: "Запчасти, комплектующие и восстановление деталей под действующее оборудование.",
    metric: "Изготовление под замену",
    icon: WrenchIcon,
  },
  {
    title: "Производители оборудования",
    description: "Корпусные элементы, сборочные узлы и нестандартные изделия для производственных линий.",
    metric: "Работа по ТЗ и чертежам",
    icon: BuildingIcon,
  },
  {
    title: "Предприятия со спецзадачами",
    description: "Нестандартное оборудование, оснастка и детали под конкретический технологический процесс.",
    metric: "Нестандартные проекты",
    icon: HardHatIcon,
  },
] as const;

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
    <section className="bg-[#202C3F] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Для кого мы работаем</h2>
          <p className="mt-4 text-[16px] leading-7 text-[#93ADD0] sm:mt-5 sm:text-[18px] sm:leading-8">
            К нам обращаются предприятия, которым нужны металлообработка на заказ, изготовление деталей по чертежам, выпуск узлов для оборудования и нестандартные решения под задачи производства.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 sm:mt-14 sm:gap-6">
          {audienceCards.map(({ title, description, metric, icon: Icon }) => (
            <article
              key={title}
              className="animate-rise rounded-[16px] border border-[#3A4960] bg-[#1C283A] px-5 py-5 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.01)] transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#173541] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.14)] sm:h-16 sm:w-16">
                <Icon />
              </div>
              <h3 className="mt-4 text-[18px] font-extrabold leading-7 text-white sm:mt-5 sm:text-[20px] sm:leading-8">{title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[#8EABC9] sm:leading-7">{description}</p>
              <p className="mt-4 text-[14px] font-semibold text-[#4ADE80] sm:mt-5">{metric}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="w-full max-w-[760px] rounded-[14px] border border-[#2B9D65]/45 bg-[#1B3942] px-5 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-8 sm:py-6">
            <p className="text-[20px] font-extrabold text-[#4ADE80] sm:text-[22px]">20 лет работаем с промышленными заказами</p>
            <p className="mt-2 text-[15px] leading-7 text-[#9AC5D2] sm:text-[16px]">
              Изготавливаем детали и узлы для предприятий, где важны качество, повторяемость, сроки и понятная коммуникация по документации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
