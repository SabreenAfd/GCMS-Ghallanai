import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { facultyMembers } from "@/lib/faculty-data";

export default function FacultySection() {
  return (
    <section id="faculty" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            data-testid="text-faculty-title"
          >
            Our Distinguished Faculty
          </h2>
          <p
            className="text-gray-600 text-lg"
            data-testid="text-faculty-subtitle"
          >
            Meet our experienced and dedicated educators
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {facultyMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-faculty-${member.id}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                data-testid={`img-faculty-${member.id}`}
              />
              <CardContent className="p-6">
                <h3
                  className="text-xl font-semibold text-gray-800 mb-1"
                  data-testid={`text-faculty-name-${member.id}`}
                >
                  {member.name}
                </h3>
                <p
                  className="text-primary font-medium mb-2"
                  data-testid={`text-faculty-position-${member.id}`}
                >
                  {member.position}
                </p>
                <p
                  className="text-gray-600 mb-2"
                  data-testid={`text-faculty-qualification-${member.id}`}
                >
                  {member.qualification}
                </p>
                <p className="text-sm text-gray-500 mb-4">{member.department}</p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.specialization.slice(0, 2).map((spec, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                  {member.specialization.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{member.specialization.length - 2}
                    </span>
                  )}
                </div>

                {/* View Profile */}
                <Link
                  href={`/faculty/${member.slug}`}
                  data-testid={`link-faculty-profile-${member.id}`}
                >
                  <Button className="w-full bg-primary hover:bg-blue-700 text-white transition-colors">
                    View Profile <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/faculty">
            <Button
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              data-testid="button-view-all-faculty"
            >
              <i className="fas fa-users mr-2"></i>
              View All Faculty
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
