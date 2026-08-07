import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KS Construction",
    description: "KS Construction is a construction firm based in France.",
    keywords: ["KS Construction"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <html
                lang="en"
                className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            >
                <body className="min-h-full flex flex-col">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </>
    );
}
