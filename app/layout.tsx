import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gurdip Bola | System Developer .NET & Azure",
  description:
    "Portfolio av Gurdip Bola — System Developer specialiserad på .NET 9, Azure, och moderna webblösningar. Se projekt, CV och kontaktinformation.",
  keywords: [
    "Gurdip Bola",
    "System Developer",
    ".NET 9",
    "Azure",
    "C#",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Gurdip Bola" }],
  openGraph: {
    title: "Gurdip Bola — System Developer .NET & Azure",
    description:
      "Utforska Gurdip Bolas portfolio — .NET-utveckling, Azure, API-design och moderna webblösningar.",
    url: "https://gurdip-portfolio.vercel.app/",
    siteName: "Gurdip Bola Portfolio",
    images: [
      {
        url: "/Gurdip.jpg",
        width: 800,
        height: 800,
        alt: "Gurdip Bola profilbild",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
