import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { UserProvider } from "./_context/UserContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Basket News",
    default: "Home / Basket News",
  },
  description: "Basketball website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-[#68452B] min-h-screen`}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
