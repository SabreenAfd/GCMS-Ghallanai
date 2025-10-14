import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import footballImage from "@/assets/football-team.jpg";
import volleyballImage from "@/assets/volleyball-team.jpg";
import cricketImage from "@/assets/cricket-team.jpg";
import badmintonImage from "@/assets/badminton-team.jpg";

interface Sport {
  name: string;
  description: string;
  image: string;
}

interface SportsSectionProps {
  showAll?: boolean;
}

const allSports: Sport[] = [
  {
    name: "Hockey",
    description:
      "At GCMS Ghallanai, the Hockey team has shown strong performance in regional tournaments, bringing honours in inter-college matches. The coaching is focused on both skill development and teamwork.",
    image: footballImage,
  },
  {
    name: "Volleyball",
    description:
      "Volleyball is one of the most popular sports among students here. GCMS Ghallanai has participated in several district level volleyball tournaments, often finishing among the top teams.",
    image: volleyballImage,
  },
  {
    name: "Cricket",
    description:
      "The cricket team is one of the strongest at GCMS Ghallanai, frequently winning district tournaments and producing outstanding players.",
    image: cricketImage,
  },
  {
    name: "Badminton",
    description:
      "Indoor badminton is a growing sport at GCMS Ghallanai, encouraging agility, focus, and competitive spirit.",
    image: badmintonImage,
  },
];

export default function SportsSection({ showAll = false }: SportsSectionProps) {
  const sports = showAll ? allSports : allSports.slice(0, 2);

  return (
    <section
      id="sports"
      className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sports Activities at GCMS Ghallanai
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Fostering physical excellence, discipline, and teamwork through
            competitive and recreational sports
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Sports Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {sports.map((sport, index) => (
            <Card
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} team at GCMS Ghallanai`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {sport.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {sport.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button - only show on home page */}
        {!showAll && (
          <div className="text-center">
            <Link href="/sports">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                View All Sports
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}