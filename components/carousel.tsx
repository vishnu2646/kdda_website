'use client';
import React, { useState, useEffect } from 'react';
import './styles/carosel.css';

const Carousel: React.FC = () => {
    const [current, setCurrent] = useState<number>(0);

    const data = [
        {
            image: 'https://ik.imagekit.io/FDvishnu/Carosel/carosel1.jpg?updatedAt=1738331208147',
            subtitle: 'Homeless Children',
            title: 'Give a Helping Hand for Children',
        },
        {
            image: 'https://ik.imagekit.io/FDvishnu/Carosel/carosel2.jpg?updatedAt=1738331208197',
            subtitle: 'Homeless Children',
            title: 'Hunger us Stalking the globe',
        },
        {
            image: 'https://ik.imagekit.io/FDvishnu/Carosel/carosel3.jpg?updatedAt=1738331207954',
            subtitle: 'Homeless Children',
            title: 'Hunger us Stalking the globe',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            if(current === data.length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, 2500);
    });

    return (
        <>
            <div className='carousel'>
                <div className="carosel_wrapper">
                    {data.map((d, index) => (
                        <div
                            key={index}
                            style={{
                                height: '100%',
                                backgroundImage: `url(${d.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                objectFit: 'cover',
                            }}
                            className={index === current ? 'carosel_card carosel_card-active' : 'carosel_card'}
                        >
                            <div className="card_overlay">
                                <p className='text-center' data-aos="fade-up">{d.title}</p>
                                <p className='sub-title text-center' data-aos="fade-up">
                                    {d.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel_action_container">
                {data.map((_data, index) => (
                    <div
                        key={index}
                        className={`pointer${index === current ? ' active' : ''}`}
                        onClick={() => setCurrent(index)}
                    >
                    </div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
