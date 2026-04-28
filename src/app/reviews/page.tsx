import Header from '@/components/header/header'
import { ReviewSection } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '리뷰 | KGV',
  description: '영화 리뷰를 확인하고 직접 작성하세요.',
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <ReviewSection movieId="1" />
    </main>
  )
}
