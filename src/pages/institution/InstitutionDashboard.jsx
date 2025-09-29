import { useState } from "react";
import {
  Calendar,
  Users,
  Award,
  BarChart2,
  Bell,
  CheckCircle2,
  PlusCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InstitutionDashboard() {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview", icon: BarChart2 },
    { key: "alumni", label: "Alumni", icon: Users },
    { key: "events", label: "Events", icon: Calendar },
    { key: "leaderboard", label: "Leaderboard", icon: Award },
    { key: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-6 text-2xl font-extrabold text-blue-700 border-b">
          Institute
        </div>
        <nav className="flex flex-col gap-1 px-3 mt-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${
                tab === t.key
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              <t.icon className="w-5 h-5" /> {t.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {tab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Overview />
            </motion.div>
          )}
          {tab === "alumni" && (
            <motion.div
              key="alumni"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Alumni />
            </motion.div>
          )}
          {tab === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Events />
            </motion.div>
          )}
          {tab === "leaderboard" && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Leaderboard />
            </motion.div>
          )}
          {tab === "notifications" && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Notifications />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

/* --------- Tab Components --------- */

function Overview() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Alumni" value="120" />
        <StatCard title="Events Hosted" value="15" />
        <StatCard title="Active Students" value="230" />
      </div>
    </div>
  );
}

function Alumni() {
  const alumni = [
    { id: 1, name: "John Doe", verified: false },
    { id: 2, name: "Jane Smith", verified: true },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Alumni</h2>
      <div className="space-y-4">
        {alumni.map((a) => (
          <motion.div
            key={a.id}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between bg-white rounded-xl shadow-md p-5 border hover:border-blue-300 transition"
          >
            <span className="font-medium text-gray-700">{a.name}</span>
            {a.verified ? (
              <span className="flex items-center gap-1 text-blue-600 font-medium">
                <CheckCircle2 className="w-5 h-5" /> Verified
              </span>
            ) : (
              <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Verify
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Events() {
  const events = [
    { title: "Annual Alumni Meet", date: "Oct 10, 2025", mode: "Hybrid" },
    { title: "Tech Talk: AI in 2025", date: "Nov 5, 2025", mode: "Online" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>
      <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition mb-6">
        <PlusCircle className="w-5 h-5" /> Create Event
      </button>
      <div className="grid gap-4">
        {events.map((ev, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-5 rounded-xl shadow-md border hover:border-blue-300 transition"
          >
            <h3 className="font-semibold text-lg text-gray-800">{ev.title}</h3>
            <p className="text-sm text-gray-500">{ev.date}</p>
            <p className="text-gray-600">{ev.mode}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Leaderboard() {
  const leaderboard = [
    { name: "Jane Smith", badges: 5 },
    { name: "John Doe", badges: 3 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Leaderboard</h2>
      <div className="bg-white rounded-xl shadow-md divide-y border">
        {leaderboard.map((l, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 5 }}
            className="flex justify-between px-6 py-4 hover:bg-blue-50 transition"
          >
            <span className="text-gray-700 font-medium">
              {i + 1}. {l.name}
            </span>
            <span className="font-semibold text-blue-600">{l.badges} Badges</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Notifications() {
  const notifications = [
    { id: 1, message: "New event posted: Annual Alumni Meet", read: false },
    { id: 2, message: "John Doe verified as Alumni", read: true },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-xl shadow-md border transition ${
              n.read
                ? "bg-gray-50 border-gray-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <p className="text-gray-700">{n.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* --------- Reusable Stat Card --------- */
function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-md border hover:border-blue-300 transition"
    >
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold text-blue-700">{value}</p>
    </motion.div>
  );
}
