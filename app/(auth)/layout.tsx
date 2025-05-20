import Logo from '@/components/logo';
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className='relative flex h-screen w-full flex-col items-center justify-center'>
            <Logo />
            <div className="mt-12">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
