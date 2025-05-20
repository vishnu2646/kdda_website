import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const events = await prisma.event.findMany();

        return Response.json(events);
    } catch (err) {
        console.error(err);
        return Response.json({ err: err });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { images, ...eventData } = body;

        await prisma.event.create({
            data: {
                ...eventData,
                images: {
                    create: images.map((image: { url: string }) => ({
                        url: image.url,
                    })),
                },
            },
        });

        return Response.json({ "message": 'Event Posted Successfully', });
    } catch (err) {
        console.log(err);
        return Response.json({ err: err });
    }
}