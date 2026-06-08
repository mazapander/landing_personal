import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      {title && <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h2>}
      {children}
    </section>
  )
}