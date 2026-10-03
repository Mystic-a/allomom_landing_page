import { Reveal, SectionHead } from './ui'



const items = [
  { dc: '#e0648a', d: 'Appointment · Oct 2', t: 'Routine prenatal checkup', s: 'Week 24 visit · blood pressure and growth check · reminder sent to you and your partner' },
  { dc: '#8f76c9', d: 'Report · Sep 28', t: 'Anatomy scan report uploaded', s: 'Stored securely in your records · summary view available for your next visit' },
  { dc: '#de8f4e', d: 'Lab · Sep 21', t: 'Glucose screening results', s: 'Within expected range · trend added to your wellness history' },
  { dc: '#4e8a5c', d: 'Milestone · Sep 18', t: 'First kick counting session', s: '10 movements in 28 minutes · shared with your partner' },
]

export default function HealthRecords() {
  return (
    <section className="bg-white rounded-[48px] mx-4 py-[110px]">
      <div className="container-x grid grid-cols-[.85fr_1.15fr] gap-[60px] items-start max-[920px]:grid-cols-1 max-[920px]:gap-[52px]">
        <div>
          <SectionHead
            
            title={
              <>
                Everything important, <em>in one place.</em>
              </>
            }
            lead="Appointments, reports, labs, milestones, and personal notes — organized into a single, calm health timeline you can actually use."
          />
          
        </div>
        <Reveal delay={2}>
          <div className="relative pl-[34px] before:content-[''] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-rose before:via-lav before:to-peach before:rounded-sm">
            {items.map((r) => (
              <div
                key={r.t}
                className="relative bg-cream border border-ink/[.08] rounded-[20px] px-6 py-5 mb-4 transition-all duration-500 hover:translate-x-2 hover:shadow-soft"
              >
                <span
                  className="absolute -left-[31px] top-[26px] w-[14px] h-[14px] rounded-full border-[3px] border-white shadow-[0_0_0_2px_var(--dc)]"
                  style={{ background: r.dc, ['--dc' as string]: r.dc }}
                />
                <div className="text-[12px] font-bold tracking-[.08em] uppercase mb-1" style={{ color: r.dc }}>
                  {r.d}
                </div>
                <div className="font-bold text-[15.5px] mb-[3px]">{r.t}</div>
                <div className="text-[13.5px] text-ink-soft">{r.s}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
