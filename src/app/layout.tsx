import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../scss/global.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "./auth-wrapper";
import SessionProvider from "@/components/SessionProvider/SessionPRovider";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Пополнить баланс Steam (Стим) недорого - GAMEMONEY",
  keywords:
    "steam,пополнить,баланс,пополнить баланс в 2024,как пополнить стим,стим,положить деньги стим,сервис по пополнению steam,моментально пополнение steam,пополнить кошелек стим,положить деньги в steam,отправить деньги в steam",
  description:
    "Пополнить баланс Стим. Моментальное пополнение баланса 🚀 и кошелька Steam в России 2024 🎮. Оплата СБП и МИР ✅! Самая низкая комиссия! 10000+ отзывов! Поддержка 24/7!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="ru">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
        </head>
        <body className={roboto.className}>
          {/* <AuthProvider> */}
          <Header />
          <main className="wrapper">{children}</main>
          <Footer />
          {/* </AuthProvider> */}
        </body>
      </html>
    </SessionProvider>
  );
}
