import { FadeIn } from '../../hooks/useScrollAnimation'
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react'

const info = [
  { icon: MapPin, label: '住所', value: '埼玉県さいたま市岩槻区美園東2-40-82（〒339-0028）' },
  { icon: Phone, label: '電話', value: '090-1832-7342' },
  { icon: Mail, label: 'メール', value: 'saitama.urawamisono.piano.school@gmail.com' },
  { icon: Clock, label: '営業日時', value: '火・水・金・土・日 / 10:00〜20:00' },
  { icon: Car, label: '駐車場', value: 'あり' },
]

export function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl text-bone tracking-wider text-center mb-16">
            <span className="text-crimson">CONTACT</span> US
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {info.map(({ icon: Icon, label, value }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className="flex items-start gap-4 border-b border-bone/5 pb-4">
                <Icon className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-smoke text-xs tracking-wider mb-0.5">{label}</p>
                  <p className="text-bone/90 text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-bone-dim text-sm mb-2">まずは無料体験レッスンから</p>
            <a
              href="mailto:saitama.urawamisono.piano.school@gmail.com"
              className="inline-block bg-crimson hover:bg-crimson-dark text-bone font-display tracking-[0.2em] text-lg px-10 py-3 transition-colors"
            >
              無料体験に申し込む
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
