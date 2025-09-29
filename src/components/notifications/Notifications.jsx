import { Card } from "../ui/Card";
import { Bell, CheckCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Notifications({ notifications }) {
  const demoNotifications = notifications?.length
    ? notifications
    : [
        { id: 1, message: "Your post has 5 new likes!", time: "2h ago", type: "like", unread: true },
        { id: 2, message: "David commented on your post.", time: "5h ago", type: "comment", unread: true },
        { id: 3, message: "Your profile was viewed 10 times today.", time: "1d ago", type: "info", unread: false },
      ];

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <CheckCircle className="text-green-500" size={20} />;
      case "comment":
        return <Bell className="text-blue-500" size={20} />;
      default:
        return <Info className="text-gray-400" size={20} />;
    }
  };

  return (
    <Card className="p-6 bg-white rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Bell className="text-blue-500" size={24} /> Notifications
      </h2>
      <ul className="space-y-3">
        {demoNotifications.map((n) => (
          <motion.li
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: n.id * 0.1 }}
            className={`p-3 flex items-center justify-between rounded-lg cursor-pointer border ${
              n.unread ? "border-blue-200 bg-blue-50" : "border-gray-100 bg-gray-50"
            } hover:shadow-md hover:bg-gray-100 transition-all duration-200`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                {getIcon(n.type)}
                {n.unread && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                )}
              </div>
              <span className="text-gray-700 font-medium">{n.message}</span>
            </div>
            <span className="text-gray-400 text-sm">{n.time}</span>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}
