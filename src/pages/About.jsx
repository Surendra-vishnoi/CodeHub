import React from "react";
import Particle from "../components/Particle";
import surendraPic from "../assets/surendra.png";
import senkuPic from "../assets/senku.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen relative overflow-hidden">
      <Particle />
      <Navbar />
      <Helmet>
      <title>About </title>
      <meta name="description" content="Get to know the minds behind CodeHub." />
    </Helmet>

      <main className="container mx-auto px-6 py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          About This Site
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
          Built with passion, APIs, and a sprinkle of caffeine. <br />
          This site is your coding sidekick – packed with practice, memes, and motivation.
        </p>

        <div className="flex flex-col items-center mb-14">
          <img
            src={surendraPic}
            alt="Surendra Vishnoi"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_10px_#22d3ee] object-cover"
          />
          <h2 className="text-2xl font-bold mt-4 text-cyan-300">Surendra Vishnoi</h2>
          <p className="text-gray-400 max-w-xl mt-2 text-base">
            A passionate developer on a mission to make coding fun and accessible. Anime fan,
            API explorer, and a certified keyboard ninja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-16 px-4">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-pink-600">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Why I Built This 💡</h3>
            <p className="text-gray-300 text-sm">
              I wanted a one-stop space that’s not just about learning, but vibing with tech. A place where you
              don’t just code – you <strong>feel inspired</strong>, discover cool tools, laugh at memes,
              and level up daily. <br /> My dream? To turn every curious mind into a confident creator.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-blue-600">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Tech Stack & Tools 🔧</h3>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>React + Vite ⚡</li>
              <li>Tailwind CSS 🌈</li>
              <li>Codeforces & GitHub API ⚙️</li>
              <li>Book, Spotify & Meme APIs 📚🎧😂</li>
              <li>VS Code, Figma, Postman</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-yellow-500">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Random Fun Facts 🤓</h3>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>I debug with anime OSTs playing.</li>
              <li>I name my functions after anime moves sometimes.</li>
              <li>Favorite CSS color? `#0f0f0f` – sleek af.</li>
              <li>If it breaks, I meme it. Then fix it.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1f1f1f] to-[#2b2b2b] p-6 rounded-xl shadow-xl mb-16 border border-purple-500 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400 text-center">Developer Inspiration ✨</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src={senkuPic}
              alt="Senku"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_15px_#a855f7]"
            />
            <blockquote className="text-lg text-purple-300 italic max-w-md">
              “Get excited! This is exhilarating! It’s like we’re crafting the future with science!”
              <br />
              — Senku Ishigami, <span className="text-purple-400 font-medium italic">*Dr. Stone*</span>
            </blockquote>
          </div>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-bold mb-2 text-green-400">Wanna Say Hi? 👋</h3>
          <p className="text-gray-400 mb-4">
            Found a bug or just wanna vibe? Drop a "Hi!" – I might reply with a meme.
          </p>
          <a
            href="mailto:surendra@example.com"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            Say Hi
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
