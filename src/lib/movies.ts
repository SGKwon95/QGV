import { Movie, MovieStatus, Genre } from '@/types'
import { MOCK_MOVIES } from './mock-data'

export function getMovies(status?: MovieStatus): Movie[] {
  if (status) {
    return MOCK_MOVIES.filter((m) => m.status === status)
  }
  return MOCK_MOVIES
}

export function getMovieById(id: string): Movie | undefined {
  return MOCK_MOVIES.find((m) => m.id === id)
}

export function getGenres(): Genre[] {
  return [
    { id: 'all', name: '전체', color: '#6B7280' },
    { id: 'action', name: '액션', color: '#EF4444' },
    { id: 'animation', name: '애니메이션', color: '#F59E0B' },
    { id: 'scifi', name: 'SF', color: '#3B82F6' },
    { id: 'horror', name: '공포', color: '#8B5CF6' },
    { id: 'drama', name: '드라마', color: '#10B981' },
    { id: 'comedy', name: '코미디', color: '#EC4899' },
    { id: 'thriller', name: '스릴러', color: '#6366F1' },
  ]
}

export function getNowPlayingMovies(): Movie[] {
  return MOCK_MOVIES.filter((m) => m.status === 'now_playing')
}

export function getUpcomingMovies(): Movie[] {
  return MOCK_MOVIES.filter((m) => m.status === 'upcoming')
}

export function searchMovies(query: string): Movie[] {
  if (!query) return MOCK_MOVIES
  const lower = query.toLowerCase()
  return MOCK_MOVIES.filter(
    (m) => m.title.toLowerCase().includes(lower) || m.director.toLowerCase().includes(lower)
  )
}
