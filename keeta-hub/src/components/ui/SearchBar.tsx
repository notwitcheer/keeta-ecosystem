'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  onFocus?: () => void
  onBlur?: () => void
  className?: string
  autoFocus?: boolean
  value?: string
  onChange?: (value: string) => void
}

export function SearchBar({
  placeholder = 'Search projects, news...',
  onSearch,
  onFocus,
  onBlur,
  className,
  autoFocus = false,
  value,
  onChange,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const currentValue = value !== undefined ? value : internalValue
  const handleValueChange = onChange || setInternalValue

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentValue.trim() && onSearch) {
      onSearch(currentValue.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
    if (e.key === 'Escape') {
      handleValueChange('')
      inputRef.current?.blur()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)}>
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={currentValue}
          onChange={(e) => handleValueChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'block w-full pl-10 pr-12 py-3 rounded-lg',
            'bg-background-card border border-border',
            'text-text-primary placeholder-text-secondary',
            'focus:ring-2 focus:ring-primary focus:border-primary',
            'transition-colors duration-200',
            'hover:bg-background-card-hover'
          )}
        />

        {/* Clear Button */}
        {currentValue && (
          <button
            type="button"
            onClick={() => {
              handleValueChange('')
              inputRef.current?.focus()
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </form>
  )
}

export function SearchButton({
  onClick,
  className
}: {
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
        'bg-background-card border border-border',
        'text-text-secondary hover:text-text-primary',
        'hover:bg-background-card-hover transition-colors',
        className
      )}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span>Search</span>
      <kbd className="px-1.5 py-0.5 text-xs bg-background-primary rounded border border-border">
        ⌘K
      </kbd>
    </button>
  )
}