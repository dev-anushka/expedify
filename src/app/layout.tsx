import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";




export const metadata: Metadata = {
  title: "Expedify",
  description: "Expedify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="bg-white">
        <div className="site-header">
       
        <Header/>
        
        </div>
         
          {children}

        <div className="site-footer">
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
