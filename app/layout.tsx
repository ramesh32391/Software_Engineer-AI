import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramesh Polisetti | AI-Driven Software Engineer",
  description: "AI-Driven Software Engineer specializing in LLMs, ML Engineering, Data Engineering, and Cloud & MLOps. Building intelligent systems at Adobe.",
  keywords: ["AI Engineer", "Machine Learning", "LLMs", "MLOps", "Data Engineering", "Software Engineer", "Ramesh Polisetti", "Adobe", "RAG", "Vector Databases"],
  authors: [{ name: "Ramesh Polisetti" }],
  creator: "Ramesh Polisetti",
  publisher: "Ramesh Polisetti",
  openGraph: {
    title: "Ramesh Polisetti | AI-Driven Software Engineer",
    description: "AI-Driven Software Engineer specializing in LLMs, ML Engineering, Data Engineering, and Cloud & MLOps. Building intelligent systems at Adobe.",
    url: "https://rameshpolisetti.com",
    siteName: "Ramesh Polisetti Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramesh Polisetti - AI-Driven Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramesh Polisetti | AI-Driven Software Engineer",
    description: "AI-Driven Software Engineer specializing in LLMs, ML Engineering, Data Engineering, and Cloud & MLOps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

