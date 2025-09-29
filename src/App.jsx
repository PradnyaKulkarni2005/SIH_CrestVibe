import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import Register from "./pages/Register";
import AlumniDashboard from "./pages/alumni/AlumniDashboard";
import InstitutionDashboard from "./pages/institution/InstitutionDashboard";
import EventsPage from "./pages/EventsPage";
import StudentDashboard from "./pages/student/StudentDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alumni" element={<AlumniDashboard />} />
        <Route path="/institutions" element={<InstitutionDashboard />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/students" element={<StudentDashboard />} />

      </Routes>
    </Router>
  );
}
