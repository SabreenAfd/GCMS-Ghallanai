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
    qualification: "MS in Finance & Accounting",
    image: fawadAliImage,
    department: "Commerce Department",
    experience: "11 Years",
    slug: "muhammad-iqbal",
    profileUrl: "/faculty/muhammad-iqbal",
    specialization: ["Commerce", "Business Studies", "Accounting"],
    education: ["MS in Finance & Accounting -  NUML University"],
    bio: "Muhammad Iqbal is an Associate Professor and Coordinator in the Commerce Department with over 11 years of teaching and research experience. He holds an MS in Finance & Accounting from NUML University and specializes in Commerce, Business Studies, and Accounting, fostering academic excellence and student development."
  },
  {
    id: 2,
    name: "Dr.Hidayat Ullah",
    position:  " Lecture/Controllor of Examinations/Cordinator FSc CS",
    qualification: "PhD Mathematics",
    image: abdulKabirImage,
    department: "Mathematics Department",
    experience: "8 Years",
    slug: "hidayat-ullah",
    profileUrl: "/faculty/hidayat-ullah",
    specialization: ["Pure Mathematics"],
    education: ["PhD Mathematics - University of Peshawar"],
    bio: "Dr. Hidayat Ullah is an Lecturer and Sport In-charge in the Mathematics Department. With a PhD in Mathematics from the University of Peshawar and 8 years of experience, he specializes in Pure Mathematics and is dedicated to mentoring students and advancing academic excellence. He have published "
  },
  {
    id: 3,
    name: "Muhammad Farooq",
    position: "Lecturer /Incharge - Biometric & MIS ",
    qualification: "MS Management Sciences",
    image: najeebUllahImage,
    department: "Management Sciences",
    experience: "5 Years",
    slug: "muhammad-farooq",
    profileUrl: "/faculty/muhammad-farooq",
    specialization: ["Strategic Management", "Organizational Behavior", "Project Management"],
    education: ["MS Management Sciences"],
    bio: "Muhammad Farooq is a Lecturer / Incharge - Biometric & MIS in Management Sciences with 2 years of teaching experience and he has 2 years experience of Independent Monitoring Unit Education department. Holding an MS in Management Sciences, he focuses on Strategic Management, Organizational Behavior, and Project Management, emphasizing practical learning and leadership development."
  },
  {
    id: 4,
    name: "Wahid Gul",
    position: "Assistant Professor",
    qualification: "M.Sc in Mathematics",
    image: faculty4Image,
    department: "Mathematics Department",
    experience: "13 Years",
    slug: "wahid-gul",
    profileUrl: "/faculty/wahid-gul",
    specialization: ["Applied Mathematics", "Algebra", "Mathematical Analysis"],
    education: ["M.Sc Mathematics"],
    bio: "Wahid Gul is an Assistant Professor in the Mathematics Department with 13 years of academic experience. He holds an M.Sc in Mathematics and specializes in Applied Mathematics, Algebra, and Mathematical Analysis, guiding students to achieve excellence in mathematical studies."
  },
  {
    id: 6,
    name: "Saz Wali Khan",
    position: "Assistant Professor",
    qualification: "Master in Commerce",
    image: faculty5Image,
    department: "Commerce Department",
    experience: "18 Years",
    slug: "saz-wali-khan",
    profileUrl: "/faculty/saz-wali-khan",
    specialization: ["Accounting", "Finance", "Business Management"],
    education: ["Master in Commerce"],
    bio: "Saz Wali Khan serves as an Assistant Professor in the Commerce Department with 18 years of teaching experience. Holding a Master in Commerce, he specializes in Accounting, Finance, and Business Management, focusing on developing students’ professional skills and analytical thinking."
  },
  {
    id: 8,
    name: "Anwar Shah",
    position: "Lecturer/Chief Proctor/Co-Ordinator D.Com",
    qualification: "MBA & M.Sc Economics",
    image: faculty8Image,
    department: "Commerce Department",
    experience: "2 Years",
    slug: "anwar-shah",
    profileUrl: "/faculty/anwar-shah",
    specialization: ["Education", "Curriculum Development"],
    education: ["PhD Education"],
    bio: "Anwar Shah is a Lecturer in the Commerce Department with over 2 years of experience. He holds an MBA and M.Sc in Economics and specializes in Education and Curriculum Development, making significant contributions to education reforms and innovative learning programs."
  },
  {
    id: 10,
    name: "Altaf Hussain",
    position: "Assistant Professor",
    qualification: "Master of Computer Science",
    image: faculty10Image,
    department: "Management Sciences",
    experience: "17 Years",
    slug: "altaf-hussain",
    profileUrl: "/faculty/altaf-hussain",
    specialization: ["HR Management", "Organizational Studies"],
    education: ["MSC Computer Science"],
    bio: "Altaf Hussain is an Assistant Professor Sciences and serves as Co-ordinator of Computer Science . With 17 years of experience, he holds an MSc in Computer Science and specializes in Human Resource Management and Organizational Studies, focusing on mentoring students and fostering a dynamic learning environment."
  }


];


// Helper function
export const getFacultyBySlug = (slug: string): FacultyMember | undefined =>
  facultyMembers.find(m => m.slug === slug);

