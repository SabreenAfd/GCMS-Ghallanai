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
    head: "Muhammad Iqbal",
    description: "Leading experts in commerce and business studies",
    icon: "fas fa-chart-line",
    color: "bg-primary "
  },
  {
    name: "Computer Sciences",
    head: "Muhammad Farooq", 
    description: "Experienced faculty in management and administration",
    icon: "fas fa-users-cog",
    color: "bg-primary "
  },
  {
    name: "English Department",
    head: "Shahab Uddin",
    description: "Literature experts and language specialists",
    icon: "fas fa-book-open",
    color: "bg-primary "
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
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 slide-up bg-gradient-to-r from-white to-blue-100 bg-clip-text text-black">
              Our Faculty
            </h1>
            <p className="text-lg  md:text-xl opacity-90 slide-up delay-200 leading-relaxed max-w-2xl mx-auto">
              Meet our dedicated educators and mentors at GCMS Ghallanai
            </p>
          </div>
        </div>
      </section>

      {/* All Faculty Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          

          {/* Simplified Faculty Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facultyMembers.map((member, index) => (
              <Card
                key={member.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group h-full flex flex-col"
                data-testid={`card-faculty-${member.id}`}
              >
                {/* Enhanced Professional Image Container */}
                <div className="relative overflow-hidden flex-shrink-0 group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-faculty-${member.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced Experience Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    {member.experience}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-blue-500/20 border-t-[40px] border-t-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Enhanced Content */}
                <CardContent className="p-5 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
                  <div className="mb-4 flex-grow text-center">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3 leading-tight h-12 flex items-center justify-center group-hover:text-blue-600 transition-colors duration-300"
                      data-testid={`text-faculty-name-${member.id}`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-blue-600 font-semibold text-base mb-2 h-6 "
                      data-testid={`text-faculty-position-${member.id}`}
                    >
                      {member.position}
                    </p>
                    <p
                      className="text-gray-500 text-sm font-medium mb-2 h-5 mt-[30px]"
                      data-testid={`text-faculty-department-${member.id}`}
                    >
                      {member.department}
                    </p>
                    <p
                      className="text-gray-600 text-sm mb-3 h-5 "
                      data-testid={`text-faculty-qualification-${member.id}`}
                    >
                      {member.qualification}
                    </p>
                  </div>

                  {/* Enhanced Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/faculty/${member.slug}`}
                      data-testid={`link-faculty-profile-${member.id}`}
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/20">
                        <span className="mr-2">View Profile</span>
                        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Departments Section */}
<section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-100 rounded-full translate-x-16 translate-y-16 opacity-50"></div>
  
  <div className="container mx-auto px-4 relative">
    <div className="text-center mb-12 slide-up">
      <div className="inline-block">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Departments
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Academic divisions led by experienced professionals
      </p>
    </div>
    
    {/* Updated grid with equal-height cards */}
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
      {departments.map((dept, index) => (
        <div key={index} className={`slide-up delay-${(index + 1) * 200} h-full`}>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group h-full flex flex-col justify-between">
            
            {/* Top content */}
            <div>
              <div
                className={`w-16 h-16 ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                <i className={`${dept.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {dept.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {dept.description}
              </p>
            </div>

            {/* Bottom content */}
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500 mb-1">Department Head</p>
              <p className="font-bold text-blue-600">{dept.head}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Simplified Faculty Achievements */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 slide-up">
      <div className="inline-block">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faculty Achievements</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Recognition that showcases our commitment to excellence
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="slide-up delay-200">
        <div className="bg-[var(--primary)] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full min-h-[250px]">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-award text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Research Publications</h3>
              <div className="w-12 h-0.5 bg-white/40"></div>
            </div>
          </div>
          <p className="text-white leading-relaxed">
            Our faculty has published more than <span className="font-bold">25 research papers</span> in national and international journals.
          </p>
        </div>
      </div>

      <div className="slide-up delay-400">
        <div className="bg-[var(--primary)] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full min-h-[250px]">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-trophy text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Academic Awards</h3>
              <div className="w-12 h-0.5 bg-white/40"></div>
            </div>
          </div>
          <p className="text-white leading-relaxed">
            Multiple faculty members have received <span className="font-bold">excellence awards</span> for outstanding teaching contributions.
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