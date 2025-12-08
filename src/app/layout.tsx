import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storage Center | AI Voice Agents for Self-Storage",
  description: "Transform your self-storage business with AI-powered voice agents. 24/7 reservations, automated collections, and instant customer support.",
  keywords: ["self-storage", "AI", "voice agents", "automation", "customer service"],
  openGraph: {
    title: "Storage Center | AI Voice Agents for Self-Storage",
    description: "Transform your self-storage business with AI-powered voice agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
