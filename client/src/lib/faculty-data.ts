import najeebUllahImage from "@/assets/najeeb-ullah.jpg";
import abdulKabirImage from "@/assets/abdul-kabir.jpeg";
import fawadAliImage from "@/assets/fawad-ali.jpg";
import faculty4Image from "@/assets/faculty4.jpg";
import faculty5Image from "@/assets/faculty5.jpg";
import faculty6Image from "@/assets/faculty6.jpg";
import faculty7Image from "@/assets/faculty7.jpg";
import faculty8Image from "@/assets/faculty8.jpg";
import faculty9Image from "@/assets/faculty9.jpg";
import faculty10Image from "@/assets/faculty10.jpg";

export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  qualification: string;
  image: string;
  department: string;
  experience: string;
  specialization: string[];
  education: string[];
  bio: string;
  slug: string;
  profileUrl: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Muhammad Iqbal",
    position: "Associate Professor,Coordinator",
    qualification: "M.Com",
    image: fawadAliImage,
    department: "Commerce Department",
    experience: "11 Years",
   slug: "fawad-ali-azeemi",
   profileUrl: "/faculty/fawad-ali-azeemi",
    specialization: ["Commerce", "Business Studies", "Accounting"],
    education: ["M.Com - University of Peshawar"],
    bio: "Muhammad Iqbal is a dedicated educator with over 11 years of teaching and research experience in commerce and business studies."
  },
  {
    id: 2,
    name: "DR.Hidayat Ullah",
    position: "Assistant Professor, sport In-charge",
    qualification: "Phd Mathematics",
    image: abdulKabirImage,
  department: "Mathematics Department",
    experience: "8 Years",
    slug: "abdul-kabir",
    profileUrl: "/faculty/abdul-kabir",
    specialization: [
    "Financial Management",
    "Business Analytics",
    "Corporate Finance"
  ],
  education: ["PhD Mathematics - University of Peshawar"],
  bio: "Dr. Hidayat Ullah, with a PhD in Mathematics from the University of Peshawar, serves as an Assistant Professor in the Mathematics Department. With 8 years of academic experience, he specializes in financial management, business analytics, and corporate finance, applying his strong mathematical and analytical background to modern education."
},
  {
    id: 3,
    name: "Muhammad Farooq",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    image: najeebUllahImage,
    department: "Management Sciences",
    experience: "5 Years",
    slug: "najeeb-ullah",
    profileUrl: "/faculty/najeeb-ullah",
    specialization: ["Strategic Management", "Organizational Behavior", "Project Management"],
    education: ["MS Management Sciences - ICP (2019)"],
    bio: "Muhammad Farooq, a lecturer in Management Sciences with 5 years of teaching experience, specializes in strategic management, organizational behavior, and project management. He is dedicated to preparing students with the skills and knowledge needed to excel in modern organizational settings."
  },
  {
    id: 4,
    name: "Wahid Gul",
    position: "Assistant Professor",
    qualification: "M.sc in Mathematics",
    image: faculty4Image,
    department: "Mathematics Department",
    experience: "18 Years",
    slug: "khalid-mehmood",
    profileUrl: "/faculty/khalid-mehmood",
    
  specialization: ["Applied Mathematics", "Algebra", "Mathematical Analysis"],
  education: ["M.Sc Mathematics - QAU (2010)"],
  bio: "Wahid Gul is an Assistant Professor in the Mathematics Department with expertise in applied mathematics, algebra, and mathematical analysis. He is committed to fostering analytical thinking and problem-solving skills among his students."
},
  {
    id: 6,
    name: "Asghar Ali",
    position: "Assistant Professor",
    qualification: "Master in commerce",
    image: faculty5Image,
    department: "Commerce Department",
    experience: "9 Years",
    slug: "asad-ullah",
    profileUrl: "/faculty/asad-ullah",
    specialization: ["Accounting", "Finance", "Business Management"],
  education: ["Master in Commerce - NUML (2015)"],
  bio: "Asghar Ali is an Assistant Professor in the Commerce Department with expertise in accounting, finance, and business management. He is dedicated to equipping students with practical knowledge and analytical skills for the corporate and financial sectors."
},
  {
    id: 8,
    name: "Anwar shah",
    position: "Lecturer",
    qualification: "MBA & Msc Economics",
    image: faculty8Image,
    department: "Commerce Department",
    experience: "20 Years",
    slug: "shahid-iqbal",
    profileUrl: "/faculty/shahid-iqbal",
    specialization: ["Education", "Curriculum Development"],
    education: ["PhD Education - University of Punjab (2009)"],
    bio: "Dr. Shahid Iqbal has contributed significantly to education reforms."
  },
  {
    id: 10,
    name: "Altaf Hussain",
    position: "Assistant Professor",
    qualification: "Master of Computer Science",
    image: faculty10Image,
    department: "Management Sciences",
    experience: "7 Years",
    slug: "zeeshan-haider",
    profileUrl: "/faculty/zeeshan-haider",
    specialization: ["HR Management", "Organizational Studies"],
    education: ["MSC computer science"],
    bio: "Dr. Zeeshan Haider specializes in Human Resource Management and serves as Co-ordinator at DIT, contributing to academic development and organizational growth."
  }
];

// Helper function
export const getFacultyBySlug = (slug: string): FacultyMember | undefined =>
  facultyMembers.find(m => m.slug === slug);

