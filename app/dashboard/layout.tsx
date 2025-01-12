import { Metadata } from "next";
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Providers } from "@/components/Navbar/themes/provider";
import Sidebar from "@/components/sidebar/Sidebar";
import PrimaryNavigation from "@/components/Navbar/PrimaryNavigation";
import Bottombar from "@/components/Navbar/Bottombar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  Message,
  Request,
  feed,
}: Readonly<{ 
  children: React.ReactNode,
  Message: React.ReactNode,
  Request: React.ReactNode,
  feed: React.ReactNode
}>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col md:flex-row min-h-screen font-sans font-semibold bg-black dark:bg-gray-900">
            {/* Sidebar */}
            <div className="hidden md:block bg-instagram-secondary">
              <Sidebar />
            </div>
            <div className="flex-1 flex flex-col bg-white dark:bg-black">
              <PrimaryNavigation />
              <main className="flex flex-row items-center justify-center  gap-2 bg-white dark:bg-black">
                <div>{children}</div>
                <div className="flex flex-row gap-3 items-center justify-around w-full">
                  <div>{feed}</div>
                  <div  className="flex flex-col mt-10  gap-20 md:hidden lg:flex xsm:hidden">
                    <div>{Request}</div>
                    <div>{Message}</div>
                  </div>
                </div>
              </main>
              <div className="block md:hidden fixed inset-x-0 bottom-0 bg-black dark:bg-black">
                <Bottombar />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
