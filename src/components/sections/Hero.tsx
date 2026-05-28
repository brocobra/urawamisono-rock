import { motion } from 'motion/react'
import { FadeIn } from '../../hooks/useScrollAnimation'
import { GlitchText } from '../ui/GlitchText'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-14 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0D0D0D_70%)]" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-crimson font-display tracking-[0.4em] text-sm mb-4 uppercase">
          The Hidden Stage
        </p>

        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tight">
          <GlitchText className="text-bone">
            さいたま
          </GlitchText>
          <br />
          <GlitchText className="text-crimson">
            浦和美園
          </GlitchText>
          <br />
          <GlitchText className="text-amber">
            音楽教室
          </GlitchText>
        </h1>

        <FadeIn delay={0.4}>
          <p className="mt-8 text-bone-dim text-lg max-w-md mx-auto leading-relaxed">
            「やってみようかな？」と思った時が、<br />
            素質の目覚め
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mt-4 text-smoke text-sm tracking-wider">
            1歳 〜 シニアまで / 脳と心と自信を育てる
          </p>
        </FadeIn>
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-smoke/30 text-xs tracking-[0.5em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        SCROLL DOWN
      </motion.div>
    </section>
  )
}
