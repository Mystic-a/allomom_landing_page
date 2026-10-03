import { useState, type FormEvent } from 'react'

const products = [
  'AlloMom',
  'AlloWear',
  'AlloBaby',
  'AlloDoc',
  'AlloLab',
  'AlloGate',
  'AlloKonnect',
  'SaveMom Nurse',
  'AlloBoT',
]

const company = ['About Us', 'Privacy Policy', 'Terms of Service', 'Contact Us']

export default function Footer() {
  const [msg, setMsg] = useState('')

  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsg('Thank you — you\u2019re on the list for gentle, useful insights.')
    e.currentTarget.reset()
  }

  return (
    <footer className="bg-rose-soft text-ink-soft mt-[110px] rounded-t-[48px]">
      <div className="container-x">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-12 py-20 pb-14 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div>
            <div className="font-display text-[30px] text-ink-soft font-semibold mb-3.5">
              AlloMom<span className="text-rose"></span>
            </div>
            <p className="text-[14px] leading-[1.7] max-w-[300px]">
              Technology that cares, quietly. Where thoughtful design meets compassionate maternal support.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[.2em] uppercase text-ink-faint mb-5">Products</h4>
            <ul className="list-none flex flex-col gap-3">
              {products.map((p) => (
                <li key={p}>
                  <a href="#" className="text-[14.5px] text-ink-soft/80 transition-all duration-300 hover:text-rose-deep hover:pl-1">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[.2em] uppercase text-ink-faint mb-5">Company</h4>
            <ul className="list-none flex flex-col gap-3">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-[14.5px] text-ink-soft/80 transition-all duration-300 hover:text-rose-deep hover:pl-1">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[22px] text-ink-soft font-black mb-2.5">
              Stay connected to better maternal health.
            </h4>
            <p className="text-[13.5px] mb-5">Join mothers receiving curated insights on maternal wellness and technology.</p>
            <form
              onSubmit={subscribe}
              className="flex bg-white border border-rose/25 rounded-full p-[5px] shadow-soft transition-colors focus-within:border-rose"
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-ink-soft text-[14px] px-[18px] py-2.5 placeholder:text-ink-faint"
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-[#f19ab2] to-[#e0648a] text-white text-[12px] font-bold tracking-[.12em] px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="text-[13px] text-green-deep mt-3 min-h-[20px]">{msg}</div>
          </div>
        </div>
        <div className="border-t border-rose/20 py-[26px] flex justify-between items-center gap-4 flex-wrap text-[13px] text-ink-faint">
          <span>&copy; 2026 SaveMom. All rights reserved.</span>
          <span>
            Made with care for mothers and babies <span className="text-rose">&#10084;</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
