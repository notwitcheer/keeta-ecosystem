import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Mock data - will be replaced with real data from Supabase
const getProjectBySlug = (slug: string) => {
  const projects = [
    {
      id: '1',
      name: 'Keeta DEX',
      slug: 'keeta-dex',
      description: 'Advanced decentralized exchange built for the Keeta Network, featuring high-speed trading, concentrated liquidity, and institutional-grade features. Experience trading with sub-second settlement times and minimal fees.',
      long_description: 'Keeta DEX represents the next evolution in decentralized trading, built specifically to leverage the high-speed capabilities of Keeta Network. With over 10M TPS capacity and 400ms settlement times, traders can execute complex strategies with institutional-grade precision.\n\nKey features include concentrated liquidity pools, advanced order types, flash loans, and built-in compliance tools for institutional users. The platform supports both retail and professional traders with sophisticated risk management and portfolio tools.',
      logo_url: '/logos/keeta-dex.svg',
      website: 'https://dex.keeta.com',
      twitter: 'https://x.com/keetadex',
      discord: 'https://discord.gg/keetadex',
      telegram: 'https://t.me/keetadex',
      github: 'https://github.com/keetadex',
      status: 'live',
      categories: ['DeFi', 'Trading'],
      is_trending: true,
      stats: {
        tvl: '$2.1M',
        volume_24h: '$450K',
        users: '1,247',
        transactions: '15,892'
      }
    },
    {
      id: '2',
      name: 'Keeta Wallet',
      slug: 'keeta-wallet',
      description: 'Official wallet for Keeta Network with built-in KYC/AML compliance and cross-chain support.',
      long_description: 'The official Keeta Wallet provides secure, compliant access to the Keeta ecosystem with built-in KYC/AML features and seamless cross-chain functionality.',
      logo_url: '/logos/keeta-wallet.svg',
      website: 'https://wallet.keeta.com',
      twitter: 'https://x.com/keetawallet',
      status: 'live',
      categories: ['Wallets', 'Infrastructure'],
      is_trending: true,
      stats: {
        downloads: '25K+',
        supported_chains: '15',
        users: '18,543',
        rating: '4.8/5'
      }
    },
  ]

  return projects.find(project => project.slug === slug)
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

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
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-text-primary">{project.name}</span>
            </div>
          </nav>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{project.name}</h1>
                    {getStatusBadge(project.status)}
                    {project.is_trending && (
                      <Badge variant="live" className="animate-pulse">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>
                  <p className="text-text-secondary text-lg">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <Button>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    🌐 Website
                  </a>
                </Button>
                {project.twitter && (
                  <Button variant="outline">
                    <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                      🐦 Twitter
                    </a>
                  </Button>
                )}
                {project.discord && (
                  <Button variant="outline">
                    <a href={project.discord} target="_blank" rel="noopener noreferrer">
                      💬 Discord
                    </a>
                  </Button>
                )}
                {project.telegram && (
                  <Button variant="outline">
                    <a href={project.telegram} target="_blank" rel="noopener noreferrer">
                      📱 Telegram
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      💻 GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Project Stats</h3>
                  <div className="space-y-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-text-secondary capitalize">
                          {key.replace('_', ' ')}
                        </span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">About {project.name}</h2>
                  <div className="prose prose-invert max-w-none">
                    {project.long_description.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">High-Speed Trading</h4>
                        <p className="text-sm text-text-secondary">Execute trades in under 400ms with minimal slippage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Concentrated Liquidity</h4>
                        <p className="text-sm text-text-secondary">Maximize capital efficiency with advanced AMM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Institutional Tools</h4>
                        <p className="text-sm text-text-secondary">Advanced order types and risk management</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Built-in Compliance</h4>
                        <p className="text-sm text-text-secondary">KYC/AML compliance for enterprise users</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Security */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Security</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" className="text-xs">✓</Badge>
                      <span className="text-sm">Smart Contract Audited</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" className="text-xs">✓</Badge>
                      <span className="text-sm">Bug Bounty Program</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" className="text-xs">✓</Badge>
                      <span className="text-sm">Multi-sig Treasury</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Community</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-text-secondary">Discord Members</span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-text-secondary">Twitter Followers</span>
                      <span className="font-semibold">5,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-text-secondary">Telegram Members</span>
                      <span className="font-semibold">1,924</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Report */}
              <Card className="border-danger/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-danger">Report Project</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Report inappropriate content or suspicious activity.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Keeta Bridge</h3>
                      <Badge variant="success" className="text-xs">Live</Badge>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    Cross-chain bridge connecting Keeta to 15+ major blockchains
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Bridges</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Keeta Pay</h3>
                      <Badge variant="outline" className="text-xs">Upcoming</Badge>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    PayFi solution enabling instant payments with built-in compliance
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">PayFi</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Keeta ID</h3>
                      <Badge variant="outline" className="text-xs">Upcoming</Badge>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    Decentralized identity solution with KYC/AML compliance
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Identity</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Projects */}
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">
                ← Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}