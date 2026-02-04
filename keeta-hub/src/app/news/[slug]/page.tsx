import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

// Mock data - will be replaced with real data from Supabase
const getArticleBySlug = (slug: string) => {
  const articles = [
    {
      id: '1',
      title: 'Keeta Network Mainnet Launch: A New Era of High-Speed Blockchain',
      slug: 'keeta-network-mainnet-launch',
      content: `
        <p>Today marks a historic milestone in blockchain technology as Keeta Network officially launches its mainnet, introducing unprecedented transaction speeds and built-in compliance features that set new industry standards.</p>

        <h2>Revolutionary Performance</h2>
        <p>Keeta Network delivers over 10 million transactions per second (TPS) with settlement times of just 400 milliseconds, representing a quantum leap forward in blockchain scalability. This performance is achieved through an innovative Directed Acyclic Graph (DAG) architecture combined with delegated Proof-of-Stake (dPoS) consensus.</p>

        <h2>Built-in Compliance</h2>
        <p>Unlike traditional blockchains that treat compliance as an afterthought, Keeta Network integrates KYC/AML features directly into the protocol layer. This enables enterprises to adopt blockchain technology while maintaining regulatory compliance across jurisdictions.</p>

        <h2>Enterprise Ready</h2>
        <p>The mainnet launch comes with a full suite of enterprise-grade features including cross-chain interoperability, institutional-grade security, and comprehensive developer tools. Major corporations have already begun pilot programs on the network.</p>

        <h2>Community and Ecosystem</h2>
        <p>The Keeta ecosystem already includes over 45 projects ranging from DeFi protocols to payment infrastructure. The native KTA token serves as both a utility token and governance mechanism, enabling community-driven development.</p>
      `,
      excerpt: 'Keeta Network officially launches mainnet with 10M+ TPS capability and built-in KYC/AML compliance, setting new standards for enterprise blockchain adoption.',
      featured_image: '/news/keeta-mainnet-launch.jpg',
      published_at: '2025-09-22T00:00:00Z',
      tags: ['Official', 'Mainnet', 'Launch'],
      source: 'Keeta Network',
      source_url: 'https://blog.keeta.com/mainnet-launch',
      author: 'Keeta Team',
    },
  ]

  return articles.find(article => article.slug === slug)
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

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
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-primary transition-colors">
                News
              </Link>
              <span>/</span>
              <span className="text-text-primary">{article.title}</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant={getTagVariant(tag)}>
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 border-y border-border">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="text-sm text-text-secondary">
                  By <span className="text-text-primary font-medium">{article.author}</span>
                </div>
                <div className="text-sm text-text-secondary">
                  {formatDate(article.published_at)}
                </div>
                <div className="text-sm text-text-secondary">
                  Source: <a
                    href={article.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {article.source}
                  </a>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  Share
                </Button>
                <Button size="sm" variant="outline">
                  Bookmark
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-text-secondary">Featured image placeholder</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Article Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-6 bg-background-card rounded-lg border border-border">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">About the Author</h3>
              <p className="text-sm text-text-secondary">
                The Keeta Team consists of blockchain researchers, engineers, and industry experts
                building the future of high-speed, compliant blockchain infrastructure.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <a href={article.source_url} target="_blank" rel="noopener noreferrer">
                  View Original
                </a>
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="live">DeFi</Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    Major DeFi Protocol Migrates to Keeta Network
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    Leading DeFi platform announces migration citing superior performance and cost efficiency.
                  </p>
                  <div className="text-xs text-text-secondary">
                    October 15, 2025
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:bg-background-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="success">Funding</Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    $50M Funding Round Accelerates Ecosystem Growth
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    Series B funding to drive enterprise partnerships and ecosystem development.
                  </p>
                  <div className="text-xs text-text-secondary">
                    November 2, 2025
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to News */}
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/news">
                ← Back to News
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}