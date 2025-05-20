import Hero from '@/components/hero'
import React from 'react'

const Page: React.FC = () => {

    const serviceData = [
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_1.jpg',
            title: 'Food',
            color: '#fa575d',
            description: 'In Balukhali Camp in Cox’s Bazar, Bangladesh, women lack privacy, safe places to sleep, sufficient sanitation facilities and mental health support.'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_2.jpg',
            title: 'Health',
            color: '#9064bf',
            description: '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies, empower give kids more time in school.'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_3.jpg',
            title: 'Education',
            color: '#369ff4',
            description: 'For $10,000 or more you can fully fund a water project for a community or a school. 100% funds clean water projects. Ask for donations instead of gifts.'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_4-1.jpg',
            title: 'Water',
            color: '#9064bf',
            description: 'In Balukhali Camp in Cox’s Bazar, Bangladesh, women lack privacy, safe places to sleep, sufficient sanitation facilities and mental health support.'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_5-1.jpg',
            title: 'Cave',
            color: '#ffca0a',
            description: '663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies, empower give kids more time in school.'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/causes_6-1.jpg',
            title: 'Funding',
            color: '#fe813a',
            description: 'For $10,000 or more you can fully fund a water project for a community or a school. 100% funds clean water projects. Ask for donations instead of gifts.'
        }
    ];

    return (
        <section>
            {/* Hero */}
            <Hero
                title='Services'
                subtitle='Give a helping hand for poor people'
                bgImage='https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/volunteer_bg.jpg'
            >
                <a href="https://wp.xpeedstudio.com/charitious">
                    Home
                </a> / Service
            </Hero>
            <main className="py-[100px] px-4">
                <div className="max-w-[1140px] mx-auto">
                    {/* Services Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceData.map((service, index) => (
                            <div
                                key={index}
                                className={`shadow-md ${index > 2 ? 'mt-10' : ''}`}
                                data-aos="zoom-in"
                            >
                                <div className="w-full h-[270px] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={`service-${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-full p-6 text-center">
                                    <h2
                                        className="text-[2em] mb-4 font-medium"
                                        style={{ color: service.color }}
                                    >
                                        {service.title}
                                    </h2>
                                    <p className="text-[#041D57] text-sm">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Page
