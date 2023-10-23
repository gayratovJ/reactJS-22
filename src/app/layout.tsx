import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StoreProvider from "@/redux/store";
import childrenType from "@/types/children";

import "antd/dist/reset.css";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najot e-commerce",
  description: "E-commerce website forever",
};

export default function RootLayout({ children }: childrenType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>Header</header> */}
        <StoreProvider>{children}</StoreProvider>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
