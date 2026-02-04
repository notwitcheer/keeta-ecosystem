import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button, Badge, Card, CardContent } from '@/components/ui'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
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

        {/* Development Status */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Development Progress
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="success">Completed</Badge>
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Project Foundation</h3>
                    <p className="text-sm text-text-secondary">
                      Next.js 14+ setup with TypeScript, Tailwind CSS, and basic components
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="live">In Progress</Badge>
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="font-semibold mb-2">UI Components</h3>
                    <p className="text-sm text-text-secondary">
                      Building reusable components with Keeta brand colors and design system
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">Pending</Badge>
                      <span className="text-2xl">🗄️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Database & APIs</h3>
                    <p className="text-sm text-text-secondary">
                      Supabase integration and API connections to DefiLlama & CoinGecko
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block p-6 glass-morphism rounded-lg">
                  <p className="text-success font-mono text-lg mb-2">
                    ✅ Foundation Complete - UI Components Ready
                  </p>
                  <p className="text-primary-light">
                    Next: Database setup and API integrations
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <Badge variant="success">Next.js 14+</Badge>
                    <Badge variant="success">TypeScript</Badge>
                    <Badge variant="success">Tailwind CSS</Badge>
                    <Badge variant="success">Keeta Design</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}