export interface Movie {
  id: string
  title: string
  overview: string
  posterUrl: string
  backdropUrl: string
  rating: number
  genre: string
  releaseDate: Date
  runningTime: number
  director: string
  cast: string[]
  openDate: Date
  closeDate: Date | null
  status: 'now_playing' | 'upcoming' | 'completed'
  createdAt: Date
  updatedAt: Date
}

export interface Theater {
  id: string
  name: string
  location: string
  address: string
  phone: string | null
  thumbnailUrl: string | null
  createdAt: Date
  updatedAt: Date
}

export interface TheaterMovie {
  id: string
  theaterId: string
  movieId: string
  screenType: string
  price: number
  theater: Theater
  movie: Movie
}

export interface Showtime {
  id: string
  movieId: string
  theaterId: string
  screenNumber: string
  screenType: string
  startTime: Date
  endTime: Date
  price: number
  totalSeats: number
  availableSeats: number
  theater: Theater
  movie: Movie
}

export interface Review {
  id: string
  movieId: string
  userId: string
  username: string
  content: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

export interface Genre {
  id: string
  name: string
  color: string
}

export interface Screening {
  date: string
  dayOfWeek: string
  showtimeCount: number
}

export type MovieStatus = 'now_playing' | 'upcoming' | 'completed'

export type ScreenType = 'standard' | '3d' | '4d' | 'imax' | 'dbox' | 'supermax' | 'cgvip'

export interface MovieFilters {
  genre: string
  status: MovieStatus
  sortBy: 'rating' | 'releaseDate' | 'title'
  search: string
}
