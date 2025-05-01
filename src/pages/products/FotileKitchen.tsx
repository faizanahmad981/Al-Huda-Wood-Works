import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

const FotileKitchen: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Fotile Kitchen Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Premium, innovative kitchen systems designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Schedule a Consultation
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/fotile-gallery"
                className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">The Ultimate Kitchen Experience</h2>
              <p className="text-gray-700 mb-4">
                Fotile represents the pinnacle of kitchen innovation, combining sleek aesthetics with cutting-edge functionality. As an exclusive distributor of Fotile products, we bring you complete kitchen solutions that transform the heart of your home.
              </p>
              <p className="text-gray-700 mb-4">
                Each Fotile kitchen is meticulously designed to enhance your cooking experience while creating a stunning visual statement. From premium appliances to seamlessly integrated cabinetry, every element works in harmony to deliver exceptional performance and beauty.
              </p>
              <p className="text-gray-700 mb-6">
                Our Fotile kitchen systems are customizable to fit your space, lifestyle, and preferences, ensuring a perfect match for your home and cooking habits.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/fotile-brochure"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Download Brochure
                </Link>
                <Link
                  to="/fotile-showroom"
                  className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Visit Showroom
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/6207744/pexels-photo-6207744.jpeg"
                alt="Fotile Kitchen"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Innovative Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes Fotile kitchen systems stand out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Technology</h3>
              <p className="text-gray-600 mb-4">
                Integrated smart home connectivity allows you to control your kitchen appliances remotely and access innovative cooking features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Voice-activated controls</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Mobile app integration</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Smart cooking programs</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
              <p className="text-gray-600 mb-4">
                Each Fotile kitchen is crafted from the highest quality materials to ensure durability, beauty, and performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Stainless steel appliances</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Premium countertop options</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Soft-close cabinetry</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ergonomic Design</h3>
              <p className="text-gray-600 mb-4">
                Thoughtfully designed spaces that maximize efficiency and comfort in your cooking environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Optimized workflow layouts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Accessible storage solutions</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Adjustable height options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Fotile Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of Fotile kitchen products and systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6207765/pexels-photo-6207765.jpeg"
                  alt="Complete Kitchen Systems"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Complete Kitchen Systems</h3>
                <p className="text-gray-600 mb-4">
                  Fully integrated kitchen solutions featuring cabinetry, appliances, and fixtures designed to work seamlessly together.
                </p>
                <Link
                  to="/fotile-systems"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Systems <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg"
                  alt="Premium Appliances"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Appliances</h3>
                <p className="text-gray-600 mb-4">
                  High-performance cooktops, ovens, range hoods, and refrigerators featuring innovative technology and elegant design.
                </p>
                <Link
                  to="/fotile-appliances"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Appliances <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg"
                  alt="Designer Cabinetry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Designer Cabinetry</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed cabinetry with innovative storage solutions, premium finishes, and meticulous craftsmanship.
                </p>
                <Link
                  to="/fotile-cabinetry"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Cabinetry <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your Fotile Kitchen Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven process for creating your perfect Fotile kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We begin with an in-depth discussion to understand your needs, preferences, and vision for your kitchen space.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
              <p className="text-gray-600">
                Our design team creates a custom kitchen plan with detailed drawings, material selections, and 3D visualizations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600">
                Your Fotile kitchen components are precision-crafted to your specifications using premium materials and advanced technology.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <p className="text-gray-600">
                Our expert installation team ensures that every element of your Fotile kitchen is perfectly placed and functioning flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Fotile Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent Fotile kitchen installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg"
                  alt="Modern Luxury Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Luxury Residence</h3>
                <p className="text-gray-600 mb-4">
                  A sleek, contemporary Fotile kitchen featuring integrated appliances and minimalist design.
                </p>
                <Link
                  to="/projects/modern-luxury-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
                  alt="Urban Apartment Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Urban Apartment</h3>
                <p className="text-gray-600 mb-4">
                  A space-efficient Fotile kitchen designed for maximum functionality in a compact urban apartment.
                </p>
                <Link
                  to="/projects/urban-apartment-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                  alt="Family Home Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Family Home</h3>
                <p className="text-gray-600 mb-4">
                  A spacious Fotile kitchen designed for a large family, featuring multiple cooking zones and ample storage.
                </p>
                <Link
                  to="/projects/family-home-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fotile-gallery"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
            >
              View All Projects
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from homeowners who have transformed their kitchens with Fotile products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Robert Chen</h4>
                  <p className="text-emerald-700">Modern Home Kitchen</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Our Fotile kitchen has completely transformed how we cook and entertain. The smart features are intuitive, and the design is absolutely stunning. We couldn't be happier with our decision."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jennifer Park</h4>
                  <p className="text-emerald-700">Urban Apartment Renovation</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The Fotile kitchen system was perfect for my small apartment. The team at Shaze designed a space that maximizes every inch while still feeling open and luxurious. The quality is exceptional."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Michael Taylor</h4>
                  <p className="text-emerald-700">Luxury Home Kitchen</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "As someone who loves to cook, my Fotile kitchen has been a game-changer. The appliances are top-notch, and the layout makes cooking a joy. The compliments we get from guests are endless."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Fotile kitchen systems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What makes Fotile kitchens different from other brands?</h3>
              <p className="text-gray-600">
                Fotile kitchens stand out for their integration of innovative technology, premium materials, and thoughtful design. Every element works seamlessly together, and the smart features enhance both the cooking experience and everyday convenience.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does a Fotile kitchen installation take?</h3>
              <p className="text-gray-600">
                The timeline varies depending on the complexity of your project. A standard Fotile kitchen installation typically takes 2-3 weeks from start to finish. This includes removal of existing elements, preparation, installation, and final touches.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can Fotile kitchens be customized to my specific space?</h3>
              <p className="text-gray-600">
                Absolutely! Fotile kitchen systems are designed to be fully customizable to fit your specific space, requirements, and aesthetic preferences. Our design team will work with you to create a kitchen that perfectly fits your home and lifestyle.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What warranty does Fotile offer on their products?</h3>
              <p className="text-gray-600">
                Fotile offers comprehensive warranties on all their products. Appliances typically come with a 2-5 year warranty depending on the specific item, while cabinetry and hardware are covered by a 10-year limited warranty. Our team will provide you with detailed warranty information for your specific selections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Elevate Your Kitchen Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start your Fotile kitchen journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/fotile-brochure"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FotileKitchen;