import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kvartsmet.ru"),
  title: "Металлообработка на заказ в Угличе и по России | КВАРЦМЕТ",
  description:
    "КВАРЦМЕТ выполняет металлообработку на заказ: токарные, фрезерные, сварочные, сборочные, шлифовальные и термические работы, изготовление деталей и узлов по чертежам, образцам и фото.",
  keywords: [
    "металлообработка на заказ",
    "изготовление деталей по чертежам",
    "токарные работы на заказ",
    "фрезерные работы на заказ",
    "сварочные работы на заказ",
    "изготовление металлоконструкций",
    "металлообработка Углич",
    "КВАРЦМЕТ",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Металлообработка на заказ | КВАРЦМЕТ",
    description:
      "Производство деталей, узлов и металлоконструкций по чертежам, образцам и фото. Работаем с мелкосерийными и серийными заказами по всей России.",
    url: "https://kvartsmet.ru/",
    siteName: "КВАРЦМЕТ",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
