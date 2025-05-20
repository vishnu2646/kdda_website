import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

interface WebsiteLayoutProps {
    children: React.ReactNode;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }: WebsiteLayoutProps) => {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}

export default WebsiteLayout
