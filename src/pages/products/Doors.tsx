import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { door, door1, door2, engineerDoor, fiber, solidDoor } from '../../assets/images';

const Doors: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Doors</h1>
            <p className="text-xl text-gray-100">
              Explore our curated collection of premium furniture and home accessories to elevate your space.
            </p>
          </div>
        </div>
      </section>

    

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Doors Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and sought-after products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={solidDoor}
                  alt="Fotile Kitchen System"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Solid Doors                </h3>
                <p className="text-gray-600 mb-4">
                Made from 100% solid wood, these doors are durable, long-lasting, and perfect for those seeking a classic, timeless look. Ideal for main entrances and rooms where strength and elegance are a priority.

                </p>
               
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={door}
                  alt="Modular Sofa"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Semi-Solid Doors
                </h3>
                <p className="text-gray-600 mb-4">
                A blend of solid wood and engineered materials, offering a balance of affordability and durability. Great for interior doors where you want a sturdy yet cost-effective solution.

                </p>
               
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={engineerDoor}
                  alt="Dining Table"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Engineering Doors
                </h3>
                <p className="text-gray-600 mb-4">
                Designed for precision and performance, these doors are crafted using advanced engineering techniques. Perfect for modern homes and offices, offering enhanced security, soundproofing, and fire resistance.


                </p>
               
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={fiber}
                  alt="Executive Desk"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fiber Doors & uPVC Doors
                </h3>
                <p className="text-gray-600 mb-4">
                Lightweight, low-maintenance, and resistant to weather and termites. Ideal for exterior use, especially in areas with high humidity or extreme weather conditions.

                </p>
               
              </div>
            </div>

             {/* Product 5 */}
             <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={door1}
                  alt="Executive Desk"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ply Doors

                </h3>
                <p className="text-gray-600 mb-4">
                Made from high-quality plywood, these doors are affordable, lightweight, and versatile. Perfect for interior spaces like bedrooms, bathrooms, and closets.

                </p>
               
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/all-products"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
            >
              View All Products
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

     

      {/* Why Choose Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what sets our product collection apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the highest quality materials and work with skilled craftspeople to ensure exceptional durability and finish.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Design</h3>
              <p className="text-gray-600">
                Our products combine aesthetic appeal with practical functionality, featuring innovative solutions for modern living.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customization Options</h3>
              <p className="text-gray-600">
                Many of our products can be customized to suit your specific needs, preferences, and space requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our product collection or visit our showroom to experience our products in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/all-products"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doors;