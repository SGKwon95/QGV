'use client'

import { getReviews, getAverageRating } from '@/lib/reviews'

interface ReviewCardProps {
  review: {
    id: string
    username: string
    content: string
    rating: number
    createdAt: Date
  }
}

function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.createdAt)
  const dateStr = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`

  return (
    <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            {review.username[0]}
          </div>
          <span className="text-sm text-white font-medium">{review.username}</span>
        </div>
        <span className="text-xs text-gray-500">{dateStr}</span>
      </div>

      <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.round(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="text-sm text-gray-400 ml-1">{review.rating.toFixed(1)}</span>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">{review.content}</p>
    </div>
  )
}

interface ReviewSectionProps {
  movieId: string
}

export default function ReviewSection({ movieId }: ReviewSectionProps) {
  const reviews = getReviews(movieId)
  const avgRating = getAverageRating(movieId)

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">리뷰</h2>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{avgRating.toFixed(1)}</div>
              <div className="text-xs text-gray-400">평균 평점</div>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{reviews.length}</div>
              <div className="text-xs text-gray-400">리뷰 수</div>
            </div>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-400">아직 리뷰가 없습니다.</p>
            <button className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors">
              첫 리뷰 작성하기
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
