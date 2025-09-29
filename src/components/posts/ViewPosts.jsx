import { Card, CardContent } from "../ui/Card";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ViewPosts() {
  const demoPosts = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=47",
      title: "Exciting Career Opportunity 🚀",
      description:
        "Thrilled to share that I’ve started a new role as Product Manager at InnovateX. Looking forward to this amazing journey!",
      type: "career",
      image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg",
      timestamp: "2h ago",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=47",
      title: "Research Achievement 🧪",
      description:
        "Pleased to announce that our paper on AI in healthcare has been published in Nature Medicine. Huge thanks to my team!",
      type: "achievement",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1irtVAzD6t0cMqDIixCxTbZXam_o29AKNg&s",
      timestamp: "1d ago",
      likes: 35,
      comments: 12,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=47",
      title: "Team Milestone 🎉",
      description:
        "Proud of my team for successfully launching our new SaaS platform! The dedication and creativity has been inspiring.",
      type: "achievement",
      image: "https://talkmartech.com/uploads/2025/09/1757672925166-Brandjet.ai%20Launches%20New%20SaaS%20Platform%20for%20Improved%20Brand%20Intelligence.webp",
      timestamp: "3d ago",
      likes: 50,
      comments: 18,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      {demoPosts.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-md rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition transform">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 pt-6">
              <img
                src={p.avatar}
                alt={p.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  {p.name}
                </h4>
                <p className="text-gray-500 text-sm">{p.timestamp}</p>
              </div>
            </div>

            {/* Post Image with overlay */}
            <div className="relative mt-4 group">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-end p-4 rounded-lg">
                <span className="text-white text-sm font-medium bg-blue-600 px-2 py-1 rounded">
                  View Post
                </span>
              </div>
            </div>

            {/* Content */}
            <CardContent className="p-6 space-y-3">
              <span className="text-blue-600 text-sm font-medium capitalize">
                {p.type}
              </span>
              <h3 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.description}</p>
            </CardContent>

            {/* Footer Actions with counters */}
            <div className="flex justify-between px-6 py-3 text-gray-600 text-sm border-t">
              <button className="flex items-center gap-2 hover:text-blue-600 transition font-medium">
                <ThumbsUp size={18} /> {p.likes} Likes
              </button>
              <button className="flex items-center gap-2 hover:text-blue-600 transition font-medium">
                <MessageCircle size={18} /> {p.comments} Comments
              </button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
