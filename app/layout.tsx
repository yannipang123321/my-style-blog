import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "命運對號室 | The Destiny Node",
  description: "在潛意識的象限裡，給你的命運對個號。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}