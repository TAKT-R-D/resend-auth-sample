import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magic Link Auth Sample",
  description:
    "Next.js + NextAuth ver.5 Magic Link Auth with middleware sample",
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
