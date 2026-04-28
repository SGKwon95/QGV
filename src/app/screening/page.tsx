import Header from '@/components/header/header'
import { Screening } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '스크린 | KGV',
  description: '영화별 상영 시간표를 확인하고 예매하세요.',
}

export default function ScreeningPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Screening />
    </main>
  )
}
