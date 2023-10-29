import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vercel Take Home Test - Juan Arboleda",
  description:
    "Vercel Senior Customer Success Engineer Take Home Test - Juan Arboleda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container prose mx-auto py-12">
          <h1 className="text-center mb-0"> Juan Sebastian Arboleda Polo</h1>
          <h2 className="text-center mt-2 mb-20 font-semibold text-neutral-700">
            Senior Customer Success Engineer{" "}
          </h2>
          {children}
        </main>
      </body>
    </html>
  );
}
