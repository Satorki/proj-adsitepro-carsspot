import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/molecules/Navbar";
import Footer from "../components/molecules/Footer";

export const metadata: Metadata = {
  title: "Adsitepro - CarsSpot",
  description: "Project for recruitment task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
