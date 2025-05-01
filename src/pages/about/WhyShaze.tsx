import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Award,
  Clock,
  Palette,
  Users,
  Briefcase,
  LucideIcon,
} from "lucide-react";

interface ReasonProps {
  icon: LucideIcon;
  title: string;
  description: string | string[]; // allow both string and string array
}

const ReasonCard: React.FC<ReasonProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-emerald-600 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start">
        <div className="mr-4">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
            <Icon size={24} className="text-emerald-700" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const WhyShaze: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Why Choose Al-Huda
            </h1>
            <p className="text-xl text-gray-100">
              Discover what sets us apart and why our clients trust us with
              their most important spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Al-HUDA, we combine creativity, expertise, and dedication to
              deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReasonCard
              icon={Award}
              title="Complete Service Package"
              description={[
                "Professional installation included with every purchase",
                "Expert fitting and hardware mounting",
                "Post-installation inspection and adjustments",
                "On-site support and guidance",
              ]}
            />
            <ReasonCard
              icon={CheckCircle}
              title="Flexible Pricing Solutions"
              description={[
                "Competitive market rates",
                "Budget-friendly options available",
                "Customizable payment plans for large orders",
                "Negotiable terms for bulk purchases",
              ]}
            />
            <ReasonCard
              icon={Clock}
              title="Large-Scale Project Expertise"
              description={[
                "Proven track record in multi-story building projects",
                "Complete door solutions for commercial plazas",
                "Capacity to handle high-volume orders",
                "Dedicated project management team",
              ]}
            />
            <ReasonCard
              icon={Palette}
              title="Quality That Speaks"
              description={[
                "Premium grade materials sourced from trusted suppliers",
                "State-of-the-art manufacturing processes",
                "Rigorous quality control at every stage",
                "Superior finishing and attention to detail",
              ]}
            />
            <ReasonCard
              icon={Users}
              title="Customer-Centric Approach"
              description={[
                "Growing customer base built on trust",
                "Personalized consultation services",
                "Expert guidance in door selection",
                "Comprehensive after-sales support",
              ]}
            />
            <ReasonCard
              icon={Briefcase}
              title="Project Management Excellence"
              description={[
                "Efficient handling of bulk orders",
                "Timely delivery commitments",
                "Coordinated installation teams",
                "Regular progress updates",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with Shaze Interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Robert Anderson</h4>
                  <p className="text-emerald-700">Residential Client</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The team at Shaze completely transformed our home. They
                listened to our needs, respected our budget, and created a space
                that exceeds our expectations. We couldn't be happier with the
                results."
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
                    src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jennifer Taylor</h4>
                  <p className="text-emerald-700">Commercial Client</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "As a business owner, I needed a space that would impress
                clients and inspire my team. Shaze delivered on both fronts.
                Their attention to detail and ability to meet deadlines made the
                process stress-free."
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
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mark Johnson</h4>
                  <p className="text-emerald-700">Kitchen Remodel</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Our kitchen renovation was a major project, but Shaze made it
                feel effortless. They were professional, creative, and attentive
                throughout the entire process. The end result is beyond what we
                imagined."
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience the Shaze Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your space with a team that values excellence,
            creativity, and your unique vision?
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyShaze;
