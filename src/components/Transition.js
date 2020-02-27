import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Transition = ({ location, children }) => {
  const [loaded, setLoaded] = useState(false)
  const transitionDuration = 0.5
  const transitionDelay = 0.55

  useEffect(() => {
    setLoaded(true)
    return () => {
      setLoaded(false)
    }
  }, [])

  return (
    <main>
      {loaded && (
        <AnimatePresence>
          <motion.div
            id="transition-content"
            key={location.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: transitionDelay } }}
            exit={{ opacity: 0, transition: { duration: transitionDuration } }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  )
}

export default Transition
