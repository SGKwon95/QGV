'use client'

import { getTheaters } from '@/lib/theaters'
import Link from 'next/link'

export default function TheaterList() {
  const theaters = getTheaters()

  return (
    <section className="py-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">CGV 극장</h2>
          <button className="text-sm text-red-400 hover:text-red-300 transition-colors">
            전체 극장 보기
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {theaters.map((theater) => (
            <Link
              key={theater.id}
              href={`/theaters/${theater.id}`}
              className="group block bg-gray-800/40 hover:bg-gray-800/70 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="aspect-[16/9] bg-gray-700/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">극장 이미지</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                  {theater.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{theater.location}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{theater.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
