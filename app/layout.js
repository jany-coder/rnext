import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import CustomLink from "./components/CustomLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li><CustomLink path='/'>Home</CustomLink></li>
            <li><CustomLink prefetch={false} path='/dashboard/settings'>Settings</CustomLink></li>
            <li><CustomLink path='/dashboard/analytics'>Analytics</CustomLink></li>
            <li><CustomLink path='/contact-us'>Contact Us</CustomLink></li>
          </ul> 
        </nav>
        {children}
      </body>
    </html>
  );
}
