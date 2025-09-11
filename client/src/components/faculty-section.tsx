import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


import fawadAliImage from "@/assets/fawad-ali.jpg";
import abdulKabirImage from "@/assets/abdul-kabir.jpeg";
import najeebUllahImage from "@/assets/najeeb-ullah.jpg";

const facultyMembers = [
  {
    id: 30,
    name: "Fawad Ali Azeemi",
    position: "Associate Professor",
    qualification: "M.A in English Literature",
    department: "English Department",
    image: fawadAliImage,
    profileUrl: ""
  },
  {
    id: 7,
    name: "Abdul Kabir",
    position: "Assistant Professor", 
    qualification: "M.Com",
    department: "Commerce Department",
    image: abdulKabirImage,
    profileUrl: ""
  },
  {
    id: 4,
    name: "Najeeb Ullah",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    department: "Management Sciences",
    image: najeebUllahImage,
    profileUrl: ""
  }
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="text-faculty-title">
              Our Distinguished Faculty
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed" data-testid="text-faculty-subtitle">
            Meet our experienced and dedicated educators committed to academic excellence and student success
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
          {facultyMembers.map((member) => (
            <Card 
              key={member.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 group" 
              data-testid={`card-faculty-${member.id}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-faculty-${member.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <h3 
                    className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300" 
                    data-testid={`text-faculty-name-${member.id}`}
                  >
                    {member.name}
                  </h3>
                  <div className="space-y-2">
                    <p 
                      className="text-blue-600 font-semibold text-lg" 
                      data-testid={`text-faculty-position-${member.id}`}
                    >
                      {member.position}
                    </p>
                    <p 
                      className="text-gray-500 text-sm font-medium" 
                      data-testid={`text-faculty-department-${member.id}`}
                    >
                      {member.department}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p 
                    className="text-gray-700 font-medium text-sm" 
                    data-testid={`text-faculty-qualification-${member.id}`}
                  >
                     {member.qualification}
                  </p>
                </div>

                {/* Professional Badge */}
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Faculty Member
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
              data-testid="button-view-all-faculty"
            >
              <i className="fas fa-users mr-2"></i>
              View All Faculty Members
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
