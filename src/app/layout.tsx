import type { Metadata } from "next";
import { Inter, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "BrickStore - Building Value, One Brick at a Time",
  description:
    "Plataforma de e-commerce moderna focada no setor da construção civil. Encontre materiais, ferramentas e soluções para seus projetos.",
  keywords:
    "construção civil, materiais de construção, ferramentas, e-commerce, tijolos, cimento, areia",
  authors: [{ name: "Gabriel Carvalho" }],
  openGraph: {
    title: "BrickStore - Building Value, One Brick at a Time",
    description:
      "Plataforma de e-commerce moderna focada no setor da construção civil.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${inter.variable} ${cinzel.variable} ${playfair.variable} font-sans`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
