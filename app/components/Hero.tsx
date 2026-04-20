import Link from "next/link";

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

const heroBackground = "/hero-production-bg.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0C1529] text-white md:min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" style={{ backgroundImage: `url('${heroBackground}')` }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(12,21,41,0.84)_0%,_rgba(12,21,41,0.72)_44%,_rgba(12,21,41,0.6)_100%)] md:bg-[linear-gradient(90deg,_rgba(12,21,41,0.76)_0%,_rgba(12,21,41,0.68)_34%,_rgba(12,21,41,0.58)_58%,_rgba(12,21,41,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_68%,_rgba(255,255,255,0.05),_transparent_24%),radial-gradient(circle_at_72%_18%,_rgba(255,255,255,0.035),_transparent_18%)]" />

      <div className="relative mx-auto flex max-w-[1340px] items-center px-4 pt-24 pb-10 sm:px-6 sm:pb-14 md:min-h-screen md:pt-32 md:pb-16">
        <div className="animate-rise max-w-[940px]">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold text-[#9AC1EC] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:gap-3 sm:px-4 sm:text-[13px]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4ADE80]" />
            <span className="truncate sm:whitespace-normal">Металлообработка на заказ для промышленных предприятий по всей России</span>
          </div>

          <h1 className="mt-5 max-w-[880px] text-[34px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:mt-7 sm:text-[52px] lg:text-[82px]">
            Изготавливаем детали и узлы
            <br />
            <span className="text-[#4ADE80]">под задачи вашего производства</span>
          </h1>

          <p className="mt-5 max-w-[820px] text-[16px] leading-7 text-[#A6BFDE] sm:mt-7 sm:text-[20px] sm:leading-8 lg:text-[22px]">
            Токарные, фрезерные, сварочные, сборочные, шлифовальные и термические работы. Быстро рассчитываем заказы по чертежам, образцам и фото и запускаем детали в производство.
          </p>
          <p className="mt-3 max-w-[800px] text-[14px] leading-6 text-[#89A3C8] sm:mt-4 sm:text-[16px] sm:leading-8">
            Подходит для опытных образцов, регулярных партий и срочных производственных задач. Работаем с 2000 года, производство находится в Угличе.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
            {["Расчёт в рабочее время обычно 1-2 часа", "Работа по чертежам, образцам и фото", "Мелкосерийное и серийное производство"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[12px] text-[#D8E5F5] sm:text-[14px]">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/kontakty#kontakty"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-[8px] bg-[#4ADE80] px-5 py-3 text-center text-[15px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_20px_44px_rgba(74,222,128,0.22)] sm:min-h-14 sm:px-8 sm:text-[18px]"
            >
              <DocumentIcon />
              Отправить чертёж на расчёт
            </Link>
            <a
              href="#services"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-[8px] border border-[#33425D] bg-transparent px-5 py-3 text-center text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4C5D7F] hover:bg-white/[0.03] sm:min-h-14 sm:px-8 sm:text-[18px]"
            >
              Посмотреть услуги
              <ArrowIcon />
            </a>
          </div>

          <p className="mt-4 max-w-[660px] text-[13px] leading-6 text-[#7F98BF] sm:mt-5 sm:text-[15px]">
            Если полного комплекта документации нет, достаточно фото детали, образца или описания задачи
          </p>
        </div>
      </div>
    </section>
  );
}
