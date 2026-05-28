import { FadeIn } from '../../hooks/useScrollAnimation'
import { StickerCard } from '../ui/StickerCard'
import { Music, Award, Heart } from 'lucide-react'

export function Teacher() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl text-bone tracking-wider text-center mb-16">
            <span className="text-crimson">ABOUT</span> THE TEACHER
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0.1}>
            <StickerCard className="text-center">
              <Music className="w-8 h-8 text-crimson mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-display text-3xl text-bone">30</p>
              <p className="text-smoke text-sm mt-1">年の指導経験</p>
            </StickerCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <StickerCard variant="alt" className="text-center">
              <Award className="w-8 h-8 text-amber mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-display text-3xl text-bone">2,000</p>
              <p className="text-smoke text-sm mt-1">人以上を指導</p>
            </StickerCard>
          </FadeIn>

          <FadeIn delay={0.3}>
            <StickerCard className="text-center">
              <Heart className="w-8 h-8 text-crimson mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-display text-3xl text-bone">1歳〜</p>
              <p className="text-smoke text-sm mt-1">シニアまで対応</p>
            </StickerCard>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 border-l-2 border-crimson pl-6">
            <p className="text-bone/80 leading-relaxed">
              5歳でピアノを始め、洗足学園音楽大学卒業。中学校・高等学校音楽教員免許取得。
              Yamaha Music Schoolで30年間指導にあたり、2024年5月に独立開業。
              一人ひとりのペースに合わせた指導で、脳の発達と心の成長を育てます。
              軽度の発達障害のお子様にも配慮したレッスンが可能です。
            </p>
            <p className="mt-4 text-smoke text-sm">
              Yamaha C5 グランドピアノ / Yamaha Stagea ELS-02C エレクトーン完備
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
