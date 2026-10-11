import { motion } from 'framer-motion';
import type { Episode } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { PosterBackdrop } from './Poster';

export default function EpisodeCard({ episode, index, onPlay }: { episode: Episode; index: number; onPlay: () => void }) {
  const [season, ep] = episode.code.split(' ');
  return (
    <motion.article
      className="w-[80vw] shrink-0 snap-start sm:w-[52vw] md:w-[38vw] lg:w-[30vw] xl:w-[26vw]"
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
    >
      <Tilt max={7} className="group h-full rounded-xl">
        <button
          type="button"
          onClick={onPlay}
          data-cursor="play"
          aria-label={`Play episode: ${episode.title}`}
          className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 transition duration-500 group-hover:ring-crimson-2/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-2"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-110">
              <PosterBackdrop palette={episode.palette}>
                <span className="absolute -bottom-6 right-2 font-display text-[7.5rem] leading-none text-white/[0.09]">{ep}</span>
              </PosterBackdrop>
            </div>
            {/* Play overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
              <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] text-bone backdrop-blur">{season}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-bone/80">EPISODE {ep.replace('E', '')}</span>
            </div>
            <h4 className="absolute bottom-4 left-4 right-4 text-left font-display text-3xl leading-none tracking-wide text-bone [transform:translateZ(30px)] sm:text-4xl">{episode.title}</h4>
          </div>
          <div className="flex flex-1 flex-col p-4 text-left">
            <div className="mb-2 flex items-center justify-between text-[11px] text-smoke">
              <span className="font-semibold text-mist">{episode.runtime}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[10px] text-bone transition group-hover:border-crimson-2 group-hover:bg-crimson-2 group-hover:text-white">
                ▶
              </span>
            </div>
            <p className="text-sm leading-relaxed text-bone/80">{episode.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {episode.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-mist">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </button>
      </Tilt>
    </motion.article>
  );
}
