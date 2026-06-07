import { ArrowDown, Clock } from 'lucide-react'
import { BOOK_SUBTITLE, BOOK_AUTHOR, BOOK_TAGLINE, chapters, totalWords, readingTime } from '../data/chapters'

interface HeroProps {
  onStartReading: () => void
}

export default function Hero({ onStartReading }: HeroProps) {
  const totalReadingTime = readingTime(totalWords)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,146,42,0.08) 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 48px,
              rgba(200,146,42,0.5) 48px,
              rgba(200,146,42,0.5) 49px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-10 animate-fade-in">
          <div className="h-px w-12 bg-[#c8922a]/50" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#c8922a]">
            A New Work
          </span>
          <div className="h-px w-12 bg-[#c8922a]/50" />
        </div>

        {/* Title */}
        <h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-[#e8e0d4] leading-none tracking-tight mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="italic text-[#c8922a]">The</span>
          <br />
          <span>Examined</span>
          <br />
          <span className="italic text-[#c8922a]">Life</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-xl text-[#9a9285] italic mb-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {BOOK_SUBTITLE}
        </p>

        {/* Author */}
        <p className="text-sm tracking-[0.15em] uppercase text-[#6b6258] mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          by {BOOK_AUTHOR}
        </p>

        {/* Tagline */}
        <blockquote
          className="font-serif text-xl sm:text-2xl text-[#e8e0d4]/80 italic max-w-2xl mx-auto mb-14 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          &ldquo;{BOOK_TAGLINE}&rdquo;
        </blockquote>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 mb-12 text-sm text-[#6b6258] animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[#c8922a] font-medium">{chapters.length}</span>
            <span>Chapters</span>
          </div>
          <div className="w-px h-4 bg-[#2e2b26]" />
          <div className="flex items-center gap-2">
            <span className="text-[#c8922a] font-medium">{(totalWords / 1000).toFixed(0)}k</span>
            <span>Words</span>
          </div>
          <div className="w-px h-4 bg-[#2e2b26]" />
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#c8922a]" />
            <span>{totalReadingTime}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={onStartReading}
            className="px-8 py-4 bg-[#c8922a] text-[#0f0e0c] font-semibold rounded hover:bg-[#e0aa45] transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Begin Reading
          </button>
          <button
            onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-[#2e2b26] text-[#9a9285] rounded hover:border-[#c8922a]/40 hover:text-[#e8e0d4] transition-all duration-200"
          >
            Browse Chapters
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <button
          onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-[#6b6258] hover:text-[#9a9285] transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ArrowDown size={16} className="animate-bounce group-hover:text-[#c8922a]" />
        </button>
      </div>
    </section>
  )
}
