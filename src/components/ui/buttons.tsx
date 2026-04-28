import Link from 'next/link'

interface GenreBadgeProps {
  genre: string
}

export function GenreBadge({ genre }: GenreBadgeProps) {
  const colorMap: Record<string, string> = {
    액션: 'bg-red-500/20 text-red-400 border-red-500/30',
    애니메이션: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    SF: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    공포: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    드라마: 'bg-green-500/20 text-green-400 border-green-500/30',
    코미디: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    스릴러: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  }

  const color = colorMap[genre] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${color}`}>
      {genre}
    </span>
  )
}

interface RatingStarsProps {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}

export function RatingStars({ rating, size = 'md' }: RatingStarsProps) {
  const sizeClass = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-6 h-6' : 'w-4 h-4'

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating)
        return (
          <svg
            key={star}
            className={`${sizeClass} ${filled ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        )
      })}
    </div>
  )
}

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', size = 'md', onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'

  const variants: Record<string, string> = {
    primary: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 focus:ring-gray-500',
    ghost: 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white',
  }

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  )
}

interface BadgeProps {
  children: React.ReactNode
  variant?: 'red' | 'blue' | 'green' | 'yellow'
}

export function Badge({ children, variant = 'red' }: BadgeProps) {
  const variants: Record<string, string> = {
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  )
}
