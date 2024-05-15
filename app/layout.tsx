import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextThoughts",
  description:
    "Elevate your note-taking experience with NextThoughts, a Next.js-powered app designed for seamless productivity. Capture ideas, jot down thoughts, and stay organized effortlessly. With its intuitive interface and powerful features, NextThoughts empowers you to brainstorm, plan, and create with confidence.",
  icons: {
    icon: [
      {
        rel: "icon",
        href: "/sticky-notes.png",
        url: "/sticky-notes.png", // Add the missing url property
      },
      {
        rel: "icon",
        href: "/sticky-notes.png",
        url: "/sticky-notes.png", // Add the missing url property
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider attribute="class" 
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="notes-app-theme-2">{children} </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}