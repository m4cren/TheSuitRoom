import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";

const inter = localFont({
  src: "../public/fonts/Inter-var.ttf",
});

export const metadata: Metadata = {
  title: "The Suit Room",
  description: "E-commerce site for Men's old fasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}   antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
