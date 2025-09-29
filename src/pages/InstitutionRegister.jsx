import { useState } from "react";
import { motion } from "framer-motion";

export default function InstitutionRegister() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    pincode: "",
    address: "",
    state: "",
    city: "",
    type: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Institution Data Submitted:", formData);
    // API call or backend integration goes here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-4xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Gradient Shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Register Your Institution
        </h2>
        <p className="text-gray-600 mb-10 text-center text-lg">
          Join our centralized alumni platform to manage your institution's alumni effectively.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid layout for inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InputField
              label="Institution Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ABC College"
              required
            />
            <InputField
              label="Institution Code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="INST1234"
              required
            />
            <InputField
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="123456"
              required
            />
            <InputField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="California"
              required
            />
            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Los Angeles"
              required
            />
            <SelectField
              label="Institution Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={["College", "University", "School"]}
              required
            />
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@institution.com"
              type="email"
              required
            />
            <InputField
              label="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="+1 123 456 7890"
              type="tel"
              required
            />
          </div>

          {/* Address textarea */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none shadow-sm"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Register Institution
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ label, name, value, onChange, placeholder, type = "text", required }) {
  return (
    <div className="relative">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition duration-300"
      />
    </div>
  );
}

// Reusable Select Field Component
function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div className="relative">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition duration-300"
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
