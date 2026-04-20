import Link from "next/link";

const steps = [
  ["01", "Получаем задачу", "Принимаем чертёж, образец, фото детали или техническое описание изделия."],
  ["02", "Готовим расчёт", "Оцениваем технологию изготовления, сроки, объём партии и стоимость заказа."],
  ["03", "Согласуем запуск", "Фиксируем материалы, этапы производства, сроки и условия поставки."],
  ["04", "Изготавливаем", "Выполняем металлообработку, сварку, сборку и сопутствующие операции на собственном производстве."],
  ["05", "Передаём заказ", "Отгружаем готовую партию, организуем доставку или подготавливаем заказ к самовывозу."],
] as const;

export default function ProcessSection() {
  return (
    <section className="bg-[#223042] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
          <div className="animate-rise lg:sticky lg:top-36">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Как мы работаем</h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-[#A5BDD9] sm:mt-6 sm:text-[18px] sm:leading-8">
              Выстроили понятный процесс для предприятий: от получения чертежа до отгрузки готовой партии без лишних согласований и потери времени.
            </p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-6 text-[#8FA9CC] sm:mt-5 sm:text-[16px] sm:leading-7">
              Это помогает быстрее запускать заказы в работу, точно планировать сроки и держать под контролем качество на каждом этапе производства.
            </p>

            <Link
              href="/kontakty#kontakty"
              className="mt-6 inline-flex h-12 items-center rounded-[8px] bg-[#4ADE80] px-6 text-[15px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)] sm:mt-8 sm:text-[16px]"
            >
              Отправить задачу на расчёт
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {steps.map(([number, title, description]) => (
              <article
                key={number}
                className="animate-rise grid gap-4 rounded-[18px] border border-white/8 bg-[#182538] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:grid-cols-[88px_1fr] sm:items-start sm:gap-5 sm:p-7"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[16px] bg-[#13283A] text-[28px] font-extrabold tracking-[-0.04em] text-[#4ADE80] shadow-[0_0_0_1px_rgba(74,222,128,0.1)]">
                  {number}
                </div>
                <div>
                  <h3 className="text-[20px] font-extrabold text-white sm:text-[24px]">{title}</h3>
                  <p className="mt-2 max-w-[780px] text-[15px] leading-6 text-[#9CB5D4] sm:mt-3 sm:text-[16px] sm:leading-7">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
