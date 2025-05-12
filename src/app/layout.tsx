import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Luiz Antonio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-primary-50 text-primary-900 dark:bg-primary-950 dark:text-primary-200 transition-colors duration-300 dark`}>
        {children}
      </body>
    </html>
  );
}
