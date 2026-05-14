import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Betonax | Čerpanie betónu",
  description:
    "Spoľahlivé čerpanie betónu pre stavby v Humennom a okolí pomocou stacionárneho čerpadla Putzmeister P 730.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
