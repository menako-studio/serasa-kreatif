'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import SectionDescription from './SectionDescription'

const clients = [
  { name: 'Alobank', logo: '/assets/images/logo-partner/logo-alobank.png' },
  { name: 'Arkaff', logo: '/assets/images/logo-partner/logo-arkaff.png' },
  { name: 'BNI', logo: '/assets/images/logo-partner/logo-bni.png' },
  { name: 'BSI', logo: '/assets/images/logo-partner/logo-bsi.png' },
  { name: 'JAPO', logo: '/assets/images/logo-partner/logo-japo.png' },
  {
    name: 'JobStreet Express',
    logo: '/assets/images/logo-partner/logo-jobstreet-express.png',
  },
  { name: 'Lazada', logo: '/assets/images/logo-partner/logo-lazada.png' },
  {
    name: 'Primaya Hospital',
    logo: '/assets/images/logo-partner/logo-primaya-hospital.png',
  },
  { name: 'PUPR', logo: '/assets/images/logo-partner/logo-pupr.png' },
  { name: 'Roposo', logo: '/assets/images/logo-partner/logo-roposo.png' },
  { name: 'SR12', logo: '/assets/images/logo-partner/logo-sr12.png' },
  { name: 'SYH', logo: '/assets/images/logo-partner/logo-syh.png' },
]

export default function ClientLogos() {
  const [failed, setFailed] = useState({})

  return (
    <section className="section-padding">
      <style>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .logos-marquee {
          overflow: hidden;
          border-radius: 0.5rem;
          padding: 2rem 0;
            mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .logos-track {
          display: flex;
          gap: 2rem;
          animation: scrollLogos 12s linear infinite;
          will-change: transform;
          padding-left: 0;
        }

        .logos-marquee:hover .logos-track {
          animation-play-state: paused;
        }

        .logo-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          height: 90px;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .logo-item {
            min-width: 110px;
            height: 70px;
            padding: 0.75rem;
          }

          .logos-track {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="container-custom">
        <div className="mb-12">
          <SectionHeading>Trusted by these IMPACTFUL brands</SectionHeading>
          <SectionDescription>
            We have partnered with diverse local brands to transform their identity and elevate
            their digital presence.
          </SectionDescription>
        </div>

        <div className="logos-marquee">
          <div className="logos-track">
            {/* First set of logos */}
            {clients.map((client, index) => {
              const key = `${client.logo}-0-${index}`
              const isFailed = !!failed[key]

              return (
                <div key={key} className="logo-item">
                  <div className="flex h-14 w-full max-w-[130px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                    {isFailed ? (
                      <span className="text-center text-xs font-medium text-gray-400">
                        {client.name}
                      </span>
                    ) : (
                      <Image
                        src={client.logo || '/assets/clients/placeholder.svg'}
                        alt={client.name}
                        width={140}
                        height={60}
                        className="max-h-14 max-w-[120px] object-contain"
                        onError={() => setFailed((s) => ({ ...s, [key]: true }))}
                        quality={95}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              )
            })}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => {
              const key = `${client.logo}-1-${index}`
              const isFailed = !!failed[key]

              return (
                <div key={key} className="logo-item">
                  <div className="flex h-14 w-full max-w-[130px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                    {isFailed ? (
                      <span className="text-center text-xs font-medium text-gray-400">
                        {client.name}
                      </span>
                    ) : (
                      <Image
                        src={client.logo || '/assets/clients/placeholder.svg'}
                        alt={client.name}
                        width={140}
                        height={60}
                        className="max-h-14 max-w-[120px] object-contain"
                        onError={() => setFailed((s) => ({ ...s, [key]: true }))}
                        quality={95}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
