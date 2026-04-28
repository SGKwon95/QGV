import Header from '@/components/header/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '극장 | KGV',
  description: 'CGV 극장 정보를 확인하고 근처 극장을 찾아보세요.',
}

export default function TheatersPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">CGV 극장</h1>
        <p className="text-gray-400">극장 목록 페이지 - 추후 구현 예정입니다.</p>
      </div>
    </main>
  )
}
