import { useEffect, useState } from 'react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#ai-care', label: 'AI Care' },
  { href: '#allowear', label: 'AlloWear' },
  { href: '#families', label: 'For Families' },
  { href: '#about', label: 'About' },
]

export default function Navbar({ onLogin }: { onLogin: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled ? 'bg-cream/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(42,35,32,.07)]' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-5">
          <a
            href="#"
            className="text-[26px] tracking-[-0.02em] flex items-center gap-2.5"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
          >
            <img
              src="/assets/logo.png"
              alt="AlloMom logo"
              className="w-9 h-9 rounded-full object-cover bg-white shadow-[0_4px_12px_rgba(206,78,113,.25)]"
            />
            AlloMom<span className="text-rose text-[20px] -translate-y-px"></span>
          </a>
          <ul className="hidden lg:flex items-center gap-[34px] list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors py-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-rose after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={onLogin}
              className="hidden lg:inline-block bg-ink text-cream text-[14px] font-semibold px-[26px] py-[11px] rounded-full transition-all duration-300 hover:bg-rose-deep hover:shadow-[0_10px_24px_rgba(206,78,113,.35)] hover:-translate-y-0.5"
            >
              Log in
            </button>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
            >
              <span className={`w-6 h-[2px] bg-ink rounded transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink rounded transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed top-16 left-4 right-4 bg-white rounded-3xl shadow-lift p-5 z-[79] border border-ink/[.06] flex-col gap-1 ${
          open ? 'flex animate-menin' : 'hidden'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="px-4 py-[13px] rounded-[14px] font-medium text-ink-soft hover:bg-cream hover:text-ink transition-colors"
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={() => {
            close()
            onLogin()
          }}
          className="bg-ink text-cream text-center font-semibold px-[26px] py-[13px] rounded-full mt-2"
        >
          Log in
        </button>
      </div>
    </>
  )
}
