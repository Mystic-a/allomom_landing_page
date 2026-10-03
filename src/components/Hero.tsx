import { ArrowRight, Counter, Reveal } from './ui'



const stats = [
  { num: <Counter target={5000} suffix="+" />, lbl: 'Mothers supported' },
  { num: <Counter target={4.9} decimals={1} />, lbl: 'Average rating' },
  { num: <Counter target={100} suffix="%" />, lbl: 'Private by design' },
]

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-[170px] pb-[100px] max-[920px]:pt-[130px]">
      <div className="blob w-[520px] h-[520px] bg-[#f8cfdd] -top-40 -right-[120px]" />
      <div className="blob w-[420px] h-[420px] bg-[#f9e3c8] -bottom-[140px] -left-[140px]" />
      <div className="blob w-[340px] h-[340px] bg-[#dccff5] top-[34%] left-[34%] opacity-[.35]" />
      <div className="container-x grid grid-cols-[1.05fr_.95fr] gap-16 items-center relative z-[1] max-[920px]:grid-cols-1 max-[920px]:gap-[52px]">
        <div>
          <Reveal delay={1}>
            <h1 className="font-display font-medium leading-[1.12] tracking-[-0.015em] text-[clamp(36px,5.6vw,60px)] mb-6">
              Every moment of motherhood, <em className="italic text-rose-deep">understood.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead text-[18px] mb-9">
              An intelligent maternal wellness companion designed to help you understand your body, track your
              wellbeing, and feel supported through every stage of your journey.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex gap-3.5 flex-wrap mb-11">
              <a href="#features" className="btn-primary">
                Explore AlloMom <ArrowRight />
              </a>
              <a href="#download" className="btn-ghost">
                Download App
              </a>
            </div>
          </Reveal>
          
        </div>
        <Reveal delay={2} className="relative max-[920px]:max-w-[480px] max-[920px]:mx-auto max-[920px]:w-full">
          <div className="absolute -inset-[22px] border-[1.5px] border-dashed border-rose/35 rounded-[48px] -z-[1] animate-spin-slow" />
          <div className="rounded-[38px] overflow-hidden shadow-lift relative aspect-[.92] group">
            <img
              src="assets/hero-mother.png"
              alt="Expecting mother following her baby's development in the AlloMom app"
              className="w-full h-full object-cover scale-[1.02] transition-transform duration-[1.2s] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-[200deg] from-transparent from-[55%] to-ink/20 rounded-[38px]" />
          </div>
         
        </Reveal>
      </div>
    </header>
  )
}
