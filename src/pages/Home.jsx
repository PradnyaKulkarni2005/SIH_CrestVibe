// src/pages/Home.jsx
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import {
  ArrowRight,
  Users,
  Building2,
  Star,
  MessageCircle,
  CalendarDays,
  Globe,
  HeartHandshake,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-wider mb-3">
              🚀 Connecting Alumni Worldwide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Your Alumni Network,{" "}
              <span className="text-orange-400">Reimagined</span>
            </h1>
            <p className="text-lg mb-6">
              NEXUS is your trusted platform for lifelong connections, mentorship,
              and opportunities. Grow together, wherever you are.
            </p>
            <div className="flex gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                Get Started Today <ArrowRight size={18} />
              </Button>
             <Button
  variant="outline"
  className="bg-white text-blue-800 px-6 py-3 rounded-xl"
>
  Explore NEXUS
</Button>

            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/474306176/photo/yale-university-graduation-ceremonies.jpg?s=612x612&w=0&k=20&c=W9yb72ka-iApvw-TO7QAmdPfS58KjLpyLFJwf_7Dr4o="
              alt="Alumni Networking"
              className="rounded-2xl shadow-lg"
            />
            {/* Floating Notifications */}
            <div className="absolute top-6 left-6 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
              <MessageCircle size={18} className="text-green-500" />
              <p className="text-sm font-medium">
                New Connection: Sarah joined
              </p>
            </div>
            <div className="absolute bottom-6 right-6 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
              <CalendarDays size={18} className="text-orange-500" />
              <p className="text-sm font-medium">
                Event Reminder: Alumni Meetup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Users size={32} className="mx-auto text-blue-700 mb-2" />
            <h3 className="text-2xl font-bold">20K+</h3>
            <p className="text-gray-600">Active Alumni</p>
          </div>
          <div>
            <Building2 size={32} className="mx-auto text-blue-700 mb-2" />
            <h3 className="text-2xl font-bold">700+</h3>
            <p className="text-gray-600">Institutions Connected</p>
          </div>
          <div>
            <Star size={32} className="mx-auto text-blue-700 mb-2" />
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose NEXUS Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose NEXUS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} className="text-blue-700" />,
                title: "Be Connected",
                desc: "Stay connected with your alumni in a single platform.",
              },
              {
                icon: <HeartHandshake size={32} className="text-blue-700" />,
                title: "Mentorship Opportunities",
                desc: "Find mentors and guide the next generation with structured programs.",
              },
              {
                icon: <GraduationCap size={32} className="text-blue-700" />,
                title: "Student-Alumni Connect",
                desc: "Bridge the gap between students and alumni for career growth.",
              },
              {
                icon: <Briefcase size={32} className="text-blue-700" />,
                title: "Career Boost",
                desc: "Leverage the community for job referrals, internships, and opportunities.",
              },
              {
                icon: <Star size={32} className="text-blue-700" />,
                title: "Celebrate Achievements",
                desc: "Highlight alumni successes and inspire through shared stories.",
              },
              {
                icon: <CalendarDays size={32} className="text-blue-700" />,
                title: "Events That Matter",
                desc: "Never miss reunions, networking events, and career fairs again.",
              },
            ].map((item, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Future of Alumni Engagement
        </h2>
        <p className="mb-8 text-lg">
          Join NEXUS today and unlock lifelong connections, mentorship, and
          opportunities.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl text-lg">
          Join Now
        </Button>
      </section>
    </DefaultLayout>
  );
}
