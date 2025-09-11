import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


import hockeyImage from "@/assets/hockey-team.jpg";
import cricketImage from "@/assets/cricket-team.jpg";

const sports = [
  {
    name: "Hockey",
    description: "Hockey is also a famous sport at GCMS Mardan No.1. In this game, GCMS Mardan No.1 has also become champions in inter-level and bachelor's-level competitions...",
    image: hockeyImage
  },
  {
    name: "Cricket",
    description: "Cricket is also a famous sports of GCMS Mardan No.1. In this game GCMS Mardan No.1 also become 4 time champions in inter and also in bachelor in AWKUM...",
    image: cricketImage
  }
];

export default function SportsSection() {
  return (
    <section id="sports" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-sports-title">
            Sports Activities
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed" data-testid="text-sports-subtitle">
            Excellence in athletics and character building through competitive sports
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>
       
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {sports.map((sport, index) => (
            <Card key={index} className="group bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2" data-testid={`card-sport-${index}`}>
              <div className="relative overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} team in action`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-sport-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4" data-testid={`text-sport-name-${index}`}>
                  {sport.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6" data-testid={`text-sport-description-${index}`}>
                  {sport.description}
                </p>
                <Link href="/sports">
                  <span className="inline-flex items-center text-blue-600 hover:text-indigo-600 font-semibold cursor-pointer transition-colors duration-300 group-hover:translate-x-1" data-testid={`link-sport-learn-more-${index}`}>
                    Learn More 
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        

        <div className="text-center">
          <Link href="/sports">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-testid="button-view-all-sports">
              
              View All Sports
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}