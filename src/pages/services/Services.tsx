import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, PaintBucket, Sofa, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { floor, interiorDesign, kitchendesign, wardrobe } from '../../assets/images';

const Services: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-100">
              Comprehensive interior design solutions tailored to your unique needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Transforming Spaces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we offer a full range of interior design services to create beautiful, functional spaces that reflect your style and meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={interiorDesign}
                  alt="Residential Interior Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-medium py-1 px-3 rounded">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Ruler className="text-emerald-600 mb-2" size={28} />
                  <h3 className="text-2xl font-bold mb-2">Interior Design</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Create a home that reflects your personality and lifestyle with our comprehensive residential design services. We transform houses into personalized havens.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Space planning and layout optimization
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Custom furniture and decor selection
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Color schemes and material selection
                  </li>
                </ul>
                <Link
                  to="/residential-design"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={wardrobe}
                  alt="Commercial Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Briefcase className="text-emerald-600 mb-2" size={28} />
                  <h3 className="text-2xl font-bold mb-2">Wardrobes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                We specialize in customized wardrobe solutions tailored to your space and style.Our designs focus on functionality, aesthetics, and space optimization.
                </p>
             
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Modular and sliding wardrobe options
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> High-quality materials and fittings
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Professional installation services
                  </li>
                </ul>
                <Link
                  to="/commercial-design"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={kitchendesign}
                  alt="Kitchen Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-medium py-1 px-3 rounded">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Sofa className="text-emerald-600 mb-2" size={28} />
                  <h3 className="text-2xl font-bold mb-2">Kitchen Design</h3>
                </div>
                <p className="text-gray-600 mb-4">
                Specialized kitchen design and installation with premium materials.We craft functional and modern kitchens tailored 
                to your lifestyle.Our focus is on durability, efficiency, and aesthetic appeal.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Modular and custom kitchen layouts
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Top-tier materials and finishes
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> End-to-end installation and support
                  </li>
                </ul>
                <Link
                  to="/kitchen-design"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={floor}
                  alt="Renovation & Remodeling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <PaintBucket className="text-emerald-600 mb-2" size={28} />
                  <h3 className="text-2xl font-bold mb-2">Floor</h3>
                </div>
                <p className="text-gray-600 mb-4">
                Expert advice and design Floor for your interior projects.Our flooring solutions elevate the look and feel of your spaces.
                We offer durable, stylish options to match every interior theme.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Wooden, vinyl, and tile flooring choices
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Moisture-resistant and easy-to-clean materials
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-emerald-600 mr-2" /> Expert installation for a seamless finish
                  </li>
                </ul>
                <Link
                  to="/renovation"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

         
          

           
           
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach designed to bring your vision to life with clarity and precision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-600">
                We start by understanding your needs, preferences, and vision through in-depth consultations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                Our team creates detailed concepts and plans based on your requirements and our expertise.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Develop</h3>
              <p className="text-gray-600">
                We refine the design, select materials, and prepare detailed implementation plans.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deliver</h3>
              <p className="text-gray-600">
                We oversee implementation and installation to ensure every detail meets our high standards.
              </p>
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
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does a typical interior design project take?</h3>
              <p className="text-gray-600">
                The timeline varies depending on the scope and complexity of the project. A simple room redesign might take 4-6 weeks, while a complete home renovation could take several months. During our initial consultation, we'll provide you with a more accurate timeline based on your specific project.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How much does interior design service cost?</h3>
              <p className="text-gray-600">
                Our fees are structured based on the scope of work and can be tailored to accommodate different budgets. We offer various service packages ranging from one-time consultations to full-service design. We're transparent about our pricing and will provide a detailed proposal after understanding your project requirements.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you work with clients who already have some ideas in mind?</h3>
              <p className="text-gray-600">
                Absolutely! We love collaborating with clients who have ideas and preferences. Our role is to enhance your vision with our expertise, refine concepts, and ensure the final design is both beautiful and functional. We'll work with your existing ideas and help bring them to life in the best possible way.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you handle project management and contractor coordination?</h3>
              <p className="text-gray-600">
                Yes, our full-service design package includes project management and contractor coordination. We'll oversee the entire implementation process, ensuring that the work is completed according to the design specifications, on schedule, and within budget. This allows you to enjoy a stress-free experience while we handle the details.
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
            Contact us today to schedule a consultation and start your design journey.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

// Check icon component
const CheckIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-check ${className}`}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Briefcase icon component
const Briefcase = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-briefcase ${className}`}
    {...props}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default Services;