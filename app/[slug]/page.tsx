import DigitalBusinessCard from '@/components/digital-business-card'
import { getContactBySlug, generateStaticParams } from '@/data/contacts';

// Export generateStaticParams for static generation (required for pre-rendering slugs)
export { generateStaticParams };

// 1. generateMetadata must be async
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const contact = getContactBySlug(slug);

    if (!contact) {
        return { title: 'Contact Not Found' };
    }

    return {
        title: `${contact.name} - Digital Business Card`,
        description: `Professional digital business card for ${contact.name}, ${contact.designation} of ${contact.company}`,
    };
}

// 2. DynamicCardPage (the default export) must also be async
export default async function DynamicCardPage({ params }: { params: Promise<{ slug: string }> }) {

    // Await params before accessing its properties
    const { slug } = await params;
    const contact = getContactBySlug(slug);

    if (!contact) {
        return (
            <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <p className="text-red-500">Error: Contact "{slug}" not found.</p>
            </main>
        );
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Pass the dynamic contact object to the component */}
            <DigitalBusinessCard contact={contact} />
        </main>
    );
}