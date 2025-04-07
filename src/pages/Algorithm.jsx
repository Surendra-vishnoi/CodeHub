import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Algorithm = () => {
  const algorithm = {
    title: "🔍 Binary Search",
    description:
      "Binary Search is an efficient algorithm for finding an item in a sorted list. It works by repeatedly dividing the search interval in half.",
    code: `// Binary Search in JavaScript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    example: {
      input: "Input: arr = [1, 3, 5, 7, 9], target = 7",
      output: "Output: 3 (7 is found at index 3)",
      explanation:
        "The array is sorted. Binary Search checks the middle value (5), then goes right (7), finds the target in just 2 steps!",
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-10 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{algorithm.title}</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl">{algorithm.description}</p>

        <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">💻 Code Implementation</h2>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              borderRadius: "1rem",
              padding: "1.5rem",
              fontSize: "0.9rem",
              background: "#1e1e1e",
            }}
          >
            {algorithm.code}
          </SyntaxHighlighter>
        </div>

        <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-2xl font-semibold text-green-300 mb-3">🧠 Real-World Example</h2>
          <p className="text-gray-300 mb-2">
            <strong className="text-white">📥 {algorithm.example.input}</strong>
          </p>
          <p className="text-gray-300 mb-2">
            <strong className="text-white">📤 {algorithm.example.output}</strong>
          </p>
          <p className="text-gray-400">{algorithm.example.explanation}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Algorithm;
