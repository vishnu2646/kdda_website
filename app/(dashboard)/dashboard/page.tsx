'use client';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Clock, LocateIcon, MoreHorizontal, Pen, Plus, Trash2 } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import EventSkeleton from '@/components/eventSkeleton';
import { IEvents } from '@/types/types';

const eventSchema = z.object({
    eventname: z.string().min(1, 'Event Name is required'),
    eventdate: z.string().min(1, 'Event Date is required'),
    eventTime: z.string().min(1, 'Event Timing is required'),
    location: z.string().min(1, 'Location is required'),
    bgColor: z.string().min(1, 'Background Color is required'),
    coverImage: z.string().min(1, 'Please provide Cover Image url'),
    images: z.array(
        z.object({
            url: z.string().min(1, 'Please provide a valid URL for the image')
        })
    ),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function Page() {

    const [currentDate, setCurrentDate] = useState<Date | undefined>(new Date());

    const { control, handleSubmit, formState: { errors }, reset } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            eventname: '',
            eventdate: '',
            eventTime: '',
            location: '',
            bgColor: '',
            coverImage: '',
            images: [
                {
                    url: ''
                }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'images',
    });

    const mutation = useMutation({
        mutationFn: (data: EventFormData) => axios.post('/api/events', data)
    });

    const handleEventFormSubmit = async (data: EventFormData) => {
        mutation.mutate(data);
        reset();
    };

    const eventsList = useQuery<IEvents[]>({
        queryKey: ['events'],
        queryFn: () => fetch('/api/events').then(res => res.json()).catch(err => console.error(err)),
    });

    const eventData = eventsList.data ?? [];

    const deleteEvent = (event: IEvents) => {
        const { id } = event;
        return useQuery<IEvents>({
            queryKey: ['event'],
            queryFn: () => axios.delete(`/api/events/{id}`).then(res => res.data),
            enabled: !!id,
        });
    }

    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className='flex items-start gap-5'>
                    <form onSubmit={handleSubmit(handleEventFormSubmit)} className='space-y-4 flex-1'>
                        <h2 className="font-bold text-2xl">Add New Events</h2>
                        <div>
                            <Label htmlFor='eventname'>Event Name</Label>
                            <Controller
                                name='eventname'
                                control={control}
                                render={({field}) => <Input {...field} id='eventname' placeholder='Enter Event Name' />}
                            />
                            {errors.eventname && <span>{errors.eventname.message}</span>}
                        </div>

                        <div>
                            <Label htmlFor='eventdate'>Event Date</Label>
                            <Controller
                                name='eventdate'
                                control={control}
                                render={({field}) => <Input {...field} type='date' id='eventdate' />}
                            />
                            {errors.eventdate && <span>{errors.eventdate.message}</span>}
                        </div>

                        <div>
                            <Label htmlFor='eventTime'>Event Time</Label>
                            <Controller
                                name='eventTime'
                                control={control}
                                render={({field}) => <Input {...field} id='eventTime' placeholder='Enter Event Time' />}
                            />
                            {errors.eventTime && <span>{errors.eventTime.message}</span>}
                        </div>

                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Controller
                                name="location"
                                control={control}
                                render={({ field }) => <Input {...field} id="location" placeholder='Enter Event Location' />}
                            />
                            {errors.location && <span>{errors.location.message}</span>}
                        </div>

                        <div>
                            <Label htmlFor="bgColor">Background Color</Label>
                            <Controller
                                name="bgColor"
                                control={control}
                                render={({ field }) => <Input {...field} id="bgColor" placeholder='Enter background color' />}
                            />
                            {errors.bgColor && <span>{errors.bgColor.message}</span>}
                        </div>

                        <div>
                            <Label htmlFor="coverImg">Cover Image</Label>
                            <Controller
                                name="coverImage"
                                control={control}
                                render={({ field }) => <Input {...field} type="url" id="coverImg" placeholder='Enter Cover image url' />}
                            />
                            {errors.coverImage && <span>{errors.coverImage.message}</span>}
                        </div>

                        <div>
                            <Label>Images</Label>
                            {fields.map((item, index) => (
                                <div key={item.id} className="space-x-2 flex items-center mb-4">
                                    <Controller
                                        name={`images.${index}.url`}
                                        control={control}
                                        render={({ field }) => (
                                            <Input {...field} id='url' placeholder='Enter Image Url' />
                                        )}
                                    />
                                    <Button type="button" onClick={() => remove(index)}>
                                        <Trash2 />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant='success' onClick={() => append({ url: '' })}>
                                <Plus /> Add Image
                            </Button>
                            {errors.images && <span>{errors.images[0]?.url?.message}</span>}
                        </div>
                        <Button type="submit" variant='success'>Submit</Button>
                    </form>
                    <div className='space-y-4 sticky top-0'>
                        <div>
                            <h2 className='font-bold text-2xl mb-4'>Calender</h2>
                            <Calendar
                                mode='single'
                                selected={currentDate}
                                onSelect={setCurrentDate}
                                className='rounded-md border shadow'
                            />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl mb-4'>Events List</h2>
                            {eventData && eventData.map(event => (
                                <EventSkeleton isLoading={eventsList.isFetching}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                <div className='flex items-center justify-between'>
                                                    <p>{event.name}</p>
                                                    {/* <Trash2 className='text-red-500' width={15} height={15} onClick={() => deleteEvent(event)}/> */}
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>
                                                            <MoreHorizontal />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>
                                                                <Pen /> {' '}Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <div onClick={() => deleteEvent(event)}>
                                                                    <Trash2 />{' '}Delete
                                                                </div>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className='flex items-start gap-2'>
                                                <div>
                                                    <Image width={50} height={50} className='w-[50px] h-[50px]' src={event.cover_image} alt="event" />
                                                </div>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <LocateIcon width={15} height={15}/>
                                                        <p className='font-semibold text-lg'>
                                                            {event.location}
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <Clock width={15} height={15}/>
                                                        <p className='text-sm'>{event.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </EventSkeleton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
