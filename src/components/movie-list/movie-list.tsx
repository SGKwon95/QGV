'use client'

import { getNowPlayingMovies, getUpcomingMovies } from '@/lib/movies'
import MovieCard from '@/components/movie-card/movie-card'
import { Movie } from '@/types'

interface MovieListProps {
  title: string
  movies: Movie[]
  showAll?: boolean
}

export default function MovieList({ title, movies, showAll = false }: MovieListProps) {
  const displayMovies = showAll ? movies : movies.slice(0, 8)
  const hasMore = movies.length > 8

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        {hasMore && (
          <button className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
            전체보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {movies.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-gray-400 text-lg">상영 중인 영화가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
          {displayMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  )
}
