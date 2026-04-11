const steps = [
  ["01", "Отправляете чертёж", "Чертёж, эскиз, фото или образец детали"],
  ["02", "Рассчитываем стоимость", "Бесплатный расчёт в течение 1-2 часов"],
  ["03", "Согласуем сроки", "Фиксируем объём, сроки и стоимость"],
  ["04", "Изготавливаем", "Производство на собственном оборудовании"],
  ["05", "Отгружаем заказ", "Доставка или самовывоз готовой партии"],
] as const;

export default function ProcessSection() {
  return (
    <section className="bg-[#243246] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Как мы работаем</h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {steps.map(([number, title, description], index) => (
            <article key={number} className="relative text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#2F695C]/40 bg-[#1A2B3E] text-[54px] font-extrabold leading-none tracking-[-0.05em] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.08)]">
                {number}
              </div>
              {index < steps.length - 1 && (
                <span className="absolute top-14 right-[-16px] hidden h-px w-12 bg-[#2F695C] lg:block" />
              )}
              <h3 className="mt-5 text-[18px] font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-[#8EA8CA]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
