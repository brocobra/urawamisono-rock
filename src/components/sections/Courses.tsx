import { FadeIn } from '../../hooks/useScrollAnimation'
import { StickerCard } from '../ui/StickerCard'

const courses = [
  {
    title: '個人レッスン',
    fee: '入会金 10,000円',
    items: [
      { label: '月3回 40分', price: '10,000円/月' },
      { label: '月3回 60分', price: '13,000円/月' },
    ],
    note: '1歳〜シニアまで / 一人ひとりに合わせたカリキュラム',
    accent: 'crimson' as const,
  },
  {
    title: 'グループレッスン',
    fee: '入会金 5,000円',
    items: [
      { label: '3歳以下（3名まで）', price: '3,000円/月' },
    ],
    note: '10:00〜11:00 / 11:00〜 / 脳の発達を促す楽しいレッスン',
    accent: 'amber' as const,
  },
  {
    title: 'シニアレッスン',
    fee: '入会金 10,000円',
    items: [
      { label: '60歳以上 月2回 30分', price: '5,000円/月' },
    ],
    note: '9:00〜14:00の時間帯 / 無理なく続けられるペース',
    accent: 'crimson' as const,
  },
]

const accentMap = {
  crimson: { border: 'border-crimson', text: 'text-crimson' },
  amber: { border: 'border-amber', text: 'text-amber' },
}

export function Courses() {
  return (
    <section className="py-20 px-6 bg-abyss/50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl text-bone tracking-wider text-center mb-4">
            <span className="text-amber">LESSON</span> & PRICE
          </h2>
          <p className="text-center text-smoke text-sm mb-16">
            無料体験レッスンあり（30分）
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {courses.map((course, i) => {
            const style = accentMap[course.accent]
            return (
              <FadeIn key={course.title} delay={i * 0.15}>
                <StickerCard variant={i === 1 ? 'alt' : 'default'} className="h-full">
                  <h3 className={`font-display text-2xl ${style.text} tracking-wider mb-1`}>
                    {course.title}
                  </h3>
                  <p className="text-smoke text-xs mb-4">{course.fee}</p>

                  <div className="space-y-3 border-t border-bone/10 pt-4">
                    {course.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-bone text-sm">{item.label}</p>
                        <p className={`font-display text-xl ${style.text}`}>{item.price}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-smoke text-xs mt-4 leading-relaxed">{course.note}</p>
                </StickerCard>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
