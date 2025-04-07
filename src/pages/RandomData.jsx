import React, { useState } from "react";
import { fetchRandomData } from "../utils/fetchData";
import { FaDownload, FaCopy } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const RandomData = () => {
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(5);
  const [data, setData] = useState(null);

  const handleFetchData = async () => {
    const result = await fetchRandomData(category, count);
    setData(result);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "random_data.json";
    link.click();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main content will expand and push footer down */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-gray-800 bg-opacity-90 shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-4">
            Random Data Generator
          </h2>
          <p className="text-gray-200 text-center mb-6">
            Generate random data for testing and learning. Select a category, choose the amount of data, and retrieve your results!
          </p>

          {/* Category Selection */}
          <label className="block mb-2 text-gray-300">Select Data Type:</label>
          <select
            className="p-2 w-full rounded bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Choose an Option --</option>
            <option value="users">Users</option>
            <option value="posts">Posts</option>
            <option value="products">Products</option>
          </select>

          {/* Count Input */}
          {category && (
            <div className="mt-4">
              <label className="block mb-2 text-gray-300">Number of Entries:</label>
              <input
                type="number"
                className="p-2 w-full rounded bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                min="1"
                max="50"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
          )}

          {/* Fetch Data Button */}
          {category && (
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full transition"
              onClick={handleFetchData}
            >
              Generate Data
            </button>
          )}

          {/* Display Data */}
          {data && (
            <div className="mt-6 bg-gray-700 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-400">Generated Data:</h3>
              <pre className="text-gray-200 text-sm mt-2 p-2 bg-gray-800 rounded overflow-x-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
              
              {/* Buttons for Download & Copy */}
              <div className="flex justify-between mt-4">
                <button 
                  className="flex items-center bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  onClick={handleDownload}
                >
                  <FaDownload className="mr-2" /> Download
                </button>
                <button 
                  className="flex items-center bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  onClick={() => navigator.clipboard.writeText(JSON.stringify(data, null, 2))}
                >
                  <FaCopy className="mr-2" /> Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RandomData;
