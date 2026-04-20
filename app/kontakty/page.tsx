import type { Metadata } from "next";
import ContactsPage from "../contacts/page";

export const metadata: Metadata = {
  title: "Контакты | КВАРЦМЕТ",
  description:
    "Контакты КВАРЦМЕТ: телефон, email, адрес и форма для отправки чертежей, фотографий деталей и заявок на производство.",
  alternates: {
    canonical: "/kontakty",
  },
};

export default ContactsPage;
