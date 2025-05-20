import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string }  }) {
    const eventId = params.id;

    if(!eventId) {
        return NextResponse.json({ 'message': 'Invalid event id' }, { 'status': 400 })
    }

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(eventId),
            },
            include: {
                images: {
                    select: {
                        url: true
                    }
                }
            }
        });

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        return NextResponse.json(event, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ error });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const eventId = params.id;
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(eventId)
            }
        });

        if(!event) {
            return Response.json({ 'message': 'No Event to delete' });
        }

        const deleteEvent = await prisma.event.delete({
            where: {
                id: parseInt(eventId)
            }
        });

        return Response.json({ 'message': 'Event has been deleted', deleteEvent });

    } catch (error) {
        console.log(error);
        return Response.json({error, 'message': 'Failed to delete or something went wrong' });
    }
}