'use client'

import { getNowPlayingMovies } from '@/lib/movies'
import MovieCard from '@/components/movie-card/movie-card'
import { Movie } from '@/types'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setMovies(getNowPlayingMovies())
  }, [])

  useEffect(() => {
    if (movies.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [movies])

  const current = movies[currentIndex]
  if (!current) return null

  return (
    <section className="relative w-full overflow-hidden bg-gray-950">
      <div className="relative h-[480px] sm:h-[560px]">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
            <img
              src={movie.backdropUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">
                NOW SHOWING
              </span>
              <span className="text-gray-300 text-sm">{current.genre}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {current.title}
            </h1>

            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-white font-semibold">{current.rating}</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">{current.runningTime}분</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">{current.director}</span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {current.overview}
            </p>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">
                예매하기
              </button>
              <button className="px-6 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white text-sm font-semibold rounded-lg transition-colors border border-gray-700">
                트레일러
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-red-500' : 'w-4 bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
