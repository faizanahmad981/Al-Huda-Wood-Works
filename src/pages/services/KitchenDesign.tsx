import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

const KitchenDesign: React.FC = () => {
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
              Kitchen Design Excellence
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Creating beautiful, functional kitchens that blend style with practicality for the heart of your home.
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
              <h2 className="text-3xl font-serif font-bold mb-6">The Heart of Your Home</h2>
              <p className="text-gray-700 mb-4">
                The kitchen is more than just a place to prepare meals—it's where families gather, conversations flow, and memories are made. At Shaze Interiors, we understand the significance of this space and approach each kitchen design project with meticulous attention to detail.
              </p>
              <p className="text-gray-700 mb-4">
                Our kitchen design services combine functionality with aesthetics, creating spaces that not only look beautiful but also enhance your cooking experience. Whether you're dreaming of a sleek modern kitchen, a warm traditional space, or something uniquely yours, our team has the expertise to bring your vision to life.
              </p>
              <p className="text-gray-700 mb-6">
                Each kitchen we design is thoughtfully planned to optimize workflow, maximize storage, and reflect your personal style. We consider how you use your kitchen, your cooking habits, and your entertaining needs to create a space that truly works for you.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/kitchen-gallery"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  View Kitchen Gallery
                </Link>
                <Link
                  to="/fotile-kitchen"
                  className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Fotile Kitchen Solutions
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg"
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Kitchen Design Styles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of kitchen design aesthetics, each offering a unique blend of form and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg"
                  alt="Modern Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Modern</h3>
                <p className="text-gray-600 mb-4">
                  Clean lines, minimalist aesthetic, and high-end appliances. Modern kitchens embrace sleek materials like glass, steel, and stone for a contemporary look.
                </p>
                <Link
                  to="/modern-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Modern Kitchens <ChevronRight size={16} className="ml-1" />
                </Link>
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
                <h3 className="text-xl font-bold mb-3">Traditional</h3>
                <p className="text-gray-600 mb-4">
                  Warm, classic design with detailed cabinetry, natural materials, and rich color palettes. Traditional kitchens create a timeless, inviting atmosphere.
                </p>
                <Link
                  to="/traditional-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Traditional Kitchens <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Style 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7861502/pexels-photo-7861502.jpeg"
                  alt="Transitional Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Transitional</h3>
                <p className="text-gray-600 mb-4">
                  The perfect blend of traditional comfort and modern style. Transitional kitchens feature a balanced mix of classic and contemporary elements.
                </p>
                <Link
                  to="/transitional-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Explore Transitional Kitchens <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Kitchen Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Kitchen Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to creating your dream kitchen, from initial concept to final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We begin with an in-depth discussion to understand your needs, preferences, and how you use your kitchen. We'll assess your space and take detailed measurements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Development</h3>
              <p className="text-gray-600">
                Our design team creates detailed floor plans, 3D renderings, and material selections. We'll present options and refine the design based on your feedback.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Material Selection</h3>
              <p className="text-gray-600">
                You'll select finishes, cabinetry, countertops, appliances, and fixtures. We guide you through this process, ensuring all selections work harmoniously together.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <p className="text-gray-600">
                Our skilled craftsmen handle the installation process with meticulous attention to detail, ensuring every element is perfectly executed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Kitchen Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent kitchen transformations and see the Shaze difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold mb-2">Modern Luxury Kitchen</h3>
                <p className="text-gray-600 mb-4">
                  A sleek, high-end kitchen featuring custom cabinetry, premium appliances, and a stunning waterfall island.
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
                  src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"
                  alt="Farmhouse Kitchen Renovation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Farmhouse Kitchen Renovation</h3>
                <p className="text-gray-600 mb-4">
                  A warm, inviting kitchen with rustic elements, shaker cabinets, and a spacious central island.
                </p>
                <Link
                  to="/projects/farmhouse-kitchen"
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
                  alt="Contemporary Open Concept Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Contemporary Open Concept</h3>
                <p className="text-gray-600 mb-4">
                  A bright, airy kitchen that seamlessly integrates with the dining and living spaces.
                </p>
                <Link
                  to="/projects/contemporary-kitchen"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/kitchen-gallery"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
            >
              View All Kitchen Projects
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Our Kitchen Design Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of working with Shaze Interiors for your kitchen project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">Expert Design Team</h3>
              </div>
              <p className="text-gray-600">
                Our designers specialize in kitchen spaces, bringing years of expertise and industry knowledge to your project.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">Custom Solutions</h3>
              </div>
              <p className="text-gray-600">
                Every kitchen we design is uniquely tailored to your space, lifestyle, and preferences—never one-size-fits-all.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">Premium Materials</h3>
              </div>
              <p className="text-gray-600">
                We source high-quality materials and work with trusted suppliers to ensure durability and beauty in every detail.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">3D Visualization</h3>
              </div>
              <p className="text-gray-600">
                See your kitchen before it's built with our realistic 3D renderings, helping you make confident decisions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">Efficient Workflow</h3>
              </div>
              <p className="text-gray-600">
                We design kitchens with optimal functionality in mind, ensuring smooth workflow and easy access to essentials.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold">End-to-End Service</h3>
              </div>
              <p className="text-gray-600">
                From initial design to final installation, we manage every aspect of your kitchen project for a seamless experience.
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
              Hear from homeowners who have transformed their kitchens with Shaze Interiors.
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
                  <h4 className="font-bold text-lg">Emma Thompson</h4>
                  <p className="text-emerald-700">Modern Kitchen Renovation</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Working with Shaze to redesign our kitchen was an incredible experience. They listened to our needs, came up with creative solutions for our challenging space, and delivered a kitchen that exceeds all our expectations. The attention to detail and quality of workmanship is exceptional."
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
                  <h4 className="font-bold text-lg">James Wilson</h4>
                  <p className="text-emerald-700">Complete Kitchen Remodel</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Our kitchen renovation was a major undertaking, but the Shaze team made it painless. From the initial design phase to the final installation, every step was handled with professionalism and expertise. The kitchen is now the highlight of our home and functions perfectly for our family."
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Create Your Dream Kitchen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start your kitchen transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/kitchen-gallery"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              View Kitchen Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenDesign;