'use client'

import { useState } from 'react'
import Image from 'next/image'

const clients = [
  { name: 'Japo', logo: '/assets/clients/japo.png' },
  { name: 'Pregnasia Spa', logo: '/assets/clients/pregnasia.png' },
  { name: 'Client 3', logo: '/assets/clients/client3.png' },
  { name: 'Client 4', logo: '/assets/clients/client4.png' },
  { name: 'Client 5', logo: '/assets/clients/client5.png' },
  { name: 'Client 6', logo: '/assets/clients/client6.png' },
]

export default function ClientLogos() {
  const [failed, setFailed] = useState({})

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Dipercaya Oleh Brand Lokal
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We&apos;ve partnered with innovative companies to transform their brands and elevate
            their social presence.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => {
            const key = client.logo || String(index)
            const isFailed = !!failed[key]

            return (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-6 grayscale transition-shadow hover:shadow-lg hover:grayscale-0"
              >
                <div className="relative flex h-16 w-full items-center justify-center">
                  {isFailed ? (
                    <span className="font-medium text-gray-400">{client.name}</span>
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
