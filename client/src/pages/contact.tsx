import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">Contact Us</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Get in touch with GCMS Ghallanai</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center slide-up delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Location</h3>
              <p className="text-gray-600">Ghallanai, Khyber Pakhtunkhwa<br/>Pakistan</p>
            </div>
            <div className="text-center slide-up delay-400">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone Number</h3>
              <p className="text-gray-600">+92-XXX-XXXXXXX</p>
            </div>
            <div className="text-center slide-up delay-600">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Address</h3>
              <p className="text-gray-600">info@gcmsghallanai.edu.pk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="slide-up delay-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+92-XXX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="sports">Sports Programs</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="slide-up delay-400">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
              
              {/* Placeholder Map */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Ghallanai, Khyber Pakhtunkhwa</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Thursday:</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday:</span>
                    <span className="font-medium">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday - Sunday:</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary text-white rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <p className="font-medium">Principal Office</p>
                      <p className="text-sm opacity-90">For administrative matters</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-graduation-cap"></i>
                    <div>
                      <p className="font-medium">Admission Office</p>
                      <p className="text-sm opacity-90">For enrollment inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-trophy"></i>
                    <div>
                      <p className="font-medium">Sports Department</p>
                      <p className="text-sm opacity-90">For sports activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 slide-up delay-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the admission requirements?</h3>
              <p className="text-gray-600">Students need to have completed intermediate education or equivalent qualification. Complete documentation and application forms are required.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 slide-up delay-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">When do classes start?</h3>
              <p className="text-gray-600">New academic sessions typically start in September and February. Please check our academic calendar for exact dates.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 slide-up delay-600">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Are sports activities mandatory?</h3>
              <p className="text-gray-600">While not mandatory, we highly encourage all students to participate in sports activities for physical fitness and character development.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 slide-up delay-800">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I apply for admission?</h3>
              <p className="text-gray-600">You can visit our admission office during working hours or contact us through phone or email for detailed application procedures.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}