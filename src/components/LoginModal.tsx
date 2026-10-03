import { useEffect } from 'react'

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-ink/50 backdrop-blur-md z-[200] grid place-items-center p-5 animate-fadein"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative bg-white rounded-[32px] p-11 w-full max-w-[420px] shadow-lift animate-modalin">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream grid place-items-center text-[15px] transition-all duration-300 hover:bg-rose-soft hover:rotate-90"
        >
          &times;
        </button>
        <h3 className="font-display text-[27px] font-black mb-1.5">Welcome back</h3>
        <p className="text-[14px] text-ink-soft mb-7">Sign in to continue your motherhood journey.</p>
        <form onSubmit={(e) => { e.preventDefault(); onClose() }}>
          <label htmlFor="lemail" className="block text-[12.5px] font-semibold tracking-[.06em] uppercase text-ink-faint mb-[7px] ml-1">
            Email
          </label>
          <input
            type="email"
            id="lemail"
            placeholder="you@example.com"
            required
            className="w-full border-[1.5px] border-ink/[.08] rounded-[14px] px-[18px] py-[13px] text-[14.5px] outline-none transition-colors mb-[18px] bg-cream focus:border-rose"
          />
          <label htmlFor="lpass" className="block text-[12.5px] font-semibold tracking-[.06em] uppercase text-ink-faint mb-[7px] ml-1">
            Password
          </label>
          <input
            type="password"
            id="lpass"
            placeholder="Your password"
            required
            className="w-full border-[1.5px] border-ink/[.08] rounded-[14px] px-[18px] py-[13px] text-[14.5px] outline-none transition-colors mb-[18px] bg-cream focus:border-rose"
          />
          <button type="submit" className="btn-primary w-full">
            Log in
          </button>
        </form>
        <div className="text-center text-[13px] text-ink-faint mt-[18px]">
          New to AlloMom?{' '}
          <a href="#" className="text-rose-deep font-semibold">
            Create your account
          </a>
        </div>
      </div>
    </div>
  )
}
