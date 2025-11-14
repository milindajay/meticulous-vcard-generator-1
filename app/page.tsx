import DigitalBusinessCard from '@/components/digital-business-card'
import { CONTACT_DATA } from '@/data/contacts'; // Import the data array

// This simulates fetching the correct user data.
// In a full Next.js dynamic route (e.g., app/bio/[slug]/page.tsx), 
// you would use the URL slug to look up the data.
const defaultContact = CONTACT_DATA[0];

export const metadata = {
  title: `${defaultContact.name} - Digital Business Card`,
  description: `Professional digital business card for ${defaultContact.name}, ${defaultContact.designation} of ${defaultContact.company}`,
}

export default function Home() {
  if (!defaultContact) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="text-red-500">Error: Contact data not found. Please ensure code/data/contacts.ts is set up correctly.</p>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Pass the dynamic contact object to the component */}
      <DigitalBusinessCard contact={defaultContact} />
    </main>
  )
}