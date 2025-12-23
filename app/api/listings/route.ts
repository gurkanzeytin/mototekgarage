import { NextResponse } from 'next/server';
import { getListings } from '../../../lib/airtable';

export const dynamic = 'force-dynamic'; // Disable static caching for this route

export async function GET(request: Request) {
    try {
        // In a real implementation, we would extract search params here
        // const { searchParams } = new URL(request.url);
        // const brand = searchParams.get('brand');

        // For now, fetch all and filter client-side or we can improve getListings to accept formula
        const listings = await getListings();

        return NextResponse.json(listings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 });
    }
}
