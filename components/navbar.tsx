'use client';
import { Facebook, Mail, Menu, X, Youtube } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            routeName: 'KRISHNAGIRI DEAF DUMB TRUST / ASSOCIATION',
            route: '/',
        },
        {
            routeName: 'Home',
            route: '/',
        },
        {
            routeName: 'About',
            route: '/about',
        },
        {
            routeName: 'Services',
            route: '/services',
        },
        {
            routeName: 'Event',
            route: '/events',
        },
        {
            routeName: 'Contact',
            route: '/contact',
        },
    ];

    return (
        <>
            <header className="py-3 bg-[#079bbb] top-bar px-[10%] md:block hidden">
                <ul className="flex items-center justify-end gap-5">
                    <li className="mr-auto text-white text-xs">Contact: +91 8610701802</li>
                    <li className="text-white text-xs">
                        <Mail width={15} height={15} />
                    </li>
                    <li className="text-white text-xs">
                        <Facebook width={15} height={15} />
                    </li>
                    <li className="text-white text-xs">
                        <Youtube width={15} height={15} />
                    </li>
                </ul>
            </header>

            <nav className="shadow-sm bg-white">
                {/* Main Navbar Links */}
                <ul className="w-full hidden md:flex justify-end items-center px-5 py-5 gap-5">
                    {navLinks.map((link, index) => (
                        <li
                            className={`h-[60px] ${index === 0 && 'mr-auto'}`}
                            key={index}
                        >
                            <Link
                                href={`${link.route}`}
                                className="h-full px-4 flex items-center text-black font-semibold hover:bg-[#f0f0f0]"
                            >
                                {link.routeName}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Navbar Title and Hamburger */}
                <div className="flex items-center justify-between px-5 py-3 md:hidden">
                    <h1 className="font-semibold text-md">
                        <Link href="/">KRISHNAGIRI DEAF & DUMB ASSOCIATION</Link>
                    </h1>
                    <Button
                        className="block md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        variant='outline'
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute z-10 w-full flex flex-col bg-white px-5 py-3 transition-all ease-in-out duration-300 ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.route}
                            className={`block py-2 text-black font-medium hover:bg-gray-100 transition-all ${index === 0 && 'hidden'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.routeName}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
