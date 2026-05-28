import { GlitchText } from '../ui/GlitchText'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-center bg-void/80 backdrop-blur-sm border-b border-bone/5">
      <GlitchText className="font-display text-bone/70 tracking-[0.25em] text-lg">
        さいたま浦和美園 音楽教室
      </GlitchText>
    </header>
  )
}
