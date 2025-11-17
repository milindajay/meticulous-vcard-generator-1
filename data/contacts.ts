export interface Contact {
    slug: string;
    name: string;
    firstName: string;
    lastName: string;
    designation: string;
    phone: string;
    email: string;
    company: string;
    address: {
        street: string;
        city: string;
        zip: string;
        country: string;
    };
    website: string;
}

// --- CENTRAL DATA SOURCE ---
export const CONTACT_DATA: Contact[] = [
    // MILINDA JOHN
    {
        slug: 'milinda-john',
        name: 'Milinda John',
        firstName: 'Milinda',
        lastName: 'John',
        designation: 'S. Executive - Maintenance & Transport',
        phone: '+94774042419',
        email: 'milinda@meticulous.lk',
        company: 'Mr Meticulous Cleaning Services (PVT) Ltd.',
        address: {
            street: '73/47A, Saranankara Place',
            city: 'Colombo',
            zip: '06',
            country: 'Sri Lanka',
        },
        website: 'https://www.meticulous.lk',
    },
    // CHARITH WIJEGUNASINGHE
    {
        slug: 'charith-wijegunasinghe',
        name: 'Charith Wijegunasinghe',
        firstName: 'Charith',
        lastName: 'Wijegunasinghe',
        designation: 'General Manager',
        phone: '+94766009055',
        email: 'gm@meticulous.lk',
        company: 'Mr Meticulous Cleaning Services (PVT) Ltd.',
        address: {
            street: '73/47A, Saranankara Place',
            city: 'Colombo',
            zip: '06',
            country: 'Sri Lanka',
        },
        website: 'https://www.meticulous.lk',
    },
    // DUSHAN JAYASINGHE
    {
        slug: 'dushan-jayasinghe',
        name: 'Dushan Jayasinghe',
        firstName: 'Dushan',
        lastName: 'Jayasinghe',
        designation: 'Manager - Maintenance & Transport',
        phone: '+94779028416',
        email: 'maintenance@meticulous.lk',
        company: 'Mr Meticulous Cleaning Services (PVT) Ltd.',
        address: {
            street: '73/47A, Saranankara Place',
            city: 'Colombo',
            zip: '06',
            country: 'Sri Lanka',
        },
        website: 'https://www.meticulous.lk',
    },
    // Ravindra Ranaveera
    {
        slug: 'ravindra-ranaveera',
        name: 'Ravindra Ranaveera',
        firstName: 'Ravindra',
        lastName: 'Ranaveera',
        designation: 'Manager - Operations',
        phone: '+94766007654',
        email: 'ravindra@meticulous.lk',
        company: 'Mr Meticulous Cleaning Services (PVT) Ltd.',
        address: {
            street: '73/47A, Saranankara Place',
            city: 'Colombo',
            zip: '06',
            country: 'Sri Lanka',
        },
        website: 'https://www.meticulous.lk',
    },
];

// Helper to get contact by slug
export const getContactBySlug = (slug: string): Contact | undefined => {
    return CONTACT_DATA.find(contact => contact.slug === slug);
};

// Helper for Next.js to pre-render all slugs
export async function generateStaticParams() {
    return CONTACT_DATA.map((contact) => ({
        slug: contact.slug,
    }));
}