import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "about-josie",
  description: "Josie’s personal profile, interests, and contact hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <LanguageProvider>
          <div className="flex flex-col w-full min-h-screen flex-1">
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
