import Hero from '@/components/hero'
import Services from '@/components/services'
import Team from '@/components/team'
import { Baby, HandHeart, Play, Users, Earth } from 'lucide-react'
import React from 'react'

const Page: React.FC = () => {

    const statistics = [
        { icon: <HandHeart width={70} height={70} className='text-white' />, label: '10M Causes' },
        { icon: <Users width={70} height={70} className='text-white' />, label: '10M Causes' },
        { icon: <Baby width={70} height={70} className='text-white' />, label: '10M Causes' },
        { icon: <Earth width={70} height={70} className='text-white' />, label: '10M Causes' },
    ];

    return (
        <section>
            {/* hero */}
            <Hero
                title='About Us'
                subtitle='Give a helping hand for poor people'
                bgImage='https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/about_bg.jpg'
            >
                <a href="https://wp.xpeedstudio.com/charitious">
                    Home
                </a> / About
            </Hero>
            {/* vission misson */}
            <section className="px-4 pt-24 md:px-[15px]">
                <div className="flex flex-col mx-4 md:mx-32 relative">
                    {/* Section Heading */}
                    <div className="mb-12 md:mb-20" data-aos="fade-up">
                        <h2 className="text-[#041d57] text-2xl md:text-[2.5em] text-center font-bold tracking-wide leading-10">
                            We are a Globian non-profit organization that{' '}
                            <span className="text-[#18bfc3]">supports</span> good causes and positive change all over the world.
                        </h2>
                    </div>

                    {/* Content Blocks */}
                    <div className="flex flex-col md:flex-row items-start justify-start w-full gap-10 md:gap-5">
                        {/* Our Mission Block */}
                        <div className="w-full md:w-1/3 mb-8 md:mb-0" data-aos="fade-up">
                            <h4 className="text-[#041d57] text-xl md:text-[1.5em] font-bold mb-5">Our Mission</h4>
                            <p className="text-[#54595f] font-light text-base md:text-[1em]">
                                The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable
                                named CharityPress something like that.
                            </p>
                        </div>

                        {/* Our Vision Block */}
                        <div className="w-full md:w-1/3 mb-8 md:mb-0" data-aos="fade-up">
                            <h4 className="text-[#041d57] text-xl md:text-[1.5em] font-bold mb-5">Our Vision</h4>
                            <p className="text-[#54595f] font-light text-base md:text-[1em]">
                                The Globian Fund for Charities seeks positive change around the world through support of non-profit organizations
                                dedicated to social, cultural.
                            </p>
                        </div>

                        {/* Our Values Block */}
                        <div className="w-full md:w-1/3" data-aos="fade-up">
                            <h4 className="text-[#041d57] text-xl md:text-[1.5em] font-bold mb-5">Our Values</h4>
                            <ul>
                                {['Accountability', 'Reliability', 'Cost-effectiveness', 'Personal service'].map((value, index) => (
                                    <li key={index} className="text-[#54595f] font-light mb-3 text-base md:text-[1em] flex items-center">
                                    <Play className="text-[#18bfc3] mr-2" width={20} height={15} />
                                    {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* providings */}
            <section
                className="about__banner py-[100px] px-4 md:px-10 lg:px-[44px] relative"
                style={{
                    background: 'url(https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/parallax_1.jpg)',
                }}
            >
                <div className="overlay absolute top-0 left-0 h-full w-full bg-[#00000066] z-0"></div>

                <div className="mx-auto my-0 relative z-10">
                    {/* Title */}
                    <div className="px-4 md:px-10 lg:px-44" data-aos="fade-up">
                        <h2 className="font-extrabold text-[2em] md:text-[2.5em] text-white text-center">
                            Our agency has been present for over 30 years. We make the best for all our children.
                        </h2>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20">
                        {statistics.map((stat, index) => (
                            <div key={index} className="flex items-center flex-col" data-aos="fade-down">
                                {stat.icon}
                                <p className="font-normal text-white text-[1.5em]">
                                    <b className="text-[1.8em]">{stat.label.split(' ')[0]}</b>
                                    {stat.label.split(' ')[1]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* services */}
            <Services isAboutPage={false}>
                <div className='mb-5' data-aos="zoom-in">
                    <h2 className='text-[#041d57] text-[2.5em] mb-5 text-left font-bold'>What We Do</h2>
                    <span className='border-b-[2px] border-b-[#041d57] border-dashed block w-4 ml-2' />
                </div>
                <p className='text-[#54595f] pr-[12%] font-light text-[1em] mb-5' data-aos="zoom-in">It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
            </Services>
            {/* team */}
            <section className='py-[80px] px-[50px] bg-[#f2f6f9]'>
                <Team>
                    <div className='flex'>
                        <div className='flex items-start justify-start flex-col w-full'>
                            <div className='mb-10' data-aos="fade-right">
                                <h2 className='text-[#041d57] text-[2.5em] mb-5 text-left font-bold'>Our Team</h2>
                                <span className='border-b-[2px] border-b-[#041d57] border-dashed block w-4 ml-2' />
                            </div>
                            <div data-aos="fade-left">
                                <p className='text-[#54595f] pr-[12%] font-normal text-[1.14286em] mb-5'>
                                    It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.
                                </p>
                            </div>
                        </div>
                        <div className='w-1/2 lg:block md:block hidden' />
                    </div>
                </Team>
            </section>
        </section>
    )
}

export default Page
