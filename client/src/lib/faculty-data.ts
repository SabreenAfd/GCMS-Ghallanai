import fawadAliImage from "@/assets/fawad-ali.jpg";
import abdulKabirImage from "@/assets/abdul-kabir.jpeg";
import najeebUllahImage from "@/assets/najeeb-ullah.jpg";

export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  qualification: string;
  image: string;
  department: string;
  email: string;
  phone: string;
  office: string;
  experience: string;
  specialization: string[];
  education: string[];
  courses: string[];
  research: string[];
  publications: string[];
  achievements: string[];
  bio: string;
  slug: string;
  profileUrl: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 30,
    name: "Fawad Ali Azeemi",
    position: "Associate Professor",
    qualification: "M.A in English Literature",
    image: fawadAliImage,
    department: "English Department",
    email: "fawad.azeemi@gcmsghallanai.edu.pk",
    phone: "+92-300-5551234",
    office: "Room 205, Academic Block",
    experience: "15 Years",
    slug: "fawad-ali-azeemi",
    profileUrl: "/faculty/fawad-ali-azeemi",
    specialization: ["English Literature", "Creative Writing", "Literary Criticism"],
    education: [
      "M.A in English Literature - University of Peshawar (2008)",
      "B.A in English - Government College Ghallanai (2006)"
    ],
    courses: ["Advanced English Literature", "Creative Writing", "Communication Skills"],
    research: [
      "Modern Poetry Analysis in South Asian Context",
      "Digital Literature and its Impact on Traditional Reading",
      "Cross-cultural Literary Studies"
    ],
    publications: [
      "The Evolution of Urdu Poetry (2022)",
      "Teaching English in Multilingual Classrooms (2021)",
      "Literary Perspectives in Digital Age (2020)"
    ],
    achievements: [
      "Best Teacher Award 2023",
      "Excellence in Research Award 2022",
      "Outstanding Faculty Performance 2021"
    ],
    bio: "Prof. Fawad Ali Azeemi is a distinguished educator with over 15 years of experience in English Literature. He has been instrumental in developing innovative teaching methodologies and has guided numerous students in their academic pursuits. His research focuses on modern literary analysis and the impact of digital media on traditional literature."
  },
  {
    id: 7,
    name: "Abdul Kabir",
    position: "Assistant Professor",
    qualification: "M.Com",
    image: abdulKabirImage,
    department: "Commerce Department",
    email: "abdul.kabir@gcmsghallanai.edu.pk",
    phone: "+92-300-5551235",
    office: "Room 105, Commerce Block",
    experience: "8 Years",
    slug: "abdul-kabir",
    profileUrl: "/faculty/abdul-kabir",
    specialization: ["Financial Management", "Business Analytics", "Corporate Finance"],
    education: [
      "M.Com in Finance - University of Peshawar (2015)",
      "B.Com - Government College Ghallanai (2013)"
    ],
    courses: ["Financial Management", "Business Statistics", "Investment Analysis"],
    research: [
      "SME Financing in Tribal Areas",
      "Digital Banking Trends in FATA",
      "Financial Literacy in Rural Communities"
    ],
    publications: [
      "Small Business Finance Solutions in Tribal Areas (2023)",
      "Digital Transformation in Regional Banking (2022)"
    ],
    achievements: [
      "Young Faculty Award 2023",
      "Research Excellence 2022"
    ],
    bio: "Abdul Kabir is a dedicated commerce educator focusing on practical applications of financial principles in tribal and rural contexts. His research in SME financing has contributed significantly to understanding business challenges in the former FATA region. He specializes in helping students understand complex financial concepts through real-world applications."
  },
  {
    id: 4,
    name: "Najeeb Ullah",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    image: najeebUllahImage,
    department: "Management Sciences",
    email: "najeeb.ullah@gcmsghallanai.edu.pk",
    phone: "+92-300-5551236",
    office: "Room 305, Management Block",
    experience: "5 Years",
    slug: "najeeb-ullah",
    profileUrl: "/faculty/najeeb-ullah",
    specialization: ["Strategic Management", "Organizational Behavior", "Project Management"],
    education: [
      "MS Management Sciences - Islamia College Peshawar (2019)",
      "BBA - Government College Ghallanai (2017)"
    ],
    courses: ["Strategic Management", "Leadership Skills", "Project Management"],
    research: [
      "Leadership Styles in Tribal Organizations",
      "Employee Motivation in Public Sector",
      "Change Management Strategies in Educational Institutions"
    ],
    publications: [
      "Modern Management Practices in Tribal Context (2023)",
      "Leadership in Digital Age (2022)"
    ],
    achievements: [
      "Outstanding Lecturer 2023",
      "Best Research Paper 2022"
    ],
    bio: "Najeeb Ullah brings fresh perspectives to management education with his focus on modern organizational challenges in tribal contexts. His research on leadership styles has gained recognition in academic circles. He is passionate about developing future leaders and entrepreneurs through innovative teaching methods tailored to the cultural context of Ghallanai."
  }
];

// Helper functions
export const getFacultyBySlug = (slug: string): FacultyMember | undefined => {
  return facultyMembers.find(member => member.slug === slug);
};

export const getAllFacultySlugs = (): string[] => {
  return facultyMembers.map(member => member.slug);
};

export const getFacultyById = (id: number): FacultyMember | undefined => {
  return facultyMembers.find(member => member.id === id);
};