'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, Button, Badge } from '@/components/ui'

export default function SubmitProjectPage() {
  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    website: '',
    twitter: '',
    discord: '',
    telegram: '',
    github: '',
    contact_email: '',
    categories: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    'DeFi', 'Wallets', 'Bridges', 'PayFi', 'Infrastructure',
    'Identity', 'NFT', 'Tools', 'RWA', 'Gaming', 'Analytics'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // In real app, would submit to Supabase
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="text-6xl mb-6">🎉</div>
                <h1 className="text-3xl font-bold mb-4 text-primary">
                  Submission Received!
                </h1>
                <p className="text-text-secondary mb-6">
                  Thank you for submitting your project to Keeta Hub. Our team will review your submission
                  and get back to you within 2-3 business days.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-text-secondary">
                    <strong>What happens next?</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Our team reviews your project submission</li>
                      <li>We may reach out for additional information</li>
                      <li>Approved projects are added to the directory</li>
                      <li>You'll receive an email confirmation once live</li>
                    </ul>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        project_name: '',
                        description: '',
                        website: '',
                        twitter: '',
                        discord: '',
                        telegram: '',
                        github: '',
                        contact_email: '',
                        categories: [],
                      })
                    }}>
                      Submit Another Project
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/'}>
                      Back to Home
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Submit Your <span className="text-primary">Project</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Join the Keeta ecosystem directory! Submit your project to be featured and discovered by the community.
            </p>
          </div>

          {/* Guidelines */}
          <div className="mb-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-3">Submission Guidelines</h2>
                <div className="text-sm text-text-secondary space-y-2">
                  <p>• Projects must be building on or integrating with Keeta Network</p>
                  <p>• Provide accurate and up-to-date information about your project</p>
                  <p>• Include working website and social media links</p>
                  <p>• All submissions are reviewed manually before approval</p>
                  <p>• Spam or misleading submissions will be rejected</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submission Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Name */}
                <div>
                  <label htmlFor="project_name" className="block text-sm font-medium mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    id="project_name"
                    name="project_name"
                    required
                    value={formData.project_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your project name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Describe your project, its purpose, and key features"
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Categories *
                  </label>
                  <p className="text-xs text-text-secondary mb-3">
                    Select all categories that apply to your project
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => handleCategoryToggle(category)}
                        className="transition-all"
                      >
                        <Badge
                          variant={formData.categories.includes(category) ? 'live' : 'outline'}
                          className="cursor-pointer hover:scale-105"
                        >
                          {category}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="https://yourproject.com"
                  />
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="twitter" className="block text-sm font-medium mb-2">
                      Twitter/X URL
                    </label>
                    <input
                      type="url"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="https://x.com/yourproject"
                    />
                  </div>
                  <div>
                    <label htmlFor="discord" className="block text-sm font-medium mb-2">
                      Discord URL
                    </label>
                    <input
                      type="url"
                      id="discord"
                      name="discord"
                      value={formData.discord}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="https://discord.gg/yourproject"
                    />
                  </div>
                  <div>
                    <label htmlFor="telegram" className="block text-sm font-medium mb-2">
                      Telegram URL
                    </label>
                    <input
                      type="url"
                      id="telegram"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="https://t.me/yourproject"
                    />
                  </div>
                  <div>
                    <label htmlFor="github" className="block text-sm font-medium mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="https://github.com/yourproject"
                    />
                  </div>
                </div>

                {/* Contact Email */}
                <div>
                  <label htmlFor="contact_email" className="block text-sm font-medium mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    required
                    value={formData.contact_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-primary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="contact@yourproject.com"
                  />
                  <p className="text-xs text-text-secondary mt-1">
                    We'll use this email to contact you about your submission
                  </p>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-primary bg-background-primary border border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="terms" className="text-sm text-text-secondary">
                    I confirm that the information provided is accurate and that my project is building
                    on or integrating with Keeta Network. I understand that submissions are reviewed manually
                    and may take 2-3 business days to be approved.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || formData.categories.length === 0}
                    className="px-8"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="mt-8 text-center">
            <p className="text-text-secondary text-sm">
              Need help with your submission? Contact us at{' '}
              <a href="mailto:submissions@keeta.com" className="text-primary hover:underline">
                submissions@keeta.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}