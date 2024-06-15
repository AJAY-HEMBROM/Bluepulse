import { AuthProvider } from "../app/context/authContext";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className=" " lang="en">
      <body >
        <AuthProvider>
          <CustomNavbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
