import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Plus, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function AddPost({ post, setPost, onAdd }) {
  const handleChange = (field, value) =>
    setPost(prev => ({ ...prev, [field]: value }));

  const inputClasses =
    "w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-white shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 peer";

  const labelClasses =
    "absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FileText className="text-blue-500" size={26} /> Add Post
        </h2>

        <div className="grid gap-6">
          {/* Title */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              value={post.title}
              onChange={e => handleChange("title", e.target.value)}
              className={inputClasses}
            />
            <label className={labelClasses}>Title</label>
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              placeholder=" "
              value={post.description}
              onChange={e => handleChange("description", e.target.value)}
              className={`${inputClasses} resize-none h-28`}
            />
            <label className={labelClasses}>Description</label>
          </div>

          {/* Type */}
          <div className="relative">
            <select
              value={post.type}
              onChange={e => handleChange("type", e.target.value)}
              className={`${inputClasses} appearance-none`}
            >
              <option value="career">Career</option>
              <option value="achievement">Achievement</option>
            </select>
            <label className={labelClasses}>Post Type</label>
          </div>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onAdd}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus size={18} /> Add Post
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
