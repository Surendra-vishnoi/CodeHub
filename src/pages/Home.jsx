import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Navbar from "../components/NavBar";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Carousel Section - Centered */}
      <div className="flex justify-center items-center bg-black py-6">
        <Carousel />
      </div>
      <Helmet>
      <title>Welcome to CodeHub </title>
      <meta name="description" content="Get to know the minds behind CodeHub." />
    </Helmet>

      <main className="flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl w-full">

          {/* Introduction */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-400 drop-shadow">
              Your Coding Journey Starts Here 🚀
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Dive into a world of coding resources, tools, and challenges. We’ve integrated multiple APIs to boost your skills.
            </p>
          </section>

          {/* API Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Explore Our APIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { to: "/codeforces", title: "Codeforces Stats", desc: "Track your Codeforces progress and performance." },
                { to: "/github", title: "GitHub Projects", desc: "Discover and explore GitHub repositories." },
                { to: "/memes", title: "Meme Stream", desc: "Enjoy memes that blend tech, life, and laughter." },
                { to: "/randomdata", title: "Random JSON Data", desc: "Explore random JSON data for testing and learning." },
                { to: "/books", title: "Coding Books", desc: "Find recommended books to enhance your skills." }
              ].map((item, i) => (
                <Link key={i} to={item.to} className="bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:shadow-md hover:shadow-purple-500/30 transition">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Coding Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Coding Insights & Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { to: "/algorithm", title: "Algorithm of the Week", desc: "Learn about the Binary Search algorithm and its implementation." },
                { to: "/tips", title: "Coding Tip/Trick", desc: "Use VS Code's multi-cursor feature for faster editing." },
                { to: "/opensource", title: "Open Source Project Spotlight", desc: "Explore the React framework and its ecosystem." }
              ].map((item, i) => (
                <Link key={i} to={item.to} className="bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:shadow-md hover:shadow-pink-500/30 transition">
                  <h3 className="text-xl font-semibold text-pink-300 mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Today's Coding Question */}
          <section className="text-center mt-12">
            <Link
              to="/dailyquestion"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-xl transition shadow-md shadow-green-400/30 hover:shadow-green-300/50"
            >
              💻 Today's Coding Question
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
