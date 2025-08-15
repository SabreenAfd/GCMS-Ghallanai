// lib/faculty-data.ts

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
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683e82f253ff1.jpg",
    department: "English Department",
    email: "fawad.azeemi@gcmsmardan.edu.pk",
    phone: "+92-937-123456",
    office: "Room 205, Academic Block",
    experience: "15 Years",
    slug: "fawad-ali-azeemi",
    profileUrl: "/faculty/fawad-ali-azeemi",
    specialization: ["English Literature", "Creative Writing", "Literary Criticism"],
    education: [
      "M.A in English Literature - University of Peshawar (2008)",
      "B.A in English - Government College Mardan (2006)"
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
    bio: "Dr. Fawad Ali Azeemi is a distinguished educator with over 15 years of experience in English Literature. He has been instrumental in developing innovative teaching methodologies and has guided numerous students in their academic pursuits. His research focuses on modern literary analysis and the impact of digital media on traditional literature."
  },
  {
    id: 7,
    name: "Abdul Kabir",
    position: "Assistant Professor",
    qualification: "M.Com",
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683811458edd9.jpeg",
    department: "Commerce Department",
    email: "abdul.kabir@gcmsmardan.edu.pk",
    phone: "+92-937-123457",
    office: "Room 105, Commerce Block",
    experience: "8 Years",
    slug: "abdul-kabir",
    profileUrl: "/faculty/abdul-kabir",
    specialization: ["Financial Management", "Business Analytics", "Corporate Finance"],
    education: [
      "M.Com in Finance - University of Peshawar (2015)",
      "B.Com - Government College Mardan (2013)"
    ],
    courses: ["Financial Management", "Business Statistics", "Investment Analysis"],
    research: [
      "SME Financing in Pakistan",
      "Digital Banking Trends",
      "Financial Literacy in Rural Areas"
    ],
    publications: [
      "Small Business Finance Solutions (2023)",
      "Digital Transformation in Banking (2022)"
    ],
    achievements: [
      "Young Faculty Award 2023",
      "Research Excellence 2022"
    ],
    bio: "Abdul Kabir is a dedicated commerce educator focusing on practical applications of financial principles. His research in SME financing has contributed significantly to understanding business challenges in Pakistan. He specializes in helping students understand complex financial concepts through real-world applications."
  },
  {
    id: 4,
    name: "Najeeb Ullah",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    image: "https://www.gcmsmardan.edu.pk/uploads/faculty/683750d9dea3e.jpg",
    department: "Management Sciences",
    email: "najeeb.ullah@gcmsmardan.edu.pk",
    phone: "+92-937-123458",
    office: "Room 305, Management Block",
    experience: "5 Years",
    slug: "najeeb-ullah",
    profileUrl: "/faculty/najeeb-ullah",
    specialization: ["Strategic Management", "Organizational Behavior", "Project Management"],
    education: [
      "MS Management Sciences - Islamia College Peshawar (2019)",
      "BBA - Government College Mardan (2017)"
    ],
    courses: ["Strategic Management", "Leadership Skills", "Project Management"],
    research: [
      "Leadership Styles in Pakistani Organizations",
      "Employee Motivation in Public Sector",
      "Change Management Strategies"
    ],
    publications: [
      "Modern Management Practices (2023)",
      "Leadership in Digital Age (2022)"
    ],
    achievements: [
      "Outstanding Lecturer 2023",
      "Best Research Paper 2022"
    ],
    bio: "Najeeb Ullah brings fresh perspectives to management education with his focus on modern organizational challenges. His research on leadership styles has gained recognition in academic circles. He is passionate about developing future leaders and entrepreneurs through innovative teaching methods."
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