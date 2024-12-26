import { NextRequest, NextResponse } from 'next/server';
import client from '@lib/db';

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const user = await client.users.findMany({});
        return NextResponse.json(user);
    }catch(e){
        return NextResponse.json({
            error: true,
            messages: e.toString(),
        });
    }
}