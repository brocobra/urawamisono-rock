export const heavySpring = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
}

export const slowFade = {
  duration: 0.8,
  ease: 'easeOut' as const,
}

export const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
