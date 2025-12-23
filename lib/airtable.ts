import Airtable, { Attachment, FieldSet, Record } from 'airtable';
import { Motorcycle } from '../types';

// Validate environment variables
const AIRTABLE_CONFIGURED = !!(process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE);

if (!AIRTABLE_CONFIGURED) {
    console.warn('Airtable environment variables missing. App will run with empty data.');
}

const base = AIRTABLE_CONFIGURED
    ? new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID!)
    : null;

const table = base ? base(process.env.AIRTABLE_TABLE!) : null;

// Helper to sanitize formula inputs
const escapeFormula = (str: string) => {
    return str.replace(/'/g, "\\'");
};

// Helper to safely convert Airtable fields to string
const ensureString = (value: any): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value) && value.length > 0) return String(value[0]); // Handle lookup/arrays
    if (value === null || value === undefined) return '';
    return String(value);
}

// Helper to safely convert Airtable fields to number
const ensureNumber = (value: any): number => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
        // Remove non-numeric chars immediately if it contains currency symbols etc, but be careful of decimals.
        // Assuming integer prices for motorcycles.
        const cleaned = value.replace(/[^0-9.]/g, '');
        return parseFloat(cleaned) || 0;
    }
    return 0;
}

// Helper to map Airtable record to our TypeScript type
const mapRecordToMotorcycle = (record: Record<FieldSet>): Motorcycle => {
    const fields = record.fields;

    // Handle currency safely - Default to TL if missing
    const currency = 'TL';

    // DEBUG: Log fields to check Image field name and structure
    console.log('--- AIRTABLE DEBUG ---');
    console.log('Fields keys:', Object.keys(fields));
    // Log only the keys of the Images object/array to avoid massive output if it's huge, or just stringify a bit
    // But since we want to see if it is valid, let's just log it.
    if (fields.Images) {
        console.log('Images field type:', typeof fields.Images);
        console.log('Images field isArray:', Array.isArray(fields.Images));
        console.log('First Image sample:', JSON.stringify((fields.Images as any[])[0], null, 2));
    } else {
        console.log('Images field is missing or undefined');
    }

    // Handle images safely (Airtable Attachment type)
    // Keys are Capitalized based on inspection
    const attachments = (fields.Images as Attachment[]) || [];
    const images = attachments.map(att => att.url);

    // Fallback specs
    const specs = {
        'Silindir': 'Belirtilmedi',
        'Soğutma': 'Sıvı',
        'Yakıt': 'Benzin',
        'ABS': fields.ABS ? 'Var' : 'Yok',
        'Yıl': ensureNumber(fields.Year).toString()
    };

    return {
        id: record.id,
        slug: ensureString(fields.Slug) || record.id,
        title: ensureString(fields.Title) || 'Başlıksız İlan',
        price: ensureNumber(fields.Price),
        currency: currency, // fields.Currency might be undefined
        year: ensureNumber(fields.Year) || new Date().getFullYear(),
        km: ensureNumber(fields.KM),
        engine_cc: ensureNumber(fields['Engine CC']),
        brand: ensureString(fields.Brand) || 'Diğer',
        model: ensureString(fields.Model) || '',
        type: (fields.Type as any) || 'Naked',
        abs: !!fields.ABS,
        description: ensureString(fields.Description) || ensureString(fields['Summary (AI)']) || '',
        status: (fields.Status as any) || 'available',
        images: images.length > 0 ? images : ['https://via.placeholder.com/800x600?text=No+Image'],
        specs: specs
    };
};

export const getListings = async (filters: any = {}) => {
    try {
        if (!table) return []; // Graceful fallback

        const records = await table.select({
            // Filter by Status (case-insensitive check)
            filterByFormula: "LOWER({Status}) = 'available'",
            // Removed sort to prevent errors with unknown fields
        }).all();

        return records.map(mapRecordToMotorcycle);
    } catch (error) {
        console.error('Airtable Fetch Error:', error);
        return [];
    }
};

export const getListingBySlug = async (slug: string) => {
    try {
        if (!table) return null; // Graceful fallback

        const records = await table.select({
            filterByFormula: `{Slug} = '${escapeFormula(slug)}'`, // Capitalized Slug
            maxRecords: 1
        }).firstPage();

        if (records.length === 0) return null;
        return mapRecordToMotorcycle(records[0]);
    } catch (error) {
        console.error('Airtable Fetch Single Error:', error);
        return null;
    }
};
