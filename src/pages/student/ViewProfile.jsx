import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  BookOpen,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

export default function ViewProfile({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* --- Left: Avatar & Basic Info --- */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
            <img
              src={profile.avatar || "https://i.pravatar.cc/150?img=47"}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-blue-600 font-medium">{profile.position}</p>
          <p className="text-gray-600">{profile.organization}</p>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 mt-3 text-gray-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" /> {profile.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" /> {profile.phone}
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* --- Right: Details --- */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Achievements */}
          <Section
            icon={<Award className="text-yellow-500" />}
            title="Achievements"
            content={profile.achievements || "No achievements listed."}
            bg="bg-yellow-50"
          />

          {/* Experience */}
          <Section
            icon={<Briefcase className="text-green-500" />}
            title="Experience"
            content={profile.experience || "No experience listed."}
            bg="bg-green-50"
          />

          {/* Research & Publications */}
          <Section
            icon={<BookOpen className="text-blue-500" />}
            title="Research & Publications"
            content={
              <>
                <p>{profile.research || "No research listed."}</p>
                <p>{profile.publications || "No publications listed."}</p>
              </>
            }
            bg="bg-blue-50"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* --- Reusable Section Component --- */
function Section({ icon, title, content, bg }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col gap-2 p-4 rounded-xl shadow-sm border ${bg}`}
    >
      <h3 className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
        {icon} {title}
      </h3>
      <div className="text-gray-700 leading-relaxed">{content}</div>
    </motion.div>
  );
}
