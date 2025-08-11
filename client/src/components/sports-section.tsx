import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sports = [
  {
    name: "Hockey",
    description: "Hockey is also a famous sport at GCMS Mardan No.1. In this game, GCMS Mardan No.1 has also become champions in inter-level and bachelor's-level competitions...",
    image: "https://www.gcmsmardan.edu.pk/uploads/sports/68539b5da5f86.jpg",
    featured: true
  },
  {
    name: "Cricket",
    description: "Cricket is also a famous sports of GCMS Mardan No.1. In this game GCMS Mardan No.1 also become 4 time champions in inter and also in bachelor in AWKUM...",
    image: "https://www.gcmsmardan.edu.pk/uploads/sports/67e92a0c55d31.jpg",
    featured: true
  }
];

export default function SportsSection() {
  return (
    <section id="sports" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="text-sports-title">
            Sports Activities
          </h2>
          <p className="text-gray-600 text-lg" data-testid="text-sports-subtitle">
            Discover our diverse range of sports activities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {sports.map((sport, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-sport-${index}`}>
              <div className="relative">
                <img 
                  src={sport.image} 
                  alt={`${sport.name} team in action`} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-sport-${index}`}
                />
                {sport.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white" data-testid={`badge-sport-featured-${index}`}>
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid={`text-sport-name-${index}`}>
                  {sport.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`text-sport-description-${index}`}>
                  {sport.description}
                </p>
                <a 
                  href="" 
                  className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  data-testid={`link-sport-learn-more-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
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
            <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold" data-testid="button-view-all-sports">
              <i className="fas fa-running mr-2"></i>
              View All Sports
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
