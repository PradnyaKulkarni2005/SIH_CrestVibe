import { motion } from "framer-motion";
import { User, Star, BookOpen, Briefcase } from "lucide-react";

export default function StudentProfile() {
  const student = {
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=68",
    degree: "B.Tech Computer Science (2023)",
    skills: ["React", "Node.js", "Python", "AI"],
    about: "Passionate about building scalable software and exploring AI solutions.",
    projects: ["AI Chatbot", "E-learning Platform", "Data Visualization Tool"],
    internships: "Software Intern at ABC Corp (2022)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
            <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{student.name}</h2>
            <p className="text-blue-600 font-medium">{student.degree}</p>
            <p className="text-gray-600 max-w-xl">{student.about}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-3">
            <Star className="text-yellow-500" /> Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {student.skills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-3">
            <BookOpen className="text-green-500" /> Projects
          </h3>
          <ul className="space-y-2">
            {student.projects.map((p, i) => (
              <li
                key={i}
                className="p-4 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Internships */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-3">
            <Briefcase className="text-indigo-500" /> Internships
          </h3>
          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
            {student.internships}
          </div>
        </div>

        {/* Edit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Edit Profile
        </motion.button>
      </div>
    </motion.div>
  );
}
