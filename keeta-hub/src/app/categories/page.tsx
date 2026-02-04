import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Button } from '@/components/ui'
import Link from 'next/link'

export default function CategoriesPage() {
  // Mock data - will be replaced with real data from Supabase
  const categories = [
    {
      id: '1',
      name: 'DeFi',
      slug: 'defi',
      description: 'Decentralized finance protocols, DEXs, lending platforms, and yield farming projects.',
      icon: '💰',
      project_count: 12,
      sort_order: 1,
    },
    {
      id: '2',
      name: 'Wallets',
      slug: 'wallets',
      description: 'Digital wallets and portfolio management tools for Keeta Network.',
      icon: '👛',
      project_count: 8,
      sort_order: 2,
    },
    {
      id: '3',
      name: 'Bridges',
      slug: 'bridges',
      description: 'Cross-chain bridges connecting Keeta Network to other blockchains.',
      icon: '🌉',
      project_count: 5,
      sort_order: 3,
    },
    {
      id: '4',
      name: 'PayFi',
      slug: 'payfi',
      description: 'Payment infrastructure and financial services with built-in compliance.',
      icon: '💳',
      project_count: 6,
      sort_order: 4,
    },
    {
      id: '5',
      name: 'Infrastructure',
      slug: 'infrastructure',
      description: 'Core infrastructure, validators, RPC endpoints, and developer tools.',
      icon: '🏗️',
      project_count: 15,
      sort_order: 5,
    },
    {
      id: '6',
      name: 'Identity',
      slug: 'identity',
      description: 'Decentralized identity solutions with KYC/AML compliance and privacy.',
      icon: '🆔',
      project_count: 4,
      sort_order: 6,
    },
    {
      id: '7',
      name: 'NFT',
      slug: 'nft',
      description: 'Non-fungible token marketplaces, collections, and gaming projects.',
      icon: '🖼️',
      project_count: 9,
      sort_order: 7,
    },
    {
      id: '8',
      name: 'Tools',
      slug: 'tools',
      description: 'Developer tools, analytics platforms, and ecosystem utilities.',
      icon: '🛠️',
      project_count: 11,
      sort_order: 8,
    },
    {
      id: '9',
      name: 'RWA',
      slug: 'rwa',
      description: 'Real-world asset tokenization and traditional finance integration.',
      icon: '🏦',
      project_count: 3,
      sort_order: 9,
    },
    {
      id: '10',
      name: 'Gaming',
      slug: 'gaming',
      description: 'Blockchain games, GameFi projects, and gaming infrastructure.',
      icon: '🎮',
      project_count: 7,
      sort_order: 10,
    },
  ]

  const totalProjects = categories.reduce((sum, category) => sum + category.project_count, 0)

  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Project <span className="text-primary">Categories</span>
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Explore projects by category. Find DeFi protocols, wallets, bridges, and more building on Keeta Network.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-background-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-text-secondary">Categories</div>
            </div>
            <div className="text-center p-4 bg-background-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">{totalProjects}</div>
              <div className="text-sm text-text-secondary">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-background-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-text-secondary">Live Projects</div>
            </div>
            <div className="text-center p-4 bg-background-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-text-secondary">Upcoming</div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:bg-background-card-hover transition-all hover:scale-105">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{category.icon}</div>
                      <div>
                        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <div className="text-sm text-text-secondary">
                          {category.project_count} projects
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Action */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-text-secondary">
                      Latest: 2 days ago
                    </div>
                    <Button asChild size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <Link href={`/projects?category=${category.slug}`}>
                        Explore
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Category */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Featured Category: <span className="text-primary">DeFi</span>
            </h2>
            <Card className="bg-gradient-to-r from-background-card to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">
                      💰 Decentralized Finance on Keeta
                    </h3>
                    <p className="text-text-secondary max-w-2xl">
                      Explore the growing DeFi ecosystem on Keeta Network. With 10M+ TPS and 400ms settlement times,
                      Keeta enables high-frequency trading, instant swaps, and seamless yield farming.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild>
                      <Link href="/projects?category=defi">
                        View DeFi Projects
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/news?tag=defi">
                        DeFi News
                      </Link>
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