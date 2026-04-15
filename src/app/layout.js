import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { TimelineProvider } from "@/context/TimelineContext";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Smart Relationship Manager",
  description:
    "Track and nurture your connections with friends and family easily.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="top-right" autoClose={2000} />
        </TimelineProvider>
      </body>
    </html>
  );
}
