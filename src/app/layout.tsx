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

const baseUrl = "https://dewaputrahernanda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dewa Putra Hernanda | Front-end Developer",
    template: "%s | Dewa Putra Hernanda",
  },
  description:
    "Portfolio of Dewa Putra Hernanda — Front-end Web Developer specializing in React, Next.js, Vue, and Nuxt.js.",
  keywords: [
    "front-end developer",
    "web developer",
    "React",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "portfolio",
    "Dewa Putra Hernanda",
  ],
  authors: [{ name: "Dewa Putra Hernanda", url: baseUrl }],
  creator: "Dewa Putra Hernanda",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Dewa Putra Hernanda",
    title: "Dewa Putra Hernanda | Front-end Developer",
    description:
      "Portfolio of Dewa Putra Hernanda — Front-end Web Developer specializing in React, Next.js, Vue, and Nuxt.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dewa Putra Hernanda | Front-end Developer",
    description:
      "Portfolio of Dewa Putra Hernanda — Front-end Web Developer specializing in React, Next.js, Vue, and Nuxt.js.",
    creator: "@dewaputrahernanda",
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
        <main className="min-h-screen flex items-center justify-center bg-slate-800">
          <section className="flex flex-col sm:flex-row gap-6  w-11/12 md:w-10/12 py-4 sm:p-10">
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
