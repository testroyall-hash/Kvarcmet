const equipmentCards = [
  ["Токарная обработка", "ЧПУ и универсальные станки, Ø до 500 мм"],
  ["Фрезерная обработка", "3- и 4-осевые центры, ход до 1000 мм"],
  ["Координатно-расточные работы", "Высокоточное позиционирование отверстий"],
  ["Сварка и сборка", "MIG/MAG, TIG — сталь, нержавейка, алюминий"],
] as const;

export default function EquipmentSection() {
  return (
    <section id="equipment" className="relative overflow-hidden bg-[#243246] py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-22"
        style={{ backgroundImage: "url('/equipment-showcase-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(36,50,70,0.88),_rgba(36,50,70,0.92))]" />
      <div className="relative mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Оборудование</h2>
          <p className="mt-5 text-[18px] leading-8 text-[#9AB2D1]">
            Собственный парк станков для решения задач любой сложности
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {equipmentCards.map(([title, description]) => (
            <article
              key={title}
              className="rounded-[12px] border border-white/12 bg-[#233146]/78 px-6 py-6 backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/35 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
            >
              <h3 className="text-[18px] font-extrabold text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#99AFCD]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
