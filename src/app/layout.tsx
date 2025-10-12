import { MetaData } from "@/lib/config";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/index.css";
import { Layout } from "@layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = MetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
