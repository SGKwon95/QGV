import { Theater } from '@/types'
import { MOCK_THEATERS } from './mock-data'

export function getTheaters(): Theater[] {
  return MOCK_THEATERS
}

export function getTheaterById(id: string): Theater | undefined {
  return MOCK_THEATERS.find((t) => t.id === id)
}

export function getTheatersByLocation(location: string): Theater[] {
  if (!location) return MOCK_THEATERS
  return MOCK_THEATERS.filter((t) => t.location.includes(location))
}
