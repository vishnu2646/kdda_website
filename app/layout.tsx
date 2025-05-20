'use client';
import { useEffect } from "react";
import { Poppins, Open_Sans } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RootProviders from "@/components/providers/RootProviders";
import "./globals.css";

const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
})

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Customize the duration
            easing: 'ease-in-out',
            once: false,  // If true, the animation will only occur once
        });

        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                AOS.refresh();
            });
        };
    }, []);

    return (
            <html lang="en" className="light" style={{
                colorScheme: 'light',
            }}>
                <head>
                    <title>KDDT / KDDA</title>
                </head>
                <body
                    className={`${poppins.className} ${openSans.className}`}
                >
                    <RootProviders>
                        {children}
                    </RootProviders>
                </body>
            </html>
    );
}
