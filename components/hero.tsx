import React from 'react';

interface IHeroProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    bgImage: string;
}

const Hero: React.FC<IHeroProps> = ({title, subtitle, children, bgImage}: IHeroProps) => {
    return (
        <section className='pt-[200px] pb-[180px] about__banner relative' style={{ background: `url(${bgImage})`  }}>
            <div className="overlay absolute top-0 left-0 h-full w-full bg-[#00000066] z-0"></div>
            <div className="text-white flex items-center justify-center flex-col h-full relative" data-aos="fade-right">
                <h1 className="text-white font-bold text-[3.71429em] mb-5">{title}</h1>
                <p className='text-[1.57143em] mb-4 text-center'>{subtitle}</p>
                <ul>
                    <li className="inline-block py-[4px] px-[22px] text-[10px] text-white bg-[#9064bf] rounded-[10rem]">
                        {children}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Hero
