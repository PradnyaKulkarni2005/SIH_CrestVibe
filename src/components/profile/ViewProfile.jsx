import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { User, Briefcase, Award, BookOpen, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function ViewProfile({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="shadow-xl rounded-3xl bg-white border border-gray-100 p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Avatar & Basic Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-2 border-blue-100">
              <img
                src={profile.avatar || "https://i.pravatar.cc/150?img=47"}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-blue-600 font-medium">{profile.position}</p>
            <p className="text-gray-600">{profile.organization}</p>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-gray-600">{profile.phone}</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Achievements & Experience */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Achievements */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2">
                <Award className="text-yellow-500" /> Achievements
              </h3>
              <div className="p-4 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition-all">
                {profile.achievements}
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2">
                <Briefcase className="text-green-500" /> Experience
              </h3>
              <div className="p-4 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition-all">
                {profile.experience}
              </div>
            </div>

            {/* Research & Publications */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center gap-2">
                <BookOpen className="text-blue-500" /> Research & Publications
              </h3>
              <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all space-y-2">
                <p>{profile.research}</p>
                <p>{profile.publications}</p>
              </div>
            </div>

            {/* Donate Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Donate
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
