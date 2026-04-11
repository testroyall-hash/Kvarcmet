import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kvartsmet.ru"),
  title: "КВАРЦМЕТ — металлообработка и изготовление деталей по чертежам по России",
  description:
    "КВАРЦМЕТ принимает заказы на токарные, фрезерные, сварочные и сборочные работы по всей России. Изготавливаем детали по чертежам, эскизам, образцам и фото для B2B и серийного производства.",
  keywords: [
    "металлообработка Россия",
    "изготовление деталей по чертежам",
    "токарные работы на заказ",
    "фрезерные работы на заказ",
    "сварочные работы производство",
    "производство деталей для предприятий",
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
    title: "КВАРЦМЕТ — изготовление деталей по чертежам и образцам",
    description:
      "Производство деталей и металлоконструкций на заказ по всей России: токарные, фрезерные, сварочные и сборочные работы.",
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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
