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

  const faculty = params?.slug ? getFacultyBySlug(params.slug) : null;

  if (!faculty) {
    return (
      <div className="min-h-screen page-fade-in">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <i className="fas fa-user-slash text-6xl text-gray-300 mb-4"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Faculty Not Found
            </h1>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              The faculty member you're looking for doesn't exist or may have
              been moved.
            </p>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

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
              {/* Profile Image */}
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

              {/* Profile Info */}
              <div className="text-center lg:text-left flex-1 slide-up delay-200">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {faculty.name}
                </h1>
                <div className="space-y-3 mb-6">
                  <p className="text-2xl font-semibold text-blue-200">
                    {faculty.position}
                  </p>
                  <p className="text-xl text-blue-100 flex items-center justify-center lg:justify-start">
                    <i className="fas fa-graduation-cap mr-3"></i>
                    {faculty.qualification}
                  </p>
                  <p className="text-lg text-blue-100 flex items-center justify-center lg:justify-start">
                    <i className="fas fa-building mr-3"></i>
                    {faculty.department}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography + Education */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Biography */}
            <div className="slide-up delay-600 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Biography
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">
                  {faculty.bio}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="grid md:grid-cols-1 gap-8 mb-16">
              <div className="slide-up delay-700">
                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6 justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-graduation-cap text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          Education
                        </h3>
                        <div className="w-16 h-1 bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {faculty.education.map((edu, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-500"
                        >
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {edu}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
