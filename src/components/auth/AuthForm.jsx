import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function AuthForm({ type }) {
  const [role, setRole] = useState("student");
  const isSignIn = type === "signin";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
        {isSignIn ? "Welcome Back 👋" : "Join NEXUS 🚀"}
      </h2>
      <p className="text-gray-500 text-center mb-8">
        {isSignIn
          ? "Sign in to continue building connections"
          : "Create your account to connect with your alumni network"}
      </p>

      <form className="space-y-5">
        {/* Registration-only fields */}
        {!isSignIn && (
          <>
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* Role Selection */}
            <div className="flex justify-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Student</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="alumni"
                  checked={role === "alumni"}
                  onChange={() => setRole("alumni")}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Alumni</span>
              </label>
            </div>

            {/* Common extra fields */}
            {["PRN", "College Name", "Year", "Batch"].map((field, i) => (
              <input
                key={i}
                type="text"
                placeholder={field}
                className="w-full px-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            ))}
          </>
        )}

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold transition shadow-md"
        >
          {isSignIn ? "Sign In" : "Register"}
        </button>
      </form>

      {/* Switch Links */}
      <p className="text-center text-sm text-gray-600 mt-6">
        {isSignIn ? (
          <>
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:underline font-medium"
            >
              Register
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-blue-700 hover:underline font-medium"
            >
              Sign In
            </a>
          </>
        )}
      </p>
    </motion.div>
  );
}
