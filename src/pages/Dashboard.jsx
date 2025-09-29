import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const alumni = [
  { id: 1, name: "Amit Sharma", batch: "2018", job: "Software Engineer @ Infosys" },
  { id: 2, name: "Priya Kaur", batch: "2019", job: "Data Analyst @ TCS" },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <motion.h1
        className="text-3xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Alumni Dashboard
      </motion.h1>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((alum) => (
          <motion.div
            key={alum.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Link to={`/profile/${alum.id}`}>
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {alum.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">{alum.name}</h2>
                  <p className="text-gray-500">Batch: {alum.batch}</p>
                </div>
              </div>
              <p className="text-gray-600">{alum.job}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/events"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
        >
          Upcoming Events
        </Link>
        <Link
          to="/donation"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
        >
          Donate
        </Link>
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="mt-16 bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why This Matters</h2>
        <p className="text-gray-600 mb-4">
          Most institutions lack a centralized system for alumni management. This platform strengthens
          alumni engagement, provides mentorship opportunities, and enhances fundraising potential.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Centralized alumni database with career updates</li>
          <li>Networking, mentorship, and internship opportunities</li>
          <li>Secure donation tracking</li>
          <li>Engaging events and institutional updates</li>
        </ul>
      </motion.div>
    </div>
  );
}
