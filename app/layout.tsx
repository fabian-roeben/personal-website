import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabian Roeben",
  description: "Personal academic website of Fabian Roeben",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}