import { Metadata } from "next";
import { Oxanium } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const font = Oxanium({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Dev Blog",
  description:
    "Personal blog website of Viktor Stefanov. Posts about software development, web development, and other topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-background font-sans">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
