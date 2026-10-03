import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Wraps children in a scroll-reveal container. `as` defaults to div. */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const d = delay ? ` delay-${delay}` : ''
  return (
    <div ref={ref} className={`reveal${d} ${className}`}>
      {children}
    </div>
  )
}

/** Section label pill (rose | lav | green variants). */
export function Eyebrow({ children, color = 'rose' }: { children: ReactNode; color?: 'rose' | 'lav' | 'green' }) {
  const styles = {
    rose: 'bg-rose-soft text-rose-deep',
    lav: 'bg-lav-soft text-lav-text',
    green: 'bg-green-soft text-green-deep',
  } as const
  const dot = { rose: 'bg-rose', lav: 'bg-lav', green: 'bg-green' } as const
  return (
    <div className={`inline-flex items-center gap-2 text-[12px] font-bold tracking-[.22em] uppercase px-4 py-2 rounded-full mb-[22px] ${styles[color]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot[color]}`} />
      {children}
    </div>
  )
}

export function SectionHead({
  eyebrow,
  color,
  title,
  lead,
  center = false,
  className = '',
}: {
  eyebrow?: string
  color?: 'rose' | 'lav' | 'green'
  title: ReactNode
  lead?: string
  center?: boolean
  className?: string
}) {
  return (
    <Reveal className={`max-w-[680px] mb-14 ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow color={color}>{eyebrow}</Eyebrow>}
      <h2 className="h2">{title}</h2>
      {lead && <p className={`lead ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </Reveal>
  )
}

/** Smartphone mockup frame. */
export function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

/** SVG progress ring; fills to --p percent once revealed. */
export function Ring({
  p,
  rc = '#e0648a',
  size = 88,
  children,
}: {
  p: number
  rc?: string
  size?: number
  children?: ReactNode
}) {
  return (
    <div className="progress-ring" style={{ ['--p' as string]: p, ['--rc' as string]: rc, width: size, height: size }}>
      <svg viewBox="0 0 88 88">
        <circle className="bgc" cx="44" cy="44" r="38" />
        <circle className="fgc" cx="44" cy="44" r="38" />
      </svg>
      <div className="pct">{children}</div>
    </div>
  )
}

/** Number that counts up when scrolled into view. */
export function Counter({
  target,
  decimals = 0,
  suffix = '',
}: {
  target: number
  decimals?: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const dur = 1600
        const tick = (t: number) => {
          const prog = Math.min((t - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - prog, 3)
          setValue(target * eased)
          if (prog < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return (
    <span ref={ref}>
      {(decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()) + suffix}
    </span>
  )
}

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function ArrowDown({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}

export function SendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

/** Medical/AI disclaimer banner. */
export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <Reveal className="flex gap-3 items-start bg-gold-soft border border-[#f0dfb8] rounded-[20px] px-5 py-4 text-[13px] text-[#8a6b1f] leading-[1.55]">
      <span className="text-[18px]">&#9432;</span>
      <span>{children}</span>
    </Reveal>
  )
}
