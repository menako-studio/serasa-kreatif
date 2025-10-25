import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CaseCard from '@/components/CaseCard'

describe('CaseCard', () => {
  const mockProps = {
    slug: 'test-case',
    title: 'Test Case Study',
    client: 'Test Client',
    category: 'Branding',
    image: '/test-image.jpg',
    description: 'Test description',
    metrics: [
      { label: 'Engagement', value: '+200%' },
      { label: 'Followers', value: '+5K' },
    ],
  }

  it('renders case card with correct data', () => {
    render(<CaseCard {...mockProps} />)
    
    expect(screen.getByText('Test Case Study')).toBeInTheDocument()
    expect(screen.getByText('Test Client')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders metrics when provided', () => {
    render(<CaseCard {...mockProps} />)
    
    expect(screen.getByText('+200%')).toBeInTheDocument()
    expect(screen.getByText('Engagement')).toBeInTheDocument()
    expect(screen.getByText('+5K')).toBeInTheDocument()
    expect(screen.getByText('Followers')).toBeInTheDocument()
  })

  it('has correct link href', () => {
    render(<CaseCard {...mockProps} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/work/test-case')
  })
})
