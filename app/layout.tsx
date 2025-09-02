import type { Metadata } from "next";
import "./globals.css";
import Header from "..//components/Layout/Header"
import Footer from "../components/Layout/Footer"
export const metadata: Metadata = {
  title: "Gray GaaS",
  description: "Affordable, clean LPG cooking for every Nigerian household.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
              <Header/>
{children}
<Footer/>
</body>
    </html>
  );
}
