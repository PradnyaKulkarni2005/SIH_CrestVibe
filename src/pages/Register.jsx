// src/pages/Register.jsx
import AuthForm from "../components/auth/AuthForm";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm type="register" />
    </div>
  );
}
