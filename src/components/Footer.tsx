import { BookOpen } from 'lucide-react'
import { BOOK_TITLE, BOOK_AUTHOR, chapters } from '../data/chapters'
import type { Chapter } from '../types'

interface FooterProps {
  onSelectChapter: (chapter: Chapter) => void
  onContact: () => void
}

export default function Footer({ onSelectChapter, onContact }: FooterProps) {
  return (
    <footer className="bg-[#0f0e0c] border-t border-[#2e2b26]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded border border-[#c8922a]/40 flex items-center justify-center">
                <BookOpen size={14} className="text-[#c8922a]" />
              </div>
              <span className="font-serif text-sm text-[#e8e0d4]">{BOOK_TITLE}</span>
            </div>
            <p className="text-sm text-[#6b6258] leading-relaxed mb-5">
              A sustained inquiry into how to live well in a world that never stops asking you to go faster.
            </p>
            <p className="text-xs text-[#6b6258]">
              By {BOOK_AUTHOR}
            </p>
          </div>

          {/* Chapters part 1 */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[#9a9285] mb-5">
              Chapters I–V
            </h4>
            <ul className="space-y-3">
              {chapters.slice(0, 5).map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => onSelectChapter(ch)}
                    className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors text-left leading-snug"
                  >
                    <span className="text-[#3d3a34] mr-1.5">{String(ch.number).padStart(2, '0')}.</span>
                    {ch.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapters part 2 */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[#9a9285] mb-5">
              Chapters VI–X
            </h4>
            <ul className="space-y-3">
              {chapters.slice(5).map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => onSelectChapter(ch)}
                    className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors text-left leading-snug"
                  >
                    <span className="text-[#3d3a34] mr-1.5">{String(ch.number).padStart(2, '0')}.</span>
                    {ch.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[#9a9285] mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={onContact}
                  className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors"
                >
                  Send an Inquiry
                </button>
              </li>
              <li>
                <button
                  onClick={onContact}
                  className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors"
                >
                  Media & Press
                </button>
              </li>
              <li>
                <button
                  onClick={onContact}
                  className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors"
                >
                  Speaking Engagements
                </button>
              </li>
              <li>
                <button
                  onClick={onContact}
                  className="text-sm text-[#6b6258] hover:text-[#c8922a] transition-colors"
                >
                  Publishing Rights
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2e2b26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6258]">
            &copy; {new Date().getFullYear()} {BOOK_AUTHOR}. All rights reserved.
          </p>
          <p className="text-xs text-[#6b6258] font-serif italic">
            &ldquo;The unexamined life is not worth living.&rdquo; — Socrates
          </p>
        </div>
      </div>
    </footer>
  )
}
