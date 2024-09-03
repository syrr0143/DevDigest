import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "DevDigest",
    description: "Tech Blogs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="html1" lang="en">
            <body className={inter.className}>

                {children}
                <Toaster />
            </body>
        </html>
    );
}
