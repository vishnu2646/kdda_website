import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const today = new Date();
        const formatTodayDate = today.toISOString().split('T')[0];
        const limit = 3;
        const events = await prisma.event.findMany({
            where: {
                eventdate: {
                    gte: formatTodayDate,
                }
            },
            take: limit
        });

        return Response.json(events);
    } catch (err) {
        console.log(err);
        return Response.json({ err: err });
    }
}