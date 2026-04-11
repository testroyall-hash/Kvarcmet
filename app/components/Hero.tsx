function DocumentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3.75h5.5L18.25 8.5V18A2.25 2.25 0 0 1 16 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" />
      <path d="M13.25 3.75V8.5h4.75" />
      <path d="M9 12.5h6M9 16h4.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const proofItems = ["500+ деталей для промышленности", "30+ B2B клиентов", "Доставка заказов по России"];
const heroBackground =
  "https://raw.githubusercontent.com/SnamikMT/kvarcmet/35b211bc69308becde65b76f4f4cac2586b0d3f6/public/hero-industrial-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0C1529] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      />
<div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(12,21,41,0.5)_0%,_rgba(12,21,41,0.5)_34%,_rgba(12,21,41,0.5)_58%,_rgba(12,21,41,0.5)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_68%,_rgba(255,255,255,0.05),_transparent_24%),radial-gradient(circle_at_72%_18%,_rgba(255,255,255,0.035),_transparent_18%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1340px] items-center px-6 pt-32 pb-16">
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[14px] font-medium text-[#8EB1DD] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
            Работаем с партиями от 10 изделий · Минимальный заказ от 30 000 ₽
          </div>

          <h1 className="mt-8 max-w-[760px] text-[58px] font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-[72px] lg:text-[84px]">
            Изготовление деталей
            <br />
            <span className="text-[#4ADE80]">по чертежам и образцам</span>
          </h1>

          <p className="mt-8 max-w-[780px] text-[22px] leading-[1.45] text-[#9DB2D6] sm:text-[20px] lg:text-[21px]">
            Металлообработка любой сложности: токарные, фрезерные, сварочные и сборочные работы.
          </p>
          <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-[#8AA0C5]">
            Работаем по чертежам, эскизам, образцам и фотографиям деталей. Запускаем серийные и мелкосерийные
            заказы для производственных компаний по всей России.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {proofItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[14px] font-medium text-[#B8CAE5]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacts"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-[8px] bg-[#4ADE80] px-8 text-[18px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_20px_44px_rgba(74,222,128,0.22)]"
            >
              <DocumentIcon />
              Отправить чертёж
            </a>
            <a
              href="#gallery"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-[8px] border border-[#33425D] bg-transparent px-8 text-[18px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4C5D7F] hover:bg-white/[0.03]"
            >
              Показать деталь
              <ArrowIcon />
            </a>
          </div>

          <p className="mt-5 text-[15px] text-[#7F98BF]">Рассчитаем стоимость в течение 1–2 часов</p>
        </div>
      </div>
    </section>
  );
}
