// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waleed Ahmad | Full Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web applications. Explore my portfolio featuring production-ready projects, technical expertise, and professional achievements in full-stack development.",
  icons: {
    icon: "/WALEED.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-black text-slate-100 transition-colors duration-300 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
