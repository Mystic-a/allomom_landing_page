import { Phone, Reveal, SectionHead } from './ui'

const features = [
  'Shared pregnancy journey',
  'Important updates & milestones',
  'Wellness information you approve',
  'Baby moments & kick counts',
  'Appointment reminders for two',
  'Support and connection, daily',
]

export default function PartnerSection() {
  return (
    <section id="families" className="py-[110px] pt-10">
      <div className="container-x grid grid-cols-2 gap-16 items-center max-[920px]:grid-cols-1 max-[920px]:gap-[52px]">
        <Reveal className="relative">
          <img
            src="assets/couple.png"
            alt="Expecting couple sharing a warm moment at home"
            className="rounded-[36px] shadow-lift aspect-[1.08] object-cover w-full"
          />
          <div className="absolute top-[7%] -right-[5%] bg-white/95 backdrop-blur rounded-2xl shadow-card px-4 py-[11px] text-[13px] font-semibold flex gap-2 items-center animate-float">
            💌 Week 24 update shared
          </div>
          <div className="absolute bottom-[9%] -left-[6%] bg-white/95 backdrop-blur rounded-2xl shadow-card px-4 py-[11px] text-[13px] font-semibold flex gap-2 items-center animate-float [animation-delay:1.5s]">
            👶 Baby kicked — 10 counts today
          </div>
        </Reveal>
        <div>
          <SectionHead
            color="green"
            className="mb-0"
          
            title={
              <>
                Motherhood is a journey <em>shared together.</em>
              </>
            }
            lead="Partners can stay connected to the journey — when, and only when, you choose to share. AlloMom keeps you both close to every milestone."
          />
          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-3.5 my-[30px]">
              {features.map((f) => (
                <div key={f} className="flex gap-[11px] items-start text-[14.5px] font-medium">
                  <span className="w-[22px] h-[22px] rounded-full bg-green-soft text-green-deep grid place-items-center text-[11px] shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
          
          
        </div>
      </div>
    </section>
  )
}
