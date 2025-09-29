import { Card } from "../ui/Card";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat({ messages }) {
  return (
    <Card className="p-4 bg-white rounded-3xl shadow-xl flex flex-col h-[500px]">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Chats</h2>

      <div className="flex-1 overflow-y-auto space-y-3 px-2">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-end gap-2 ${
                m.from === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {m.from !== "You" && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                  {m.from[0]}
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-xs shadow ${
                  m.from === "You"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                <p className="font-semibold mb-1">{m.from}</p>
                <p className="text-sm leading-relaxed">{m.message}</p>
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {m.time}
                </p>
              </div>
              {m.from === "You" && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white">
                  Y
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input box */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">
          Send
        </button>
      </div>
    </Card>
  );
}
