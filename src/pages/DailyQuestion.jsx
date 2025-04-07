// src/pages/DailyQuestion.jsx
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import dayjs from "dayjs";

// Optional plugins for formatting (e.g. "Monday")
import weekday from "dayjs/plugin/weekday";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(weekday);
dayjs.extend(advancedFormat);

const DailyQuestion = () => {
  const [showHint, setShowHint] = useState(false);
  const [openSolutionIndex, setOpenSolutionIndex] = useState(null);

  const todayFormatted = dayjs().format("MMMM D, YYYY"); // e.g., April 7, 2025
  const todayTitle = `🧩 Today's Challenge - ${todayFormatted}`;

  const archiveQuestions = [
    {
      title: "Challenge - April 3, 2025",
      question: "Write a function to check if a string is a palindrome.",
      solution: `function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}`,
    },
    {
      title: "Challenge - April 2, 2025",
      question: "Find the largest number in an array.",
      solution: `function findMax(arr) {
  return Math.max(...arr);
}`,
    },
    {
      title: "Challenge - April 1, 2025",
      question: "Check if a number is prime.",
      solution: `function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
    },
    {
      title: "Challenge - March 31, 2025",
      question: "Reverse a linked list.",
      solution: `function reverseLinkedList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
    },
    {
      title: "Challenge - March 30, 2025",
      question: "Implement binary search on a sorted array.",
      solution: `function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen px-6 py-10 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
          🧠 Daily Coding Challenge
        </h1>

        {/* Today's Challenge */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold text-white">{todayTitle}</h2>
            <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
              Medium
            </span>
          </div>

          <p className="text-gray-300 mb-3 italic">
            Topic: Recursion, Dynamic Programming
          </p>

          <p className="text-gray-200 mb-4">
            Write a function that returns the Fibonacci number at the nth
            position. The Fibonacci sequence is a series where each number is
            the sum of the two preceding ones, starting from 0 and 1. For
            example, the first few numbers in the Fibonacci sequence are: 0, 1,
            1, 2, 3, 5, 8, 13, ...
            <br />
            Your function should be efficient for large values of n (up to
            10<sup>5</sup>).
          </p>

          <button
            onClick={() => setShowHint(!showHint)}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <p className="text-purple-300 mt-4">
              Hint: Use memoization or dynamic programming to avoid
              recalculating results.
            </p>
          )}
        </div>

        {/* Archive Section */}
        <h2 className="text-2xl font-semibold text-white mb-4">📚 Archive</h2>
        <div className="space-y-4">
          {archiveQuestions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl text-blue-400 font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-3">{item.question}</p>
              <button
                onClick={() =>
                  setOpenSolutionIndex(
                    openSolutionIndex === index ? null : index
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium"
              >
                {openSolutionIndex === index
                  ? "Hide Solution"
                  : "Show Solution"}
              </button>
              {openSolutionIndex === index && (
                <pre className="bg-black p-4 mt-3 rounded-lg overflow-x-auto text-green-300 text-sm">
                  {item.solution}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DailyQuestion;
