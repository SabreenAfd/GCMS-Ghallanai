import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const facultyMembers = [
  {
    id: 30,
    name: "Fawad Ali Azeemi",
    position: "Associate Professor",
    qualification: "M.A in English Literature",
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683e82f253ff1.jpg",
    profileUrl: ""
  },
  {
    id: 7,
    name: "Abdul Kabir",
    position: "Assistant Professor",
    qualification: "M.Com",
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683811458edd9.jpeg",
    profileUrl: ""
  },
  {
    id: 4,
    name: "Najeeb Ullah",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683750d9dea3e.jpg",
    profileUrl: ""
  }
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="text-faculty-title">
            Our Distinguished Faculty
          </h2>
          <p className="text-gray-600 text-lg" data-testid="text-faculty-subtitle">
            Meet our experienced and dedicated educators
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {facultyMembers.map((member) => (
            <Card key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-faculty-${member.id}`}>
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
                data-testid={`img-faculty-${member.id}`}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1" data-testid={`text-faculty-name-${member.id}`}>
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2" data-testid={`text-faculty-position-${member.id}`}>
                  {member.position}
                </p>
                <p className="text-gray-600 mb-4" data-testid={`text-faculty-qualification-${member.id}`}>
                  {member.qualification}
                </p>
                <a 
                  href={member.profileUrl} 
                  className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  data-testid={`link-faculty-profile-${member.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold" data-testid="button-view-all-faculty">
              <i className="fas fa-users mr-2"></i>
              View All Faculty
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
