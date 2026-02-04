'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Button, Badge } from '@/components/ui'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('submissions')

  // Mock data - will be replaced with real data from Supabase
  const submissions = [
    {
      id: '1',
      project_name: 'Keeta Swap',
      description: 'Advanced DEX with limit orders and concentrated liquidity',
      website: 'https://keetaswap.com',
      contact_email: 'team@keetaswap.com',
      categories: ['DeFi', 'Trading'],
      status: 'pending',
      submitted_at: '2026-02-01T00:00:00Z',
    },
    {
      id: '2',
      project_name: 'Keeta Lend',
      description: 'Money market protocol for lending and borrowing',
      website: 'https://keetalend.com',
      contact_email: 'hello@keetalend.com',
      categories: ['DeFi', 'Lending'],
      status: 'pending',
      submitted_at: '2026-02-02T00:00:00Z',
    },
    {
      id: '3',
      project_name: 'Keeta NFT',
      description: 'NFT marketplace for digital collectibles',
      website: 'https://nft.keeta.com',
      contact_email: 'support@keetanft.com',
      categories: ['NFT', 'Marketplace'],
      status: 'approved',
      submitted_at: '2026-01-28T00:00:00Z',
    },
  ]

  const projects = [
    {
      id: '1',
      name: 'Keeta DEX',
      status: 'live',
      categories: ['DeFi', 'Trading'],
      last_updated: '2026-02-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Keeta Wallet',
      status: 'live',
      categories: ['Wallets', 'Infrastructure'],
      last_updated: '2026-01-30T00:00:00Z',
    },
  ]

  const stats = {
    total_submissions: submissions.length,
    pending_submissions: submissions.filter(s => s.status === 'pending').length,
    total_projects: projects.length,
    live_projects: projects.filter(p => p.status === 'live').length,
  }

  const handleApprove = (id: string) => {
    // In real app, would update status in Supabase
    console.log('Approving submission:', id)
  }

  const handleReject = (id: string) => {
    // In real app, would update status in Supabase
    console.log('Rejecting submission:', id)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline">Pending</Badge>
      case 'approved':
        return <Badge variant="success">Approved</Badge>
      case 'rejected':
        return <Badge variant="danger">Rejected</Badge>
      case 'live':
        return <Badge variant="success">Live</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
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
              Admin <span className="text-primary">Panel</span>
            </h1>
            <p className="text-text-secondary">
              Manage project submissions, content, and ecosystem data
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {stats.total_submissions}
                </div>
                <div className="text-sm text-text-secondary">Total Submissions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-warning mb-2">
                  {stats.pending_submissions}
                </div>
                <div className="text-sm text-text-secondary">Pending Review</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {stats.total_projects}
                </div>
                <div className="text-sm text-text-secondary">Total Projects</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-success mb-2">
                  {stats.live_projects}
                </div>
                <div className="text-sm text-text-secondary">Live Projects</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-background-card rounded-lg p-1 mb-8 w-fit">
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'submissions'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Submissions
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'news'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'submissions' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Submissions</h2>
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <Card key={submission.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-lg">{submission.project_name}</h3>
                            {getStatusBadge(submission.status)}
                          </div>
                          <p className="text-text-secondary mb-3 line-clamp-2">
                            {submission.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {submission.categories.map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-text-secondary">
                            <div>Website: {submission.website}</div>
                            <div>Contact: {submission.contact_email}</div>
                            <div>Submitted: {formatDate(submission.submitted_at)}</div>
                          </div>
                        </div>
                        {submission.status === 'pending' && (
                          <div className="flex space-x-2 ml-4">
                            <Button
                              size="sm"
                              variant="success"
                              onClick={() => handleApprove(submission.id)}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleReject(submission.id)}
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Manage Projects</h2>
                <Button>Add New Project</Button>
              </div>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            {getStatusBadge(project.status)}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.categories.map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-text-secondary">
                            Last updated: {formatDate(project.last_updated)}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="ghost">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Manage News</h2>
                <Button>Add News Article</Button>
              </div>
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📰</div>
                <p className="text-text-secondary">News management coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Site Traffic</h3>
                    <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-text-secondary">Chart placeholder</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Project Submissions</h3>
                    <div className="h-32 bg-success/10 rounded-lg flex items-center justify-center">
                      <span className="text-text-secondary">Chart placeholder</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}