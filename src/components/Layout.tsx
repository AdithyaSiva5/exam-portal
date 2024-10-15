// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Exam Portal",
    description: "Online exam portal for students",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class"> {/* Wrap your layout in ThemeProvider */}
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </ThemeProvider>
    );
}
