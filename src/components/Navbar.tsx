import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary shadow-xl fixed w-full z-50 border-b border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-accent-DEFAULT font-bold text-xl">
              MalwareDetect
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-accent-DEFAULT transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-accent-DEFAULT transition-colors">
              About
            </Link>
            <Link to="/technology" className="text-muted-foreground hover:text-accent-DEFAULT transition-colors">
              Technology
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-accent-DEFAULT transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-accent-DEFAULT focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-muted-foreground hover:text-accent-DEFAULT hover:bg-secondary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-muted-foreground hover:text-accent-DEFAULT hover:bg-secondary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/technology"
                className="block px-3 py-2 rounded-md text-muted-foreground hover:text-accent-DEFAULT hover:bg-secondary transition-colors"
                onClick={toggleMenu}
              >
                Technology
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-muted-foreground hover:text-accent-DEFAULT hover:bg-secondary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;