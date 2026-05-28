import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Lock, KeyRound } from 'lucide-react'

interface SecretEntranceProps {
  onUnlock: () => void
}

export function SecretEntrance({ onUnlock }: SecretEntranceProps) {
  const [hovering, setHovering] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-smoke text-sm tracking-[0.3em] uppercase mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ここから先は、選ばれし者のみ
      </motion.p>

      <motion.button
        onClick={onUnlock}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="group relative flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={hovering ? { rotate: -15, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Lock className="w-16 h-16 text-crimson" strokeWidth={1.5} />
        </motion.div>

        <AnimatePresence>
          {hovering && (
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <KeyRound className="w-5 h-5 text-amber" />
            </motion.div>
          )}
        </AnimatePresence>

        <span className="font-display text-bone/60 tracking-[0.2em] text-lg">
          UNLOCK
        </span>
      </motion.button>

      <motion.div
        className="absolute bottom-8 text-smoke/40 text-xs tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        R O C K
      </motion.div>
    </motion.div>
  )
}
