import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.DOMAIN)),
  title: {
    default: `${process.env.NAME} | Full-Stack Software Engineer`,
    template: `%s | ${process.env.NAME}`,
  },
  description: "Full-Stack Software Engineer specializing in scalable backend systems, REST APIs, cloud solutions, and modern web applications using Java, Spring Boot, Node.js, Next.js, React, TypeScript, PostgreSQL, and AWS.",

  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "REST API",
    "Philippines",
  ],

  authors: [{ name: process.env.NAME }],
  creator: process.env.NAME,

  openGraph: {
    title: `${process.env.NAME} | Full-Stack Software Engineer`,
    description:
      "Building scalable web applications, backend systems, cloud solutions, and AI-powered software.",
    url: process.env.DOMAIN,
    siteName: `${process.env.NAME} Portfolio`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${process.env.NAME} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${process.env.NAME} | Full-Stack Software Engineer`,
    description: "Portfolio showcasing modern full-stack applications, backend architecture, and cloud development.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full w-screen flex flex-col">
        <Navbar />
        <div className="w-full bg-[#020B16] flex-1 flex justify-center max-sm:px-10 px-40 mt-16">
            {children}
        </div>
        </body>
    </html>
  );
}
