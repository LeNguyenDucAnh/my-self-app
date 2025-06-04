import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/AOSInitializer";

export const metadata: Metadata = {
  title: "AnhLND | Front-End Developer",
  description:
    "I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInitializer />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
