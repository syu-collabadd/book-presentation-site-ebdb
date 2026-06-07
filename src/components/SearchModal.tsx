import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { searchChapters, chapters } from '../data/chapters'
import type { Chapter } from '../types'

interface SearchModalProps {
  onClose: () => void
  onSelectResult: (chapter: Chapter, sectionId: string) => void
}

export default function SearchModal({ onClose, onSelectResult }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ReturnType<typeof searchChapters>>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const id = setTimeout(() => {
      setResults(searchChapters(query))
    }, 150)
    return () => clearTimeout(id)
  }, [query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSelect = useCallback((result: ReturnType<typeof searchChapters>[0]) => {
    const chapter = chapters.find((c) => c.id === result.chapterId)
    if (chapter) {
      onSelectResult(chapter, result.sectionId)
    }
  }, [onSelectResult])

  const highlight = (text: string) => {
    if (!query.trim()) return text
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part)
        ? <mark key={i} className="bg-[#c8922a]/30 text-[#e0aa45] rounded-sm px-0.5">{part}</mark>
        : part
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0f0e0c]/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl bg-[#1c1a17] border border-[#2e2b26] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2e2b26]">
          <Search size={16} className="text-[#6b6258] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, themes, concepts…"
            className="flex-1 bg-transparent text-[#e8e0d4] placeholder-[#6b6258] text-base outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#6b6258] hover:text-[#9a9285]">
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-[#6b6258] hover:text-[#9a9285] border border-[#2e2b26] px-2 py-0.5 rounded"
          >
            esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query && (
            <div className="p-6 text-center text-[#6b6258] text-sm">
              <Search size={24} className="mx-auto mb-3 opacity-30" />
              Try searching for a theme, idea, or author name
            </div>
          )}

          {query && results.length === 0 && (
            <div className="p-6 text-center text-[#6b6258] text-sm">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2">
              {results.map((result) => (
                <li key={result.sectionId}>
                  <button
                    className="w-full text-left px-5 py-4 hover:bg-[#2a2722] transition-colors group"
                    onClick={() => handleSelect(result)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-[#c8922a] shrink-0">
                            Ch. {result.chapterNumber}
                          </span>
                          <span className="text-xs text-[#6b6258]">·</span>
                          <span className="text-xs text-[#9a9285] truncate">
                            {result.chapterTitle}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-[#e8e0d4] mb-2">
                          {highlight(result.sectionTitle)}
                        </div>
                        <p className="text-xs text-[#9a9285] leading-relaxed line-clamp-2">
                          {highlight(result.excerpt)}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-[#2e2b26] group-hover:text-[#c8922a] transition-colors shrink-0 mt-1"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-5 py-3 border-t border-[#2e2b26] flex items-center justify-between text-xs text-[#6b6258]">
            <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
            <span>Press Enter to open</span>
          </div>
        )}
      </div>
    </div>
  )
}
