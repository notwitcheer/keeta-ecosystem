'use client'

import { useState, useEffect, useRef } from 'react'
import { Modal, ModalContent, SearchBar } from '@/components/ui'

export interface SearchResult {
  id: string
  type: 'project' | 'news' | 'category'
  title: string
  description: string
  url: string
  category?: string
  tags?: string[]
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Mock search results - replace with actual API call
  const mockResults: SearchResult[] = [
    {
      id: '1',
      type: 'project',
      title: 'KeetaSwap DEX',
      description: 'Decentralized exchange built on Keeta Network',
      url: '/projects/keetaswap',
      category: 'DeFi',
    },
    {
      id: '2',
      type: 'project',
      title: 'Keeta Wallet',
      description: 'Official wallet for Keeta Network',
      url: '/projects/keeta-wallet',
      category: 'Wallets',
    },
    {
      id: '3',
      type: 'news',
      title: 'Keeta Network Mainnet Launch',
      description: 'Keeta Network officially launches its mainnet',
      url: '/news/mainnet-launch',
      tags: ['Official', 'Protocol Updates'],
    },
  ]

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      // Focus the search input when modal opens
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true)
      // Simulate API call
      const timeoutId = setTimeout(() => {
        const filtered = mockResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase()) ||
            result.category?.toLowerCase().includes(query.toLowerCase()) ||
            result.tags?.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timeoutId)
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query])

  const handleResultClick = (result: SearchResult) => {
    // Navigate to the result URL
    window.location.href = result.url
    onClose()
  }

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'project':
        return (
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )
      case 'news':
        return (
          <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            </svg>
          </div>
        )
      case 'category':
        return (
          <div className="w-8 h-8 bg-primary-light/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
        )
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-2xl"
      overlayClassName="backdrop-blur-md"
    >
      <ModalContent className="p-0">
        {/* Search Input */}
        <div className="p-4 border-b border-border">
          <SearchBar
            ref={searchInputRef}
            placeholder="Search projects, news, categories..."
            value={query}
            onChange={setQuery}
            className="border-0 bg-transparent"
            autoFocus
          />
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading && (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-text-secondary mt-2">Searching...</p>
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-text-primary font-medium">No results found</p>
              <p className="text-text-secondary text-sm mt-1">
                Try adjusting your search terms
              </p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full p-3 rounded-lg hover:bg-background-card-hover transition-colors text-left flex items-start space-x-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {getResultIcon(result.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-medium text-text-primary truncate">
                        {result.title}
                      </h4>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full capitalize">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {result.description}
                    </p>
                    {result.category && (
                      <div className="mt-2">
                        <span className="text-xs px-2 py-0.5 bg-background-card rounded text-text-secondary">
                          {result.category}
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {!query && (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-text-primary font-medium">Start typing to search</p>
              <p className="text-text-secondary text-sm mt-1">
                Find projects, news, and categories in the Keeta ecosystem
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center space-x-4">
              <kbd className="px-2 py-1 bg-background-primary rounded border border-border">↵</kbd>
              <span>to select</span>
            </div>
            <div className="flex items-center space-x-4">
              <kbd className="px-2 py-1 bg-background-primary rounded border border-border">esc</kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}