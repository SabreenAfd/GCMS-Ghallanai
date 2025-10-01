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
    position: "Associate Professor, Coordinator",
    qualification: "M.Com",
    image: fawadAliImage,
    department: "Commerce Department",
    experience: "11 Years",
    slug: "muhammad-iqbal",
    profileUrl: "/faculty/muhammad-iqbal",
    specialization: ["Commerce", "Business Studies", "Accounting"],
    education: ["M.Com - University of Peshawar"],
    bio: "Muhammad Iqbal is an Associate Professor and Coordinator in the Commerce Department with over 11 years of teaching and research experience. He holds an M.Com from the University of Peshawar and specializes in Commerce, Business Studies, and Accounting, fostering academic excellence and student development."
  },
  {
    id: 2,
    name: "DR.Hidayat Ullah",
    position: "Assistant Professor, Sport In-charge",
    qualification: "PhD Mathematics",
    image: abdulKabirImage,
    department: "Mathematics Department",
    experience: "8 Years",
    slug: "hidayat-ullah",
    profileUrl: "/faculty/hidayat-ullah",
    specialization: ["Financial Management", "Business Analytics", "Corporate Finance"],
    education: ["PhD Mathematics - University of Peshawar"],
    bio: "Dr. Hidayat Ullah is an Assistant Professor and Sport In-charge in the Mathematics Department. With a PhD in Mathematics from the University of Peshawar and 8 years of experience, he specializes in Financial Management, Business Analytics, and Corporate Finance, and is dedicated to mentoring students and advancing academic excellence."
  },
  {
    id: 3,
    name: "Muhammad Farooq",
    position: "Lecturer",
    qualification: "MS Management Sciences",
    image: najeebUllahImage,
    department: "Management Sciences",
    experience: "5 Years",
    slug: "muhammad-farooq",
    profileUrl: "/faculty/muhammad-farooq",
    specialization: ["Strategic Management", "Organizational Behavior", "Project Management"],
    education: ["MS Management Sciences"],
    bio: "Muhammad Farooq is a Lecturer in Management Sciences with 5 years of teaching experience. Holding an MS in Management Sciences, he focuses on Strategic Management, Organizational Behavior, and Project Management, emphasizing practical learning and leadership development."
  },
  {
    id: 4,
    name: "Wahid Gul",
    position: "Assistant Professor",
    qualification: "M.Sc in Mathematics",
    image: faculty4Image,
    department: "Mathematics Department",
    experience: "18 Years",
    slug: "wahid-gul",
    profileUrl: "/faculty/wahid-gul",
    specialization: ["Applied Mathematics", "Algebra", "Mathematical Analysis"],
    education: ["M.Sc Mathematics"],
    bio: "Wahid Gul is an Assistant Professor in the Mathematics Department with 18 years of academic experience. He holds an M.Sc in Mathematics and specializes in Applied Mathematics, Algebra, and Mathematical Analysis, guiding students to achieve excellence in mathematical studies."
  },
  {
    id: 6,
    name: "Asghar Ali",
    position: "Assistant Professor",
    qualification: "Master in Commerce",
    image: faculty5Image,
    department: "Commerce Department",
    experience: "9 Years",
    slug: "asghar-ali",
    profileUrl: "/faculty/asghar-ali",
    specialization: ["Accounting", "Finance", "Business Management"],
    education: ["Master in Commerce"],
    bio: "Asghar Ali serves as an Assistant Professor in the Commerce Department with 9 years of teaching experience. Holding a Master in Commerce, he specializes in Accounting, Finance, and Business Management, focusing on developing students’ professional skills and analytical thinking."
  },
  {
    id: 8,
    name: "Anwar Shah",
    position: "Lecturer",
    qualification: "MBA & M.Sc Economics",
    image: faculty8Image,
    department: "Commerce Department",
    experience: "20 Years",
    slug: "anwar-shah",
    profileUrl: "/faculty/anwar-shah",
    specialization: ["Education", "Curriculum Development"],
    education: ["PhD Education"],
    bio: "Anwar Shah is a Lecturer in the Commerce Department with over 20 years of experience. He holds an MBA and M.Sc in Economics and specializes in Education and Curriculum Development, making significant contributions to education reforms and innovative learning programs."
  },
  {
    id: 10,
    name: "Altaf Hussain",
    position: "Assistant Professor",
    qualification: "Master of Computer Science",
    image: faculty10Image,
    department: "Management Sciences",
    experience: "7 Years",
    slug: "altaf-hussain",
    profileUrl: "/faculty/altaf-hussain",
    specialization: ["HR Management", "Organizational Studies"],
    education: ["MSC Computer Science"],
    bio: "Altaf Hussain is an Assistant Professor in Management Sciences and serves as Co-ordinator at DIT. With 7 years of experience, he holds an MSc in Computer Science and specializes in Human Resource Management and Organizational Studies, focusing on mentoring students and fostering a dynamic learning environment."
  }


];


// Helper function
export const getFacultyBySlug = (slug: string): FacultyMember | undefined =>
  facultyMembers.find(m => m.slug === slug);

