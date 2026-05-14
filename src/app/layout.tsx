import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Fajar Anshori | Fullstack Developer",
  description:
    "Fullstack Developer dan Frontend Developer - Merancang serta mengimplementasikan aplikasi web secara menyeluruh dengan pendekatan modern dan efisien.",
  keywords: ["Fullstack Developer", "Frontend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Muhammad Fajar Anshori" }],
  openGraph: {
    title: "Muhammad Fajar Anshori | Fullstack Developer",
    description: "Fullstack Developer dan Frontend Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
