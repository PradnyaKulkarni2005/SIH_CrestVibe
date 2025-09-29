// src/pages/SignIn.jsx
import AuthForm from "../components/auth/AuthForm";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm type="signin" />
    </div>
  );
}
