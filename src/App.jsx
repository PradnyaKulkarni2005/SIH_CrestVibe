import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import Register from "./pages/Register";
import AlumniDashboard from "./pages/alumni/AlumniDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alumni" element={<AlumniDashboard />} />
      </Routes>
    </Router>
  );
}
