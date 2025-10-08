import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { facultyMembers } from "@/lib/faculty-data";

const featuredFaculty = facultyMembers.slice(0, 3);

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Distinguished Faculty
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet our experienced and dedicated educators committed to academic excellence
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredFaculty.map((member, index) => (
            <div
              key={member.id}
              className={`slide-up delay-${(index + 1) * 200}`}
            >
              <Card
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group h-full flex flex-col transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden flex-shrink-0">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated Corner Accent */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-blue-500 opacity-30"></div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                      {member.experience}
                    </div>

                    {/* Floating Name on Hover */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
                  <div className="mb-4 flex-grow text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-base mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm font-medium mb-2">
                      {member.department}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {member.qualification}
                    </p>
                  </div>

                  {/* Decorative Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full opacity-50"></div>

                  {/* Button */}
                  <div className="mt-auto">
                    <Link href={`/faculty/${member.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg transform hover:-translate-y-1 hover:shadow-xl group/btn">
                        <span className="mr-2">View Profile</span>
                        <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-2 transition-transform duration-300"></i>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center slide-up delay-800">
          <Link href="/faculty">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <i className="fas fa-users mr-3 text-lg group-hover:scale-110 transition-transform duration-300"></i>
              View All Faculty Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
