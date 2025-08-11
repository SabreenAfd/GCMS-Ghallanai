import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    code: "DBA",
    duration: "2 Years",
    title: "Diploma in Business Administration",
    description: "Comprehensive business education focusing on management and entrepreneurship.",
    available: true
  },
  {
    code: "BBA",
    duration: "4 Years",
    title: "Bachelor of Business Administration",
    description: "Advanced business studies with specializations in various domains.",
    available: true
  },
  {
    code: "D.Com",
    duration: "2 Years",
    title: "Diploma in Commerce",
    description: "Foundation in commercial practices and accounting principles.",
    available: true
  },
  {
    code: "DIT",
    duration: "1 Year",
    title: "Diploma in Information Technology",
    description: "Practical IT skills and computer applications training.",
    available: true
  },
  {
    code: "BS Computer Science",
    duration: "4 Years",
    title: "Bachelor of Science in Computer Science",
    description: "Advanced computing, programming, and software development.",
    available: false
  },
  {
    code: "BS Commerce",
    duration: "4 Years",
    title: "Bachelor of Science in Commerce",
    description: "Advanced studies in commerce, finance, and business management.",
    available: false
  }
];

export default function AcademicPrograms() {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="text-programs-title">
            Academic Programs
          </h2>
          <p className="text-gray-600 text-lg" data-testid="text-programs-subtitle">
            Explore our diverse range of academic programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`border rounded-xl p-6 hover:shadow-lg transition-shadow relative ${
                program.available ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-200'
              }`}
              data-testid={`card-program-${index}`}
            >
              {!program.available && (
                <Badge className="absolute top-4 right-4 bg-accent text-white" data-testid={`badge-program-coming-soon-${index}`}>
                  Coming Soon
                </Badge>
              )}
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${program.available ? 'text-primary' : 'text-gray-600'}`} data-testid={`text-program-code-${index}`}>
                    {program.code}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={`${program.available ? 'bg-blue-100 text-primary' : 'bg-gray-200 text-gray-600'}`}
                    data-testid={`badge-program-duration-${index}`}
                  >
                    {program.duration}
                  </Badge>
                </div>
                <p className={`mb-6 ${program.available ? 'text-gray-600' : 'text-gray-500'}`} data-testid={`text-program-description-${index}`}>
                  {program.description}
                </p>
                <Button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    program.available 
                      ? 'bg-primary hover:bg-blue-700 text-white' 
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                  disabled={!program.available}
                  data-testid={`button-program-learn-more-${index}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
