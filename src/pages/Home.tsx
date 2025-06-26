import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Ruler, PaintBucket, Sofa, Users, CheckIcon } from "lucide-react";
import { door, img2, office } from "../assets/images";

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Al-Huda Woodworks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transforming Spaces into Beautiful Experiences Expert interior
              design solutions crafted to elevate your lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Contact Us 
              </Link>
            </div>
          </div>
        </div>
      </section>

     

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of stunning interior designs and
              transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img2}
                  alt="Modern Living Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Living Room</h3>
                <p className="text-gray-600 mb-4">
                  A contemporary living space designed for comfort and style.
                </p>
                <Link
                  to="#"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Details <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={door}
                  alt="Luxury Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Doors</h3>
                <p className="text-gray-600 mb-4">
                  An elegant kitchen design with premium finishes and
                  appliances.
                </p>
                <Link
                  to="#"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Details <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={office}
                  alt="Minimalist Bedroom"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Office Furniture</h3>
                <p className="text-gray-600 mb-4">
                  A serene bedroom space with clean lines and calming
                  aesthetics.
                </p>
                <Link
                  to="#"
                  className="text-emerald-700 font-medium inline-flex items-center hover:underline"
                >
                  View Details <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with Al Huda Woodworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Faizan Ahmed</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Al-Huda Woodworks transformed our outdated kitchen into a modern
                masterpiece. The attention to detail and quality of workmanship
                exceeded our expectations."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Abdul Saboor</h4>
                  <p className="text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We hired Al-huda woodworks to redesign our office space, and the results
                were phenomenal. Our employees love the new environment, and it
                has significantly boosted productivity."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Faisal Khawaj</h4>
                  <p className="text-gray-500">Apartment Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team at Al-huda Woodworks was professional, creative, and
                responsive throughout our entire apartment renovation. They
                turned our vision into reality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start your design
            journey.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
          >
            Get Started
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
