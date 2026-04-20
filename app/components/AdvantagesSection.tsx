const advantages = [
  ["Собственное производство", "Контролируем весь цикл изготовления без посредников и зависимости от подрядчиков.", FactoryIcon],
  ["Работаем с промышленными задачами", "Берём в работу детали, узлы и оборудование для реального производства, а не типовые шаблонные изделия.", IndustryIcon],
  ["Говорим на языке конструкторов и снабжения", "Работаем по чертежам, образцам, фото и техническому заданию, быстро уточняем важные параметры.", ClipboardIcon],
  ["Соблюдаем сроки и договорённости", "Фиксируем объём, стоимость и сроки запуска заказа, чтобы вы могли планировать производство и поставки.", ClockIcon],
] as const;

const trustMetrics = [
  ["20 лет", "на рынке металлообработки"],
  ["30+", "промышленных компаний среди клиентов"],
  ["Россия", "поставки готовых заказов по всей стране"],
] as const;

function FactoryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V7.75A1.75 1.75 0 0 1 5.75 6H10v5l4-3v3l4-3V20" />
      <path d="M3 20h18" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V9l5 3V7l5 3V5l6 4v11" />
      <path d="M3 20h18" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 4.75h6" />
      <path d="M10 3.75h4A1.25 1.25 0 0 1 15.25 5v.5A1.25 1.25 0 0 1 14 6.75h-4A1.25 1.25 0 0 1 8.75 5.5V5A1.25 1.25 0 0 1 10 3.75Z" />
      <path d="M8 5.75H7A2.25 2.25 0 0 0 4.75 8v10A2.25 2.25 0 0 0 7 20.25h10A2.25 2.25 0 0 0 19.25 18V8A2.25 2.25 0 0 0 17 5.75h-1" />
      <path d="m9.5 13 1.5 1.5 3-3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  );
}

export default function AdvantagesSection() {
  return (
    <section className="bg-[#111A2F] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Почему выбирают нас</h2>
            <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-[#A8C0DC] sm:mt-6 sm:text-[18px] sm:leading-8">
              Для производственных компаний важны не обещания, а предсказуемый результат: понятные сроки, стабильное качество и адекватная работа с технической документацией.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {trustMetrics.map(([value, description]) => (
                <div key={value} className="animate-rise rounded-[18px] border border-white/8 bg-[#162236] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:p-6">
                  <p className="text-[28px] font-extrabold text-white sm:text-3xl">{value}</p>
                  <p className="mt-2 text-[15px] leading-6 text-[#96AFCE]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {advantages.map(([title, description, Icon]) => (
              <article key={title} className="animate-rise rounded-[18px] border border-white/8 bg-[#162236] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#123238] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.12)]">
                  <Icon />
                </div>
                <h3 className="mt-4 text-[20px] font-extrabold leading-7 text-white sm:mt-5 sm:text-[22px] sm:leading-8">{title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[#91ABCC] sm:leading-7">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
