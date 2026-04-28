import { Metadata } from 'next'
import { Header, Hero, MovieList, TheaterList } from '@/components'
import { getNowPlayingMovies, getUpcomingMovies } from '@/lib/movies'

export const metadata: Metadata = {
  title: 'KGV - 영화 예매 & 상영 정보',
  description: 'CGV를 벤치마킹한 한국형 영화 예매 플랫폼. 상영 중인 영화, 극장 정보, 스크린 시간표를 한 곳에서.',
}

export default function Home() {
  const nowPlaying = getNowPlayingMovies()
  const upcoming = getUpcomingMovies()

  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MovieList title="지금 상영 중" movies={nowPlaying} />
        <MovieList title="개봉 예정" movies={upcoming} />
      </div>

      <TheaterList />

      <footer className="bg-gray-900/50 border-t border-gray-800 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KGV</span>
                </div>
                <span className="text-base font-bold text-white">KGV</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                한국 최고의 영화 예매 플랫폼. CGV 극장 전국의 상영 정보와 예매를 한 번에.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">서비스</h4>
              <ul className="space-y-2">
                <li><a href="/movies" className="text-xs text-gray-400 hover:text-white transition-colors">영화</a></li>
                <li><a href="/theaters" className="text-xs text-gray-400 hover:text-white transition-colors">극장</a></li>
                <li><a href="/screening" className="text-xs text-gray-400 hover:text-white transition-colors">스크린</a></li>
                <li><a href="/reviews" className="text-xs text-gray-400 hover:text-white transition-colors">리뷰</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">고객센터</h4>
              <ul className="space-y-2">
                <li><span className="text-xs text-gray-400">1544-XXXX</span></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">1:1 문의</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">이용약관</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">소셜</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2025 KGV. All rights reserved. CGV는 (주)CGV의 등록상표입니다.
            </p>
            <p className="text-xs text-gray-600">
              본 사이트는 학습 목적으로 제작되었습니다.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
