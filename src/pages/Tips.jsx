import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Tips = () => {
  const tips = [
    {
      title: "🖱 Multi-Cursor Editing",
      content: "Use Alt + Click in VS Code to place multiple cursors and edit faster.",
    },
    {
      title: "💬 Quick Comment",
      content: "Use Ctrl + / (Cmd + / on Mac) to quickly comment/uncomment selected code.",
    },
    {
      title: "🔁 Instant Rename",
      content: "Press F2 in VS Code to rename variables/functions instantly.",
    },
    {
      title: "⚡ Emmet Magic",
      content: "Type HTML snippets quickly using Emmet in VS Code (e.g., `.box>ul>li*3`).",
    },
  ];

  const extensions = [
    "Prettier - Code formatter",
    "ESLint - Linter for JavaScript",
    "Live Server - Instant reload",
    "GitLens - Supercharged Git",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 py-10 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          💡 Coding Tips & Tricks
        </h1>

        {/* Quote */}
        <div className="bg-gray-800 p-4 rounded-lg text-center mb-8 border border-gray-700 shadow-md">
          <p className="text-xl italic text-blue-300">
            “Code is like humor. When you have to explain it, it’s bad.” – Cory House
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{tip.title}</h2>
              <p className="text-gray-300">{tip.content}</p>
            </div>
          ))}
        </div>

        {/* Code Snippet Tip */}
        <div className="bg-gray-800 p-6 rounded-xl mb-10 border border-gray-700">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">🧠 Handy Code Snippet</h2>
          <pre className="bg-black text-green-300 p-4 rounded-lg overflow-auto text-sm">
{`// Swap two variables in JavaScript without temp
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5`}
          </pre>
        </div>

        {/* Extensions */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🧩 Must-Have VS Code Extensions</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            {extensions.map((ext, i) => (
              <li key={i}>{ext}</li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tips;
