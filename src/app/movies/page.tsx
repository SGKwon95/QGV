import { Metadata } from 'next'
import Header from '@/components/header/header'
import { getMovies, getGenres } from '@/lib/movies'
import MovieCard from '@/components/movie-card/movie-card'
import { MovieFilters, MovieStatus } from '@/types'

export const metadata: Metadata = {
  title: '영화 | KGV',
  description: '상영 중인 영화와 개봉 예정 영화를 확인하세요.',
}

export default function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string; status?: string; q?: string }>
}) {
  return Promise.resolve(searchParams).then((params) => {
    const genre = params.genre || 'all'
    const status = params.status as MovieStatus | undefined
    const search = params.q || ''

    let movies = getMovies()

    if (genre !== 'all') {
      const genreMap: Record<string, string> = {
        action: '액션',
        animation: '애니메이션',
        scifi: 'SF',
        horror: '공포',
        drama: '드라마',
        comedy: '코미디',
        thriller: '스릴러',
      }
      const genreName = genreMap[genre]
      if (genreName) {
        movies = movies.filter((m) => m.genre === genreName)
      }
    }

    if (status) {
      movies = movies.filter((m) => m.status === status)
    }

    if (search) {
      const lower = search.toLowerCase()
      movies = movies.filter(
        (m) => m.title.toLowerCase().includes(lower) || m.director.toLowerCase().includes(lower)
      )
    }

    const genres = getGenres()

    return (
      <main className="min-h-screen bg-gray-950">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">영화</h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 flex gap-2 overflow-x-auto pb-2">
              {genres.map((g) => (
                <a
                  key={g.id}
                  href={`/movies?genre=${g.id}`}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    genre === g.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                  }`}
                >
                  {g.name}
                </a>
              ))}
            </div>

            <div className="flex gap-2">
              {(['all', 'now_playing', 'upcoming'] as const).map((s) => {
                const labels: Record<string, string> = {
                  all: '전체',
                  now_playing: '상영 중',
                  upcoming: '개봉 예정',
                }
                return (
                  <a
                    key={s}
                    href={`/movies?status=${s}`}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      status === s
                        ? 'bg-white text-gray-900'
                        : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                    }`}
                  >
                    {labels[s]}
                  </a>
                )
              })}
            </div>
          </div>

          {movies.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-gray-400 text-lg">검색 결과가 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </main>
    )
  })
}
