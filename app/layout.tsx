import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import ReactPlayer from "react-player";
//

let title = "SneakAuth";
let description = "Original in every feet";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "sneak-auth.vercel.app";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/SA-ICON.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Red+Hat+Display:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#000000] text-white font-mainf">
        <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
