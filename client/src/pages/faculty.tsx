import React, { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { facultyMembers } from "@/lib/faculty-data";

const departments = [
  {
    name: "Commerce Department",
    head: "Dr. Muhammad Ali",
    description: "Leading experts in commerce and business studies",
    icon: "fas fa-chart-line",
    color: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    name: "Management Sciences",
    head: "Dr. Sarah Ahmad", 
    description: "Experienced faculty in management and administration",
    icon: "fas fa-users-cog",
    color: "bg-gradient-to-br from-green-500 to-green-600"
  },
  {
    name: "Computer Science",
    head: "Mr. Ahmad Khan",
    description: "Technology experts and programming specialists",
    icon: "fas fa-laptop-code",
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  }
];

export default function Faculty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 slide-up bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Faculty
            </h1>
            <p className="text-xl md:text-2xl opacity-90 slide-up delay-200 leading-relaxed max-w-2xl mx-auto">
              Meet our dedicated educators and mentors who shape tomorrow's leaders
            </p>
            
          </div>
        </div>
      </section>

      {/* All Faculty Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">All Faculty Members</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Complete list of our experienced educators dedicated to excellence in teaching and research
            </p>
          </div>

          {/* Enhanced Faculty Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facultyMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 group slide-up delay-${(index + 1) * 100}`}
                data-testid={`card-faculty-${member.id}`}
              >
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-faculty-${member.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {member.experience}
                  </div>
                </div>

                {/* Enhanced Content */}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3
                      className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                      data-testid={`text-faculty-name-${member.id}`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-blue-600 font-semibold text-lg mb-1"
                      data-testid={`text-faculty-position-${member.id}`}
                    >
                      {member.position}
                    </p>
                    <p
                      className="text-gray-500 font-medium text-sm"
                      data-testid={`text-faculty-qualification-${member.id}`}
                    >
                      🎓 {member.qualification}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm font-medium">{member.department}</p>
                    </div>

                    {/* Specializations */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialization.slice(0, 2).map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
                        >
                          {spec}
                        </span>
                      ))}
                      {member.specialization.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                          +{member.specialization.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced View Profile Button */}
                  <Link
                    href={`/faculty/${member.slug}`}
                    data-testid={`link-faculty-profile-${member.id}`}
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group-hover:scale-105">
                      <span className="mr-2">View Profile</span>
                      <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Departments Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full translate-x-32 translate-y-32 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 slide-up">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Departments</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Academic divisions led by experienced professionals committed to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <div className={`w-20 h-20 ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <i className={`${dept.icon} text-white text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500 mb-1">Department Head</p>
                    <p className="font-bold text-blue-600 text-lg">{dept.head}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Faculty Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Faculty Achievements</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Recognition and accomplishments that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="slide-up delay-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-award text-4xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Research Publications</h3>
                    <div className="w-16 h-1 bg-blue-300"></div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Our faculty has published over <span className="font-bold text-white">50 research papers</span> in national and international journals, contributing to academic knowledge and innovation.
                </p>
              </div>
            </div>
            
            <div className="slide-up delay-400">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-trophy text-4xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Academic Awards</h3>
                    <div className="w-16 h-1 bg-emerald-300"></div>
                  </div>
                </div>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  Multiple faculty members have received <span className="font-bold text-white">excellence awards</span> for their outstanding teaching and research contributions to the academic community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}