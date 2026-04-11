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
    <section id="contacts" className="bg-[#243246] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
            Свяжитесь с нами любым удобным способом
          </h2>
          <p className="mt-6 text-[18px] leading-8 text-[#9AB2D1]">
            Есть чертёж, фото детали или просто задача на словах — подскажем решение и рассчитаем стоимость.
          </p>
          <div className="mt-5 inline-flex items-center justify-center rounded-full border border-[#2B9D65] bg-[#1F3D45] px-5 py-2 text-[15px] font-semibold text-[#A5F2C2] shadow-[0_0_0_1px_rgba(74,222,128,0.12)]">
            Ответ менеджера в рабочее время — обычно до 120 минут
          </div>
          <p className="mt-4 text-[16px] text-[#8EA8C9]">
            Минимальный заказ от 30 000 ₽ · Серийное и мелкосерийное производство
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[760px] flex-wrap justify-center gap-3 text-[15px] font-semibold">
          <a href="tel:+74853254187" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[#B5C8E3] transition hover:border-[#4ADE80]/35 hover:text-white">
            <PhoneIcon />
            Позвонить сейчас
          </a>
          <a href="mailto:info@quartzmet.ru" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[#B5C8E3] transition hover:border-[#4ADE80]/35 hover:text-white">
            <MailIcon />
            Написать на почту
          </a>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[#B5C8E3]">
            пн-пт 08:00–17:00 · Рыбинское ш., 20Б, Углич
          </span>
        </div>

        <form
          className="mx-auto mt-14 max-w-[760px] rounded-[22px] border border-white/10 bg-[#202C3F]/80 p-6 shadow-[0_30px_90px_rgba(5,10,20,0.28)] backdrop-blur-sm sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus("success");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
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
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
            <textarea
              name="comment"
              placeholder="Комментарий к заказу или описание задачи"
              rows={4}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="rounded-[10px] border border-[#40516A] bg-[#243246] px-4 py-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
          </div>

          <label className="mt-6 flex min-h-[148px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-[#495971] bg-[#223047] text-center text-[#92A9C8] transition hover:border-[#4ADE80] hover:bg-[#26354D]">
            <input
              type="file"
              className="sr-only"
              onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
            />
            <UploadIcon />
            <p className="mt-4 text-[18px]">Если есть файл — прикрепите чертёж или фото</p>
            <p className="mt-2 text-[16px]">{fileName || supportedFormats}</p>
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#4ADE80_0%,#71F3A1_100%)] text-[20px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_20px_44px_rgba(74,222,128,0.24)]"
          >
            Отправить заявку
          </button>

          {status === "success" && (
            <p className="mt-4 text-center text-[16px] text-[#9CE7B7]">
              Заявка готова к отправке — можно подключить backend или интеграцию с CRM.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
