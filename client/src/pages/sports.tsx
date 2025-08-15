import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SportsSection from "@/components/sports-section";

const achievements = [
  {
    sport: "Cricket",
    title: "4-Time Champions",
    description: "GCMS Mardan became 4-time champions in inter-college and bachelor level competitions in AWKUM",
    year: "2023-2024",
    icon: "fas fa-trophy",
    color: "bg-yellow-500"
  },
  {
    sport: "Hockey",
    title: "Inter-Level Champions",
    description: "Champions in inter-level and bachelor's level hockey competitions",
    year: "2023-2024",
    icon: "fas fa-medal",
    color: "bg-blue-500"
  },
  {
    sport: "Football",
    title: "Regional Champions",
    description: "Outstanding performance in regional football tournaments",
    year: "2023",
    icon: "fas fa-award",
    color: "bg-green-500"
  }
];

const facilities = [
  {
    name: "Sports Ground",
    description: "Large multipurpose ground for cricket, football, and hockey",
    icon: "fas fa-running",
    features: ["Cricket Pitch", "Football Field", "Hockey Ground", "Athletic Track"]
  },
  {
    name: "Indoor Facilities",
    description: "Indoor sports complex for various activities",
    icon: "fas fa-dumbbell",
    features: ["Badminton Court", "Table Tennis", "Gymnasium", "Fitness Center"]
  },
  {
    name: "Equipment",
    description: "Professional sports equipment and gear",
    icon: "fas fa-tools",
    features: ["Cricket Equipment", "Hockey Sticks", "Football Gear", "Safety Equipment"]
  }
];

export default function Sports() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">Sports & Athletics</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Excellence in sports and physical education</p>
        </div>
      </section>

      {/* Sports Section */}
      <div className="slide-up delay-400">
        <SportsSection />
      </div>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Celebrating our sporting victories and accomplishments</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${achievement.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.sport}</h3>
                  <h4 className="text-lg font-medium text-primary mb-3">{achievement.title}</h4>
                  <p className="text-gray-600 mb-3">{achievement.description}</p>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 inline-block">
                    {achievement.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sports Facilities</h2>
            <p className="text-gray-600 text-lg">Modern facilities to support athletic excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200}`}>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <i className={`${facility.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <i className="fas fa-check text-green-500 text-sm"></i>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Training Schedule</h2>
            <p className="text-gray-600 text-lg">Regular training sessions and practice times</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden slide-up delay-400">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Day</th>
                      <th className="px-6 py-3 text-left">Time</th>
                      <th className="px-6 py-3 text-left">Sport</th>
                      <th className="px-6 py-3 text-left">Venue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Monday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600">Cricket</td>
                      <td className="px-6 py-4 text-gray-600">Main Ground</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Tuesday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600">Hockey</td>
                      <td className="px-6 py-4 text-gray-600">Hockey Ground</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Wednesday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600">Football</td>
                      <td className="px-6 py-4 text-gray-600">Football Field</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Thursday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600">Badminton</td>
                      <td className="px-6 py-4 text-gray-600">Indoor Hall</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Friday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600">Athletics</td>
                      <td className="px-6 py-4 text-gray-600">Track & Field</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}