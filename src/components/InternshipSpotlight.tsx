import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience, profile } from '../data/portfolio';
import { EASE } from './fx';

const internship = experience[0]; // First entry is always Avotech

const AVOTECH_LOGO_GRADIENT = 'from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]';

function ConfettiDot({ x, y, delay, color }: { x: number; y: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute h-1.5 w-1.5 rounded-full"
      style={{ left: `${x}%`, top: `${y}%`, backgroundColor: color }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, -30, -50, -70],
        x: [(Math.random() - 0.5) * 40],
      }}
      transition={{ duration: 2.5, delay, ease: 'easeOut', repeat: Infinity, repeatDelay: 4 }}
    />
  );
}

const DOTS = [
  { x: 10, y: 80, color: '#fdbb2d' }, { x: 20, y: 70, color: '#b21f1f' },
  { x: 30, y: 85, color: '#1a2a6c' }, { x: 50, y: 75, color: '#fdbb2d' },
  { x: 65, y: 80, color: '#b21f1f' }, { x: 75, y: 70, color: '#1a2a6c' },
  { x: 85, y: 85, color: '#fdbb2d' }, { x: 90, y: 78, color: '#b21f1f' },
];

export default function InternshipSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section
      ref={ref}
      className="relative my-12 overflow-hidden"
      aria-label="Internship Offer Spotlight"
    >
      {/* Ambient glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#fdbb2d]/20 via-[#b21f1f]/10 to-transparent blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-bl from-[#1a2a6c]/20 via-[#b21f1f]/10 to-transparent blur-3xl" />
      </div>

      <div className="gutter relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-[#fdbb2d]/20 bg-gradient-to-br from-[#0d0b08] via-[#1a1209] to-[#07070a] p-px shadow-2xl"
        >
          {/* top shimmer line */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdbb2d]/80 to-transparent" />

          <div className="relative rounded-3xl p-6 sm:p-10">
            {/* Confetti dots */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              {DOTS.map((d, i) => (
                <ConfettiDot key={i} x={d.x} y={d.y} delay={i * 0.3} color={d.color} />
              ))}
            </div>

            {/* "BREAKING NEWS" kicker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fdbb2d] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#fdbb2d]" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#fdbb2d]">
                🎉 Offer Received — Oct 2026
              </span>
            </motion.div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Left: main content */}
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  className="font-display text-3xl leading-tight tracking-wide text-bone sm:text-5xl"
                >
                  DevOps Engineer
                  <br />
                  <span className={`bg-gradient-to-r ${AVOTECH_LOGO_GRADIENT} bg-clip-text text-transparent`}>
                    Intern
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
                  className="mt-2 text-lg font-semibold text-[#fdbb2d]"
                >
                  Avotech Systems Pvt. Ltd.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
                  className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/70"
                >
                  Officially selected to join Avotech Systems as a <strong className="text-bone">DevOps Engineer Intern</strong> at their Hinjewadi Phase-2, Pune office. Joining October 13th, 2026 — working on CI/CD pipelines, cloud infrastructure, and container orchestration.
                </motion.p>

                {/* Meta chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {[
                    { icon: '📅', label: 'Joining: Oct 13, 2026' },
                    { icon: '📍', label: 'Pune, Maharashtra' },
                    { icon: '⏳', label: 'Oct 2026 – May 2027' },
                    { icon: '🏢', label: 'Hinjewadi Phase-2' },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone/80 backdrop-blur-sm"
                    >
                      {chip.icon} {chip.label}
                    </span>
                  ))}
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.75, ease: EASE }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    id="offer-letter-download"
                    href={profile.offerLetter}
                    target="_blank"
                    rel="noreferrer"
                    download
                    data-cursor="link"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#fdbb2d] to-[#f59e0b] px-6 py-3 text-sm font-bold text-[#0d0b08] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(253,187,45,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      View Offer Letter
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </a>

                  <a
                    id="avotech-website"
                    href="https://avotechsystems.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-bone/80 backdrop-blur-sm transition-all duration-300 hover:border-[#fdbb2d]/40 hover:bg-white/10 hover:text-bone"
                  >
                    Avotech Systems ↗
                  </a>
                </motion.div>
              </div>

              {/* Right: offer letter card / badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className="flex shrink-0 items-center justify-center"
              >
                <div className="relative">
                  {/* Glow */}
                  <div aria-hidden className="absolute inset-0 scale-110 rounded-2xl bg-gradient-to-br from-[#fdbb2d]/30 via-[#b21f1f]/20 to-[#1a2a6c]/30 blur-2xl" />

                  {/* Card */}
                  <div className="relative w-[240px] overflow-hidden rounded-2xl border border-[#fdbb2d]/30 bg-gradient-to-br from-[#1a1209] to-[#0d0b08] p-6 shadow-2xl">
                    {/* Top stripe */}
                    <div className={`-mx-6 -mt-6 mb-5 h-1.5 bg-gradient-to-r ${AVOTECH_LOGO_GRADIENT}`} />

                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#fdbb2d]">Offer Letter</p>
                    <p className="mt-1 text-[10px] text-bone/50">Strictly Private &amp; Confidential</p>

                    <div className="mt-5 space-y-3">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-bone/40">Candidate</p>
                        <p className="text-sm font-semibold text-bone">Sujal Nanaware</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-bone/40">Role</p>
                        <p className="text-sm font-semibold text-bone">DevOps Engineer Intern</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-bone/40">Company</p>
                        <p className="text-sm font-semibold text-bone">Avotech Systems Pvt. Ltd.</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-bone/40">Date of Issue</p>
                        <p className="text-sm font-semibold text-bone">6th October, 2026</p>
                      </div>
                    </div>

                    {/* Seal */}
                    <div className="mt-6 flex items-center justify-center">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#fdbb2d]/60">
                        <div className="absolute inset-0 rounded-full border border-[#fdbb2d]/20" style={{ margin: '3px' }} />
                        <svg className="h-6 w-6 text-[#fdbb2d]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="absolute -bottom-5 text-[8px] font-bold uppercase tracking-widest text-[#fdbb2d]/70">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom stat bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
              className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6"
            >
              {[
                { label: 'Company', value: 'Avotech Systems' },
                { label: 'Domain', value: 'DevOps & Cloud' },
                { label: 'Duration', value: '7 months' },
                { label: 'Location', value: 'Pune, Phase-2' },
                { label: 'HR', value: 'Eshwaree Thorve' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-bone/40">{stat.label}</span>
                  <span className="mt-0.5 text-sm font-semibold text-bone">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
