import React, { useEffect } from "react";
import { useRoute, Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFacultyBySlug } from "@/lib/faculty-data";

export default function FacultyProfile() {
  const [match, params] = useRoute("/faculty/:slug");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get faculty member by slug
  const faculty = params?.slug ? getFacultyBySlug(params.slug) : null;

  if (!faculty) {
    return (
      <div className="min-h-screen page-fade-in">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <i className="fas fa-user-slash text-6xl text-gray-300 mb-4"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Faculty Not Found</h1>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">The faculty member you're looking for doesn't exist or may have been moved.</p>
            <Link href="/faculty">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <i className="fas fa-arrow-left mr-3"></i>
                Back to Faculty
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <Link href="/faculty">
              <Button 
                variant="outline" 
                className="mb-8 text-white border-white/30 hover:bg-white hover:text-blue-700 backdrop-blur-sm bg-white/10 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
              >
                <i className="fas fa-arrow-left mr-3"></i>
                Back to Faculty
              </Button>
            </Link>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Enhanced Profile Image */}
              <div className="flex-shrink-0 slide-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-50 scale-105"></div>
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="relative w-64 h-64 rounded-3xl object-cover border-4 border-white/30 shadow-2xl backdrop-blur-sm"
                  />
                  {/* Experience Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-2xl shadow-xl font-bold">
                    {faculty.experience}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Profile Info */}
              <div className="text-center lg:text-left flex-1 slide-up delay-200">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {faculty.name}
                </h1>
                <div className="space-y-3 mb-6">
                  <p className="text-2xl font-semibold text-blue-200">{faculty.position}</p>
                  <p className="text-xl text-blue-100 flex items-center justify-center lg:justify-start">
                    <i className="fas fa-graduation-cap mr-3"></i>
                    {faculty.qualification}
                  </p>
                  <p className="text-lg text-blue-100 flex items-center justify-center lg:justify-start">
                    <i className="fas fa-building mr-3"></i>
                    {faculty.department}
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                    <span className="text-blue-100 text-sm font-medium">
                      <i className="fas fa-book mr-2"></i>
                      {faculty.courses.length} Courses
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                    <span className="text-blue-100 text-sm font-medium">
                      <i className="fas fa-flask mr-2"></i>
                      {faculty.research.length} Research Areas
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                    <span className="text-blue-100 text-sm font-medium">
                      <i className="fas fa-award mr-2"></i>
                      {faculty.achievements.length} Awards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 slide-up delay-400">
              <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-envelope text-white text-2xl"></i>
                  </div>
                  <p className="text-gray-500 font-medium mb-2">Email Address</p>
                  <p className="font-bold text-gray-800 text-sm break-all">{faculty.email}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-phone text-white text-2xl"></i>
                  </div>
                  <p className="text-gray-500 font-medium mb-2">Phone Number</p>
                  <p className="font-bold text-gray-800">{faculty.phone}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                  </div>
                  <p className="text-gray-500 font-medium mb-2">Office Location</p>
                  <p className="font-bold text-gray-800">{faculty.office}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Enhanced Biography */}
            <div className="slide-up delay-600 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Biography</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">{faculty.bio}</p>
              </div>
            </div>

            {/* Enhanced Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Education */}
              <div className="slide-up delay-700">
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-graduation-cap text-white text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Education</h3>
                    </div>
                    <div className="space-y-4">
                      {faculty.education.map((edu, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{edu}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Specializations */}
              <div className="slide-up delay-800">
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-star text-white text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Specializations</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {faculty.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-xl font-medium border border-blue-200 hover:shadow-md transition-all duration-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Courses */}
              <div className="slide-up delay-900">
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-book text-white text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Courses Taught</h3>
                    </div>
                    <div className="space-y-4">
                      {faculty.courses.map((course, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{course}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Research Areas */}
              <div className="slide-up delay-1000">
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-flask text-white text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Research Areas</h3>
                    </div>
                    <div className="space-y-4">
                      {faculty.research.map((research, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{research}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Publications */}
            {faculty.publications.length > 0 && (
              <div className="mb-12 slide-up delay-1100">
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                        <i className="fas fa-file-alt text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Publications</h3>
                        <div className="w-16 h-1 bg-indigo-500"></div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {faculty.publications.map((publication, index) => (
                        <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-indigo-500">
                          <p className="text-gray-700 leading-relaxed text-lg italic">"{publication}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Achievements */}
            {faculty.achievements.length > 0 && (
              <div className="slide-up delay-1200">
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                        <i className="fas fa-trophy text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Achievements & Awards</h3>
                        <div className="w-16 h-1 bg-yellow-500"></div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {faculty.achievements.map((achievement, index) => (
                        <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start">
                            <i className="fas fa-award text-yellow-600 text-xl mr-4 mt-1"></i>
                            <p className="text-gray-700 leading-relaxed font-medium">{achievement}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}