import Link from 'next/link'

export function Footer() {
  const footerLinks = {
    explore: [
      { name: 'Projects', href: '/projects' },
      { name: 'Categories', href: '/categories' },
      { name: 'News', href: '/news' },
      { name: 'Metrics', href: '/metrics' },
    ],
    contribute: [
      { name: 'Submit Project', href: '/submit' },
      { name: 'GitHub', href: 'https://github.com/notwitcheer/keeta-ecosystem' },
      { name: 'Documentation', href: 'https://docs.keeta.com' },
      { name: 'API', href: '/api' },
    ],
    keeta: [
      { name: 'Keeta Network', href: 'https://keeta.com' },
      { name: 'Explorer', href: 'https://explorer.keeta.com' },
      { name: 'Wallet', href: 'https://wallet.keeta.com' },
      { name: 'Twitter', href: 'https://twitter.com/KeetaNetwork' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  return (
    <footer className="border-t border-border bg-background-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                Keeta <span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs">
              Your gateway to the Keeta ecosystem. Discover projects, stay updated with news, and find the tools you need.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/KeetaNetwork"
                className="text-text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/notwitcheer/keeta-ecosystem"
                className="text-text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribute Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Contribute
            </h3>
            <ul className="space-y-2">
              {footerLinks.contribute.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keeta Network Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Keeta Network
            </h3>
            <ul className="space-y-2">
              {footerLinks.keeta.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-text-secondary text-xs">
              © {new Date().getFullYear()} Keeta Hub. Built with ❤️ for the Keeta ecosystem.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}