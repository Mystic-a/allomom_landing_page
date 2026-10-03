import { Disclaimer, Phone, Reveal, SectionHead } from './ui'

const insights = [
  {  t: 'Health Insight', d: 'Your activity has increased this week.' },
  {  t: 'Sleep Insight', d: 'Your sleep duration improved by 42 minutes.' },
  {  t: 'Mood Insight', d: 'Your wellbeing trend is positive.' },
]

export default function AIInsights() {
  return (
    <section id="ai-care" className="py-[110px]">
      <div className="container-x grid grid-cols-[1.1fr_.9fr] gap-14 items-center max-[920px]:grid-cols-1 max-[920px]:gap-[52px]">
        <div>
          <SectionHead
            color="lav"
            className="mb-9"
            
            title={
              <>
                AI that <em>understands</em> your journey.
              </>
            }
            lead="AlloMom turns your health and wellness data into simple, personalized insights that help you understand patterns and changes throughout motherhood."
          />
          <div className="flex flex-col gap-3.5">
            {insights.map((n, i) => (
              <Reveal
                key={n.t}
                delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
                className="flex gap-4 bg-white border border-ink/[.08] rounded-[20px] px-[22px] py-[18px] shadow-soft transition-all duration-500 hover:translate-x-2 hover:shadow-card"
              >
                
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[.1em] text-ink-faint mb-0.5">{n.t}</div>
                  <div className="text-[15px] font-semibold">{n.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-7">
            
          </div>
        </div>
        <Reveal delay={2} className="relative grid place-items-center">
          <div className="absolute w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,#efe9fa,transparent_65%)] -z-0" />
          <Phone src="assets/app-agents.png" alt="AlloMom specialized AI care agents including AlloCry, kick counter, feeding tracker and daily activity" className="!w-[264px]" />
        </Reveal>
      </div>
    </section>
  )
}
