import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'
import { chapters, readingTime } from '../data/chapters'
import type { Chapter } from '../types'

interface ChapterBrowserProps {
  onSelectChapter: (chapter: Chapter) => void
}

export default function ChapterBrowser({ onSelectChapter }: ChapterBrowserProps) {
  const itemsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="chapters" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8922a]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#c8922a]">
              Table of Contents
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#e8e0d4] font-medium mb-4">
            Ten Chapters. One Question.
          </h2>
          <p className="text-[#9a9285] text-lg leading-relaxed">
            Each chapter stands alone. Together they form a sustained inquiry into how to live.
            Select any chapter to begin reading.
          </p>
        </div>

        {/* Chapter grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2e2b26]">
          {chapters.map((chapter, i) => (
            <button
              key={chapter.id}
              ref={(el) => { itemsRef.current[i] = el as HTMLElement | null }}
              className="reveal group relative bg-[#0f0e0c] p-8 text-left hover:bg-[#1c1a17] transition-all duration-300 cursor-pointer"
              onClick={() => onSelectChapter(chapter)}
            >
              {/* Chapter number */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-6xl font-bold text-[#2e2b26] group-hover:text-[#3d3a34] transition-colors leading-none select-none">
                  {String(chapter.number).padStart(2, '0')}
                </span>
                <ChevronRight
                  size={18}
                  className="text-[#3d3a34] group-hover:text-[#c8922a] transition-colors mt-2 flex-shrink-0"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl text-[#e8e0d4] font-medium mb-1 group-hover:text-[#c8922a] transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-sm text-[#6b6258] italic mb-4">
                  {chapter.subtitle}
                </p>
                <p className="text-sm text-[#9a9285] leading-relaxed line-clamp-3 mb-6">
                  {chapter.summary}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-[#6b6258]">
                <div className="flex items-center gap-1.5">
                  <Clock size={11} />
                  <span>{readingTime(chapter.wordCount)}</span>
                </div>
                <span>·</span>
                <span>{chapter.sections.length} sections</span>
                <span>·</span>
                <span>{(chapter.wordCount / 1000).toFixed(1)}k words</span>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {chapter.keywords.slice(0, 4).map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 text-xs text-[#6b6258] border border-[#2e2b26] rounded-full group-hover:border-[#3d3a34] transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c8922a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
