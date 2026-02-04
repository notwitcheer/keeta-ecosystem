import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button, Badge, Card, CardContent } from '@/components/ui'
import Link from 'next/link'

// Mock data for demo
const mockProjects = [
  {
    id: '1',
    name: 'Keeta DEX',
    slug: 'keeta-dex',
    description: 'Decentralized exchange with advanced trading features and cross-chain support',
    logo: '🔄',
    status: 'live' as const,
    categories: ['DeFi', 'Trading'],
    website: 'https://dex.keeta.com',
    twitter: '@KeetaDEX'
  },
  {
    id: '2',
    name: 'Keeta Wallet',
    slug: 'keeta-wallet',
    description: 'Secure, user-friendly wallet with built-in KYC and multi-chain support',
    logo: '💼',
    status: 'live' as const,
    categories: ['Wallet', 'Identity'],
    website: 'https://wallet.keeta.com',
    twitter: '@KeetaWallet'
  },
  {
    id: '3',
    name: 'Keeta Bridge',
    slug: 'keeta-bridge',
    description: 'Cross-chain bridge connecting Keeta to major blockchains',
    logo: '🌉',
    status: 'upcoming' as const,
    categories: ['Bridge', 'Infrastructure'],
    website: 'https://bridge.keeta.com',
    twitter: '@KeetaBridge'
  },
  {
    id: '4',
    name: 'Keeta Pay',
    slug: 'keeta-pay',
    description: 'PayFi platform for seamless crypto payments and merchant integration',
    logo: '💳',
    status: 'live' as const,
    categories: ['PayFi', 'Payments'],
    website: 'https://pay.keeta.com',
    twitter: '@KeetaPay'
  }
]

const mockCategories = [
  { name: 'DeFi', icon: '💰', count: 12, description: 'Decentralized finance protocols' },
  { name: 'Wallets', icon: '💼', count: 8, description: 'Secure wallet solutions' },
  { name: 'Bridges', icon: '🌉', count: 6, description: 'Cross-chain connectivity' },
  { name: 'PayFi', icon: '💳', count: 5, description: 'Payment finance solutions' },
  { name: 'Infrastructure', icon: '🏗️', count: 7, description: 'Core network tools' },
  { name: 'Identity', icon: '🆔', count: 4, description: 'Identity & verification' }
]

const mockNews = [
  {
    id: '1',
    title: 'Keeta Network Mainnet Launch Success',
    excerpt: 'Keeta Network officially launches its mainnet with 10M+ TPS capability',
    tags: ['Official', 'Launch'],
    date: '2025-09-22',
    image: '📰'
  },
  {
    id: '2',
    title: 'Major DeFi Protocol Migrates to Keeta',
    excerpt: 'Leading DeFi protocol announces migration bringing $50M TVL',
    tags: ['DeFi', 'Migration'],
    date: '2025-09-20',
    image: '📈'
  },
  {
    id: '3',
    title: 'Keeta Raises $25M Series A',
    excerpt: 'Funding round led by top VCs to accelerate ecosystem growth',
    tags: ['Funding', 'Investment'],
    date: '2025-09-18',
    image: '💰'
  }
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background-primary to-primary-dark py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4">
                Keeta <span className="gradient-text">Hub</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Explore the Keeta ecosystem. Discover projects, stay updated with news, and find the tools you need.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects, news..."
                    className="w-full pl-4 pr-12 py-3 rounded-lg bg-background-card border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Button size="sm" className="absolute right-1 top-1">
                    Search
                  </Button>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild size="lg">
                  <Link href="/projects">Explore Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/submit">+ Submit Project</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/news">Latest News</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/categories">Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-background-card border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-text-primary">45</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">12</div>
                <div className="text-sm text-text-secondary">News Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">8</div>
                <div className="text-sm text-text-secondary">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">$2.1M</div>
                <div className="text-sm text-text-secondary">Total TVL</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Trending Projects</h2>
              <Link href="/projects" className="text-primary hover:text-primary-hover">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProjects.map((project) => (
                <Card key={project.id} className="group hover:bg-background-card-hover transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{project.logo}</div>
                      <Badge variant={project.status === 'live' ? 'success' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((category) => (
                        <Badge key={category} variant="outline" size="sm">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.website}>Website</Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`https://twitter.com/${project.twitter.replace('@', '')}`}>X</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Categories Section */}
        <section className="py-16 bg-background-card">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Top Categories</h2>
              <Link href="/categories" className="text-primary hover:text-primary-hover">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {mockCategories.map((category) => (
                <Card key={category.name} className="group hover:bg-background-card-hover transition-colors text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-text-secondary mb-2">{category.count} projects</p>
                    <p className="text-xs text-text-secondary">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Link href="/news" className="text-primary hover:text-primary-hover">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockNews.map((article) => (
                <Card key={article.id} className="group hover:bg-background-card-hover transition-colors">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{article.image}</div>
                    <div className="flex gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                    <p className="text-text-secondary text-sm mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-text-secondary">{article.date}</span>
                      <Button size="sm" variant="ghost">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}