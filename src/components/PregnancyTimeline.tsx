import { Reveal, Ring } from './ui'

const rings = [
  {
    p: 92,
    rc: '#e0648a',
    pct: '92',
    t: 'Baby Growth',
    v: 'On Track',
    s: 'Growing beautifully',
  },
  {
    p: 78,
    rc: '#8f76c9',
    pct: '78',
    t: "Mom's Wellness",
    v: 'Good',
    s: 'Feeling well',
  },
  {
    p: 64,
    rc: '#4e8a5c',
    pct: '64',
    t: 'Energy',
    v: 'Improving',
    s: 'More energy this week',
  },
]

export default function PregnancyTimeline() {
  return (
    <section className="py-[110px] bg-gradient-[180deg] from-cream via-[#fdf1ec] to-cream">
      <div className="container-x">

        {/* Heading + Newborn image */}
        <Reveal delay={0}>
          <div className="grid grid-cols-[1fr_420px] gap-12 items-center max-[900px]:grid-cols-1">

            {/* Heading */}
            <div className="text-left max-[900px]:text-center">
              

              <h2 className="font-display text-[clamp(44px,5vw,72px)] font-black leading-[.95] text-ink">
                Every stage.
                <br />
                Every change.
                <br />
                <em className="text-[#e0648a]">Every moment.</em>
              </h2>

              <p className="max-w-[600px] mt-6 text-[16px] leading-relaxed text-ink-faint">
                Follow your pregnancy journey and see how you and your baby
                grow together.
              </p>
            </div>

            {/* Newborn baby image */}
            <div className="relative h-[360px] rounded-[32px] overflow-hidden bg-rose-soft">
              <img
                src="assets/newborn.png"
                alt="Newborn baby"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[.08] to-transparent" />
            </div>

          </div>
        </Reveal>

        {/* Current pregnancy overview */}
        <Reveal delay={1}>
          <div className="bg-white rounded-[28px] shadow-card p-9 grid grid-cols-[auto_1fr] gap-10 items-center mt-14 border border-ink/[.08] max-[920px]:grid-cols-1 max-[920px]:gap-[26px]">

            <div className="text-center max-[920px]:border-b max-[920px]:border-ink/[.08] max-[920px]:pb-[26px] max-[920px]:pr-0 pr-10 border-r border-ink/[.08]">
              <div className="font-display text-[64px] font-black leading-none bg-gradient-to-br from-[#f19ab2] to-[#e0648a] bg-clip-text text-transparent">
                24
              </div>

              <div className="text-[13px] font-bold tracking-[.18em] uppercase text-ink-faint mt-2">
                Weeks along
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-1 max-[920px]:gap-5">
              {rings.map((r) => (
                <div key={r.t} className="flex items-center gap-4">
                  <Ring p={r.p} rc={r.rc}>
                    {r.pct}
                  </Ring>

                  <div>
                    <div className="text-[12px] font-semibold text-ink-faint uppercase tracking-[.08em]">
                      {r.t}
                    </div>

                    <div className="text-[16px] font-bold">
                      {r.v}
                    </div>

                    <div className="text-[12.5px] text-ink-faint">
                      {r.s}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}