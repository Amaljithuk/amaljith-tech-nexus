
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-portfolio-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-portfolio-dark/95 backdrop-blur-sm border-b border-portfolio-slate/20">
        <div className="container-width section-padding">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold text-gradient">
              Amaljith U K
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'text-portfolio-blue' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/Amaljithuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/amaljithuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:amaljithuk@gmail.com"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-portfolio-navy border-b border-portfolio-slate/20 animate-fade-in">
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg ${isActive(item.href) ? 'text-portfolio-blue' : 'text-gray-300'} hover:text-white transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://github.com/Amaljithuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-portfolio-blue transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/amaljithuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-portfolio-blue transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:amaljithuk@gmail.com"
                    className="text-gray-400 hover:text-portfolio-blue transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-portfolio-navy border-t border-portfolio-slate/20 mt-20">
        <div className="container-width section-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Amaljith U K. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Amaljithuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/amaljithuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:amaljithuk@gmail.com"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
