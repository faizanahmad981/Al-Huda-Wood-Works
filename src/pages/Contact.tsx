import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import ViewLocation from "../components/layout/ViewLocation";
import { homeFurniture, kitchen, living } from "../assets/images";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              We'd love to hear from you. Reach out to discuss your interior
              design needs or schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-emerald-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Plot # 36, Street # 02, <br />
                      Sector G-12, Islamabad,
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-emerald-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      alhudawoodworks@gmail.com
                      <br />
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-emerald-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      0321 8735400
                      <br />
                    </p>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Globe size={24} className="text-emerald-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Website</h3>
                    <p className="text-gray-600">
                      www.alhudaworks.com
                      <br />
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock size={24} className="text-emerald-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to discuss your project? Fill out the
                  form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-md mb-6">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <p className="font-medium">
                        Thank you for your message! We'll be in touch shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Design Consultation">
                            Design Consultation
                          </option>
                          <option value="Project Quote">Project Quote</option>
                          <option value="Fotile Kitchen">Fotile Kitchen</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Tell us about your project or question..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin size={40} className="mx-auto text-emerald-700 mb-4" />
               
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.57161653698!2d72.9446660751578!3d33.61641784061834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df96fe241c7417%3A0x85073fb4b045d6e8!2sStreet%2002%2C%20Jhangi%20Sayedan%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746007820987!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our products and designs in person at our beautiful
              showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Showroom Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={kitchen}
                alt="Showroom"
                className="w-full h-64 object-cover"
              />
              
            </div>

            {/* Showroom Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={homeFurniture}
                alt="Showroom"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Showroom Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={living}
                alt="Showroom"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-bold mb-2">Schedule a Showroom Visit</p>
            <p className="text-gray-600 mb-6">
              Our showroom is open Monday - Saturday. We recommend scheduling an
              appointment for a personalized experience.
            </p>
            <a
              href="tel:+15551234567"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
            >
              Call to Schedule
              <Phone size={18} className="ml-2" />
            </a>
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
            Whether you're planning a complete renovation or seeking design
            advice, we're here to help you create beautiful, functional spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@shazeinteriors.com"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
