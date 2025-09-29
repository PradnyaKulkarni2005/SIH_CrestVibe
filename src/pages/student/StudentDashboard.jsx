import { useState } from "react";
import { Users, User, MessageSquare, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileModal from "./ProfileModal";
import StudentProfile from "./StudentProfile";

export default function StudentDashboard() {
  const [tab, setTab] = useState("directory");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  const tabs = [
    { key: "directory", label: "Alumni Directory", icon: Users },
    { key: "matched", label: "Matched Alumni", icon: ClipboardList },
    { key: "profile", label: "My Profile", icon: User },
    { key: "chat", label: "Chat", icon: MessageSquare },
  ];

  const alumni = [
    {
      id: 1,
      name: "Dr. John Doe",
      position: "Senior Engineer",
      organization: "Google",
      email: "johndoe@gmail.com",
      phone: "+91-9876543210",
      linkedin: "https://linkedin.com/in/johndoe",
      avatar: "https://i.pravatar.cc/150?img=32",
      achievements: "Best Innovator 2022, IEEE Author",
      experience: "10+ years in Software Development",
      research: "AI in Healthcare, Cloud Computing",
      publications: "Published 15+ research papers",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Data Scientist",
      organization: "Microsoft",
      email: "jane@gmail.com",
      phone: "+91-9988776655",
      linkedin: "https://linkedin.com/in/janesmith",
      avatar: "https://i.pravatar.cc/150?img=47",
      achievements: "Top Women in Tech 2023",
      experience: "7+ years in Machine Learning",
      research: "Deep Learning, Predictive Analytics",
      publications: "Published 8+ papers in AI",
    },
  ];

  const openChat = (alum) => {
    setActiveChat(alum);
    setTab("chat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-6 text-2xl font-extrabold text-blue-700 border-b">
          Student Portal
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
          {tab === "directory" && (
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Alumni Directory
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((a) => (
                  <motion.div
                    key={a.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md p-6 border hover:border-blue-300 transition"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={a.avatar}
                        alt={a.name}
                        className="w-20 h-20 rounded-full shadow"
                      />
                      <h3 className="font-semibold text-lg text-gray-800">
                        {a.name}
                      </h3>
                      <p className="text-blue-600">{a.position}</p>
                      <p className="text-gray-500 text-sm">{a.organization}</p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => openChat(a)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                        >
                          Chat
                        </button>
                        <button
                          onClick={() => setSelectedProfile(a)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "matched" && (
            <motion.div
              key="matched"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Matched Alumni
              </h2>
              <div className="space-y-4">
                {alumni.map((a) => (
                  <motion.div
                    key={a.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-xl shadow-md p-6 border flex justify-between items-center hover:border-blue-300 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {a.name}
                      </h3>
                      <p className="text-blue-600">{a.position}</p>
                      <p className="text-gray-500 text-sm">{a.organization}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openChat(a)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        Chat
                      </button>
                      <button
                        onClick={() => setSelectedProfile(a)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition"
                      >
                        View Profile
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                My Profile
              </h2>
              <StudentProfile />
            </motion.div>
          )}

          {tab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Chat</h2>
              <div className="flex border rounded-xl overflow-hidden shadow-lg h-[600px]">
                {/* Sidebar with alumni list */}
                <div className="w-64 bg-gray-50 border-r overflow-y-auto">
                  {alumni.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setActiveChat(a)}
                      className={`flex items-center gap-3 w-full p-4 border-b hover:bg-blue-50 transition ${
                        activeChat?.id === a.id ? "bg-blue-100" : ""
                      }`}
                    >
                      <img
                        src={a.avatar}
                        alt={a.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-left">
                        <p className="font-medium text-gray-800">{a.name}</p>
                        <p className="text-sm text-gray-500">{a.position}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col">
                  {activeChat ? (
                    <>
                      <div className="p-4 border-b flex items-center gap-3 bg-white">
                        <img
                          src={activeChat.avatar}
                          alt={activeChat.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {activeChat.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {activeChat.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                        <div className="text-gray-500 text-center">
                          Start conversation with {activeChat.name}
                        </div>
                      </div>
                      <div className="p-4 border-t bg-white flex gap-2">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                          Send
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                      Select an alumni to start chatting
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <ProfileModal
            isOpen={!!selectedProfile}
            onClose={() => setSelectedProfile(null)}
            profile={selectedProfile}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
