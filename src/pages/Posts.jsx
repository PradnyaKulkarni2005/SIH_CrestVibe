import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegNewspaper } from "react-icons/fa";

const postsData = [
  {
    id: 1,
    title: "Annual Alumni Meetup",
    description: "Join us for the 2025 alumni gathering. Network and share experiences!",
    date: "2025-10-15",
    category: "Event",
  },
  {
    id: 2,
    title: "Mentorship Program Launch",
    description: "Our mentorship program connects students with experienced alumni.",
    date: "2025-11-05",
    category: "Program",
  },
];

export default function Posts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
          <FaRegNewspaper className="text-indigo-500" /> Latest Posts & Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {postsData.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03, boxShadow: "0px 25px 50px rgba(0,0,0,0.15)" }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Category Badge */}
              <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>

              {/* Date */}
              <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
                <FaCalendarAlt /> {post.date}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>

              {/* Description */}
              <p className="text-gray-600 mb-6">{post.description}</p>

              {/* Read More Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold px-5 py-2 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
