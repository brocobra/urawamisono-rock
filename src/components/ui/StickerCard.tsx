interface StickerCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'alt'
}

export function StickerCard({ children, className = '', variant = 'default' }: StickerCardProps) {
  const rotate = variant === 'alt' ? 'rotate-[1.5deg]' : '-rotate-[1deg]'

  return (
    <div
      className={`bg-abyss border border-bone/10 p-6 ${rotate} shadow-[2px_3px_0_rgba(0,0,0,0.5)] ${className}`}
    >
      {children}
    </div>
  )
}
