import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/components/Providers/ContextProvider";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import { Foot } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(inter.className)
  return (
    <html lang="en">
      <body className={cn(inter.className, " ")}>
        <ContextProvider>
          <ClerkProvider>
            <div className="overflow-x-hidden min-h-screen flex flex-col gap-5 justify-between min-w-screen">
              {/* <div id="blob"></div> */}
              <Nav />
              {children}
              <Foot />
            </div>
          </ClerkProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
