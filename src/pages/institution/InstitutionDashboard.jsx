import { useState } from "react";
import {
  Calendar,
  Award,
  BarChart2,
  Bell,
  PlusCircle,
  Upload,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ======================= Main Dashboard ======================= */
export default function InstitutionDashboard() {
  const [tab, setTab] = useState("upload");

  const tabs = [
    { key: "upload", label: "Upload Alumni", icon: Upload },
    { key: "overview", label: "Overview", icon: BarChart2 },
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
          {tab === "upload" && (
            <motion.div key="upload" {...tabMotion}>
              <UploadAlumni />
            </motion.div>
          )}
          {tab === "overview" && (
            <motion.div key="overview" {...tabMotion}>
              <Overview />
            </motion.div>
          )}
          {tab === "events" && (
            <motion.div key="events" {...tabMotion}>
              <Events />
            </motion.div>
          )}
          {tab === "leaderboard" && (
            <motion.div key="leaderboard" {...tabMotion}>
              <Leaderboard />
            </motion.div>
          )}
          {tab === "notifications" && (
            <motion.div key="notifications" {...tabMotion}>
              <Notifications />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

const tabMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

/* ======================= Upload Alumni ======================= */
function UploadAlumni() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Upload Alumni Data
      </h2>
      <p className="text-gray-600 mb-8">
        Upload your alumni list in <span className="font-medium">CSV</span> or{" "}
        <span className="font-medium">Excel</span> format.
      </p>

      <motion.label
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer flex flex-col items-center gap-3 bg-blue-50 border-2 border-dashed border-blue-300 p-10 rounded-2xl shadow hover:shadow-lg transition"
      >
        <Upload className="w-10 h-10 text-blue-600" />
        <span className="text-blue-700 font-medium">
          Click to upload or drag & drop
        </span>
        <input type="file" accept=".csv, .xlsx" className="hidden" />
      </motion.label>
    </div>
  );
}

/* ======================= Overview ======================= */
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

/* ======================= Events ======================= */
function Events() {
  const [events, setEvents] = useState([
    {
      title: "Annual Alumni Meet",
      date: "Oct 10, 2025",
      mode: "Hybrid",
      details: "A grand meet-up of alumni and students.",
    },
    {
      title: "Tech Talk: AI in 2025",
      date: "Nov 5, 2025",
      mode: "Online",
      details: "Discussion on AI trends and future scope.",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    mode: "Offline",
    details: "",
  });

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", mode: "Offline", details: "" });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>

      {/* Create Event Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Create New Event
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />
          <select
            value={newEvent.mode}
            onChange={(e) => setNewEvent({ ...newEvent, mode: e.target.value })}
            className="border rounded-lg px-4 py-2"
          >
            <option>Offline</option>
            <option>Online</option>
            <option>Hybrid</option>
          </select>
          <input
            type="text"
            placeholder="Event Details"
            value={newEvent.details}
            onChange={(e) =>
              setNewEvent({ ...newEvent, details: e.target.value })
            }
            className="border rounded-lg px-4 py-2 col-span-2"
          />
        </div>
        <button
          onClick={addEvent}
          className="mt-4 flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          <PlusCircle className="w-5 h-5" /> Add Event
        </button>
      </div>

      {/* Events List */}
      <div className="grid gap-4">
        {events.map((ev, i) => (
          <motion.details
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-5 rounded-xl shadow-md border hover:border-blue-300 transition"
          >
            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
              {ev.title}{" "}
              <span className="ml-2 text-sm text-gray-500">({ev.mode})</span>
            </summary>
            <p className="mt-2 text-sm text-gray-600">📅 {ev.date}</p>
            <p className="mt-1 text-gray-500">{ev.details}</p>
          </motion.details>
        ))}
      </div>
    </div>
  );
}

/* ======================= Leaderboard ======================= */
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
            <span className="font-semibold text-blue-600">
              {l.badges} Badges
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ======================= Notifications ======================= */
function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Jane Smith donated $5000 for infrastructure upgrade",
      read: false,
    },
    {
      id: 2,
      message: "Library expansion funded by Alumni Batch of 2000",
      read: false,
    },
    {
      id: 3,
      message: "Scholarship program initiated by Alumni Council",
      read: true,
    },
  ]);

  const [newNote, setNewNote] = useState("");

  const addNotification = () => {
    if (!newNote) return;
    setNotifications([
      { id: notifications.length + 1, message: newNote, read: false },
      ...notifications,
    ]);
    setNewNote("");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h2>

      {/* Create Notification */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Create Notification
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter notification message"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            onClick={addNotification}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Notifications List */}
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

/* ======================= Reusable Stat Card ======================= */
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
