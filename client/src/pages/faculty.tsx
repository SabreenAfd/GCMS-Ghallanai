import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FacultySection from "@/components/faculty-section";

const departments = [
  {
    name: "Commerce Department",
    head: "Dr. Muhammad Ali",
    description: "Leading experts in commerce and business studies",
    icon: "fas fa-chart-line",
    color: "bg-blue-500"
  },
  {
    name: "Management Sciences",
    head: "Dr. Sarah Ahmad",
    description: "Experienced faculty in management and administration",
    icon: "fas fa-users-cog",
    color: "bg-green-500"
  },
  {
    name: "Computer Science",
    head: "Mr. Ahmad Khan",
    description: "Technology experts and programming specialists",
    icon: "fas fa-laptop-code",
    color: "bg-purple-500"
  }
];

export default function Faculty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">Our Faculty</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Meet our dedicated educators and mentors</p>
        </div>
      </section>

      {/* Faculty Section */}
      <div className="slide-up delay-400">
        <FacultySection />
      </div>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Departments</h2>
            <p className="text-gray-600 text-lg">Academic divisions led by experienced professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200}`}>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${dept.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Department Head</p>
                    <p className="font-medium text-primary">{dept.head}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faculty Achievements</h2>
            <p className="text-gray-600 text-lg">Recognition and accomplishments of our educators</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="slide-up delay-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <i className="fas fa-award text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Research Publications</h3>
                <p className="opacity-90">Our faculty has published over 50 research papers in national and international journals.</p>
              </div>
            </div>
            <div className="slide-up delay-400">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                <i className="fas fa-trophy text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Academic Awards</h3>
                <p className="opacity-90">Multiple faculty members have received excellence awards for their teaching and research contributions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}