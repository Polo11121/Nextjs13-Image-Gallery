import { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Net Ninja tutorial series by Dave Gray",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <main className="max-w-6xl mx-auto">
        <Navbar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
