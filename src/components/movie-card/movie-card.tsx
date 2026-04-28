import Link from 'next/link'
import Image from 'next/image'

interface MovieCardProps {
  movie: {
    id: string
    title: string
    posterUrl: string
    rating: number
    genre: string
    status: string
  }
  variant?: 'default' | 'compact'
}

export default function MovieCardComponent({ movie, variant = 'default' }: MovieCardProps) {
  const isCompact = variant === 'compact'

  return (
    <Link href={`/movies/${movie.id}`} className="group block">
      <div className={`${isCompact ? 'w-36' : ''} relative`}>
        <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[2/3]">
          <Image
            src={movie.posterUrl || '/placeholder-poster.svg'}
            alt={movie.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {movie.status === 'upcoming' && (
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded">
            UP COMING
            </div>
          )}

          <div className="absolute top-2 right-2 w-8 h-8 bg-gray-950/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-1 text-xs">
              <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">{movie.genre}</span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h3 className={`${isCompact ? 'text-sm' : 'text-base'} font-semibold text-white truncate group-hover:text-red-400 transition-colors`}>
            {movie.title}
          </h3>
          <div className="flex items-center gap-1 mt-0.5">
            <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm text-gray-400">{movie.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
