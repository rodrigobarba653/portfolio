import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo - UI/UX Designer & UI Developer",
  description:
    "Creative UI/UX Designer and UI Developer crafting beautiful, functional digital experiences. Specializing in user-centered design and modern web development.",
  keywords: [
    "UI/UX Designer",
    "UI Developer",
    "Web Design",
    "User Experience",
    "Frontend Development",
    "Portfolio",
  ],
  authors: [{ name: "Rodrigo" }],
  creator: "Rodrigo",
  openGraph: {
    title: "Rodrigo - UI/UX Designer & UI Developer",
    description:
      "Creative UI/UX Designer and UI Developer crafting beautiful, functional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
