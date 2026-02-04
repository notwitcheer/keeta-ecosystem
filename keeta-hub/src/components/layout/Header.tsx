'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, SearchButton } from '@/components/ui'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Categories', href: '/categories' },
    { name: 'News', href: '/news' },
    { name: 'Metrics', href: '/metrics' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background-primary/95 backdrop-blur supports-[backdrop-filter]:bg-background-primary/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-text-primary">
              Keeta <span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Opens Search Modal */}
            <SearchButton className="hidden sm:flex" />

            {/* Submit Project Button */}
            <Button asChild size="sm">
              <Link href="/submit">+ Submit Project</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-card-hover transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={cn('w-6 h-6 transition-transform', isMenuOpen && 'rotate-90')}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-2 text-text-secondary hover:text-text-primary transition-colors font-medium rounded-lg hover:bg-background-card-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <SearchButton className="w-full justify-center" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}