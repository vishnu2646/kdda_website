'use client';
import EventSkeleton from '@/components/eventSkeleton';
import Hero from '@/components/hero'
import { IEvents } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

const Page: React.FC = () => {

    const params = useParams();

    const eventId = params.id;

    const event = useQuery<IEvents>({
        queryKey: ['event'],
        queryFn: () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`).then(res => res.json()).catch(err => console.log(err))
    });

    const eventData: IEvents = event.data ?? {} as IEvents;

    const { images } = eventData ?? [];

    return (
        <section>
            <Hero
                title={eventData.name}
                bgImage={eventData.cover_image}
                subtitle=''
            >
                <a href="/">
                    Home
                </a> / Events - {eventData.name}
            </Hero>

            <div className='max-w-screen-2xl mx-auto px-4 py-16 lg:py-24'>
                <EventSkeleton isLoading={event.isFetching}>
                    <div className="w-full h-[300px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${eventData.cover_image})` }}>
                    </div>
                </EventSkeleton>
            </div>

            <div className='max-w-screen-2xl mx-auto px-4 pb-16 lg:pb-24 pt-0'>
                <div>
                    <EventSkeleton isLoading={event.isFetching}>
                        <h2 className="text-[2.5em] font-bold mb-5 text-[#041D57]">Event Details & Images</h2>
                    </EventSkeleton>
                </div>
                <div className='flex flex-col md:flex-row items-start justify-between gap-5'>
                    {/* Image Section */}
                    <EventSkeleton isLoading={event.isFetching}>
                    <div className="flex-[2] w-full">
                        {images?.length > 0 &&
                            Array.from({ length: Math.ceil(images.length / 3) }).map((_, rowIndex) => {
                                const firstImage = images[rowIndex * 3];
                                const secondImage = images[rowIndex * 3 + 1];
                                const thirdImage = images[rowIndex * 3 + 2];

                                return (
                                    <div className="flex flex-col md:flex-row gap-2" key={rowIndex}>
                                        {/* Left section - 1 or 2 images */}
                                        <div className="flex flex-1 flex-col gap-2">
                                            {rowIndex % 2 === 0 ? (
                                                firstImage && (
                                                    <Image
                                                        className="object-cover h-full"
                                                        src={firstImage}
                                                        alt={`Event Image ${rowIndex * 3 + 1}`}
                                                    />
                                                )
                                            ) : (
                                                <>
                                                    {firstImage && (
                                                        <Image
                                                            className="object-cover h-full"
                                                            src={firstImage}
                                                            alt={`Event Image ${rowIndex * 3 + 1}`}
                                                        />
                                                    )}
                                                    {secondImage && (
                                                        <Image
                                                            className="object-cover h-full"
                                                            src={secondImage}
                                                            alt={`Event Image ${rowIndex * 3 + 2}`}
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        {/* Right section - 2 or 1 images */}
                                        <div className="flex flex-1 flex-row gap-2">
                                            {rowIndex % 2 === 0 ? (
                                                <>
                                                    {secondImage && (
                                                        <Image
                                                            className="object-cover h-full"
                                                            src={secondImage}
                                                            alt={`Event Image ${rowIndex * 3 + 2}`}
                                                        />
                                                    )}
                                                    {thirdImage && (
                                                        <Image
                                                            className="object-cover h-full"
                                                            src={thirdImage}
                                                            alt={`Event Image ${rowIndex * 3 + 3}`}
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                thirdImage && (
                                                    <Image
                                                        className="object-cover h-full"
                                                        src={thirdImage}
                                                        alt={`Event Image ${rowIndex * 3 + 3}`}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    </EventSkeleton>

                    {/* Event Details Section */}
                    <EventSkeleton isLoading={event.isFetching}>
                        <div className='flex-1 bg-[#f9f9f9] p-5 rounded-lg w-full md:w-auto'>
                            <div className='flex items-start gap-5'>
                                <div className='bg-[#041D57] px-4 py-5 rounded-md text-center'>
                                    <p className='text-white font-bold text-3xl'>{new Date(eventData.date).getDate()}</p>
                                    <p className='text-white font-medium text-xl'>{new Date(eventData.date).toLocaleString('default', { month: 'short' })}</p>
                                </div>
                                <div>
                                    <h2 className='text-[#2cc391] font-bold text-xl'>{eventData.name}</h2>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='text-left text-[#041d57] font-medium text-[1.07410em] p-3'>Orgaized By</td>
                                            <td className='text-right text-[#626c84] text-medium text-[1.07410em] p-3'>KDDA</td>
                                        </tr>
                                        <tr>
                                            <td className='text-left text-[#041d57] font-medium text-[1.07410em] p-3'>Venue</td>
                                            <td className='text-right text-[#626c84] text-medium text-[1.07410em] p-3'>{eventData.location}</td>
                                        </tr>
                                        <tr>
                                            <td className='text-left text-[#041d57] font-medium text-[1.07410em] p-3'>Phone</td>
                                            <td className='text-right text-[#626c84] text-medium text-[1.07410em] p-3'>7894561230</td>
                                        </tr>
                                        <tr>
                                            <td className='text-left text-[#041d57] font-medium text-[1.07410em] p-3'>Email</td>
                                            <td className='text-right text-[#626c84] text-medium text-[1.07410em] p-3'>test@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </EventSkeleton>
                </div>
            </div>
        </section>
    )
}

export default Page;
