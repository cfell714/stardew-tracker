import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stardew Tracker",
  description: "Stardew Tracker website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
