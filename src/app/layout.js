import "./globals.css";

import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${jost.className}`}>{children}</body>
    </html>
  );
}
