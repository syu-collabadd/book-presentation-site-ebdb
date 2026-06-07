import { useState, useEffect } from 'react'
import { BookOpen, Search, Mail, Menu, X } from 'lucide-react'
import { BOOK_TITLE, BOOK_AUTHOR } from '../data/chapters'

interface NavProps {
  onSearch: () => void
  onContact: () => void
  activeView: 'home' | 'reader'
  onHome: () => void
}

export default function Nav({ onSearch, onContact, activeView, onHome }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#0f0e0c]/95 backdrop-blur-md border-b border-[#2e2b26]'
      : 'bg-transparent'
  }`

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={onHome}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded border border-[#c8922a]/40 flex items-center justify-center group-hover:border-[#c8922a] transition-colors">
            <BookOpen size={15} className="text-[#c8922a]" />
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-sm font-medium text-[#e8e0d4] font-serif leading-none">
              {BOOK_TITLE}
            </div>
            <div className="text-xs text-[#6b6258] mt-0.5">{BOOK_AUTHOR}</div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {activeView === 'reader' && (
            <button
              onClick={onHome}
              className="px-4 py-2 text-sm text-[#9a9285] hover:text-[#e8e0d4] transition-colors"
            >
              ← All Chapters
            </button>
          )}
          <button
            onClick={onSearch}
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#9a9285] hover:text-[#e8e0d4] transition-colors"
          >
            <Search size={14} />
            Search
          </button>
          <button
            onClick={onContact}
            className="flex items-center gap-2 ml-2 px-4 py-2 text-sm bg-[#c8922a] text-[#0f0e0c] font-medium rounded hover:bg-[#e0aa45] transition-colors"
          >
            <Mail size={14} />
            Inquire
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#9a9285] hover:text-[#e8e0d4]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2e2b26] bg-[#0f0e0c]/98 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            {activeView === 'reader' && (
              <button
                onClick={() => { onHome(); setMobileOpen(false) }}
                className="text-left text-sm text-[#9a9285] hover:text-[#e8e0d4] py-2"
              >
                ← All Chapters
              </button>
            )}
            <button
              onClick={() => { onSearch(); setMobileOpen(false) }}
              className="flex items-center gap-2 text-sm text-[#9a9285] hover:text-[#e8e0d4] py-2"
            >
              <Search size={14} />
              Search the book
            </button>
            <button
              onClick={() => { onContact(); setMobileOpen(false) }}
              className="flex items-center gap-2 text-sm text-[#c8922a] py-2"
            >
              <Mail size={14} />
              Send an inquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
