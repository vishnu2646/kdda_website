'use client';
import Hero from '@/components/hero'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Mail, MailCheck, MapPin, Pen, Phone, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <p>Loading map...</p>;
    }

    const contactData = [
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/contact-info-img-1.png',
            phone: '+91 8610701802',
            mail: 'jeeva751@gmail.com',
            address: 'Plot 57, GKS Nagar Opposite GOVT, ITI, Hosur'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/contact-info-img-2.png',
            phone: '+91 8610701802',
            mail: 'jeeva751@gmail.com',
            address: 'Plot 57, GKS Nagar Opposite GOVT, ITI, Hosur'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/contact-info-img-3.png',
            phone: '+91 8610701802',
            mail: 'jeeva751@gmail.com',
            address: 'Plot 57, GKS Nagar Opposite GOVT, ITI, Hosur'
        },
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        // Handle form input changes here
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response: any = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/send-email`, formData);
            if(response.message) {
                alert(response.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    return (
        <section>
            {/* Hero */}
            <Hero
                title='Contact Us'
                subtitle='Give a helping hand for poor people'
                bgImage='https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/contact_bg.jpg'
            >
                <a href="/contact">
                    Home
                </a> / Contact
            </Hero>
            <section className="mx-4 mt-[-140px] relative">
                <div className="max-w-[1140px] mx-auto my-0">
                    <div className="bg-[#041d57] mb-16 p-12 w-full">
                        <div className="mr-5">
                            {/* Heading */}
                            <div className="w-full mb-5">
                                <h2 className="text-white font-semibold text-3xl" data-aos="fade-up">Drop us a line</h2>
                            </div>

                            {/* Contact Form and Map */}
                            <div className="w-full flex flex-col md:flex-row gap-10">
                                {/* Form Section */}
                                <form className="w-full md:w-1/2" data-aos="fade-up">
                                    <div className="mb-7 flex items-center w-full">
                                        <input
                                            type="text"
                                            className="w-full outline-none text-white px-7 bg-transparent border-[#c8c8c84d] border-2 h-[60px] border-r-0"
                                            placeholder="Enter Your Name"
                                            name='name'
                                            onChange={handleChange}
                                        />
                                        <div className="h-[60px] border-2 border-[#c8c8c84d] border-l-0 flex items-center">
                                            <User className="text-[#c8c8c84d] p-5" />
                                        </div>
                                    </div>

                                    <div className="mb-7 flex items-center w-full">
                                        <input
                                            type="email"
                                            name='email'
                                            onChange={handleChange}
                                            className="w-full outline-none text-white px-7 bg-transparent border-[#c8c8c84d] border-2 h-[60px] border-r-0"
                                            placeholder="Enter Your EmailId"
                                        />
                                        <div className="h-[60px] border-2 border-[#c8c8c84d] border-l-0 flex items-center">
                                            <Mail className="text-[#c8c8c84d] p-5" />
                                        </div>
                                    </div>

                                    <div className="mb-7 flex items-center w-full">
                                        <textarea
                                            name='message'
                                            onChange={handleChange}
                                            className="w-full outline-none text-white px-7 py-5 h-32 bg-transparent border-[#c8c8c84d] border-2"
                                            placeholder="Enter Your Message"
                                        />
                                    </div>
                                    <Button className='px-6 py-2 rounded-3xl' onClick={(e) => handleSendEmail(e)}>
                                        <span className="text-white text-sm font-semibold">Send Message</span>
                                        <Pen className="text-white ml-2" width={15} height={15} />
                                    </Button>
                                </form>

                                {/* Map Section */}
                                <div className="w-full md:w-1/2" data-aos="fade-up">
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20MRQ4+RX2,%20Hosur,%20Tamil%20Nadu%20635110+(KDDA%20TITAN%20TOWNSHIP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 mb-[100px]">
                <div className="max-w-[1140px] mx-auto my-0">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        {contactData.map((contact, index) => (
                            <div key={index} className="text-center" data-aos="flip-left">
                                {/* Contact Image */}
                                <div className="mb-10">
                                    <img src={contact.image} alt={`contact-${index}`} className="mx-auto" />
                                </div>
                                {/* Contact Details */}
                                <ul className="xs-unorder-list">
                                    <li className="text-[#626c84] flex items-center mb-5 text-sm">
                                        <Phone className="text-[#3ac798] mr-2" width={15} height={15} />
                                        {contact.phone}
                                    </li>
                                    <li className="text-[#626c84] flex items-center mb-5 text-sm">
                                        <MailCheck className="text-[#3ac798] mr-2" width={15} height={15} />
                                        {contact.mail}
                                    </li>
                                    <li className="text-[#626c84] flex items-center mb-5 text-sm">
                                        <MapPin className="text-[#3ac798] mr-2" width={15} height={15} />
                                        {contact.address}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Page
