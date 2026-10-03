import { useEffect, useRef, useState } from 'react'
import { Disclaimer, Reveal, SectionHead, SendIcon } from './ui'

interface Msg {
  role: 'user' | 'ai' | 'typing'
  text: string
}

const suggested = [
  'How has my sleep changed this month?',
  'How am I doing this week?',
  'What should I discuss with my doctor?',
  'Show me my wellness trends.',
  
]

const answers: Record<string, string> = {
  'how has my sleep changed this month?':
    'This month, your average sleep is 7h 12m — about 24 minutes more than last month. Your deep sleep has improved on rest days, and a consistent bedtime seems to help most.',
  'how am i doing this week?':
    'This week looks steady: activity is up 8%, sleep is near your usual range, and stress has stayed low. Your wellness score is 92 — a strong week overall.',
  'what should i discuss with my doctor?':
    "Based on your recent logs, you may want to mention your afternoon energy dips, last week's sleep changes, and your hydration average of 1.8 L. AlloMom can compile these into a simple visit summary.",
  'show me my wellness trends.':
    'Over the last 8 weeks your recovery trend is improving (+11%), resting heart rate is stable, and sleep quality is trending upward. Activity is slightly below your 4-week average this week.',
}

const fallback =
  "Thanks for asking. Based on your recent data, everything looks broadly steady — but I'd recommend chatting with your healthcare provider for anything specific or concerning. You can also ask me about your sleep, activity, stress, or wellness trends."

const initial: Msg[] = [
  { role: 'user', text: 'Why have I been feeling more tired this week?' },
  {
    role: 'ai',
    text: 'Your recent sleep duration appears slightly lower than your usual pattern. You may want to prioritize rest and hydration. If your fatigue feels unusual, severe, or concerning, consider speaking with your healthcare provider.',
  },
]

export default function AIChat() {
  const [msgs, setMsgs] = useState<Msg[]>(initial)
  const [input, setInput] = useState('')
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs])

  const ask = (q: string) => {
    const question = q.trim()
    if (!question) return
    setMsgs((m) => [...m, { role: 'user', text: question }])
    setTimeout(() => setMsgs((m) => [...m, { role: 'typing', text: '' }]), 350)
    setTimeout(() => {
      setMsgs((m) => [
        ...m.filter((x) => x.role !== 'typing'),
        { role: 'ai', text: answers[question.toLowerCase()] ?? fallback },
      ])
    }, 1500)
  }

  return (
    <section className="py-[110px]">
      <div className="container-x grid grid-cols-[.9fr_1.1fr] gap-[60px] items-center max-[920px]:grid-cols-1 max-[920px]:gap-[52px]">
        <div>
          <SectionHead
            color="lav"
            className="mb-0"
            
            title={
              <>
                Questions about your journey? <em>Just ask.</em>
              </>
            }
            lead="Allobot understands your wellness data and answers in plain, reassuring language — day or night."
          />
          <div className="flex flex-col gap-3 mt-[30px]">
            {suggested.map((q, i) => (
              <Reveal key={q} delay={(i % 6) as 0 | 1 | 2 | 3 | 4 | 5}>
                <button
                  onClick={() => ask(q)}
                  className="group flex items-center gap-3 w-full text-left bg-white border border-ink/[.08] rounded-2xl px-[18px] py-[15px] text-[14.5px] font-medium shadow-soft transition-all duration-500 hover:translate-x-2 hover:shadow-card hover:border-[#f3c3d2]"
                >
                  {q}
                  <span className="ml-auto text-rose opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &#8594;
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={2}>
          <div className="bg-white rounded-[32px] shadow-lift border border-ink/[.08] overflow-hidden">
            <div className="flex items-center gap-3.5 px-[26px] py-5 border-b border-ink/[.08] bg-gradient-[135deg] from-rose-soft to-[#fdf4ee]">
              <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#f19ab2] to-[#e0648a] grid place-items-center text-[21px] relative">
                &#129504;
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green border-[2.5px] border-white rounded-full" />
              </div>
              <div>
                <div className="font-bold text-[16px]">Allobot</div>
                <div className="text-[12.5px] text-green-deep font-semibold">Online &middot; understands your wellness data</div>
              </div>
            </div>
            <div ref={bodyRef} className="chat-body flex flex-col gap-3.5 p-[26px] h-[380px] overflow-y-auto bg-gradient-to-b from-[#fdf8f4] to-white">
              {msgs.map((m, i) =>
                m.role === 'typing' ? (
                  <div key={i} className="msg ai self-start bg-white border border-ink/[.08] shadow-soft rounded-[20px] rounded-bl-md px-[18px] py-[18px] flex gap-1.5 items-center animate-msgin">
                    <i className="w-[7px] h-[7px] rounded-full bg-rose animate-tdot" />
                    <i className="w-[7px] h-[7px] rounded-full bg-rose animate-tdot [animation-delay:.18s]" />
                    <i className="w-[7px] h-[7px] rounded-full bg-rose animate-tdot [animation-delay:.36s]" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`max-w-[82%] px-[18px] py-3.5 rounded-[20px] text-[14px] leading-[1.6] animate-msgin ${
                      m.role === 'user'
                        ? 'self-end bg-gradient-to-br from-[#f19ab2] to-[#e0648a] text-white rounded-br-md'
                        : 'self-start bg-white border border-ink/[.08] shadow-soft rounded-bl-md'
                    }`}
                  >
                    {m.text}
                  </div>
                ),
              )}
            </div>
            <div className="flex gap-3 px-5 py-4 border-t border-ink/[.08]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    ask(input)
                    setInput('')
                  }
                }}
                placeholder="Ask about your journey..."
                aria-label="Ask AlloMom"
                className="flex-1 border-[1.5px] border-ink/[.08] rounded-full px-[22px] py-[13px] text-[14px] outline-none transition-colors duration-300 bg-cream focus:border-rose"
              />
              <button
                onClick={() => {
                  ask(input)
                  setInput('')
                }}
                aria-label="Send"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f19ab2] to-[#e0648a] text-white grid place-items-center transition-transform duration-300 hover:scale-110 shrink-0"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
     
    </section>
  )
}
