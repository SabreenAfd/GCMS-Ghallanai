import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type Program = {
  code: string;
  duration: string;
  title: string;
  description: string;
  available: boolean;
  featured: boolean;
};

const programs: Program[] = [
  {
    code: "FSc CS",
    duration: "2 Years",
    title: "Faculty of Science in Computer Science",
    description:
      "Foundation in computer science with emphasis on programming fundamentals and mathematics.",
    available: true,
    featured: false,
  },
  {
    code: "D.Com",
    duration: "2 Years",
    title: "Diploma in Commerce",
    description:
      "Comprehensive commercial education covering accounting, business studies, and economics.",
    available: true,
    featured: false,
  },
  {
    code: "DIT",
    duration: "1 Year",
    title: "Diploma in Information Technology",
    description:
      "Practical IT skills training including computer applications and basic programming.",
    available: true,
    featured: true,
  },
  {
    code: "BS CS",
    duration: "4 Years",
    title: "Bachelor of Science in CS",
    description:
      "Advanced computing degree with software development, algorithms, and system design.",
    available: true,
    featured: true,
  },
  {
    code: "BS Commerce",
    duration: "4 Years",
    title: "Bachelor of Science in Commerce",
    description:
      "Advanced business and commerce education with specializations in finance and management.",
    available: true,
    featured: false,
  },
];

export default function AcademicPrograms() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            data-testid="text-programs-title"
          >
            Academic Programs
          </h2>
          <p
            className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
            data-testid="text-programs-subtitle"
          >
            Discover excellence in education with our comprehensive range of
            programs designed for future leaders
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`group relative border-0 rounded-2xl p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                ${
                  program.available
                    ? program.featured
                      ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl"
                      : "bg-white shadow-md border border-slate-200 hover:border-blue-300"
                    : "bg-slate-100 border border-slate-200"
                }`}
              data-testid={`card-program-${index}`}
            >
              {/* Coming Soon Badge */}
              {!program.available && (
                <Badge
                  className="absolute top-4 right-4 bg-slate-500 text-white"
                  data-testid={`badge-program-coming-soon-${index}`}
                >
                  Coming Soon
                </Badge>
              )}

              {/* Card Content */}
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          program.featured ? "text-white" : "text-slate-800"
                        }`}
                        data-testid={`text-program-code-${index}`}
                      >
                        {program.code}
                      </h3>
                      <h4
                        className={`text-sm font-medium mb-4 ${
                          program.featured ? "text-blue-100" : "text-slate-600"
                        }`}
                      >
                        {program.title}
                      </h4>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`ml-4 ${
                        program.featured
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                      data-testid={`badge-program-duration-${index}`}
                    >
                      {program.duration}
                    </Badge>
                  </div>
                  <p
                    className={`mb-6 leading-relaxed ${
                      program.featured ? "text-blue-50" : "text-slate-600"
                    }`}
                    data-testid={`text-program-description-${index}`}
                  >
                    {program.description}
                  </p>
                </div>

                {/* Button at bottom */}
                <Button
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 mt-auto
                    ${
                      program.available
                        ? program.featured
                          ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-slate-400 text-white cursor-not-allowed"
                    }`}
                  disabled={!program.available}
                  onClick={() => setSelectedProgram(program)}
                  data-testid={`button-program-learn-more-${index}`}
                >
                  {program.available ? "Learn More & Apply" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Details Modal */}
        <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
          <DialogContent className="w-[95%] sm:max-w-lg rounded-xl p-6">
            {selectedProgram && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl font-bold">
                    {selectedProgram.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-slate-600">
                    {selectedProgram.code} • {selectedProgram.duration}
                  </DialogDescription>
                </DialogHeader>

                <div className="py-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>{selectedProgram.description}</p>
                </div>

                <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-end">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 w-full sm:w-auto"
                    onClick={() => {
                      window.location.href = "/"; 
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => setSelectedProgram(null)}
                  >
                    Close
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

