import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
