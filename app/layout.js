import "./globals.css"; // Ensure your Tailwind styles are here
import Navbar from "@/components/Navbar"; // Adjust the path to where your Navbar is
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Kitchen. | Premium Recipes",
  description: "Master the art of cooking with curated global recipes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#FBFBFA]">
        <Navbar />
        {/* We add a padding-top here (pt-20) so content doesn't hide under the fixed Navbar */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}