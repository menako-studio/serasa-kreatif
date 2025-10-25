'use client'

import { useState } from 'react'
import Image from 'next/image'

const clients = [
  { name: 'Alobank', logo: '/assets/images/logo-partner/logo-alobank.png' },
  { name: 'Arkaff', logo: '/assets/images/logo-partner/logo-arkaff.png' },
  { name: 'BNI', logo: '/assets/images/logo-partner/logo-bni.png' },
  { name: 'BSI', logo: '/assets/images/logo-partner/logo-bsi.png' },
  { name: 'JAPO', logo: '/assets/images/logo-partner/logo-japo.png' },
  { name: 'JobStreet Express', logo: '/assets/images/logo-partner/logo-jobstreet-express.png' },
  { name: 'Lazada', logo: '/assets/images/logo-partner/logo-lazada.png' },
  { name: 'Primaya Hospital', logo: '/assets/images/logo-partner/logo-primaya-hospital.png' },
  { name: 'PUPR', logo: '/assets/images/logo-partner/logo-pupr.png' },
  { name: 'Roposo', logo: '/assets/images/logo-partner/logo-roposo.png' },
  { name: 'SR12', logo: '/assets/images/logo-partner/logo-sr12.png' },
  { name: 'SYH', logo: '/assets/images/logo-partner/logo-syh.png' },
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
            Kami telah bekerja sama dengan berbagai brand lokal untuk mentransformasi identitas dan
            kehadiran digital mereka.
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
                <div className="relative flex h-16 w-full max-w-[160px] items-center justify-center px-2">
                  {isFailed ? (
                    <span className="font-medium text-gray-400">{client.name}</span>
                  ) : (
                    <Image
                      src={client.logo || '/assets/clients/placeholder.svg'}
                      alt={client.name}
                      width={200}
                      height={80}
                      className="max-h-[56px] max-w-[140px] object-contain"
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
