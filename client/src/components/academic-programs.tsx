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
  detailedDescription: string;
};

const programs: Program[] = [
  {
    code: "FSc CS",
    duration: "2 Years",
    title: "Faculty of Science in Computer Science",
    description:
      "Foundation in computer science with emphasis on programming fundamentals and mathematics.",
    detailedDescription:
      "This program provides students with a strong foundation in computer science, covering programming, data structures, and mathematics. Students engage in practical labs and projects to develop critical problem-solving skills and prepare for advanced computing studies or careers in technology.",
    available: true,
  },
  {
    code: "D.Com",
    duration: "2 Years",
    title: "Diploma in Commerce",
    description:
      "Comprehensive commercial education covering accounting, business studies, and economics.",
    detailedDescription:
      "The Diploma in Commerce offers a thorough understanding of accounting principles, business management, and economic theory. Students gain practical skills through case studies, projects, and internships, equipping them for careers in finance, accounting, and business operations.",
    available: true,
  },
  {
    code: "DIT",
    duration: "1 Year",
    title: "Diploma in Information Technology",
    description:
      "Practical IT skills training including computer applications and basic programming.",
    detailedDescription:
      "The Diploma in IT equips students with practical skills in software applications, networking, and programming fundamentals. Hands-on projects and workshops ensure students are ready to enter the IT industry with confidence and practical experience.",
    available: true,
  },
  {
    code: "BS CS",
    duration: "4 Years",
    title: "Bachelor of Science in CS",
    description:
      "Advanced computing degree with software development, algorithms, and system design.",
    detailedDescription:
      "The BS in Computer Science provides an in-depth study of software development, algorithms, database systems, and system design. Students complete challenging projects and research work to prepare for high-level careers in technology, software engineering, and research.",
    available: true,
  },
   
  {
    code: "BS Commerce",
    duration: "4 Years",
    title: "Bachelor of Science in Commerce",
    description:
      "Advanced business and commerce education with specializations in finance and management.",
    detailedDescription:
      "BS Commerce focuses on finance, management, and business strategy. Students explore accounting, economics, and entrepreneurship through case studies, internships, and group projects, preparing them for professional careers or further studies in business and commerce.",
    available: true,
  },
];

export default function AcademicPrograms() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section
      id="programs"
      className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
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
              className="group relative rounded-2xl p-8 h-full flex flex-col bg-white shadow-md border border-slate-200 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                        className="text-2xl font-bold mb-2 text-slate-800"
                        data-testid={`text-program-code-${index}`}
                      >
                        {program.code}
                      </h3>
                      <h4 className="text-sm font-medium mb-4 text-slate-600">
                        {program.title}
                      </h4>
                    </div>
                    <Badge
                      variant="secondary"
                      className="ml-4 bg-blue-50 text-blue-700 border-blue-200"
                      data-testid={`badge-program-duration-${index}`}
                    >
                      {program.duration}
                    </Badge>
                  </div>
                  <p
                    className="mb-6 leading-relaxed text-slate-600"
                    data-testid={`text-program-description-${index}`}
                  >
                    {program.description}
                  </p>
                </div>

                {/* Button at bottom */}
                <Button
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 mt-auto ${
                    program.available
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-slate-400 text-white cursor-not-allowed"
                  }`}
                  disabled={!program.available}
                  onClick={() => setSelectedProgram(program)}
                  data-testid={`button-program-learn-more-${index}`}
                >
                  {program.available ? "Learn More" : "Coming Soon"}
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

                <div className="py-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{selectedProgram.description}</p>
                  <p>{selectedProgram.detailedDescription}</p>
                </div>

                
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}





