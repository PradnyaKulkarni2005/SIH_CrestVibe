import { motion } from "framer-motion";
import { X } from "lucide-react";
import ViewProfile from "./ViewProfile";

export default function ProfileModal({ isOpen, onClose, profile }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Alumni Profile */}
        <div className="p-6 md:p-10">
          <ViewProfile profile={profile} />
        </div>
      </motion.div>
    </motion.div>
  );
}
