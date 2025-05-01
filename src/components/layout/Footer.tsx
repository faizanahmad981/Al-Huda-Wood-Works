import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, GlobeIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">AL HUDA</h3>
            <p className="text-gray-300 mt-4">
              Creating inspiring spaces tailored to your lifestyle with premium materials and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/kitchen-design" className="text-gray-300 hover:text-white transition-colors">
                  Kitchen Design
                </Link>
              </li>
              <li>
                <Link to="/interior-design" className="text-gray-300 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/renovation" className="text-gray-300 hover:text-white transition-colors">
                  Renovation
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Design Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                Plot # 36, Street # 02, Sector G-12, Islamabad
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">0321 8735400</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">alhudawoodworks@gmail.com</span>
              </div>
              <div className="flex items-center">
                <GlobeIcon size={20} className="text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">www.alhudaworks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ALHUDA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;