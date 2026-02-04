export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Keeta <span className="gradient-text">Hub</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Explore the Keeta ecosystem. Discover projects, stay updated with news, and find the tools you need.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Projects
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Submit Project
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 glass-morphism rounded-lg">
            <p className="text-success font-mono text-lg">
              ✅ Next.js 14+ with TypeScript setup complete
            </p>
            <p className="text-primary-light mt-2">
              Ready to build the Keeta ecosystem hub!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}