import Carousel from '@/components/carousel';
import Navbar from '@/components/navbar';
import Team from '@/components/team';
import Footer from '@/components/footer';
import { Locate } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Services from '@/components/services';
import Events from '@/components/events';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '@/components/countUp';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {

    return (
        <section>
            <Navbar />
            <Carousel />
            <section className='bg-[#2b3539] py-20'>
                <div className='flex mx-auto items-center relative px-[5%] w-full gap-5'>
                    <div data-aos="fade-up">
                        <p className='text-red-500 mb-5'>KDDT / KDDA</p>
                        <h1 className='text-white font-bold text-2xl tracking-wide'>தொண்டு நிறுவனம் உதவி செய்வதில் கவனம் செலுத்தும் தளத்தை உருவாக்கியுள்ளது</h1>
                        <div className='flex items-center gap-3 mt-5'>
                            <Locate
                                className='text-[#7b8183]'
                                width={15}
                                height={15}
                            />
                            <p className='text-[#7b8183] text-xs'>25 Mark Av. Adison St. New York, NY-12548</p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <h4 className='text-yellow-300 font-bold text-4xl'>24 <span className='text-white font-light text-xl'> Years Ago</span></h4>
                    </div>
                </div>
            </section>
            {/* about us */}
            <section className="py-16 px-6 md:px-[5%] bg-white">
                <div className="flex lg:flex-row flex-col items-center gap-7 justify-between">
                    <div className="text-center md:text-left">
                        <div className="mb-6" data-aos="fade-up">
                            <p className="text-red-500 text-xl md:text-2xl">About Us</p>
                        </div>
                        <div className="mb-4" data-aos="fade-up">
                            <h2
                                className="text-[#2b3539] text-2xl md:text-3xl lg:text-4xl font-medium leading-tight"
                            >
                                He who had never denied himself for the sake of giving
                            </h2>
                        </div>
                        <div className="mb-6 text-gray-700" data-aos="fade-up">
                            <p className="mb-3">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they
                                live in Bookmarksgrove.
                            </p>
                            <p>
                                Right at the coast of the Semantics, a large language ocean. A small
                                river named Duden flows by their place and supplies it.
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <Button className='px-6 py-2 rounded-3xl'>
                                <span className="text-sm font-semibold uppercase">
                                    Know More
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-up">
                        <Image
                            src="https://ik.imagekit.io/FDvishnu/Carosel/volentring.jpg?updatedAt=1738338502504"
                            width={800}
                            height={500}
                            className="w-full max-w-[800px] rounded-lg"
                            alt="about"
                        />
                    </div>
                </div>
            </section>
            {/* works */}
            <section className="w-full mt-10 px-6 md:px-16 lg:px-[10%] py-[5%] bg-[#e75a5a]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                        <h5 className="text-white font-bold text-3xl sm:text-4xl lg:text-[35px]">
                            <CountUp endNumber={3500} duration={3} />
                        </h5>
                        <p className="text-white uppercase font-light text-lg sm:text-xl lg:text-[30px] tracking-wide" data-aos="fade-up">Donations</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h5 className="text-white font-bold text-3xl sm:text-4xl lg:text-[35px]">
                            <CountUp endNumber={20} duration={3} />
                        </h5>
                        <p className="text-white uppercase font-light text-lg sm:text-xl lg:text-[30px] tracking-wide" data-aos="fade-up">Fund Raised</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h5 className="text-white font-bold text-3xl sm:text-4xl lg:text-[35px]">
                            <CountUp endNumber={500} duration={3} />
                        </h5>
                        <p className="text-white uppercase font-light text-lg sm:text-xl lg:text-[30px] tracking-wide" data-aos="fade-up">Volunteers</p>
                    </div>
                </div>
            </section>
            {/* services */}
            <Services isAboutPage={true}>
                <div className="p-4">
                    <div className="mb-5 w-full pb-9 text-center" data-aos="fade-left">
                        <h2 className="text-[#041d57] text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[70px]">
                            We’ve funded <span className="text-[#18bfc3]">120,000 charity projects</span> for <br className="hidden md:inline" />
                            20M people around the world.
                        </h2>
                    </div>
                </div>
            </Services>
            {/* causes */}
            <section className="py-20 px-4 md:px-10 lg:px-[100px] bg-[#f2f6f9]">
                <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left" data-aos="fade-up">
                    <div>
                        <h2 className="text-[#041d57] text-2xl md:text-4xl lg:text-[3.71429em] font-bold">
                            Popular Causes
                        </h2>
                        <span className="block h-[3px] w-[100px] bg-[#e23e57] mx-auto md:mx-0 my-4"></span>
                    </div>
                </div>
                <div className="mt-6" data-aos="fade-up">
                    <p className="text-[#626c84] text-sm md:text-base leading-relaxed">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        <br className="hidden md:block" />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the
                    </p>
                </div>
            </section>
            {/* events */}
            <Events isEventPage={true} />
            {/* teams */}
            <section className='py-[80px] px-[50px] bg-[#f2f6f9]'>
                <Team>
                    <div className='flex items-center justify-center' data-aos="fade-up">
                        <div>
                            <h2 className='text-[#041d57] text-[3.71429em]'>Meet Our Team</h2>
                            <span className='block h-[3px] w-[100px] bg-[#e23e57] mb-[23px] mt-[10px] m-auto'></span>
                        </div>
                    </div>
                </Team>
            </section>
            <Footer />
        </section>
    );
}

export default Page