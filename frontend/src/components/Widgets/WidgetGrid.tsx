import type { ReactNode } from 'react'

interface WidgetGridProps {
  children: ReactNode
}

export default function WidgetGrid({ children }: WidgetGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}