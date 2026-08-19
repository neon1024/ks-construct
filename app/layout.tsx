import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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
    title: "KS Construct",
    description: "KS Construct is a construction firm based in France.",
    keywords: ["KS Construct"],
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
