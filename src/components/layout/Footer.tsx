import { Link } from "react-router-dom";
import { Facebook, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                  <path d="M12 2C10.5 2 9 3.5 9 5c0 .5.1.9.3 1.3C8.5 6.1 8 6 7.5 6c-1.5 0-3 1.5-3 3 0 .5.1.9.3 1.3C4.1 10.5 4 11 4 11.5 4 13 5.5 14.5 7 14.5c.5 0 .9-.1 1.3-.3-.2.4-.3.8-.3 1.3 0 1.5 1.5 3 3 3 .5 0 .9-.1 1.3-.3-.2.4-.3.8-.3 1.3 0 1.5 1.5 3 3 3s3-1.5 3-3c0-.5-.1-.9-.3-1.3.4.2.8.3 1.3.3 1.5 0 3-1.5 3-3 0-.5-.1-.9-.3-1.3.4.2.8.3 1.3.3 1.5 0 3-1.5 3-3s-1.5-3-3-3c-.5 0-.9.1-1.3.3.2-.4.3-.8.3-1.3 0-1.5-1.5-3-3-3-.5 0-.9.1-1.3.3.2-.4.3-.8.3-1.3 0-1.5-1.5-3-3-3z"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold">Blossie's Puzzles</span>
            </Link>
            <p className="text-cream/80 text-sm max-w-xs mx-auto md:mx-0">
              Curated jigsaw puzzles for cozy evenings and mindful moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-cream/80 hover:text-cream transition-colors">Home</Link>
              <Link to="/shop" className="text-cream/80 hover:text-cream transition-colors">Shop</Link>
              <Link to="/about" className="text-cream/80 hover:text-cream transition-colors">About</Link>
              <Link to="/contact" className="text-cream/80 hover:text-cream transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Social & Legal */}
          <div className="text-center md:text-right">
            <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
            <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 hover:bg-cream/20 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 hover:bg-cream/20 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 hover:bg-cream/20 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm text-cream/60">
              <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cream transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cream/20 text-center">
          <p className="text-cream/60 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Blossie's Puzzles. Made with <Heart className="w-4 h-4 text-accent inline" /> for puzzle lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
