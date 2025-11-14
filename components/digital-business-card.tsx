'use client'

import { useState } from 'react'
import { ChevronDown, Phone, Mail, MessageCircle, Building2, MapPin, Globe, Plus } from 'lucide-react'
import Image from 'next/image'
import { Contact } from '@/data/contacts' // Import Contact type

// Define the component props
interface DigitalBusinessCardProps {
  contact: Contact;
}

const DigitalBusinessCard = ({ contact }: DigitalBusinessCardProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Function to dynamically generate vCard based on props
  const handleAddContact = () => {
    // VCard Address format: ;;Street;City;State/Region;ZIP/Postal Code;Country
    const addressLine = `;;${contact.address.street};${contact.address.city};;${contact.address.zip};${contact.address.country}`;

    // --- VCARD CONTENT GENERATION ---
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
N:${contact.lastName};${contact.firstName};;;
TITLE:${contact.designation}
TEL;TYPE=CELL:${contact.phone}
EMAIL;TYPE=WORK:${contact.email}
ORG:${contact.company}
ADR;TYPE=WORK:${addressLine}
URL:${contact.website}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${contact.slug}.vcf` // Dynamic filename based on slug
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  // Clean phone number for wa.me link (removes +, spaces, etc.)
  const waNumber = contact.phone.replace(/[+\s-]/g, '');

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Header Section with Primary Color Teal Background */}
      <div className="bg-[#00babc] px-6 py-8 text-center">

        {/* Circular Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/images/meti-icon.png" // Path from public folder
              alt={`${contact.company} Logo`}
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* User Name (Dynamic) */}
        <h1 className="text-3xl font-bold text-white mb-2 font-sans">
          {contact.name}
        </h1>

        {/* Designation (Dynamic) */}
        <p className="text-white/90 text-sm mb-6 font-sans">
          {contact.designation}
        </p>

        {/* Add Contact Button (Dynamic Download) */}
        <button
          onClick={handleAddContact}
          className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors font-sans"
        >
          <Plus size={20} />
          Add contact
        </button>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white font-sans">

        {/* Contact Accordion */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('contact')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-gray-600" />
              <span className="text-lg font-semibold text-black">
                Contact
              </span>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-600 transition-transform duration-300 ${expandedSection === 'contact' ? 'rotate-180' : ''
                }`}
            />
          </button>

          {expandedSection === 'contact' && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-4">

              {/* Phone (Dynamic Link) */}
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Phone:
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-black hover:text-[#00babc] font-medium transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Email (Dynamic Link) */}
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Email:
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-black hover:text-[#00babc] font-medium transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp (Dynamic Link) */}
              <div className="flex items-start gap-4">
                <MessageCircle size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <a
                    href={`https://wa.me/${waNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#00babc] font-medium transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Company Accordion */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('company')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Building2 size={20} className="text-gray-600" />
              <span className="text-lg font-semibold text-black">
                Company
              </span>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-600 transition-transform duration-300 ${expandedSection === 'company' ? 'rotate-180' : ''
                }`}
            />
          </button>

          {expandedSection === 'company' && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-4">

              {/* Company Name (Dynamic) */}
              <div className="flex items-start gap-4">
                <Building2 size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Company:
                  </p>
                  <p className="text-black font-medium">
                    {contact.company}
                  </p>
                </div>
              </div>

              {/* Address (Dynamic) */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Address:
                  </p>
                  <p className="text-black font-medium">
                    {`${contact.address.street}, ${contact.address.city} ${contact.address.zip}`}
                  </p>
                  <p className="text-black font-medium">
                    {contact.address.country}
                  </p>
                </div>
              </div>

              {/* Website (Dynamic Link) */}
              <div className="flex items-start gap-4">
                <Globe size={20} className="text-[#00babc] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Website:
                  </p>
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#00babc] font-medium transition-colors"
                  >
                    {contact.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DigitalBusinessCard