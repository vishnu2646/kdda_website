import { services } from '@/app/data/data';
import React from 'react';

interface IServiceProps {
    children?: React.ReactNode;
    isAboutPage?: boolean;
}

const Services: React.FC<IServiceProps> = ({children, isAboutPage}: IServiceProps) => {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto relative flex flex-col items-center">
                {children}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg flex flex-col items-center text-center py-10 px-5 transition-shadow duration-300 ${
                                isAboutPage ? "shadow-xl" : "shadow-md hover:shadow-lg"
                            }`}
                            data-aos="fade-down"
                        >
                            <item.icon className={`w-14 h-14 mb-6 ${item.color}`} />
                            <h5 className="text-lg font-bold mb-3 text-[#041d57]">
                                {item.title}
                            </h5>
                            <p className="text-[#626c84] leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;


