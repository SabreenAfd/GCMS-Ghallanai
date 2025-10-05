import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // ✅ success message state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return /^[a-zA-Z\s]+$/.test(value) ? "" : "Enter a valid name";
      case "email":
        return /^\S+@\S+\.\S+$/.test(value) ? "" : "Enter a valid email";
      case "phone":
        return /^\+?\d{10,15}$/.test(value) ? "" : "Enter a valid phone number";
      case "subject":
        return value ? "" : "Please select a subject";
      case "message":
        return value.length >= 10 ? "" : "Message should be at least 10 characters";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    // Simulate sending form (since it's a static site)
    console.log("Form submitted:", formData);

    // Show success message instead of alert
    setSuccessMessage("Your message has been sent successfully!");

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="min-h-screen page-fade-in">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
            Contact
          </h1>
          <p className="text-xl opacity-90 slide-up delay-200">
            Get in touch with GCMS Ghallanai
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center slide-up delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Location
              </h3>
              <p className="text-gray-600">
                Ghallanai, Khyber Pakhtunkhwa
                <br />
                Pakistan
              </p>
            </div>
            <div className="text-center slide-up delay-400">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Phone Number
              </h3>
              <p className="text-gray-600">
                <a href="tel:03059280626" className="hover:underline">
                  0305-9280626
                </a>
              </p>
            </div>
            <div className="text-center slide-up delay-600">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Email Address
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:gcmsghallanai@gmail.com"
                  className="hover:underline"
                >
                  gcmsghallanai@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="slide-up delay-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+92-XXX-XXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="sports">Sports Programs</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm font-medium animate-fade-in">
                    {successMessage}
                  </div>
                )}

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
              <div className="rounded-lg overflow-hidden mb-6 shadow-lg">
                <iframe
                  title="GCMS Ghallanai Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.653361590094!2d71.39933441493311!3d34.32451492022922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d965295006e27f%3A0x486df9b0fd833fb!2sGCMS%20Ghallanai!5e0!3m2!1sen!2s!4v1696100000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=GCMS+Ghallanai, Ghallanai, Khyber Pakhtunkhwa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
              >
                <i className="fas fa-location-arrow mr-2"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

