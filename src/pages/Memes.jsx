import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Memes = () => {
  const [memes, setMemes] = useState([null, null]);
  const [loading, setLoading] = useState(true);

  const fetchMemes = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all([
        fetch("https://meme-api.com/gimme"),
        fetch("https://meme-api.com/gimme"),
      ]);
      const data = await Promise.all(responses.map((res) => res.json()));
      setMemes([data[0].url, data[1].url]);
    } catch (error) {
      console.error("Failed to load memes:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">Double the Fun! 😂</h1>
        <p className="text-lg mb-6 text-center text-gray-300">
          Get two memes at once! Click the button to refresh and enjoy new laughs. 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <p className="text-lg font-semibold text-gray-400 col-span-2">Loading memes...</p>
          ) : (
            memes.map((meme, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 flex justify-center"
              >
                <img
                  src={meme}
                  alt={`Meme ${index + 1}`}
                  className="rounded-lg shadow-md w-80 h-auto"
                />
              </div>
            ))
          )}
        </div>

        <button
          onClick={fetchMemes}
          className="mt-6 bg-blue-600 text-white px-5 py-3 text-lg font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          New Memes 😂
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Memes;
