import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button, Badge, Card, CardContent } from '@/components/ui'
import Link from 'next/link'

export default function ProjectsPage() {
  // Mock data - will be replaced with real data from Supabase
  const projects = [
    {
      id: '1',
      name: 'Keeta DEX',
      slug: 'keeta-dex',
      description: 'Decentralized exchange for trading tokens on Keeta Network with low fees and high throughput.',
      logo_url: '/logos/keeta-dex.svg',
      website: 'https://dex.keeta.com',
      twitter: 'https://x.com/keetadex',
      status: 'live',
      categories: ['DeFi', 'Trading'],
      is_trending: true,
    },
    {
      id: '2',
      name: 'Keeta Wallet',
      slug: 'keeta-wallet',
      description: 'Official wallet for Keeta Network with built-in KYC/AML compliance and cross-chain support.',
      logo_url: '/logos/keeta-wallet.svg',
      website: 'https://wallet.keeta.com',
      twitter: 'https://x.com/keetawallet',
      status: 'live',
      categories: ['Wallets', 'Infrastructure'],
      is_trending: true,
    },
    {
      id: '3',
      name: 'Keeta Bridge',
      slug: 'keeta-bridge',
      description: 'Cross-chain bridge connecting Keeta Network to Ethereum, Polygon, and other major chains.',
      logo_url: '/logos/keeta-bridge.svg',
      website: 'https://bridge.keeta.com',
      twitter: 'https://x.com/keetabridge',
      status: 'live',
      categories: ['Bridges', 'Infrastructure'],
      is_trending: false,
    },
    {
      id: '4',
      name: 'Keeta Pay',
      slug: 'keeta-pay',
      description: 'PayFi solution enabling instant payments with built-in compliance and regulatory features.',
      logo_url: '/logos/keeta-pay.svg',
      website: 'https://pay.keeta.com',
      twitter: 'https://x.com/keetapay',
      status: 'upcoming',
      categories: ['PayFi', 'Payments'],
      is_trending: true,
    },
    {
      id: '5',
      name: 'Keeta Analytics',
      slug: 'keeta-analytics',
      description: 'Real-time analytics and insights for the Keeta Network ecosystem and on-chain activity.',
      logo_url: '/logos/keeta-analytics.svg',
      website: 'https://analytics.keeta.com',
      twitter: 'https://x.com/keetaanalytics',
      status: 'live',
      categories: ['Analytics', 'Tools'],
      is_trending: false,
    },
    {
      id: '6',
      name: 'Keeta ID',
      slug: 'keeta-id',
      description: 'Decentralized identity solution with built-in KYC/AML compliance and privacy protection.',
      logo_url: '/logos/keeta-id.svg',
      website: 'https://id.keeta.com',
      twitter: 'https://x.com/keetaid',
      status: 'upcoming',
      categories: ['Identity', 'Privacy'],
      is_trending: true,
    },
  ]

  const categories = ['All', 'DeFi', 'Wallets', 'Bridges', 'PayFi', 'Analytics', 'Identity', 'Infrastructure']

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge variant="success">Live</Badge>
      case 'upcoming':
        return <Badge variant="outline">Upcoming</Badge>
      case 'inactive':
        return <Badge variant="danger">Inactive</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
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
              All Projects <span className="text-primary">({projects.length})</span>
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Discover all projects building on Keeta Network. Filter by category or search for specific projects.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-background-card rounded-lg border border-border">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'primary' : 'ghost'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="ml-auto">
              <select className="px-3 py-2 bg-background-primary border border-border rounded-lg text-text-primary">
                <option>Sort by: Trending</option>
                <option>Sort by: Recently Added</option>
                <option>Sort by: Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {project.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        {getStatusBadge(project.status)}
                      </div>
                    </div>
                    {project.is_trending && (
                      <Badge variant="live" className="animate-pulse">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost">
                        <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}