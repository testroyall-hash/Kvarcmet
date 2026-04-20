import Link from "next/link";

const certificateHref = "/sertifikat-smk-kvarcmet.pdf";

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4.75v9.5" />
      <path d="m8.5 11.25 3.5 3.5 3.5-3.5" />
      <path d="M5.75 17.5v.75A2 2 0 0 0 7.75 20.25h8.5a2 2 0 0 0 2-2v-.75" />
    </svg>
  );
}

function OpenIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 5.75h4.25V10" />
      <path d="M18 6 11 13" />
      <path d="M18.25 13.5v4A1.75 1.75 0 0 1 16.5 19.25h-10A1.75 1.75 0 0 1 4.75 17.5v-10A1.75 1.75 0 0 1 6.5 5.75h4" />
    </svg>
  );
}

export default function CertificateSection() {
  return (
    <section className="bg-[#142033] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6">
        <div className="grid gap-6 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#16263A_0%,#1A2E46_58%,#17362E_100%)] p-5 shadow-[0_22px_56px_rgba(0,0,0,0.22)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#9FE8BE]">Сертификаты и документы</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">Сертификат системы менеджмента качества</h2>
            <p className="mt-4 max-w-[620px] text-[16px] leading-7 text-[#A8C2DE] sm:text-[17px] sm:leading-8">
              Документ доступен для просмотра прямо на сайте, а также для открытия в новой вкладке и скачивания в PDF.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={certificateHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#4ADE80] px-6 text-[15px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_36px_rgba(74,222,128,0.22)] sm:text-[16px]"
              >
                <OpenIcon />
                Открыть сертификат
              </a>
              <a
                href={certificateHref}
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/12 px-6 text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4ADE80]/35 hover:bg-white/[0.04] sm:text-[16px]"
              >
                <DownloadIcon />
                Скачать PDF
              </a>
            </div>

            <Link
              href="/kontakty#kontakty"
              className="mt-4 inline-flex text-[15px] font-semibold text-[#A7F0C0] transition hover:text-white"
            >
              Нужны дополнительные документы? Свяжитесь с нами
            </Link>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0F182A] shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-[14px] text-[#B7CDE6] sm:px-5">
              <span className="font-semibold text-white">Сертификат СМК Кварцмет</span>
              <span>PDF</span>
            </div>
            <iframe
              src={`${certificateHref}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Сертификат СМК Кварцмет"
              className="block h-[420px] w-full bg-white sm:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
