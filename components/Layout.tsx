import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-orange-600 font-semibold" : "text-slate-600 hover:text-blue-900";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">JN</div>
            <span className="text-2xl font-bold text-blue-900 tracking-tight">JobNexus</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/events" className={isActive('/events')}>Events</Link>
            
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 ${location.pathname.includes('resources') ? 'text-orange-600' : 'text-slate-600 hover:text-blue-900'}`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                Resources <ChevronDown size={16} />
              </button>
              {isResourcesOpen && (
                 <div 
                   className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 mt-1 border border-slate-100"
                   onMouseEnter={() => setIsResourcesOpen(true)}
                   onMouseLeave={() => setIsResourcesOpen(false)}
                 >
                   <Link to="/resources" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600">Resource Center</Link>
                   <Link to="/resources?tab=resume" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600">Build Resume (AI)</Link>
                   <Link to="/resources?tab=grooming" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600">Interview Tips</Link>
                 </div>
              )}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
               <button 
                className="px-4 py-2 rounded-full border border-blue-900 text-blue-900 font-medium hover:bg-blue-50 transition flex items-center gap-2"
                onClick={() => setIsRegisterOpen(!isRegisterOpen)}
               >
                 Register <ChevronDown size={16} />
               </button>
               {isRegisterOpen && (
                 <div className="absolute top-full right-0 w-40 bg-white shadow-xl rounded-lg py-2 mt-2 border border-slate-100">
                    <Link to="/register/candidate" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setIsRegisterOpen(false)}>Candidate</Link>
                    <Link to="/register/corporate" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setIsRegisterOpen(false)}>Corporate</Link>
                 </div>
               )}
            </div>
            
            <Link to="/login" className="px-5 py-2 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition shadow-sm">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4">
            <Link to="/" className="block text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/events" className="block text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            <Link to="/resources" className="block text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
            <div className="border-t border-slate-100 pt-4 space-y-2">
              <Link to="/register/candidate" className="block text-orange-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Candidate Register</Link>
              <Link to="/register/corporate" className="block text-orange-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Corporate Register</Link>
              <Link to="/login" className="block text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">JN</div>
                <span className="text-xl font-bold text-white">JobNexus</span>
              </div>
              <p className="text-sm leading-relaxed">Connecting talent with opportunity through innovation and AI-driven insights.</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                <li><Link to="/about" className="hover:text-orange-500">About EAC</Link></li>
                <li><Link to="/events" className="hover:text-orange-500">Job Fairs</Link></li>
                <li><Link to="/admin/dashboard" className="hover:text-orange-500">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/resources" className="hover:text-orange-500">Resume Builder</Link></li>
                <li><Link to="/resources" className="hover:text-orange-500">Interview Grooming</Link></li>
                <li><Link to="/login" className="hover:text-orange-500">Candidate Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <Facebook size={20} className="hover:text-orange-500 cursor-pointer" />
                <Twitter size={20} className="hover:text-orange-500 cursor-pointer" />
                <Linkedin size={20} className="hover:text-orange-500 cursor-pointer" />
                <Instagram size={20} className="hover:text-orange-500 cursor-pointer" />
              </div>
              <p className="text-xs text-slate-500">© 2025 JobNexus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
