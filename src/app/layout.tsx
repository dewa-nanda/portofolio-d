import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dewa Putra Hernanda | Software Engginer | Portofolio ",
  description: "Portofolio",
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
        <main className="min-h-screen flex items-center justify-center bg-slate-800">
          <section className="flex flex-col sm:flex-row gap-6  w-11/12 md:w-10/12 py-4 sm:p-4">
            <Sidebar />
            <section className="w-full bg-slate-900 p-8 rounded-2xl">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
