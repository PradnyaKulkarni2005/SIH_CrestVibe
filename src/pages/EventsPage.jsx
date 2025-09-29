import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meet 2025",
      date: "Oct 10, 2025",
      mode: "Hybrid",
      location: "Main Auditorium, XYZ Institute",
      attendees: 120,
      description:
        "Reconnect with old friends, meet new alumni, and celebrate our vibrant community with keynote talks and networking.",
    },
    {
      id: 2,
      title: "Tech Talk: Future of AI in 2025",
      date: "Nov 5, 2025",
      mode: "Online",
      location: "Zoom (link shared post RSVP)",
      attendees: 85,
      description:
        "Join industry leaders as they explore breakthroughs in AI, ethics in technology, and opportunities for students.",
    },
    {
      id: 3,
      title: "Career Mentorship Week",
      date: "Dec 2 - Dec 6, 2025",
      mode: "Offline",
      location: "Innovation Hall, XYZ Institute",
      attendees: 200,
      description:
        "A week-long event where alumni guide students with career opportunities, mock interviews, and resume reviews.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-10 text-center">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((ev, i) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-6 flex flex-col justify-between"
          >
            {/* Event Date Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-500 rounded-full">
                {ev.mode}
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <CalendarDays className="w-4 h-4 mr-1" />
                {ev.date}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{ev.title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{ev.description}</p>

            {/* Location + Attendees */}
            <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {ev.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" /> {ev.attendees}
              </div>
            </div>

            {/* RSVP Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-auto w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg font-medium shadow transition"
            >
              RSVP Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
