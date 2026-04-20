import Image from "next/image";
import { featuredWork, galleryItems } from "../data/gallery";

export default function GallerySection() {
  return (
    <section id="primery-rabot" className="bg-[linear-gradient(180deg,#10192D_0%,#121C32_100%)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#9FE8BE]">Реальные фотографии производства</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Примеры наших работ</h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-7 text-[#97AFD0] sm:text-[18px] sm:leading-8">
            Показываем не абстрактные изображения, а реальные детали и узлы, которые изготавливаются на производственной базе
            КВАРЦМЕТ для промышленных заказчиков.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="animate-rise overflow-hidden rounded-[24px] border border-white/8 bg-[#182235] shadow-[0_20px_48px_rgba(0,0,0,0.18)]">
            <div className="border-b border-white/8 px-5 py-5 sm:px-8 sm:py-6">
              <h3 className="text-[28px] font-extrabold text-white sm:text-[34px]">{featuredWork.title}</h3>
              <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#9DB5D5] sm:text-[16px] sm:leading-8">{featuredWork.description}</p>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-[1.4fr_0.95fr] sm:grid-rows-2 sm:p-6">
              <div className="relative min-h-[300px] overflow-hidden rounded-[18px] sm:row-span-2 sm:min-h-[460px]">
                <Image
                  src={featuredWork.images[0]}
                  alt="Примеры токарной и корпусной обработки"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-[18px]">
                <Image
                  src={featuredWork.images[1]}
                  alt="Обработанные металлические детали"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 22vw"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-[18px]">
                <Image
                  src={featuredWork.images[2]}
                  alt="Корпусные алюминиевые детали"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 22vw"
                />
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="animate-rise overflow-hidden rounded-[22px] border border-white/8 bg-[#182235] shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.24)]"
              >
                <div className="relative min-h-[260px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-[22px] font-extrabold text-white sm:text-[24px]">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#97AFD0]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
