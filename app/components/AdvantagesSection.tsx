const advantages = [
  ["Собственное производство", "Полный контроль процесса на каждом этапе", FactoryIcon],
  ["Полный цикл работ", "От заготовки до готового изделия без посредников", CycleIcon],
  ["Работаем по чертежам и образцам", "Принимаем любую техническую документацию", ClipboardIcon],
  ["Контроль качества", "Проверка на каждом этапе производства", ShieldIcon],
  ["Соблюдение сроков", "Фиксируем дедлайны в договоре", ClockIcon],
] as const;

function FactoryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V7.75A1.75 1.75 0 0 1 5.75 6H10v5l4-3v3l4-3V20" />
      <path d="M3 20h18" />
    </svg>
  );
}
function CycleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 5v5h-5" />
      <path d="M4 19v-5h5" />
      <path d="M6.5 9a7 7 0 0 1 11-2.5L20 10" />
      <path d="M17.5 15a7 7 0 0 1-11 2.5L4 14" />
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
function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.75 18.25 6v5.5c0 4.2-2.6 7.75-6.25 8.75-3.65-1-6.25-4.55-6.25-8.75V6L12 3.75Z" />
      <path d="m9.75 12 1.5 1.5 3-3" />
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
    <section className="bg-[#111A2F] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Почему выбирают нас</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[14px] font-semibold text-[#B1C4E2]">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">30+ промышленных компаний</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">500+ изготовленных деталей</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">География поставок — вся Россия</span>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {advantages.map(([title, description, Icon]) => (
            <article key={title} className="text-center transition duration-300 hover:-translate-y-1">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#123238] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.12)] transition duration-300 hover:scale-105">
                <Icon />
              </div>
              <h3 className="mt-6 text-[18px] font-extrabold leading-7 text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[#8FA9CC]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
