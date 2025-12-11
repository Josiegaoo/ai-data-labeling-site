"use client";

import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]!);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="w-full relative">
      {/* Continuous background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#FFE5CC] via-[#FFD6E8] to-[#FFF7C2] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,150,0.2),transparent_50%)] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,220,180,0.15),transparent_50%)] pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl md:text-6xl animate-wave">👋</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Josie Gao
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            A dreamer, and a practitioner
          </p>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={(el) => { sectionRefs.current["about-title"] = el; }}
            className={`text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 transition-all duration-1000 ${
              isVisible["about-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            <div 
              ref={(el) => { sectionRefs.current["about-text"] = el; }}
              className={`md:col-span-2 transition-all duration-1000 delay-200 ${
                isVisible["about-text"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-300">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  For three years, I worked in workflow management and
                  operations in Shanghai. Driven by curiosity and a desire to
                  broaden my horizons, I pursued my Master's degree and later spent a year
                  in London as an industry research expert. I look back with
                  gratitude for every challenge and transition, and I look
                  forward with the same courage that brought me here.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  The life behind me has shaped who I am, but it does not limit
                  who I can become. I am still growing, learning, questioning,
                  and imagining, and with every step I paint a new stroke on
                  the canvas of my own story.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Today I am shaping my own ideas into form, nurturing projects
                  from a single spark into something real. I hope these
                  prototypes will someday step into the world with purpose,
                  carrying value, impact, and a little bit of the wonder that
                  created them.
                </p>
              </div>
            </div>

            <div className="md:col-span-1 space-y-4">
              {[
                {
                  icon: "💡",
                  title: "Creator",
                  description:
                    "Passionate about exploring ideas, building prototypes, and creating products that bring value to society.",
                },
                {
                  icon: "🎯",
                  title: "Practitioner",
                  description:
                    "Growing through action, enjoying the process of building from zero to one and turning ideas into reality.",
                },
                {
                  icon: "⭐",
                  title: "Differentiator",
                  description:
                    "Embracing what makes me different and seeing my uniqueness as a way to connect with the world.",
                },
                {
                  icon: "📖",
                  title: "Learner",
                  description:
                    "Learning with intention, staying true to curiosity, and growing with clarity amid the noise.",
                },
              ].map((trait, idx) => (
                <div
                  key={idx}
                  ref={(el) => { sectionRefs.current[`trait-${idx}`] = el; }}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm flex gap-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${
                    isVisible[`trait-${idx}`] 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      {trait.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={(el) => { sectionRefs.current["skills-title"] = el; }}
            className={`text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 transition-all duration-1000 ${
              isVisible["skills-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Skills & Expertise
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 rounded"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Tools Card - Emphasized */}
            <div 
              ref={(el) => { sectionRefs.current["tools-card"] = el; }}
              className={`mb-8 transition-all duration-1000 ${
                isVisible["tools-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-pink-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                    🔧
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-2xl">Tools</h3>
                    <p className="text-sm text-gray-600">Build Prototype from 0 to 1</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Cursor", "Github", "Vercel", "Statsig"].map(
                    (tool, idx) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-semibold text-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-pink-200"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Other Skills Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Technical Card */}
              <div
                ref={(el) => { sectionRefs.current["technical-card"] = el; }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  isVisible["technical-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    &lt;/&gt;
                  </div>
                  <h3 className="font-bold text-gray-800">Technical</h3>
                </div>
                <div className="space-y-4 mt-4">
                  {[
                    { skill: "SQL", level: 80 },
                    { skill: "Python", level: 20 },
                    { skill: "PowerBI", level: 90 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">{item.skill}</span>
                        <span className="text-sm text-gray-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-pink-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Card */}
              <div
                ref={(el) => { sectionRefs.current["research-card"] = el; }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  isVisible["research-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🔍
                  </div>
                  <h3 className="font-bold text-gray-800">Research</h3>
                </div>
                <ul className="space-y-2 mt-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>
                      Primary research: interviews, focus groups, surveys
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Secondary desktop research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Qualitative analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Quantitative analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Mixed-methods research</span>
                  </li>
                </ul>
              </div>

              {/* Professional Card */}
              <div
                ref={(el) => { sectionRefs.current["professional-card"] = el; }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  isVisible["professional-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <h3 className="font-bold text-gray-800">Professional</h3>
                </div>
                <ul className="space-y-2 mt-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Cross-functional collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Analytical problem solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Time & project management</span>
                  </li>
                </ul>
              </div>

              {/* Language Card */}
              <div
                ref={(el) => { sectionRefs.current["language-card"] = el; }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  isVisible["language-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🌐
                  </div>
                  <h3 className="font-bold text-gray-800">Language</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Chinese", "English", "Hindi"].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg text-sm text-gray-800"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={(el) => { sectionRefs.current["projects-title"] = el; }}
            className={`text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 transition-all duration-1000 ${
              isVisible["projects-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Featured Projects
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 rounded"></div>
          </div>

          <div className="max-w-6xl mx-auto relative min-h-[550px]">
            {[
              {
                icon: "⚡",
                title: "Daily Nudge",
                description:
                  "An app that offers gentle pushes toward better habits and new challenges, one day at a time.",
                position: "top-left",
              },
              {
                icon: "🌍",
                title: "Your Web, Your Story",
                description:
                  "Customised personal webpage that turns your identity, interests, and experiences into a visual narrative you can share with the world.",
                position: "top-right",
              },
              {
                icon: "📡",
                title: "Signal Over Noise",
                description:
                  "An app and web-based newsletter delivering focused updates on digital and AI tools for creators, with deeper trend insights for those who want more.",
                position: "bottom-left",
              },
              {
                icon: "🎙️",
                title: "Create & Evolve Podcast",
                description:
                  "A space for honest conversations about making, learning, and growing through the act of creation.",
                position: "bottom-right",
              },
            ].map((project, idx) => {
              const baseRotation = 
                project.position === "top-left" ? "-rotate-1" :
                project.position === "top-right" ? "rotate-1" :
                project.position === "bottom-left" ? "rotate-1" :
                "-rotate-1";
              
              return (
              <div
                key={idx}
                ref={(el) => { sectionRefs.current[`project-${idx}`] = el; }}
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 mb-6 md:mb-0 cursor-pointer ${
                  isVisible[`project-${idx}`] 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                } ${
                  project.position === "top-left"
                    ? "md:absolute md:top-0 md:left-0 md:w-[48%]"
                    : project.position === "top-right"
                    ? "md:absolute md:top-8 md:right-0 md:w-[48%]"
                    : project.position === "bottom-left"
                    ? "md:absolute md:bottom-16 md:left-4 md:w-[48%]"
                    : "md:absolute md:bottom-24 md:right-4 md:w-[48%]"
                } ${baseRotation}`}
                style={{ 
                  transitionDelay: `${idx * 150}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02) rotate(0deg)";
                }}
                onMouseLeave={(e) => {
                  const rotation = 
                    project.position === "top-left" ? "-1deg" :
                    project.position === "top-right" ? "1deg" :
                    project.position === "bottom-left" ? "1deg" :
                    "-1deg";
                  e.currentTarget.style.transform = `rotate(${rotation})`;
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <span className="text-gray-500 text-sm italic">
                    Coming soon
                  </span>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={(el) => { sectionRefs.current["contact-title"] = el; }}
            className={`text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 transition-all duration-1000 ${
              isVisible["contact-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get In Touch
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 rounded"></div>
          </div>
          <p 
            ref={(el) => { sectionRefs.current["contact-subtitle"] = el; }}
            className={`text-center text-gray-600 mb-12 transition-all duration-1000 delay-200 ${
              isVisible["contact-subtitle"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Have a project in mind? Let&apos;s create something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div
              ref={(el) => { sectionRefs.current["contact-info"] = el; }}
              className={`transition-all duration-1000 delay-300 ${
                isVisible["contact-info"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="font-bold text-gray-800 text-xl mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "ygao1841@gmail.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+44 7437935251",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "London, UK",
                  },
                ].map((contact, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <p className="text-sm text-gray-600">{contact.label}</p>
                      <p className="text-gray-800 font-medium">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-gray-700 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={(el) => { sectionRefs.current["contact-form"] = el; }}
              className={`transition-all duration-1000 delay-400 ${
                isVisible["contact-form"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-gray-800 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-gray-800 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-gray-800 resize-none transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 text-gray-800 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
