import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/components/cartContext";

const neology = localFont({
  src: "/fonts/Neology.woff",
  variable: "--font-neology",
  weight: "400",
});
const symphony = localFont({
  src: "/fonts/Symphony.otf",
  variable: "--font-symphony",
  weight: "400",
});
const jane = localFont({
  src: "/fonts/Jane.woff",
  variable: "--font-jane",
  weight: "100",
});

export const metadata = {
  title: "Timeless Classics",
  description: "Get a collection of timeless classics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${neology.variable} ${symphony.variable} ${jane.variable} bg-[#f8f8f8] antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
