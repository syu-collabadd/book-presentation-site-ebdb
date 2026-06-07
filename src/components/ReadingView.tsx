import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Clock, ChevronDown, ChevronUp, List } from 'lucide-react'
import type { Chapter, Section } from '../types'
import { chapters, readingTime } from '../data/chapters'

interface ReadingViewProps {
  chapter: Chapter
  onClose: () => void
  initialSectionId?: string
}

export default function ReadingView({ chapter, onClose, initialSectionId }: ReadingViewProps) {
  const [activeSectionId, setActiveSectionId] = useState(
    initialSectionId || chapter.sections[0]?.id
  )
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([initialSectionId || chapter.sections[0]?.id])
  )
  const [tocOpen, setTocOpen] = useState(false)
  const [readProgress, setReadProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  const chapterIdx = chapters.findIndex((c) => c.id === chapter.id)
  const prevChapter = chapterIdx > 0 ? chapters[chapterIdx - 1] : null
  const nextChapter = chapterIdx < chapters.length - 1 ? chapters[chapterIdx + 1] : null

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      // Determine active section
      sectionRefs.current.forEach((el, id) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSectionId(id)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const el = sectionRefs.current.get(sectionId)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setExpandedSections((prev) => new Set([...prev, sectionId]))
    setTocOpen(false)
  }, [])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [chapter.id])

  return (
    <div className="min-h-screen" ref={contentRef}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#1c1a17] z-50">
        <div
          className="h-full bg-[#c8922a] transition-all duration-100"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* TOC sidebar (mobile overlay / desktop sticky) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex gap-8 lg:gap-12">

          {/* Sticky TOC - desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 pt-16">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-[#6b6258] hover:text-[#e8e0d4] mb-8 transition-colors"
              >
                <ChevronLeft size={14} />
                All Chapters
              </button>

              <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#6b6258] mb-4">
                Chapter {chapter.number}
              </div>
              <h3 className="font-serif text-lg text-[#e8e0d4] font-medium mb-6 leading-tight">
                {chapter.title}
              </h3>

              <nav className="space-y-1">
                {chapter.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm px-3 py-2.5 rounded transition-all duration-200 leading-snug ${
                      activeSectionId === section.id
                        ? 'text-[#c8922a] bg-[#c8922a]/10 border-l-2 border-[#c8922a] pl-2.5'
                        : 'text-[#6b6258] hover:text-[#9a9285] hover:bg-[#1c1a17]'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Chapter nav */}
              <div className="mt-8 pt-8 border-t border-[#2e2b26] space-y-3">
                {prevChapter && (
                  <button
                    onClick={() => onClose()}
                    className="w-full text-left text-xs text-[#6b6258] hover:text-[#9a9285] transition-colors"
                  >
                    ← Ch. {prevChapter.number}: {prevChapter.title}
                  </button>
                )}
                {nextChapter && (
                  <button
                    onClick={() => onClose()}
                    className="w-full text-left text-xs text-[#6b6258] hover:text-[#9a9285] transition-colors"
                  >
                    Ch. {nextChapter.number}: {nextChapter.title} →
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main reading content */}
          <main className="flex-1 min-w-0 pt-24 pb-32">
            {/* Mobile TOC button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-[#6b6258] hover:text-[#e8e0d4] mb-4 transition-colors"
              >
                <ChevronLeft size={14} />
                All Chapters
              </button>
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex items-center gap-2 text-sm text-[#9a9285] hover:text-[#e8e0d4] transition-colors"
              >
                <List size={14} />
                Table of Contents
                {tocOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>

              {tocOpen && (
                <div className="mt-3 p-4 bg-[#1c1a17] border border-[#2e2b26] rounded space-y-1">
                  {chapter.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left text-sm py-2 px-3 text-[#9a9285] hover:text-[#c8922a] hover:bg-[#2a2722] rounded transition-colors"
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chapter header */}
            <header className="mb-16 pb-12 border-b border-[#2e2b26]">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c8922a]" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#c8922a]">
                  Chapter {String(chapter.number).padStart(2, '0')}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#e8e0d4] font-bold mb-3 leading-tight">
                {chapter.title}
              </h1>
              <p className="font-serif text-xl text-[#9a9285] italic mb-8">
                {chapter.subtitle}
              </p>
              <p className="text-[#9a9285] text-base leading-relaxed max-w-2xl mb-8">
                {chapter.summary}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#6b6258]">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#c8922a]" />
                  <span>{readingTime(chapter.wordCount)}</span>
                </div>
                <span>·</span>
                <span>{chapter.sections.length} sections</span>
                <span>·</span>
                <span>{(chapter.wordCount / 1000).toFixed(1)}k words</span>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-0">
              {chapter.sections.map((section, idx) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  index={idx}
                  isExpanded={expandedSections.has(section.id)}
                  isActive={activeSectionId === section.id}
                  onToggle={() => toggleSection(section.id)}
                  sectionRef={(el: HTMLElement | null) => {
                    if (el) sectionRefs.current.set(section.id, el)
                    else sectionRefs.current.delete(section.id)
                  }}
                />
              ))}
            </div>

            {/* Chapter navigation */}
            <div className="mt-24 pt-12 border-t border-[#2e2b26] flex items-center justify-between gap-4">
              {prevChapter ? (
                <button
                  onClick={onClose}
                  className="group flex items-center gap-3 text-left hover:text-[#e8e0d4] text-[#6b6258] transition-colors"
                >
                  <div className="w-8 h-8 border border-[#2e2b26] rounded flex items-center justify-center group-hover:border-[#c8922a]/40 transition-colors">
                    <ChevronLeft size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-[#6b6258] mb-0.5">Previous</div>
                    <div className="text-sm font-serif">{prevChapter.title}</div>
                  </div>
                </button>
              ) : <div />}

              {nextChapter ? (
                <button
                  onClick={onClose}
                  className="group flex items-center gap-3 text-right hover:text-[#e8e0d4] text-[#6b6258] transition-colors"
                >
                  <div>
                    <div className="text-xs text-[#6b6258] mb-0.5">Next</div>
                    <div className="text-sm font-serif">{nextChapter.title}</div>
                  </div>
                  <div className="w-8 h-8 border border-[#2e2b26] rounded flex items-center justify-center group-hover:border-[#c8922a]/40 transition-colors">
                    <ChevronRight size={14} />
                  </div>
                </button>
              ) : <div />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

interface SectionBlockProps {
  section: Section
  index: number
  isExpanded: boolean
  isActive: boolean
  onToggle: () => void
  sectionRef: (el: HTMLElement | null) => void
}

function SectionBlock({ section, index, isExpanded, isActive, onToggle, sectionRef }: SectionBlockProps) {
  const paragraphs = section.content.split('\n\n').filter(Boolean)

  return (
    <article
      ref={sectionRef}
      className={`border-b border-[#2e2b26] last:border-0 transition-colors ${
        isActive ? 'border-l-2 border-l-[#c8922a] pl-6 -ml-6 lg:-ml-8 lg:pl-8' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-8 flex items-start justify-between gap-6 group"
      >
        <div className="flex items-start gap-4">
          <span className="font-serif text-2xl text-[#2e2b26] group-hover:text-[#3d3a34] transition-colors leading-none shrink-0 mt-1 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h2 className={`font-serif text-xl font-medium leading-snug transition-colors ${
              isActive ? 'text-[#c8922a]' : 'text-[#e8e0d4] group-hover:text-[#c8922a]'
            }`}>
              {section.title}
            </h2>
            {!isExpanded && (
              <p className="text-sm text-[#6b6258] mt-2 line-clamp-2 max-w-xl">
                {paragraphs[0]?.slice(0, 160)}…
              </p>
            )}
          </div>
        </div>
        <div className={`shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown
            size={16}
            className={`transition-colors ${isActive ? 'text-[#c8922a]' : 'text-[#6b6258] group-hover:text-[#9a9285]'}`}
          />
        </div>
      </button>

      {isExpanded && (
        <div className="pb-12">
          <div className="prose-reading max-w-2xl">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-1.5">
            {section.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 text-xs text-[#6b6258] border border-[#2e2b26] rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
