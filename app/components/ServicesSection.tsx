const serviceCards = [
  {
    title: "Токарные работы",
    description: "Токарная обработка на универсальных станках и станках с ЧПУ для деталей диаметром до 500 мм.",
    badge: "Диаметр до 500 мм",
    lead: "Универсальные и ЧПУ",
    icon: LatheIcon,
  },
  {
    title: "Фрезерные работы",
    description: "Фрезерование корпусных деталей, пазов, плоскостей и сложных контуров с ходом стола до 1000 мм.",
    badge: "Ход стола до 1000 мм",
    lead: "Высокоточная обработка",
    icon: MillIcon,
  },
  {
    title: "Слесарные и сборочные работы",
    description: "Сборка узлов, гибка листового металла до 10 мм и рубка металла до 12 мм под задачи заказчика.",
    badge: "Гибка до 10 мм",
    lead: "Рубка до 12 мм",
    icon: WrenchIcon,
  },
  {
    title: "Сварочные работы",
    description: "Полуавтоматическая, аргонодуговая и электросварка, включая алюминий, нержавеющую сталь и плазменную резку.",
    badge: "Сталь, нержавейка, алюминий",
    lead: "MIG/MAG, TIG, плазма",
    icon: FlameIcon,
  },
  {
    title: "Финишная и специальная обработка",
    description: "Шлифовка, координатно-расточные операции и термическая обработка деталей для достижения заданных характеристик.",
    badge: "Шлифовка и термообработка",
    lead: "Полный цикл",
    icon: LayersIcon,
  },
  {
    title: "Изготовление по чертежам и эскизам",
    description: "Берём в работу изделия любой сложности — от проектирования и опытных образцов до серийного производства.",
    badge: "От 1 штуки",
    lead: "По чертежам, эскизам и образцам",
    icon: DocumentIcon,
  },
];

const productGroups = [
  [
    "Прецизионные детали и узлы",
    "Металлоконструкции из конструкционной и нержавеющей стали, а также алюминия",
    "Закладные и монтажные детали",
    "Входные группы и металлические навесы",
    "Металлические опоры, опоры освещения, молниеотводы, громоотводы и мачты",
  ],
  [
    "Нержавеющие столы, мойки, стеллажи и вытяжные зонты",
    "Регистры отопления и трубная заготовка",
    "Ограждения, заборы, ворота и решётки",
    "Нестандартное оборудование",
    "Ёмкости, резервуары, баки, козырьки, навесы и двери",
  ],
] as const;

function LatheIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MillIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M5 10h14M5 14h14M10 5v14M14 5v14" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.5 5.5a4.5 4.5 0 0 0 4.84 5.9l-7.7 7.7a2 2 0 1 1-2.83-2.83l7.7-7.7a4.5 4.5 0 0 0-5.9-4.84l2.3 2.3-2.8 2.8-2.3-2.3a4.5 4.5 0 0 0 5.9 5.9" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3c1.2 3-1.8 3.8-1.8 6.4A3.8 3.8 0 0 0 14 13.2c1 0 2.2-.5 2.8-1.5.8 1 1.7 2.4 1.7 4.1A6.5 6.5 0 1 1 6 13.7c0-2 1-3.8 2.6-5.4.7 1.9 1.8 2.7 2.8 2.7 1.3 0 2.4-1.2 2-2.9" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3.75h5.5L18.25 8.5V18A2.25 2.25 0 0 1 16 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" />
      <path d="M13.25 3.75V8.5h4.75" />
      <path d="M9 12.5h6M9 16h4.5" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-[#1A2436] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Услуги и продукция ООО «Кварцмет»</h2>
          <p className="mt-5 text-[18px] leading-8 text-[#97AFD0]">
            Выполняем полный цикл металлообработки на станках с ЧПУ и универсальном оборудовании: от проектирования,
            изготовления опытных образцов и до серийного производства.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceCards.map(({ title, description, badge, lead, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[12px] border border-[#394860] bg-[#202C3F] px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[#4ADE80] transition duration-300 group-hover:scale-110">
                  <Icon />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#AFC5E4]">
                  {lead}
                </span>
              </div>
              <h3 className="mt-6 text-[20px] font-extrabold text-white">{title}</h3>
              <p className="mt-3 max-w-[340px] text-[15px] leading-8 text-[#93ADD0]">{description}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="inline-flex rounded-[7px] bg-[#3A465B] px-3 py-1.5 text-[14px] font-semibold text-[#4ADE80]">
                  {badge}
                </span>
                <a
                  href="#contacts"
                  className="text-[14px] font-semibold text-white/80 transition duration-300 group-hover:text-[#4ADE80] hover:text-[#4ADE80]"
                >
                  Подробнее →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[14px] border border-[#394860] bg-[#202C3F] px-8 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
            <h3 className="text-[28px] font-extrabold text-white">Изготовим для вас</h3>
            <p className="mt-4 max-w-[760px] text-[16px] leading-7 text-[#97AFD0]">
              Принимаем заказы на изготовление деталей любой сложности количеством от одной штуки по чертежам и
              эскизам заказчика. Используем качественные материалы, современный станочный парк и подбираем
              оптимальную технологию под каждую задачу.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {productGroups.map((group, index) => (
                <ul key={index} className="space-y-3">
                  {group.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[10px] bg-[#182235] px-4 py-3 text-[15px] leading-6 text-[#D6E4F7]">
                      <span className="mt-0.5 text-[#4ADE80]">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </article>

          <article className="flex min-h-[220px] flex-col justify-center rounded-[14px] border border-[#226D4E] bg-[#122533] px-8 py-8 shadow-[0_22px_42px_rgba(0,0,0,0.22)]">
            <h3 className="text-[24px] font-extrabold text-white">Почему выбирают нас</h3>
            <ul className="mt-6 space-y-4 text-[16px] leading-7 text-[#9FC0D0]">
              <li>• Берём в работу нестандартные размеры и сложные изделия.</li>
              <li>• Не затягиваем сроки и сопровождаем заказ на каждом этапе.</li>
              <li>• Предлагаем разумные цены и индивидуальный подход к каждому клиенту.</li>
              <li>• Готовы изготовить как единичные детали, так и серийные партии.</li>
            </ul>
            <a
              href="#contacts"
              className="mt-8 inline-flex h-12 w-fit items-center rounded-[8px] bg-[#4ADE80] px-7 text-[17px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
            >
              Обсудить заказ
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
