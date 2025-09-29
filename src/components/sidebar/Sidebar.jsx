import { User, Plus, Eye, Bell, MessageCircle, CreditCard } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "profile", label: "Create Profile", icon: User },
    { key: "post", label: "Add Post", icon: Plus },
    { key: "viewPosts", label: "View Your Posts", icon: Eye },
    { key: "viewProfile", label: "View Profile", icon: User },
    { key: "notifications", label: "Notifications", icon: Bell },
    { key: "messages", label: "Messaging", icon: MessageCircle },
    { key: "donate", label: "Donate", icon: CreditCard },
  ];

  return (
    <aside className="w-72 bg-white shadow-lg p-6 flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Alumni Dashboard</h2>
      {tabs.map(tab => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white shadow-lg"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <Icon size={18} /> {tab.label}
          </button>
        );
      })}
    </aside>
  );
}
