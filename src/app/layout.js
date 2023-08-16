import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Designo | Full-Stack Developer ",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${jost.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
