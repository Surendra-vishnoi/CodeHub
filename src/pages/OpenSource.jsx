import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const projects = [
  {
    name: "⚛️ React",
    description:
      "React is a JavaScript library for building user interfaces. Developed by Meta, it has a massive open source community and is widely used for creating dynamic and interactive web apps.",
    points: [
      "♻️ Reusable components",
      "⚡ Efficient virtual DOM rendering",
      "🌍 Strong community and ecosystem",
      "🧰 Great developer tools",
    ],
    link: "https://reactjs.org",
    buttonText: "Explore React Docs",
  },
  {
    name: "🔲 Next.js",
    description:
      "Next.js is a React framework by Vercel that enables server-side rendering and static site generation for React apps. It’s ideal for building fast, SEO-friendly websites.",
    points: [
      "📦 Built-in routing and SSR",
      "🚀 Automatic code splitting",
      "📄 Static generation support",
      "⚙️ Great performance out of the box",
    ],
    link: "https://nextjs.org",
    buttonText: "Explore Next.js",
  },
  {
    name: "🧠 TensorFlow",
    description:
      "TensorFlow is an open-source machine learning framework developed by Google. It provides a comprehensive ecosystem of tools, libraries, and community resources.",
    points: [
      "📊 Deep learning & ML tools",
      "📦 Pre-trained models",
      "🛠️ Flexible & scalable APIs",
      "🌐 Community-driven development",
    ],
    link: "https://www.tensorflow.org/",
    buttonText: "Explore TensorFlow",
  },
  {
    name: "🧑‍💻 VS Code",
    description:
      "Visual Studio Code is a lightweight, fast, and highly customizable source-code editor developed by Microsoft. It supports tons of extensions for every language.",
    points: [
      "⚙️ Powerful IntelliSense",
      "🧩 Huge extension ecosystem",
      "🎯 Debugging built-in",
      "🚀 Live share & Git integration",
    ],
    link: "https://code.visualstudio.com/",
    buttonText: "Explore VS Code",
  },
];

const OpenSource = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen px-6 py-10 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
          🌐 Open Source Project Spotlight
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-blue-500 shadow-xl hover:shadow-blue-600 transition"
            >
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <ul className="list-disc list-inside text-gray-300 ml-2 space-y-1 mb-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold transition"
              >
                🔗 {project.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenSource;
