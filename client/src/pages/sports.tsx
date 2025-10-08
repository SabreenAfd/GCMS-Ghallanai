import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SportsSection from "@/components/sports-section";


// -------------------- Achievements --------------------
const achievements = [
  {
    sport: "Cricket",
    title: "District Champions",
    description:
      "GCMS Ghallanai cricket team achieved distinction in district-level tournaments.",
  },
  {
    sport: "Football",
    title: "Regional Winners",
    description:
      "The football team represented GCMS Ghallanai in inter-college events and secured top positions.",
  },
  {
    sport: "Volleyball",
    title: "Strong Performers",
    description:
      "Volleyball is a leading sport at GCMS Ghallanai with active participation.",
  },
];

// -------------------- Facilities --------------------
const facilities = [
  {
    name: "Sports Ground",
    description: "Multipurpose ground used for cricket, football, and athletics.",
    features: ["Cricket Pitch", "Football Field", "Athletics Track"],
  },
  {
    name: "Indoor Facilities",
    description: "Indoor hall for multiple sports and training sessions.",
    features: ["Badminton Court", "Table Tennis", "Fitness Center"],
  },
  {
    name: "Equipment",
    description: "Standard sports gear provided for students.",
    features: ["Cricket Kits", "Football Gear", "Volleyball Nets"],
  },
];

export default function Sports() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />

     

      {/* Sports Section */}
      <div className="slide-up delay-400">
        <SportsSection expandable />
      </div>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-lg">
              Celebrating the milestones and victories of GCMS Ghallanai athletes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {achievements.map((achievement, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200} h-full`}>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-500 h-full flex flex-col justify-between border-t-4 border-blue-500">
                  <div>
                    <div className="inline-block mb-4">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                        {achievement.sport}
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sports Facilities
            </h2>
            <p className="text-gray-600 text-lg">
              Supporting athletic growth with modern and well-equipped facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {facilities.map((facility, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200} h-full`}>
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 h-full flex flex-col justify-between hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                      {facility.name}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{facility.description}</p>
                  </div>
                  <div className="space-y-3 mt-auto">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Training Schedule
            </h2>
            <p className="text-gray-600 text-lg">
              Structured practice sessions to enhance athletic skills and teamwork
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden slide-up delay-400">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Day</th>
                      <th className="px-6 py-4 text-left font-semibold">Time</th>
                      <th className="px-6 py-4 text-left font-semibold">Sport</th>
                      <th className="px-6 py-4 text-left font-semibold">Venue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-800 font-semibold">Monday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">Cricket</td>
                      <td className="px-6 py-4 text-gray-600">Main Ground</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-800 font-semibold">Tuesday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">Football</td>
                      <td className="px-6 py-4 text-gray-600">Football Field</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-800 font-semibold">Wednesday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">Volleyball</td>
                      <td className="px-6 py-4 text-gray-600">Main Ground</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-800 font-semibold">Thursday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">Badminton</td>
                      <td className="px-6 py-4 text-gray-600">Indoor Hall</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-800 font-semibold">Friday</td>
                      <td className="px-6 py-4 text-gray-600">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">Athletics</td>
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
