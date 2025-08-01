import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Namma AI Career Coach",
  description: "Your personalized AI career coaching platform",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
