import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { User, Briefcase, Save } from "lucide-react";

export default function CreateProfile({ profile, setProfile }) {
  const handleChange = (field, value) =>
    setProfile(prev => ({ ...prev, [field]: value }));

  const inputClasses =
    "w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-white shadow-sm";

  return (
    <Card className="shadow-lg rounded-3xl bg-white border border-gray-100 hover:-translate-y-1 transform transition duration-300">
      <CardContent className="p-10 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Create / Update Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              value={profile.name}
              onChange={e => handleChange("name", e.target.value)}
              className={inputClasses}
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Position"
              value={profile.position}
              onChange={e => handleChange("position", e.target.value)}
              className={inputClasses}
            />
          </div>
          <input
            type="text"
            placeholder="Organization"
            value={profile.organization}
            onChange={e => handleChange("organization", e.target.value)}
            className={inputClasses}
          />
          <textarea
            placeholder="Achievements & Awards"
            value={profile.achievements}
            onChange={e => handleChange("achievements", e.target.value)}
            className={inputClasses + " resize-none h-24"}
          />
          <textarea
            placeholder="Experience"
            value={profile.experience}
            onChange={e => handleChange("experience", e.target.value)}
            className={inputClasses + " resize-none h-24"}
          />
          <textarea
            placeholder="Research"
            value={profile.research}
            onChange={e => handleChange("research", e.target.value)}
            className={inputClasses + " resize-none h-24"}
          />
          <textarea
            placeholder="Publications"
            value={profile.publications}
            onChange={e => handleChange("publications", e.target.value)}
            className={inputClasses + " resize-none h-24"}
          />
        </div>

        {/* Contact Info */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6">Contact Info</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={e => handleChange("email", e.target.value)}
            className={inputClasses}
          />
          <input
            type="text"
            placeholder="Phone"
            value={profile.phone}
            onChange={e => handleChange("phone", e.target.value)}
            className={inputClasses}
          />
          <input
            type="text"
            placeholder="LinkedIn Profile"
            value={profile.linkedin}
            onChange={e => handleChange("linkedin", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200">
            <Save size={20} /> Save Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
