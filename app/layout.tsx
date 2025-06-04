import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chelsea Fell",
  description: "Chelsea Fell's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
