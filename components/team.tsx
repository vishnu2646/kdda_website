import Image from 'next/image';
import React from 'react';

interface ITeamProps {
    children: React.ReactNode;
}

const Team:React.FC<ITeamProps> = ({children}: ITeamProps) => {
    const members = [
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/team_1.png',
            name: 'William Khanna',
            position: 'CEO & FOUNDER',
            color: '#fa575d'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/team_2.png',
            name: 'Mr.Aladin',
            position: 'Volunteer',
            color: '#9064bf'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/team_3.png',
            name: 'Zummon Khan',
            position: 'CEO & FOUNDER',
            color: '#379ff4'
        },
        {
            image: 'https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/team_4.png',
            name: 'Harista Pro',
            position: 'Volunteer',
            color: '#fe813a'
        },
    ]
    return (
        <section>
            {children}
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10' data-aos="fade-right">
                {members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image
                            width={218}
                            height={340}
                            alt='member'
                            src={member.image}
                        />
                        <div className='relative px-4 py-6 items-center flex flex-col min-h-36 z-[1] w-full'>
                            <h4 className='mb-2 font-bold text-2xl text-white'>William Khanna</h4>
                            <small className='text-sm text-white'>CEO &amp; Founder</small>
                            <svg
                                className="absolute top-0 left-0 h-full w-full z-[-1]"
                                fill={member.color}
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 270 138"
                                style={{
                                    filter: 'drop-shadow(8px 0px 16px rgba(0, 0, 0, 0.2))'
                                }}
                            >
                                <path className="fill-color" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team
