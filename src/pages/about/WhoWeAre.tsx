import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Clock, MessageSquare, ThumbsUp } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Process</h1>
            <p className="text-xl text-gray-100">
              A team of passionate designers dedicated to creating exceptional interior spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">Consultation
              </h2>
              <p className="text-gray-700 mb-4">
              We start with a thorough consultation to understand your vision, requirements, and budget. This helps us
               create a design direction that aligns perfectly with your expectations.

              </p>
             
             
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Target size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Budget requirements
                    </h4>
                    <p className="text-sm text-gray-600">Creating beautiful, functional spaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Location of installation
                    </h4>
                    <p className="text-sm text-gray-600">Meeting deadlines consistently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Usage patterns
                    </h4>
                    <p className="text-sm text-gray-600">Transparent client relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Design preferences</h4>
                    <p className="text-sm text-gray-600">Our ultimate priority</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
          <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">Selection

              </h2>
              <p className="text-gray-700 mb-4">
              We help you choose the perfect door based on your:

              </p>
             
             
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Target size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Browse our extensive catalog

                    </h4>
                    <p className="text-sm text-gray-600">Examine material samples

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Discuss customization options

                    </h4>
                    <p className="text-sm text-gray-600">Review pricing options
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Examine material samples

                    </h4>
                    <p className="text-sm text-gray-600">Transparent client relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Review pricing options
                    </h4>
                    <p className="text-sm text-gray-600">Our ultimate priority</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">Installation

              </h2>
              <p className="text-gray-700 mb-4">
              We help you choose the perfect door based on your:

              </p>
             
             
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Target size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Professional installation team

                    </h4>
                    <p className="text-sm text-gray-600">Creating beautiful, functional spaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Careful handling and fitting

                    </h4>
                    <p className="text-sm text-gray-600">Meeting deadlines consistently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Quality hardware installation

                    </h4>
                    <p className="text-sm text-gray-600">Transparent client relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Final inspection and testing
                    </h4>
                    <p className="text-sm text-gray-600">Our ultimate priority</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
          <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">Materials & Finishes

              </h2>
              <p className="text-gray-700 mb-4">
              We help you choose the perfect door based on your:

              </p>
             
             
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Target size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Premium hardwoods

                    </h4>
                    <p className="text-sm text-gray-600">Creating beautiful, functional spaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">High-quality plywood

                    </h4>
                    <p className="text-sm text-gray-600">Meeting deadlines consistently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Durable fiber materials

                    </h4>
                    <p className="text-sm text-gray-600">Transparent client relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp size={20} className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Weather-resistant UPVC
                    </h4>
                    <p className="text-sm text-gray-600">Our ultimate priority</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

    

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Design Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we transform spaces through our thoughtful, collaborative design process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We begin with an in-depth consultation to understand your needs, preferences, and vision. This phase includes site assessments, measurements, and detailed discussions about your goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Development</h3>
              <p className="text-gray-600">
                Our design team creates concepts, space plans, and material selections based on your requirements. We provide detailed presentations that bring your project to life visually.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">
                We coordinate all aspects of the project execution, from procurement to installation, ensuring quality control and attention to detail at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team help you create the space you've always dreamed of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/why-shaze"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;