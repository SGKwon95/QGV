import { useState, useEffect } from 'react'

export function useEffectOnce(effect: () => void | (() => void)) {
  const mounted = { current: false }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      const cleanup = effect()
      return cleanup
    }
  }, [])
}

export function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return
      handler()
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export function useIntersectionObserver(threshold: number = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { setRef, isVisible }
}
