// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins,Rock_Salt } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rock-salt',
  display: 'swap',
});

// Metadata (no type needed in JS)
export const metadata = {
  title: "No Code Nest",
  description: "Build Your Website in Seconds",
};

// Root layout function (JSX version)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rockSalt.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
