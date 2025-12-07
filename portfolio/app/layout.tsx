// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingParticles from "@/app/components/FloatingParticles";
import ScrollProgress from "@/app/components/ScrollProgress";
import CustomCursor from "@/app/components/CustomCursor";
import PageTransition from "@/app/components/PageTransition";

export const metadata: Metadata = {
  title: "Alek Feehan-Schuler | Portfolio",
  description: "Cycling, UX, creative tech & capstone projects by Alek Feehan-Schuler.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <PageTransition />
        <ScrollProgress />
        <FloatingParticles />
        <CustomCursor />
        <div className="site-shell">
          <Navbar />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}