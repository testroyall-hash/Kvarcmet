"use client";

import { useMemo, useState } from "react";

function UploadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 16.5v-9" />
      <path d="m8.5 11 3.5-3.5 3.5 3.5" />
      <path d="M7 20.25h10A2.25 2.25 0 0 0 19.25 18V15.5M4.75 15.5V18A2.25 2.25 0 0 0 7 20.25" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.75 7.75A2.25 2.25 0 0 1 7 5.5h10A2.25 2.25 0 0 1 19.25 7.75v8.5A2.25 2.25 0 0 1 17 18.5H7a2.25 2.25 0 0 1-2.25-2.25v-8.5Z" />
      <path d="m5.5 7 6.5 5 6.5-5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20.25s6-5.86 6-10.5a6 6 0 1 0-12 0c0 4.64 6 10.5 6 10.5Z" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  );
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const normalized = digits.startsWith("8") ? `7${digits.slice(1)}` : digits;
  const base = normalized.startsWith("7") ? normalized : `7${normalized}`;
  const trimmed = base.slice(0, 11);

  let result = "+7";
  if (trimmed.length > 1) result += ` (${trimmed.slice(1, 4)}`;
  if (trimmed.length >= 4) result += ")";
  if (trimmed.length > 4) result += ` ${trimmed.slice(4, 7)}`;
  if (trimmed.length > 7) result += `-${trimmed.slice(7, 9)}`;
  if (trimmed.length > 9) result += `-${trimmed.slice(9, 11)}`;
  return result;
}

export default function ContactSection() {
  const [phone, setPhone] = useState("+7");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [comment, setComment] = useState("");

  const supportedFormats = useMemo(() => "PDF, DWG, STEP, JPG, PNG", []);

  return (
    <section id="kontakty" className="bg-[#243246] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">Отправьте чертёж или задачу и получите расчёт</h2>
          <p className="mt-5 text-[16px] leading-7 text-[#9AB2D1] sm:mt-6 sm:text-[18px] sm:leading-8">
            Принимаем чертежи, образцы, фото деталей и техническое описание. Быстро оцениваем технологию изготовления, стоимость и сроки запуска заказа в производство.
          </p>
          <p className="mt-4 text-[14px] leading-6 text-[#8EA8C9] sm:text-[16px]">
            Ответ в рабочее время обычно до 120 минут · Подходит для опытных образцов, мелкосерийных и серийных партий
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 md:grid-cols-3">
          <a href="tel:+74853254187" className="animate-rise rounded-[16px] border border-white/10 bg-[#1B2A3E] px-5 py-5 text-left transition hover:border-[#4ADE80]/35 hover:bg-[#203147]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#173541] text-[#4ADE80]">
              <PhoneIcon />
            </span>
            <p className="mt-4 text-[18px] font-extrabold text-white">Позвонить</p>
            <p className="mt-2 text-[15px] leading-7 text-[#B5C8E3]">+7 (48532) 5-41-87</p>
          </a>
          <a href="mailto:info@quartzmet.ru" className="animate-rise rounded-[16px] border border-white/10 bg-[#1B2A3E] px-5 py-5 text-left transition hover:border-[#4ADE80]/35 hover:bg-[#203147]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#173541] text-[#4ADE80]">
              <MailIcon />
            </span>
            <p className="mt-4 text-[18px] font-extrabold text-white">Отправить на почту</p>
            <p className="mt-2 text-[15px] leading-7 text-[#B5C8E3]">info@quartzmet.ru</p>
          </a>
          <div className="animate-rise rounded-[16px] border border-white/10 bg-[#1B2A3E] px-5 py-5 text-left">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#173541] text-[#4ADE80]">
              <MapPinIcon />
            </span>
            <p className="mt-4 text-[18px] font-extrabold text-white">Производство и режим</p>
            <p className="mt-2 text-[15px] leading-7 text-[#B5C8E3]">пн-пт 08:00-17:00<br />Рыбинское ш., 20Б, Углич</p>
          </div>
        </div>

        <form
          className="mx-auto mt-12 max-w-[920px] rounded-[24px] border border-white/10 bg-[#1C283B]/84 p-5 shadow-[0_30px_90px_rgba(5,10,20,0.28)] backdrop-blur-sm sm:mt-14 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus("success");
          }}
        >
          <div className="mb-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h3 className="text-[24px] font-extrabold text-white sm:text-[28px]">Получить расчёт по вашему заказу</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#9BB3D2] sm:text-[16px]">
                Чем подробнее исходные данные, тем точнее и быстрее мы подготовим расчёт. Если полного комплекта документации нет, достаточно фото, эскиза или описания задачи.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#2E3C55] bg-[#223146] px-4 py-4 text-[14px] leading-7 text-[#B6CCE5]">
              Что можно отправить:
              <br />
              Чертёж, фото детали, образец, эскиз, описание материала, требуемый объём партии, желаемые сроки.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[16px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7] sm:text-[18px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[16px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7] sm:text-[18px]"
            />
          </div>

          <div className="mt-4 grid gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(formatPhone(event.target.value))}
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[16px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7] sm:text-[18px]"
            />
            <textarea
              name="comment"
              placeholder="Что нужно изготовить? Укажите задачу, материал, количество, важные размеры или сроки"
              rows={5}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="rounded-[10px] border border-[#40516A] bg-[#243246] px-4 py-4 text-[16px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7] sm:text-[18px]"
            />
          </div>

          <label className="mt-6 flex min-h-[148px] cursor-pointer flex-col items-center justify-center rounded-[14px] border border-dashed border-[#495971] bg-[#223047] px-4 text-center text-[#92A9C8] transition hover:border-[#4ADE80] hover:bg-[#26354D]">
            <input type="file" className="sr-only" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")} />
            <UploadIcon />
            <p className="mt-4 text-[16px] font-semibold text-white sm:text-[18px]">Прикрепите чертёж, фото или архив с файлами</p>
            <p className="mt-2 text-[14px] sm:text-[16px]">{fileName || supportedFormats}</p>
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#4ADE80_0%,#71F3A1_100%)] text-[18px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_20px_44px_rgba(74,222,128,0.24)] sm:text-[20px]"
          >
            Получить расчёт стоимости и сроков
          </button>

          {status === "success" ? (
            <p className="mt-4 text-center text-[16px] text-[#9CE7B7]">
              Заявка готова к отправке — следующим шагом можно подключить backend, email-отправку или CRM.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
