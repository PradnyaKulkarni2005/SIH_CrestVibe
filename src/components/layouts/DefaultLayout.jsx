// src/layouts/DefaultLayout.jsx
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Nav */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
