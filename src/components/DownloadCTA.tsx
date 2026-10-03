import { ArrowDown, Phone, Reveal } from './ui'

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="
        relative overflow-hidden
        py-[120px] pb-6
        bg-white
        max-[920px]:py-[80px]
        max-[920px]:pb-4
      "
    >
      <div className="container-x">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-10 items-center max-[920px]:grid-cols-1">

          {/* Content */}
          <Reveal>
            <div className="max-w-[650px]">
              

              <h2
                className="
                  h2
                  text-[clamp(40px,5vw,64px)]
                  leading-[1.02]
                  tracking-[-0.035em]
                "
              >
                Take care of <em>you,</em> too.
              </h2>

              <p
                className="
                  lead
                  mt-6 mb-9
                  max-w-[590px]
                  text-black/65
                "
              >
                From your first pregnancy milestone to the everyday moments
                of motherhood, AlloMom is here to help you understand your
                journey — calmly, clearly, and on your own terms.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#"
                  className="
                    btn-dark
                    group
                    inline-flex items-center gap-2
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  Download AlloMom
                  <span className="transition-transform duration-300 group-hover:translate-y-1">
                    <ArrowDown />
                  </span>
                </a>

                <a
                  href="#features"
                  className="
                    btn-ghost
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/60
                  "
                >
                  Explore AlloMom
                </a>
              </div>

             
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal delay={2} className="relative grid place-items-center">
            {/* Outer orbit */}
            <div
              className="
                absolute
                h-[440px] w-[440px]
                rounded-full
                border border-dashed
                border-rose-deep/20
                animate-spin-slow
                max-[600px]:h-[310px]
                max-[600px]:w-[310px]
              "
            />

            {/* Inner glow */}
            <div
              className="
                absolute
                h-[330px] w-[330px]
                rounded-full
                bg-white/35
                blur-[20px]
                max-[600px]:h-[250px]
                max-[600px]:w-[250px]
              "
            />

            {/* Floating accents */}
            <div
              className="
                absolute left-[8%] top-[18%]
                h-4 w-4 rounded-full
                bg-white/80
                shadow-lg
                max-[600px]:left-[12%]
              "
            />

            <div
              className="
                absolute bottom-[18%] right-[8%]
                h-3 w-3 rounded-full
                bg-rose-deep/40
                max-[600px]:right-[12%]
              "
            />

            <Phone
              src="assets/mother-phone.png"
              alt="Mother checking her baby's weekly development in AlloMom"
              className="
                relative z-[2]
                !w-[270px]
                rotate-[4deg]
                drop-shadow-[0_30px_35px_rgba(80,45,70,0.20)]
                transition-transform
                duration-500
                hover:rotate-[1deg]
                hover:-translate-y-2
                max-[600px]:!w-[220px]
              "
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}