import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { SecretEntrance } from './components/sections/SecretEntrance'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Teacher } from './components/sections/Teacher'
import { Courses } from './components/sections/Courses'
import { Contact } from './components/sections/Contact'

function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="grain">
      <AnimatePresence>
        {!unlocked && <SecretEntrance onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <>
          <Header />
          <main>
            <Hero />
            <Teacher />
            <Courses />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
