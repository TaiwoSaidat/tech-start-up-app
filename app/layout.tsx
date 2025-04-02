import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tech Start Up App",
  description: "Bringing Your Ideas to Life with Quality Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  relative overflow-hidden font-layout bg-neutral-300 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
