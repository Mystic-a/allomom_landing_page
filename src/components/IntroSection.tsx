import { Phone, Reveal, SectionHead } from './ui'

const tags = [
  { cls: 'top-[15%] left-[1%]', ico: 'bg-rose-soft', e: '👩', label: 'Mother profile', delay: '.3s' },

  { cls: 'top-[16%] right-[-2%]', ico: 'bg-lav-soft', e: '💌', label: 'Health metrics', delay: '1.4s' },

  { cls: 'bottom-[20%] left-[-4%]', ico: 'bg-green-soft', e: '📆', label: 'Pregnancy timeline', delay: '2s' },

  { cls: 'bottom-[20%] right-[-5%]', ico: 'bg-peach-soft', e: '👶', label: 'Baby development', delay: '.9s' },

  { cls: 'top-[40%] -left-[10%] max-[600px]:hidden', ico: 'bg-[#e3f0fb]', e: '💡', label: 'Wellness insights', delay: '1.8s' },

  { cls: 'top-[45%] right-[-8%] max-[600px]:hidden', ico: 'bg-rose-soft', e: '🌸', label: 'Period cycle tracker', delay: '1.1s' },
]



export default function IntroSection() {
  return (
    <section id="about" className="bg-white rounded-[48px] mx-4 py-[110px]">
      <div className="container-x">
        <SectionHead
          center
          title={
            <>
              More than tracking.
              <br />
              <em>Care that grows with you.</em>
            </>
          }
          lead="AlloMom brings your health, wellbeing, pregnancy journey, and everyday routines together in one intelligent companion — helping you understand how you're doing and supporting you through every stage of motherhood."
        />
        <Reveal delay={2}>
          <div className="relative max-w-[940px] my-16 mx-auto grid place-items-center">
            <div className="absolute inset-x-[12%] inset-y-[8%] bg-gradient-[135deg] from-rose-soft via-peach-soft to-lav-soft rounded-[60px]" />
            <div className="absolute w-[640px] h-[640px] max-w-[92vw] border-[2.5px] border-dashed border-ink/10 rounded-full animate-spin-slow" />
            <Phone src="assets/app-home.png" alt="AlloMom app home screen with daily greeting and quick actions" />
            {tags.map((t) => (
              <div
                key={t.label}
                className={`absolute flex items-center gap-2.5 bg-white rounded-[18px] shadow-card px-[18px] py-[13px] text-[13.5px] font-semibold z-[3] animate-float-slow ${t.cls}`}
                style={{ animationDelay: t.delay }}
              >
                <span className={`w-8 h-8 rounded-[10px] grid place-items-center text-[15px] ${t.ico}`}>{t.e}</span>
                {t.label}
              </div>
            ))}
          </div>
        </Reveal>
        
      </div>
    </section>
  )
}
