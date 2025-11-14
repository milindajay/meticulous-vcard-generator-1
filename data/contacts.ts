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
    // MILINDA JOHN (Example User 1)
    {
        slug: 'milinda-john',
        name: 'Milinda John',
        firstName: 'Milinda',
        lastName: 'John',
        designation: 'S. Executive - Maintenance',
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

    // JANE SMITH (Example User 2) - Add all your employees here
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