// DefiLlama API integration for Keeta Network metrics

export interface ChainTVL {
  tvl: number
  tvlPrevDay: number
  tvlPrevWeek: number
  tvlPrevMonth: number
}

export interface StablecoinData {
  totalCirculating: number
  totalCirculatingPrevDay: number
  totalCirculatingPrevWeek: number
  totalCirculatingPrevMonth: number
}

export interface DexVolumeData {
  totalVolume: number
  totalVolume24hPrev: number
  dailyVolume: number
  change_1d: number
}

export interface BridgedTVL {
  tvl: number
  change_1d: number
  change_7d: number
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

export async function getKeetaChainTVL(): Promise<ChainTVL | null> {
  const cacheKey = 'keeta-chain-tvl'
  const cached = getCachedData<ChainTVL>(cacheKey)
  if (cached) return cached

  try {
    // Note: Replace 'Keeta' with actual chain identifier once available in DefiLlama
    const response = await fetch('https://api.llama.fi/v2/chains')
    const chains = await response.json()

    const keetaChain = chains.find((chain: any) =>
      chain.name.toLowerCase().includes('keeta')
    )

    if (!keetaChain) {
      console.warn('Keeta chain not found in DefiLlama data')
      return null
    }

    const tvlData: ChainTVL = {
      tvl: keetaChain.tvl,
      tvlPrevDay: keetaChain.tvlPrevDay,
      tvlPrevWeek: keetaChain.tvlPrevWeek,
      tvlPrevMonth: keetaChain.tvlPrevMonth,
    }

    setCachedData(cacheKey, tvlData)
    return tvlData
  } catch (error) {
    console.error('Error fetching Keeta TVL data:', error)
    return null
  }
}

export async function getKeetaStablecoins(): Promise<StablecoinData | null> {
  const cacheKey = 'keeta-stablecoins'
  const cached = getCachedData<StablecoinData>(cacheKey)
  if (cached) return cached

  try {
    const response = await fetch('https://stablecoins.llama.fi/stablecoinchains')
    const data = await response.json()

    const keetaData = data.find((chain: any) =>
      chain.name.toLowerCase().includes('keeta')
    )

    if (!keetaData) {
      console.warn('Keeta stablecoin data not found')
      return null
    }

    const stablecoinData: StablecoinData = {
      totalCirculating: keetaData.totalCirculating,
      totalCirculatingPrevDay: keetaData.totalCirculatingPrevDay,
      totalCirculatingPrevWeek: keetaData.totalCirculatingPrevWeek,
      totalCirculatingPrevMonth: keetaData.totalCirculatingPrevMonth,
    }

    setCachedData(cacheKey, stablecoinData)
    return stablecoinData
  } catch (error) {
    console.error('Error fetching Keeta stablecoin data:', error)
    return null
  }
}

export async function getKeetaDEXVolume(): Promise<DexVolumeData | null> {
  const cacheKey = 'keeta-dex-volume'
  const cached = getCachedData<DexVolumeData>(cacheKey)
  if (cached) return cached

  try {
    // Note: Replace with actual Keeta chain identifier
    const response = await fetch('https://api.llama.fi/overview/dexs/keeta')
    const data = await response.json()

    const volumeData: DexVolumeData = {
      totalVolume: data.totalVolume,
      totalVolume24hPrev: data.totalVolume24hPrev,
      dailyVolume: data.dailyVolume,
      change_1d: data.change_1d,
    }

    setCachedData(cacheKey, volumeData)
    return volumeData
  } catch (error) {
    console.error('Error fetching Keeta DEX volume data:', error)
    return null
  }
}

export async function getKeetaBridgedTVL(): Promise<BridgedTVL | null> {
  const cacheKey = 'keeta-bridged-tvl'
  const cached = getCachedData<BridgedTVL>(cacheKey)
  if (cached) return cached

  try {
    // This would need to be implemented based on actual bridge data availability
    // For now, returning mock structure
    const bridgedData: BridgedTVL = {
      tvl: 0,
      change_1d: 0,
      change_7d: 0,
    }

    setCachedData(cacheKey, bridgedData)
    return bridgedData
  } catch (error) {
    console.error('Error fetching Keeta bridged TVL data:', error)
    return null
  }
}

export async function getKeetaTVLHistory(days: number = 30): Promise<Array<{ date: string; tvl: number }> | null> {
  const cacheKey = `keeta-tvl-history-${days}`
  const cached = getCachedData<Array<{ date: string; tvl: number }>>(cacheKey)
  if (cached) return cached

  try {
    // Note: Replace 'Keeta' with actual chain identifier
    const response = await fetch(`https://api.llama.fi/v2/historicalChainTvl/Keeta`)
    const data = await response.json()

    const historyData = data.slice(-days).map((item: any) => ({
      date: new Date(item.date * 1000).toISOString().split('T')[0],
      tvl: item.tvl,
    }))

    setCachedData(cacheKey, historyData)
    return historyData
  } catch (error) {
    console.error('Error fetching Keeta TVL history:', error)
    return null
  }
}