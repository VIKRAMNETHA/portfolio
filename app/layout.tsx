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
  title: "Vikram Guntuka | AI Engineer",
  description:
    "Portfolio of Vikram Guntuka — AI Engineer specializing in agentic AI, RAG, and LLM fine-tuning.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LangChain",
    "Agentic AI",
    "LLM Fine-tuning",
  ],
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
