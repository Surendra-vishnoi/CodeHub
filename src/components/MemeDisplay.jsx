import { useState, useEffect } from "react";
import { fetchMeme } from "../utils/memeAPI";

const MemeDisplay = () => {
  const [meme, setMeme] = useState(null);

  const loadMeme = async () => {
    const newMeme = await fetchMeme();
    setMeme(newMeme);
  };

  useEffect(() => {
    loadMeme();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Random Programming Meme</h2>
      {meme ? (
        <img src={meme.url} alt="Meme" className="rounded-lg w-full max-w-md" />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={loadMeme} className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Load New Meme
      </button>
    </div>
  );
};

export default MemeDisplay;
