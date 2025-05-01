import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { interiorDesign, interiorDesign1 } from '../../assets/images';

const InteriorDesign: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            InteriorDesign Excellence
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Creating beautiful, functional Interior Design  that blend style with practicality for the heart of your home.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
            >
              Schedule a Consultation
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">The Soul of Elegant Living</h2>
              <p className="text-gray-700 mb-4 italic ">
              (Insert a high-resolution, stylish image of a modern or classic living room designed by Al Huda Interiors here)
              </p>
              <p className="text-gray-700 mb-4">
              The living room is the heart of your home's expression—a space where comfort meets sophistication, where stories unfold, and where lasting impressions are made. At Al Huda Interiors, we believe that your living room should speak volumes about your lifestyle and taste.




              </p>
              <p className="text-gray-700 mb-6">
              Our interior design services blend timeless aesthetics with practical living solutions, transforming ordinary rooms into inviting and functional spaces. Whether you're drawn to minimal modern elegance, rich classic charm, or a fusion that reflects your unique identity, our designers tailor every element to suit your vision.
              </p>
              <p className="text-gray-700 mb-6">
              Each space we craft is a result of careful planning—balancing layout, lighting, textures, and color harmony. From luxurious furnishings to custom detailing, we focus on creating an environment that resonates with warmth, style, and lasting comfort.
              </p>
              
            </div>
            <div className="lg:w-1/2">
              <img
                src={interiorDesign}
                alt="Modern Kitchen Design"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Interior Design Styles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the defining styles that shape timeless and functional living spaces, thoughtfully curated by Al Huda Interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={interiorDesign}
                  alt="Modern Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Contemporary</h3>
                <p className="text-gray-600 mb-4">
                Sleek surfaces, open spaces, and a neutral palette with bold accents. Contemporary interiors embrace clean lines and modern materials for a sophisticated yet approachable look.
                </p>
                
              </div>
            </div>

            {/* Style 2 */}
            <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7031881/pexels-photo-7031881.jpeg"
                  alt="Traditional Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Classic Elegance</h3>
                <p className="text-gray-600 mb-4">
                Ornate detailing, symmetry, and luxurious textures. This timeless style combines antique elements with rich woods, elegant fabrics, and soft lighting to create a refined and graceful atmosphere.
                </p>
                
              </div>
            </div>

            {/* Style 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={interiorDesign1}
                  alt="Transitional Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bohemian (Boho Chic)</h3>
                <p className="text-gray-600 mb-4">
                A vibrant mix of colors, patterns, and textures with a laid-back spirit. Bohemian interiors feature layered rugs, eclectic decor, natural elements, and handcrafted pieces that reflect individuality and creativity.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Kitchen Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Interior Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            A seamless journey from inspiration to realization—bringing your dream space to life with care, creativity, and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
              We begin by understanding your vision, lifestyle, and functional needs. This includes a thorough discussion of preferences, budget, space evaluation, and taking precise measurements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Concept & Design Development</h3>
              <p className="text-gray-600">
              Our design team creates mood boards, floor plans, and 3D visualizations tailored to your style. We explore layout options, furniture placement, and theme direction—refining it with your input.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3"> Material & Finish Selection</h3>
              <p className="text-gray-600">
              Together, we select fabrics, furniture, lighting, flooring, wall finishes, and accessories. We ensure all elements align cohesively to create a space that feels personal and polished.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3"> Execution & Installation</h3>
              <p className="text-gray-600">
              From procurement to final installation, our craftsmen and designers collaborate to bring your space to life—ensuring flawless detail, quality workmanship, and timely completion.
              </p>
            </div>
          </div>
        </div>
      </section>

    


      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from homeowners who have transformed their living spaces with Al Huda Interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Khan</h4>
                  <p className="text-emerald-700">Full Home Interior Makeover</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
              "Al Huda Interiors turned our house into a dream home. From the very first consultation, they understood our taste and lifestyle. Every room now feels curated yet comfortable. The attention to detail and seamless execution truly exceeded our expectations."
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
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adeel Khan</h4>
                  <p className="text-emerald-700">Luxury Living Room & Bedroom Design</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
              "We wanted a space that felt elegant yet cozy, and Al Huda delivered exactly that. Their designers brought a fresh perspective, offered high-quality solutions, and managed everything with professionalism. It’s a joy coming home every day."
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

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Create Your Dream Interior Design?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start your Interior Design transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;