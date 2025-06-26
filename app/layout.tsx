import type { Metadata } from "next";
import { AppLayout } from "./AppLayout";
import StyledComponentsRegistry from "@/lib/registry";

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
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
