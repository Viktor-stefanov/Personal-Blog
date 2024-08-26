import { Metadata } from "next";
import { Oxanium } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import MatrixRain from "@/components/utils/MatrixRain";

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
        <div className="relative">
          <MatrixRain styling="fixed top-0 left-0 -z-10" />
          <div className="w-[70%] mx-auto p-4 bg-background text-primary border-2 border-primary border-dashed border-opacity-40">
            {children}
          </div>
          <MatrixRain styling="fixed top-0 right-0 -z-10" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
