import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className =" " lang="en">
      <body className={inter.className}>
        <CustomNavbar />
        <div className="m-3">{children} </div>
        <div
          className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
