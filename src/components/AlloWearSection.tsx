import { Phone, Reveal, SectionHead } from './ui'

const features = [
  { t: 'Real-Time Sync', d: 'Wellness data flows from AlloWear to AlloMom the moment it happens.' },
  { t: 'Smart Alerts', d: 'Gentle nudges when your body may need rest, water, or a slower pace.' },
  { t: 'Health Insights', d: 'Wearable trends become simple, readable insight cards in AlloMom.' },
  { t: 'Secure & Private', d: 'Your data stays encrypted and belongs to you — always.' },
]



export default function AlloWearSection() {
  return (
    <section
      id="allowear"
      className="rounded-[48px] mx-4 my-[110px] py-[110px] bg-rose-soft text-ink-soft overflow-hidden"
    >
      <div className="container-x">

        <div className="max-w-[1100px] mx-auto">

          <SectionHead
            center
            color="rose"
            className="mb-0 mx-auto [&_.h2]:text-ink-soft [&_.h2_em]:!text-rose-deep [&_.lead]:!text-ink-soft/70"
            title={
              <>
                Your health.
                <br />
                <em>Connected in real time.</em>
              </>
            }
            lead="AlloWear works seamlessly with AlloMom to bring relevant wellness data into your maternal health journey — quietly, accurately, and always in your control."
          />

          <div className="grid grid-cols-[minmax(0,420px)_1fr] gap-10 items-center mt-[50px] max-[860px]:grid-cols-1 max-[860px]:gap-8">

            <Reveal className="relative">
              <div className="rounded-[28px] overflow-hidden border border-rose/20 shadow-[0_30px_80px_rgba(217,107,138,.25)]">
                <img
                  src="/assets/allowear-bracelet.jpg"
                  alt="AlloWear smart bracelet worn on wrist"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
            </Reveal>

            <div className="grid grid-cols-1 gap-3.5">
              {features.map((f, i) => (
                <Reveal
                  key={f.t}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                  className="bg-white/80 border border-rose/15 rounded-[20px] px-5 py-[18px] shadow-soft backdrop-blur-md transition-all duration-500 hover:bg-white hover:-translate-y-1"
                >
                  <div className="text-[12px] font-bold tracking-[.14em] uppercase text-rose-deep mb-1.5">
                    {f.t}
                  </div>

                  <div className="text-[13.5px] text-ink-soft/70">
                    {f.d}
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

          
        </div>

      </div>
    </section>
  )
}