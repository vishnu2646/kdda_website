'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Clock, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import EventSkeleton from './eventSkeleton';
import { IEvents } from '@/types/types';
import { Button } from './ui/button';
import Link from 'next/link';
import Countdown from './counter';

interface IEventProps {
    isEventPage: boolean;
}

const Events: React.FC<IEventProps> = ({isEventPage}: IEventProps) => {

    const queryUrl = isEventPage
        ? `${process.env.NEXT_PUBLIC_API_URL}/events/limit`
        : `${process.env.NEXT_PUBLIC_API_URL}/events`;

    const eventsList: UseQueryResult<IEvents[], Error> = useQuery<IEvents[]>({
            queryKey: ['events'],
            queryFn: () => fetch(queryUrl).then(res => res.json()).catch(err => console.log(err))
        });

    const eventData: IEvents[] = eventsList.data ?? [];

    const renderEventContent = () => {
        return (
            <>
                {isEventPage && (
                    <div className="mb-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center" data-aos="fade-up">
                            <div>
                                <h2 className="text-[#041d57] text-3xl md:text-[3.5em] font-bold mb-7">Upcoming Events</h2>
                                <span className="block h-[3px] w-[100px] bg-[#e23e57] my-3"></span>
                            </div>
                            {eventData.length > 0 && (
                                <Link href='/events'>
                                    <Button className="px-6 py-2 rounded-3xl mt-4 md:mt-0">
                                        <span className="text-sm font-semibold uppercase">View All</span>
                                    </Button>
                                </Link>
                            )}
                        </div>
                        <p className="text-[#2b3539] mt-3 text-sm md:text-base" data-aos="fade-up">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, <br />
                            a large language ocean.
                        </p>
                    </div>
                )}
            </>
        )
    }

    if(eventData.length === 0) {
        return (
            <section className="px-6 py-12 md:px-12 lg:px-24">
                {renderEventContent()}
                <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <h1>No Upcomming Events to display</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="px-6 py-12 md:px-12 lg:px-24">
            {renderEventContent()}
            {/* Events List */}
            <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {eventData && eventData.length > 0 && eventData.map((event, index) => {
                    const eventDate = new Date(event.date);
                    const day = eventDate.getDate();
                    const month = eventDate.toLocaleString('default', { month: 'short' });

                    return (
                        <EventSkeleton isLoading={eventsList.isFetching} key={index}>
                            <Link href={`/events/${event.id}`} key={index}>
                                <div className="shadow-lg rounded-lg overflow-hidden bg-white" data-aos="zoom-in">
                                    {/* Event Image */}
                                    <div className="relative">
                                        <Image
                                            src={event.cover_image}
                                            alt="Event"
                                            width={400}
                                            height={400}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-0 left-0 z-10 bg-opacity-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={event.background_color}
                                                viewBox="0 0 112 112"
                                                preserveAspectRatio="none"
                                                width="112"
                                                height="112"
                                                className="absolute top-0 left-0"
                                            >
                                                <path fillRule="evenodd" d="M0.000,112.000 L112.000,0.000 L0.000,0.000 L0.000,112.000 Z"></path>
                                            </svg>
                                            <div className="text-white p-3 text-xs relative z-20">
                                                <strong className="text-[2.2em] font-medium">{day}</strong> <br /> {month}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Countdown Timer Placeholder */}
                                    <Countdown eventDate={event.date} bgColor={event.background_color} />

                                    {/* Event Details */}
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold text-[#2cc391] mb-2">{event.name}</h4>
                                        <div className="flex items-center gap-2 text-[#777777] text-sm mb-2">
                                            <Clock width={15} height={15} />
                                            <p>{event.time}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#777777] text-sm">
                                            <LocateIcon width={15} height={15} />
                                            <p>{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </EventSkeleton>
                    );
                })}
            </div>
        </section>
    )
}

export default Events
