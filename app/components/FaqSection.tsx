const faqItems = [
  [
    "Какие данные нужны для расчёта заказа?",
    "Для предварительного расчёта подойдут чертёж, эскиз, фото детали, образец или техническое описание. Чем больше исходных данных, тем точнее сможем оценить сроки и стоимость.",
  ],
  [
    "Берёте ли вы мелкосерийные и серийные партии?",
    "Да, работаем как с мелкосерийным, так и с серийным производством. Подбираем технологию изготовления под объём партии и требования заказчика.",
  ],
  [
    "С какими видами работ вы работаете?",
    "Выполняем токарные, фрезерные, сварочные, слесарные, сборочные, шлифовальные и термические работы, а также изготавливаем нестандартное оборудование.",
  ],
  [
    "Можно ли заказать изготовление по образцу или фото?",
    "Да, если нет полного комплекта документации, можно прислать фото, образец или описание задачи. Мы поможем уточнить параметры и предложим вариант запуска заказа.",
  ],
] as const;

export default function FaqSection() {
  return (
    <section className="bg-[#172133] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[840px] text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Частые вопросы по металлообработке на заказ</h2>
          <p className="mt-4 text-[16px] leading-7 text-[#98B0D0] sm:mt-5 sm:text-[18px] sm:leading-8">
            Собрали ответы на вопросы, которые чаще всего задают производственные компании перед запуском заказа.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:mt-14 sm:gap-5">
          {faqItems.map(([question, answer]) => (
            <article key={question} className="rounded-[18px] border border-white/8 bg-[#1B2639] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.14)] sm:p-7">
              <h3 className="text-[19px] font-extrabold text-white sm:text-[22px]">{question}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#9FB7D5] sm:mt-4 sm:text-[16px] sm:leading-8">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
