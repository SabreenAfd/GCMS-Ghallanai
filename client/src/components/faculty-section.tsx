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
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Distinguished Faculty
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our experienced and dedicated educators committed to academic excellence
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredFaculty.map((member) => (
            <Card
              key={member.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden flex-shrink-0 group-hover:shadow-md group-hover:shadow-gray-200/60 transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Light overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>

                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-2 rounded-full shadow-sm shadow-gray-300/50 backdrop-blur-sm border border-white/20">
                  {member.experience}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-blue-500/10 border-t-[40px] border-t-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <CardContent className="p-5 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
                <div className="mb-4 flex-grow text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight h-12 flex items-center justify-center group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-base mb-2 h-6">
                    {member.position}
                  </p>
                  <p className="text-gray-500 text-sm font-medium mb-2 h-5">
                    {member.department}
                  </p>
                  <p className="text-gray-600 text-sm mb-3 h-5 italic">
                    {member.qualification}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <Link href={`/faculty/${member.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm py-3 rounded-lg transition-all duration-300 font-semibold shadow-sm shadow-gray-200/60 hover:shadow-md hover:shadow-gray-300/70 transform hover:-translate-y-1 border border-blue-500/20">
                      <span className="mr-2">View Profile</span>
                      <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/faculty">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-sm shadow-gray-200/60 hover:shadow-md hover:shadow-gray-300/70 transition-all duration-300">
              <i className="fas fa-users mr-2"></i>
              View All Faculty Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
