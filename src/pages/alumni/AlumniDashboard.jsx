import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateProfile from "../../components/profile/CreateProfile";
import ViewProfile from "../../components/profile/ViewProfile";
import AddPost from "../../components/posts/AddPost";
import ViewPosts from "../../components/posts/ViewPosts";
import Notifications from "../../components/notifications/Notifications";
import Chat from "../../components/messages/Chat";
import DonateForm from "../../components/donations/DonateForm";

export default function AlumniDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    organization: "Acme Corp",
    position: "Senior Developer",
    achievements: "Best Innovator 2023",
    experience: "5 years in software development",
    research: "AI optimization and NLP",
    publications: "3 international papers",
    email: "sarahjohnson@example.com",
    phone: "+1 234 567 890",
    linkedin: "linkedin.com/in/sarah",
  });

  const [post, setPost] = useState({ type: "career", title: "", description: "" });
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "career",
      title: "Joined Google as Software Engineer",
      description:
        "Excited to start my new journey at Google as a Full Stack Engineer!",
      image: "https://source.unsplash.com/600x300/?office,tech",
      timestamp: "2 hours ago",
    },
  ]);

  const [notifications] = useState([
    { id: 1, message: "Sarah Johnson posted a new achievement.", time: "2h ago" },
    { id: 2, message: "Your profile has been verified.", time: "1d ago" },
  ]);

  const [messages] = useState([
    { id: 1, from: "Jane Smith", message: "Congrats on your new job!", time: "10m ago" },
    { id: 2, from: "You", message: "Thanks Jane! 😊", time: "8m ago" },
  ]);

  const handleAddPost = () => {
    const newPost = { ...post, id: Date.now(), timestamp: "Just now" };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-10 space-y-8">
        {activeTab === "profile" && (
          <CreateProfile profile={profile} setProfile={setProfile} />
        )}
        {activeTab === "viewProfile" && <ViewProfile profile={profile} />}
        {activeTab === "post" && (
          <AddPost post={post} setPost={setPost} onAdd={handleAddPost} />
        )}
        {activeTab === "viewPosts" && <ViewPosts posts={posts} />}
        {activeTab === "notifications" && (
          <Notifications notifications={notifications} />
        )}
        {activeTab === "messages" && <Chat messages={messages} />}
        {activeTab === "donate" && <DonateForm />}
      </main>
    </div>
  );
}
