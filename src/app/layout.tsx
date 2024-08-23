import { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="bg-background">
        <NavBar>{children}</NavBar>
        <Footer />
      </body>
    </html>
  );
}
