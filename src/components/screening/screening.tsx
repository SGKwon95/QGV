'use client'

import { useState } from 'react'

const DAYS = [
  { date: '4/23', day: '수', today: true },
  { date: '4/24', day: '목', today: false },
  { date: '4/25', day: '금', today: false },
  { date: '4/26', day: '토', today: false },
  { date: '4/27', day: '일', today: false },
  { date: '4/28', day: '월', today: false },
  { date: '4/29', day: '화', today: false },
]

const TIME_SLOTS = ['09:00', '11:30', '13:15', '15:45', '17:30', '19:00', '21:15', '23:00']

const SCREEN_TYPES = [
  { id: 'standard', label: '표준', color: 'bg-gray-600' },
  { id: '3d', label: '3D', color: 'bg-blue-600' },
  { id: 'imax', label: 'IMAX', color: 'bg-purple-600' },
  { id: '4d', label: '4DX', color: 'bg-orange-600' },
  { id: 'dbox', label: 'DBOX', color: 'bg-green-600' },
]

export default function Screening() {
  const [selectedDate, setSelectedDate] = useState('4/23')
  const [selectedMovie, setSelectedMovie] = useState('1')
  const [selectedTheater, setSelectedTheater] = useState('t1')
  const [selectedScreenType, setSelectedScreenType] = useState<string | null>(null)

  const movies = [
    { id: '1', title: '다이버전트: 다크 에디션', poster: '' },
    { id: '6', title: '기생충', poster: '' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">상영 시간표</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-48 flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
            {movies.map((movie) => (
              <button
                key={movie.id}
                onClick={() => setSelectedMovie(movie.id)}
                className={`flex-shrink-0 p-3 rounded-xl border transition-colors text-left ${
                  selectedMovie === movie.id
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <p className="text-sm font-semibold">{movie.title}</p>
                <p className="text-xs text-gray-400 mt-1">상영 중</p>
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {DAYS.map((day) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDate(day.date)}
                  className={`flex-shrink-0 w-14 py-2.5 rounded-xl text-center transition-colors ${
                    selectedDate === day.date
                      ? 'bg-red-600 text-white'
                      : day.today
                      ? 'border border-red-500 text-red-400'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                  }`}
                >
                  <div className="text-xs">{day.date}</div>
                  <div className="text-sm font-semibold">{day.day}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {SCREEN_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedScreenType(selectedScreenType === type.id ? null : type.id)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedScreenType === type.id
                      ? `${type.color} text-white`
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">극장 선택</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[
                  { id: 't1', name: 'CGV 건대입구' },
                  { id: 't2', name: 'CGV 용산아이파크' },
                  { id: 't3', name: 'CGV 분당역' },
                ].map((theater) => (
                  <button
                    key={theater.id}
                    onClick={() => setSelectedTheater(theater.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedTheater === theater.id
                        ? 'bg-white text-gray-900 font-semibold'
                        : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                    }`}
                  >
                    {theater.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-400">상영 시간</p>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
