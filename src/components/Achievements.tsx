import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications, leadershipRoles, hobbies } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      {/* ── Achievement Cards ── */}
      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* ── Certifications Rail ── */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            Certified <span className="text-mist">· {certifications.length} credentials</span>
          </h3>
          <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
            {certifications.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group relative flex w-[230px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{c.issuer}</span>
                  <span className="text-sm text-smoke transition group-hover:text-bone">↗</span>
                </div>
                <p className="mt-6 text-sm font-medium leading-snug text-bone">{c.name}</p>
              </motion.a>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LEADERSHIP & RESPONSIBILITIES
      ══════════════════════════════════════════ */}
      <div className="mt-20">
        <div className="gutter mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9b46a]">Beyond the Code</p>
            <h3 className="font-sans text-2xl font-semibold text-bone sm:text-3xl">
              Leadership &amp; <span className="text-mist">Responsibilities</span>
            </h3>
          </motion.div>
        </div>

        <div className="gutter grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipRoles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <Tilt max={6} className="group h-full rounded-2xl">
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20"
                >
                  {/* Glow blob */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full opacity-10 blur-3xl transition duration-700 group-hover:opacity-25"
                    style={{ background: role.color }}
                  />
                  {/* Top accent line */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${role.color}90, transparent)` }}
                  />

                  {/* Icon + type badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl ring-1 ring-white/10"
                      style={{ background: `${role.color}15` }}
                    >
                      {role.icon}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em]"
                      style={{ background: `${role.color}18`, color: role.color }}
                    >
                      {role.type === 'ngo' ? 'NGO / Volunteer' : 'Student Club'}
                    </span>
                  </div>

                  {/* Org + role */}
                  <h4 className="text-base font-bold leading-snug text-bone">{role.org}</h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: role.color }}>
                    {role.role}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-[13px] leading-relaxed text-bone/65">{role.description}</p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[12px] text-bone/60">
                        <span className="mt-[3px] shrink-0 text-[8px]" style={{ color: role.color }}>
                          ◆
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HOBBIES & INTERESTS
      ══════════════════════════════════════════ */}
      <div className="mt-20 pb-4">
        <div className="gutter mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9b46a]">Off the Clock</p>
            <h3 className="font-sans text-2xl font-semibold text-bone sm:text-3xl">
              Hobbies &amp; <span className="text-mist">Interests</span>
            </h3>
          </motion.div>
        </div>

        <div className="gutter grid grid-cols-2 gap-4 sm:grid-cols-4">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
            >
              <Tilt max={10} className="group h-full rounded-2xl">
                <div
                  className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl px-4 py-8 text-center ring-1 ring-white/10 transition duration-500 group-hover:ring-white/25"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${hobby.color}18, #0d0b10 70%)`,
                  }}
                >
                  {/* Glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-20 blur-3xl transition duration-700 group-hover:opacity-40"
                    style={{ background: hobby.color }}
                  />
                  {/* Top line */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${hobby.color}80, transparent)` }}
                  />

                  {/* Emoji */}
                  <span className="relative mb-3 text-4xl drop-shadow-lg">{hobby.icon}</span>

                  {/* Name */}
                  <h4 className="relative text-sm font-bold text-bone">{hobby.name}</h4>

                  {/* Note */}
                  <p className="relative mt-2 text-[11px] leading-snug text-bone/55">{hobby.note}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Cricket ZP Achievement Banner */}
        <motion.div
          className="gutter mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <div className="flex items-center gap-4 rounded-xl bg-[#ffb54712] px-5 py-4 ring-1 ring-[#ffb547]/20">
            <span className="shrink-0 text-3xl">🏆</span>
            <div>
              <p className="text-sm font-bold text-bone">ZP Level Badminton Player</p>
              <p className="mt-0.5 text-xs leading-relaxed text-bone/55">
                Represented school in inter-school Zilla Parishad (ZP) badminton matches — demonstrating agility, discipline, and competitive spirit at district level.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
