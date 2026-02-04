import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import Link from 'next/link'

export default function NewsPage() {
  // Mock data - will be replaced with real data from Supabase
  const news = [
    {
      id: '1',
      title: 'Keeta Network Mainnet Launch: A New Era of High-Speed Blockchain',
      slug: 'keeta-network-mainnet-launch',
      excerpt: 'Keeta Network officially launches mainnet with 10M+ TPS capability and built-in KYC/AML compliance, setting new standards for enterprise blockchain adoption.',
      featured_image: '/news/keeta-mainnet-launch.jpg',
      published_at: '2025-09-22T00:00:00Z',
      tags: ['Official', 'Mainnet', 'Launch'],
      source: 'Keeta Network',
      source_url: 'https://blog.keeta.com/mainnet-launch',
    },
    {
      id: '2',
      title: 'Major DeFi Protocol Migrates to Keeta Network for Superior Performance',
      slug: 'major-defi-protocol-migration',
      excerpt: 'Leading DeFi platform announces migration to Keeta Network citing 400ms settlement times and cost efficiency for high-frequency trading.',
      featured_image: '/news/defi-migration.jpg',
      published_at: '2025-10-15T00:00:00Z',
      tags: ['DeFi', 'Migration', 'Protocol Updates'],
      source: 'DeFi Pulse',
      source_url: 'https://defipulse.com/keeta-migration',
    },
    {
      id: '3',
      title: '$50M Funding Round Leads Keeta Ecosystem Development',
      slug: 'keeta-funding-round',
      excerpt: 'Keeta Network secures $50M in Series B funding to accelerate ecosystem development and enterprise partnerships.',
      featured_image: '/news/funding-round.jpg',
      published_at: '2025-11-02T00:00:00Z',
      tags: ['Funding', 'Investment', 'Growth'],
      source: 'TechCrunch',
      source_url: 'https://techcrunch.com/keeta-funding',
    },
    {
      id: '4',
      title: 'Keeta Bridge Connects to 15+ Major Blockchains',
      slug: 'keeta-bridge-expansion',
      excerpt: 'Cross-chain bridge infrastructure expands to support Ethereum, Polygon, BSC, Avalanche, and 11 other major networks.',
      featured_image: '/news/bridge-expansion.jpg',
      published_at: '2025-11-20T00:00:00Z',
      tags: ['Bridges', 'Infrastructure', 'Cross-chain'],
      source: 'Keeta Network',
      source_url: 'https://blog.keeta.com/bridge-expansion',
    },
    {
      id: '5',
      title: 'Enterprise Adoption Grows with Built-in Compliance Features',
      slug: 'enterprise-adoption',
      excerpt: 'Fortune 500 companies adopt Keeta Network for payments and tokenization, leveraging built-in KYC/AML compliance.',
      featured_image: '/news/enterprise-adoption.jpg',
      published_at: '2025-12-05T00:00:00Z',
      tags: ['Enterprise', 'Compliance', 'Adoption'],
      source: 'Forbes',
      source_url: 'https://forbes.com/keeta-enterprise',
    },
    {
      id: '6',
      title: 'Keeta Network Security Audit Confirms Zero Vulnerabilities',
      slug: 'security-audit-results',
      excerpt: 'Comprehensive security audit by leading blockchain security firms confirms robust architecture with zero critical vulnerabilities.',
      featured_image: '/news/security-audit.jpg',
      published_at: '2026-01-15T00:00:00Z',
      tags: ['Security', 'Audit', 'Safety'],
      source: 'Keeta Network',
      source_url: 'https://blog.keeta.com/security-audit',
    },
  ]

  const tags = ['All', 'Official', 'DeFi', 'Funding', 'Security', 'Infrastructure', 'Enterprise', 'Compliance']

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTagVariant = (tag: string) => {
    switch (tag) {
      case 'Official':
        return 'success'
      case 'Funding':
        return 'live'
      case 'Security':
        return 'danger'
      case 'DeFi':
        return 'outline'
      default:
        return 'outline'
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Ecosystem <span className="text-primary">News</span>
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Stay updated with the latest news, announcements, and developments in the Keeta Network ecosystem.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-background-card rounded-lg border border-border">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={tag === 'All' ? 'primary' : 'ghost'}
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
            <div className="ml-auto">
              <select className="px-3 py-2 bg-background-primary border border-border rounded-lg text-text-primary">
                <option>Sort by: Most Recent</option>
                <option>Sort by: Most Popular</option>
                <option>Sort by: Oldest</option>
              </select>
            </div>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured News</h2>
            <Card className="overflow-hidden bg-gradient-to-r from-background-card to-primary/5 border-primary/20">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="success">Official</Badge>
                      <Badge variant="live">Featured</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link href="/news/keeta-network-mainnet-launch">
                        Keeta Network Mainnet Launch: A New Era of High-Speed Blockchain
                      </Link>
                    </h3>
                    <p className="text-text-secondary mb-4">
                      Keeta Network officially launches mainnet with 10M+ TPS capability and built-in KYC/AML compliance,
                      setting new standards for enterprise blockchain adoption.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-text-secondary">
                        September 22, 2025 • Keeta Network
                      </div>
                      <Button asChild>
                        <Link href="/news/keeta-network-mainnet-launch">
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="group hover:bg-background-card-hover transition-all hover:scale-105">
                <CardContent className="p-0">
                  {/* Featured Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                    <span className="text-3xl">📰</span>
                  </div>

                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant={getTagVariant(tag)} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex justify-between items-center text-xs text-text-secondary">
                      <div>{formatDate(article.published_at)}</div>
                      <div>{article.source}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Stay Updated with Keeta News
                </h2>
                <p className="text-text-secondary mb-6 max-w-md mx-auto">
                  Get the latest Keeta Network news and ecosystem updates delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary"
                  />
                  <Button>
                    Subscribe
                  </Button>
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