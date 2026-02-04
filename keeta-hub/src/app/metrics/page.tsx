'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import Link from 'next/link'

export default function MetricsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Mock data - will be replaced with real API data
  const [metrics, setMetrics] = useState({
    tvl: {
      value: 2100000,
      change24h: 5.2,
      formatted: '$2.1M'
    },
    stablecoinsMcap: {
      value: 850000,
      change24h: 2.1,
      formatted: '$850K'
    },
    dexVolume24h: {
      value: 1200000,
      change24h: 12.5,
      formatted: '$1.2M'
    },
    bridgedTvl: {
      value: 450000,
      change24h: -1.8,
      formatted: '$450K'
    },
    ktaPrice: {
      value: 0.045,
      change24h: 8.3,
      formatted: '$0.045'
    },
    ktaMarketCap: {
      value: 45000000,
      change24h: 8.1,
      formatted: '$45M'
    },
    ktaFdv: {
      value: 90000000,
      change24h: 8.3,
      formatted: '$90M'
    },
    activeWallets: {
      value: 25847,
      change24h: 15.2,
      formatted: '25.8K'
    },
    transactions24h: {
      value: 2847293,
      change24h: 23.1,
      formatted: '2.85M'
    },
    avgTps: {
      value: 32.9,
      change24h: 23.1,
      formatted: '32.9'
    }
  })

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Simulate real-time updates
    const updateTimer = setInterval(() => {
      setLastUpdated(new Date())
      // In real app, this would fetch fresh data
    }, 30000)

    return () => {
      clearTimeout(timer)
      clearInterval(updateTimer)
    }
  }, [])

  const refreshMetrics = () => {
    setIsLoading(true)
    // In real app, this would fetch fresh data from APIs
    setTimeout(() => {
      setIsLoading(false)
      setLastUpdated(new Date())
    }, 1000)
  }

  const formatChange = (change: number) => {
    const isPositive = change > 0
    const prefix = isPositive ? '+' : ''
    return (
      <span className={isPositive ? 'text-success' : 'text-danger'}>
        {prefix}{change.toFixed(1)}%
      </span>
    )
  }

  const MetricCard = ({ title, value, change, subtitle, isLoading: cardLoading }: {
    title: string
    value: string
    change: number
    subtitle?: string
    isLoading: boolean
  }) => (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        {cardLoading ? (
          <div className="animate-pulse">
            <div className="h-4 bg-border rounded mb-2"></div>
            <div className="h-8 bg-border rounded mb-2"></div>
            <div className="h-3 bg-border rounded w-1/2"></div>
          </div>
        ) : (
          <>
            <div className="text-sm text-text-secondary mb-2">{title}</div>
            <div className="text-2xl font-bold font-mono mb-2">{value}</div>
            <div className="flex items-center justify-between text-sm">
              <div>{formatChange(change)}</div>
              {subtitle && <div className="text-text-secondary">{subtitle}</div>}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )

  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-bold mb-2">
                Chain <span className="text-primary">Metrics</span>
              </h1>
              <p className="text-text-secondary">
                Real-time Keeta Network data and ecosystem metrics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-text-secondary">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <Button
                onClick={refreshMetrics}
                disabled={isLoading}
                size="sm"
                variant="outline"
              >
                {isLoading ? '...' : '↻ Refresh'}
              </Button>
              <Button size="sm" variant="ghost">
                <a href="https://defillama.com" target="_blank" rel="noopener noreferrer">
                  View on DefiLlama
                </a>
              </Button>
            </div>
          </div>

          {/* Network Status */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold">Keeta Network Status</div>
                      <div className="text-sm text-text-secondary">All systems operational</div>
                    </div>
                  </div>
                  <div className="flex space-x-6 text-sm">
                    <div>
                      <div className="text-text-secondary">Block Height</div>
                      <div className="font-mono">2,847,293</div>
                    </div>
                    <div>
                      <div className="text-text-secondary">Block Time</div>
                      <div className="font-mono">400ms</div>
                    </div>
                    <div>
                      <div className="text-text-secondary">Validators</div>
                      <div className="font-mono">127</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Row Metrics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">DeFi Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total Value Locked"
                value={metrics.tvl.formatted}
                change={metrics.tvl.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Stablecoins Market Cap"
                value={metrics.stablecoinsMcap.formatted}
                change={metrics.stablecoinsMcap.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="DEX Volume"
                value={metrics.dexVolume24h.formatted}
                change={metrics.dexVolume24h.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Bridged TVL"
                value={metrics.bridgedTvl.formatted}
                change={metrics.bridgedTvl.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Token Metrics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              $KTA Token Metrics
              <Badge variant="live" className="ml-3">Live</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="KTA Price"
                value={metrics.ktaPrice.formatted}
                change={metrics.ktaPrice.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Market Cap"
                value={metrics.ktaMarketCap.formatted}
                change={metrics.ktaMarketCap.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Fully Diluted Value"
                value={metrics.ktaFdv.formatted}
                change={metrics.ktaFdv.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Network Activity */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Network Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="Active Wallets"
                value={metrics.activeWallets.formatted}
                change={metrics.activeWallets.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Transactions"
                value={metrics.transactions24h.formatted}
                change={metrics.transactions24h.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
              <MetricCard
                title="Average TPS"
                value={metrics.avgTps.formatted}
                change={metrics.avgTps.change24h}
                subtitle="24h"
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Charts Placeholder */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Historical Data</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">TVL History (30d)</h3>
                  <div className="h-64 bg-gradient-to-tr from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📈</div>
                      <div className="text-text-secondary">Chart visualization coming soon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">DEX Volume (7d)</h3>
                  <div className="h-64 bg-gradient-to-tr from-success/10 to-success/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-text-secondary">Chart visualization coming soon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* API Info */}
          <div>
            <Card className="bg-background-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-semibold mb-2">Data Sources</h3>
                    <p className="text-text-secondary text-sm">
                      Metrics are sourced from DefiLlama, CoinGecko, and Keeta Network APIs.
                      Data is refreshed every 5 minutes.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <a href="https://defillama.com" target="_blank" rel="noopener noreferrer">
                        DefiLlama
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <a href="https://coingecko.com" target="_blank" rel="noopener noreferrer">
                        CoinGecko
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <a href="https://explorer.keeta.com" target="_blank" rel="noopener noreferrer">
                        Keeta Explorer
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}