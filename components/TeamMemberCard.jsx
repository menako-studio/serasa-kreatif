import Image from 'next/image'

/**
 * TeamMemberCard - Reusable team member display card
 */
export default function TeamMemberCard({ name, role, location, image }) {
  return (
    <div className="group">
      <div className="relative mb-6 aspect-square overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          quality={100}
          className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <h4 className="mb-2 font-sans text-lg font-bold uppercase tracking-tight">{name}</h4>
      <p className="mb-1 text-sm font-medium text-gray-600">{role}</p>
      <p className="text-xs text-gray-500">{location}</p>
    </div>
  )
}
