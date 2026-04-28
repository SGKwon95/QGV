'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: '영화', href: '/movies' },
    { label: '극장', href: '/theaters' },
    { label: '스크린', href: '/screening' },
    { label: '리뷰', href: '/reviews' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">KGV</span>
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">KGV</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-gray-800/60 rounded-lg px-3 py-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="영화 검색"
                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-400 ml-2 w-36"
              />
            </div>

            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              로그인
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="sm:hidden px-4 py-3">
              <div className="flex items-center bg-gray-800/60 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="영화 검색"
                  className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-400 ml-2 w-full"
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
