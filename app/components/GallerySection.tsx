import Image from "next/image";

const galleryItems = [
  { title: "Токарная обработка", image: "/work-turning.svg" },
  { title: "Фрезерная деталь", image: "/work-milling.svg" },
  { title: "Сварная конструкция", image: "/work-welding.svg" },
  { title: "Серийное производство", image: "/work-series.svg" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#111A2F] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Примеры работ</h2>
          <p className="mt-5 text-[18px] leading-8 text-[#97AFD0]">
            Наведите на карточку, чтобы сфокусироваться на реальном типе выпускаемой продукции
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[14px] bg-[#182235] shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.24)]">
              <div className="relative aspect-[1/1.08] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,47,0.02)_0%,rgba(17,26,47,0.82)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(17,26,47,0.0)_0%,rgba(17,26,47,0.68)_100%)]" />
                <p className="absolute right-0 bottom-0 left-0 px-4 pb-4 text-[17px] font-extrabold text-white transition duration-300 group-hover:translate-y-[-2px]">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
