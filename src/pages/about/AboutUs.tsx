import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  CheckCircle,
  Users,
  Star,
  Hammer,
  Compass,
  Truck,
  MapPin,
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-100">
              Al-Huda Woodworks operates from our square-foot facility in
              Islamabad, serving customers across [geographical coverage area].
              Established in 2001, our operation comprises:
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <img
          src="https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg"
          alt="Our Facility"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Al-Huda Woodworks operates from our 50,000 square-foot facility in Lahore, serving customers across Punjab and Sindh. Established in 2010, our operation comprises a robust infrastructure, a skilled team, expansive production capacity, and a wide-reaching service area.
        </p>
        <p className="text-gray-700 mb-4">
          Our infrastructure includes a modern, state-of-the-art manufacturing facility equipped with advanced machinery, a dedicated quality control department, and an in-house design and consultation center.
        </p>
        <p className="text-gray-700 mb-4">
          The Al-Huda team is made up of seasoned craftsmen, technical supervisors, project managers, and inspectors, all united by a shared passion for woodworking excellence.
        </p>
        <p className="text-gray-700 mb-4">
          With the ability to produce over 1,000 doors monthly and manage multiple large-scale projects simultaneously, our production capacity allows us to deliver on time without compromising quality.
        </p>
        <p className="text-gray-700 mb-6">
          From residential homes to commercial developments, our service teams operate across key regions with mobile units available for on-site assessments, ensuring convenience and consistency for every client.
        </p>
        <div className="flex gap-4">
          <Link
            to="/who-we-are"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Who We Are
          </Link>
          <Link
            to="/why-alhuda"
            className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-md font-medium transition-colors"
          >
            Why Choose Us
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Values */}
     

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Service Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are available across key regions with dedicated
              support and installation coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Area 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Primary Operations</h3>
              <p className="text-gray-600">
                We primarily operate in [specific areas/cities].
              </p>
            </div>

            {/* Area 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck size={28} className="text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Distribution Network</h3>
              <p className="text-gray-600">
                Wide-reaching logistics covering [regions] efficiently and
                reliably.
              </p>
            </div>

            {/* Area 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer size={28} className="text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Installation Services</h3>
              <p className="text-gray-600">
                Full installation coverage across [coverage area] with skilled
                professionals.
              </p>
            </div>

            {/* Area 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass size={28} className="text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Teams</h3>
              <p className="text-gray-600">
                On-site assessment and support through our agile mobile response
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of craftsmen, supervisors, and project experts
              ensures perfection in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lead Craftsman */}
            <div className="text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Michael Chen"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-emerald-700 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-emerald-700 mb-2">Lead Craftsman</p>
              <p className="text-gray-600">
                Skilled in precision woodworking with a deep passion for
                craftsmanship.
              </p>
            </div>

            {/* Installation Lead */}
            <div className="text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                  alt="David Williams"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-emerald-700 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold">David Williams</h3>
              <p className="text-emerald-700 mb-2">Installation Lead</p>
              <p className="text-gray-600">
                Leads seamless and efficient onsite installation with technical
                excellence.
              </p>
            </div>

            {/* Technical Supervisor */}

            <div className="text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Michael Chen"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-emerald-700 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold">Emily Rodriguez</h3>
              <p className="text-emerald-700 mb-2">Technical Supervisor</p>
              <p className="text-gray-600">
                Ensures design feasibility and supervises structural quality at
                every step.
              </p>
            </div>

            {/* Quality Inspector */}
            <div className="text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg"
                  alt="Sarah Johnson"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-emerald-700 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-emerald-700 mb-2">Quality Inspector</p>
              <p className="text-gray-600">
                Maintains top-tier standards through thorough inspections and
                detailing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We are a dedicated team of skilled craftsmen, technical supervisors, project managers, and quality control inspectors, committed to delivering excellence in every project.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Service Area */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src="https://images.pexels.com/photos/18420593/pexels-photo-18420593.jpeg"
          alt="Service Area"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-3">Service Area</h3>
        <p className="text-gray-600">
          Primary operations in Islamabad, Lahore, and Karachi. Distribution network covering Punjab and Sindh regions. Installation services throughout Pakistan. Mobile teams available for on-site assessments.
        </p>
      </div>

      {/* Production Capacity */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src="https://images.pexels.com/photos/13974251/pexels-photo-13974251.jpeg"
          alt="Production Capacity"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-3">Production Capacity</h3>
        <p className="text-gray-600">
          Monthly output of 1,000+ doors. Capable of handling multiple large-scale projects simultaneously. Dedicated production lines for commercial orders and a separate facility for custom engineering doors.
        </p>
      </div>

      {/* Infrastructure */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src="https://images.pexels.com/photos/7480448/pexels-photo-7480448.jpeg"
          alt="Infrastructure"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
        <p className="text-gray-600">
          State-of-the-art manufacturing facility spanning 50,000 square feet. Equipped with modern machinery and equipment. Dedicated quality control department and an in-house design and consultation center.
        </p>
      </div>

      {/* Our Team */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg"
          alt="Our Team"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-3">Our Team</h3>
        <p className="text-gray-600">
          A cohesive unit comprising skilled craftsmen, woodworking specialists, installation teams, technical supervisors, project managers, and quality control inspectors, all led by experienced team leaders.
        </p>
      </div>
    </div>
  </div>
</section>


    


      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create beautiful spaces together. Contact us to schedule a
            consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
