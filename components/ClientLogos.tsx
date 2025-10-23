"use client"

import { useState } from 'react'
import Image from 'next/image'

interface ClientLogo {
  name: string
  logo: string
}

const clients: ClientLogo[] = [
  { name: 'Japo', logo: '/assets/clients/japo.png' },
  { name: 'Pregnasia Spa', logo: '/assets/clients/pregnasia.png' },
  { name: 'Client 3', logo: '/assets/clients/client3.png' },
  { name: 'Client 4', logo: '/assets/clients/client4.png' },
  { name: 'Client 5', logo: '/assets/clients/client5.png' },
  { name: 'Client 6', logo: '/assets/clients/client6.png' },
]

export default function ClientLogos() {
  const [failed, setFailed] = useState<Record<string, boolean>>({})

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Dipercaya Oleh Brand Lokal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;ve partnered with innovative companies to transform their brands and elevate their
            social presence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => {
            const key = client.logo || String(index)
            const isFailed = !!failed[key]

            return (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow grayscale hover:grayscale-0"
              >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      {isFailed ? (
                        <span className="text-gray-400 font-medium">{client.name}</span>
                      ) : (
                        <Image
                          src={client.logo || '/assets/clients/placeholder.svg'}
                          alt={client.name}
                          width={200}
                          height={80}
                          className="object-contain"
                          onError={() => setFailed((s) => ({ ...s, [key]: true }))}
                        />
                      )}
                    </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
