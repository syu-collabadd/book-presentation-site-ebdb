import { useState, useCallback, useEffect } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ChapterBrowser from './components/ChapterBrowser'
import ReadingView from './components/ReadingView'
import SearchModal from './components/SearchModal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import type { Chapter } from './types'
import { chapters } from './data/chapters'

type View = 'home' | 'reader'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [activeChapter, setActiveChapter] = useState<Chapter>(chapters[0])
  const [initialSectionId, setInitialSectionId] = useState<string | undefined>()
  const [searchOpen, setSearchOpen] = useState(false)

  // Keyboard shortcut for search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openChapter = useCallback((chapter: Chapter, sectionId?: string) => {
    setActiveChapter(chapter)
    setInitialSectionId(sectionId)
    setView('reader')
    window.scrollTo({ top: 0 })
  }, [])

  const goHome = useCallback(() => {
    setView('home')
    window.scrollTo({ top: 0 })
  }, [])

  const scrollToContact = useCallback(() => {
    if (view !== 'home') {
      setView('home')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [view])

  return (
    <div className="min-h-screen bg-[#0f0e0c]">
      <Nav
        onSearch={() => setSearchOpen(true)}
        onContact={scrollToContact}
        activeView={view}
        onHome={goHome}
      />

      {view === 'home' && (
        <>
          <Hero onStartReading={() => openChapter(chapters[0])} />
          <ChapterBrowser onSelectChapter={openChapter} />
          <Contact />
          <Footer onSelectChapter={openChapter} onContact={scrollToContact} />
        </>
      )}

      {view === 'reader' && (
        <ReadingView
          chapter={activeChapter}
          onClose={goHome}
          initialSectionId={initialSectionId}
        />
      )}

      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onSelectResult={(chapter, sectionId) => {
            setSearchOpen(false)
            openChapter(chapter, sectionId)
          }}
        />
      )}
    </div>
  )
}
