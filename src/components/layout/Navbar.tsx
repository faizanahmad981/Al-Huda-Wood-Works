import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigationItems } from '../../utils/navigation';
import { Logo } from '../../assets/images';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      closeAllDropdowns();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  

  useEffect(() => {
    closeAllDropdowns();
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-[#409a3c] font-bold">
         AL-HUDA
        </Link>
     

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-[#409a3c]" />
          ) : (
            <Menu size={24} className="text-[#409a3c]" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
         <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    className="flex items-center text-gray-700 hover:text-[#409a3c] font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {openDropdowns[item.label] && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {item.children.map((child) => (
                        <div key={child.label} className="relative group/child">
                          {child.children ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleDropdown(child.label);
                                }}
                              >
                                {child.label}
                                <ChevronDown size={14} className="ml-1 transform -rotate-90" />
                              </button>
                              {openDropdowns[child.label] && (
                                <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.label}
                                      to={subChild.path}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={child.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[#409a3c]"
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-emerald-700 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-[#409a3c]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="bg-[#409a3c] text-white px-5 py-2 rounded-md hover:bg-emerald-800 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4 space-y-3">
              {navigationItems.map((item) => (
                <div key={item.label} className="py-1">
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-gray-700 font-medium"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            openDropdowns[item.label] ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdowns[item.label] && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-emerald-100">
                          {item.children.map((child) => (
                            <div key={child.label} className="py-1">
                              {child.children ? (
                                <>
                                  <button
                                    className="flex items-center justify-between w-full text-gray-700"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleDropdown(child.label);
                                    }}
                                  >
                                    {child.label}
                                    <ChevronDown
                                      size={14}
                                      className={`transition-transform duration-200 ${
                                        openDropdowns[child.label] ? 'transform rotate-180' : ''
                                      }`}
                                    />
                                  </button>
                                  {openDropdowns[child.label] && (
                                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-emerald-100">
                                      {child.children.map((subChild) => (
                                        <Link
                                          key={subChild.label}
                                          to={subChild.path}
                                          className="block text-gray-600 hover:text-[#409a3c]"
                                        >
                                          {subChild.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={child.path}
                                  className="block text-gray-600 hover:text-emerald-700"
                                >
                                  {child.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block text-gray-700 font-medium ${
                        location.pathname === item.path ? 'text-emerald-700' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-[#409a3c] text-white px-4 py-2 text-center rounded-md hover:bg-emerald-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;