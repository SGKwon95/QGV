import { Review } from '@/types'
import { MOCK_REVIEWS } from './mock-data'

export function getReviews(movieId: string): Review[] {
  return MOCK_REVIEWS.filter((r) => r.movieId === movieId)
}

export function getAverageRating(movieId: string): number {
  const reviews = getReviews(movieId)
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
  return Number((sum / reviews.length).toFixed(1))
}

export function getTopReviews(movieId: string, limit: number = 3): Review[] {
  return getReviews(movieId)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}
