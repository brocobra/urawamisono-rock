import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 text-center border-t border-bone/5">
      <p className="text-smoke text-sm tracking-wider">
        さいたま浦和美園 音楽教室 — 裏
      </p>
      <a
        href="https://urawamisono-piano.com"
        className="inline-flex items-center gap-1.5 mt-3 text-sm text-bone-dim hover:text-amber transition-colors"
      >
        表へ戻る
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </footer>
  )
}
