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
          <section className="flex gap-2 w-10/12 p-4">
            <Sidebar />
            <section className="max-h-[400px] w-full bg-slate-900 text-center p-10 rounded-2xl shadow-lg shadow-blue-900/40">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
