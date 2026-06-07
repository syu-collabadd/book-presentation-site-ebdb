export interface Section {
  id: string
  title: string
  content: string
  keywords: string[]
}

export interface Chapter {
  id: string
  number: number
  title: string
  subtitle: string
  summary: string
  wordCount: number
  sections: Section[]
  keywords: string[]
}

export interface SearchResult {
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  excerpt: string
  score: number
}
