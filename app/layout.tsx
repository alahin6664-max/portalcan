import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portalcan.com"),
  title: {
    default: "PortalCan",
    template: "%s | PortalCan",
  },
  description:
    "Comparativas, guías y herramientas para ayudarte a cuidar mejor de tu perro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />

        {children}
        
        <Footer />

        <GoogleAnalytics gaId="G-PN9R7CN7BQ" />
      </body>
    </html>
  );
}