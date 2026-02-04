// CoinGecko API integration for $KTA token data

export interface TokenData {
  id: string
  symbol: string
  name: string
  current_price: number
  market_cap: number
  fully_diluted_valuation: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  total_volume: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  last_updated: string
}

// Cache for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000
const cache = new Map<string, { data: any; timestamp: number }>()

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  cache.delete(key)
  return null
}

function setCachedData<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}

export async function getKTATokenData(): Promise<TokenData | null> {
  const cacheKey = 'kta-token-data'
  const cached = getCachedData<TokenData>(cacheKey)
  if (cached) return cached

  try {
    const apiKey = process.env.COINGECKO_API_KEY
    const baseUrl = apiKey
      ? 'https://pro-api.coingecko.com/api/v3'
      : 'https://api.coingecko.com/api/v3'

    const headers: Record<string, string> = {}
    if (apiKey) {
      headers['X-Cg-Pro-Api-Key'] = apiKey
    }

    // Note: Replace 'keeta' with actual CoinGecko token ID once available
    const response = await fetch(
      `${baseUrl}/coins/keeta?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      { headers }
    )

    if (!response.ok) {
      if (response.status === 404) {
        console.warn('KTA token not found in CoinGecko')
        return null
      }
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    const data = await response.json()

    const tokenData: TokenData = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
      fully_diluted_valuation: data.market_data.fully_diluted_valuation?.usd || 0,
      price_change_24h: data.market_data.price_change_24h,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      market_cap_change_24h: data.market_data.market_cap_change_24h,
      market_cap_change_percentage_24h: data.market_data.market_cap_change_percentage_24h,
      total_volume: data.market_data.total_volume.usd,
      circulating_supply: data.market_data.circulating_supply,
      total_supply: data.market_data.total_supply,
      max_supply: data.market_data.max_supply,
      last_updated: data.last_updated,
    }

    setCachedData(cacheKey, tokenData)
    return tokenData
  } catch (error) {
    console.error('Error fetching KTA token data:', error)
    return null
  }
}

export async function getKTAPriceHistory(days: number = 30): Promise<Array<{ timestamp: number; price: number }> | null> {
  const cacheKey = `kta-price-history-${days}`
  const cached = getCachedData<Array<{ timestamp: number; price: number }>>(cacheKey)
  if (cached) return cached

  try {
    const apiKey = process.env.COINGECKO_API_KEY
    const baseUrl = apiKey
      ? 'https://pro-api.coingecko.com/api/v3'
      : 'https://api.coingecko.com/api/v3'

    const headers: Record<string, string> = {}
    if (apiKey) {
      headers['X-Cg-Pro-Api-Key'] = apiKey
    }

    // Note: Replace 'keeta' with actual CoinGecko token ID once available
    const response = await fetch(
      `${baseUrl}/coins/keeta/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      { headers }
    )

    if (!response.ok) {
      if (response.status === 404) {
        console.warn('KTA price history not found in CoinGecko')
        return null
      }
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    const data = await response.json()

    const priceHistory = data.prices.map(([timestamp, price]: [number, number]) => ({
      timestamp,
      price,
    }))

    setCachedData(cacheKey, priceHistory)
    return priceHistory
  } catch (error) {
    console.error('Error fetching KTA price history:', error)
    return null
  }
}

// Fallback function to get mock data if APIs are not available
export function getMockKTAData(): TokenData {
  return {
    id: 'keeta',
    symbol: 'kta',
    name: 'Keeta',
    current_price: 0.45,
    market_cap: 450000000,
    fully_diluted_valuation: 900000000,
    price_change_24h: 0.023,
    price_change_percentage_24h: 5.4,
    market_cap_change_24h: 23000000,
    market_cap_change_percentage_24h: 5.4,
    total_volume: 15000000,
    circulating_supply: 1000000000,
    total_supply: 2000000000,
    max_supply: 2000000000,
    last_updated: new Date().toISOString(),
  }
}