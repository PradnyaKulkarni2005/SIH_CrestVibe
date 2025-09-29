import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaAward, 
  FaBriefcase, 
  FaBook, 
  FaUniversity, 
  FaRegNewspaper 
} from "react-icons/fa";

const profileData = {
  name: "Amit Sharma",
  organization: "Infosys",
  position: "Software Engineer",
  achievements: ["Employee of the Month 2022", "Best Innovation Award 2021"],
  experience: [
    { role: "Software Engineer", company: "Infosys", duration: "2018 - Present" },
    { role: "Intern", company: "TCS", duration: "2017 - 2018" },
  ],
  research: ["AI in Education", "Blockchain in Supply Chain"],
  publications: ["Paper 1: AI in EdTech", "Paper 2: Blockchain Applications"],
  contact: {
    email: "amit.sharma@example.com",
    phone: "+91 9876543210",
    linkedin: "https://linkedin.com/in/amit-sharma",
  },
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Gradient background accents */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>

        {/* Name and position */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{profileData.name}</h1>
          <p className="text-gray-600 text-lg mt-2">{profileData.position} @ {profileData.organization}</p>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <ContactIcon icon={<FaEnvelope />} value={profileData.contact.email} link={`mailto:${profileData.contact.email}`} />
          <ContactIcon icon={<FaPhone />} value={profileData.contact.phone} link={`tel:${profileData.contact.phone}`} />
          <ContactIcon icon={<FaLinkedin />} value="LinkedIn" link={profileData.contact.linkedin} />
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileSection title="Achievements & Awards" icon={<FaAward />}>
            {profileData.achievements.map((a, idx) => (
              <li key={idx} className="mb-1">{a}</li>
            ))}
          </ProfileSection>

          <ProfileSection title="Experience" icon={<FaBriefcase />}>
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-semibold">{exp.role} @ {exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            ))}
          </ProfileSection>

          <ProfileSection title="Research" icon={<FaUniversity />}>
            {profileData.research.map((r, idx) => (
              <li key={idx} className="mb-1">{r}</li>
            ))}
          </ProfileSection>

          <ProfileSection title="Publications" icon={<FaBook />}>
            {profileData.publications.map((p, idx) => (
              <li key={idx} className="mb-1">{p}</li>
            ))}
          </ProfileSection>
        </div>

        {/* Link to Posts Page */}
        <div className="text-center mt-10">
          <Link
            to="/posts"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold shadow transition-all duration-300"
          >
            <FaRegNewspaper /> View Posts
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// Reusable Contact Icon Component
function ContactIcon({ icon, value, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl shadow transition-all duration-300"
    >
      <span className="text-indigo-600">{icon}</span>
      <span className="text-gray-700 font-medium">{value}</span>
    </a>
  );
}

// Reusable Profile Section Component
function ProfileSection({ title, icon, children }) {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <span className="text-indigo-500">{icon}</span> {title}
      </h3>
      <ul className="list-disc list-inside text-gray-600">{children}</ul>
    </motion.div>
  );
}
