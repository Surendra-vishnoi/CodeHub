import { useState } from "react";
import { fetchUserInfo, fetchUserSubmissions, fetchUserRatingChanges } from "../utils/codeforcesAPI";

const CodeforcesProfile = () => {
  const [handle1, setHandle1] = useState("");
  const [handle2, setHandle2] = useState("");
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [submissions1, setSubmissions1] = useState([]);
  const [submissions2, setSubmissions2] = useState([]);
  const [ratingChanges1, setRatingChanges1] = useState([]);
  const [ratingChanges2, setRatingChanges2] = useState([]);
  const [totalSolved1, setTotalSolved1] = useState(0);
  const [totalSolved2, setTotalSolved2] = useState(0);

  const fetchData = async (handle, setUser, setSubmissions, setRatingChanges, setTotalSolved) => {
    const userData = await fetchUserInfo(handle);
    const userSubs = await fetchUserSubmissions(handle);
    const userRatings = await fetchUserRatingChanges(handle);

    setUser(userData);
    setSubmissions(userSubs.slice(0, 5)); // Show last 5 submissions
    setRatingChanges(userRatings.slice(-5)); // Show last 5 rating changes

    // Calculate unique solved problems
    const solvedProblems = new Set(
      userSubs.filter(sub => sub.verdict === "OK").map(sub => sub.problem.name)
    );
    setTotalSolved(solvedProblems.size);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-900 text-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Codeforces Profile Comparison</h2>

      {/* Input Fields for Users */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter first CF handle"
            value={handle1}
            onChange={(e) => setHandle1(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
          <button 
            onClick={() => fetchData(handle1, setUser1, setSubmissions1, setRatingChanges1, setTotalSolved1)} 
            className="bg-blue-600 px-4 py-2 rounded w-full mt-2 hover:bg-blue-700"
          >
            Fetch User 1
          </button>
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter second CF handle"
            value={handle2}
            onChange={(e) => setHandle2(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
          <button 
            onClick={() => fetchData(handle2, setUser2, setSubmissions2, setRatingChanges2, setTotalSolved2)} 
            className="bg-green-600 px-4 py-2 rounded w-full mt-2 hover:bg-green-700"
          >
            Fetch User 2
          </button>
        </div>
      </div>

      {/* Display User Info */}
      <div className="flex flex-col md:flex-row gap-4">
        {user1 && (
          <div className="flex-1 bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{user1.handle}</h3>
            <p>Rank: {user1.rank}</p>
            <p>Rating: {user1.rating}</p>
            <p>Max Rating: {user1.maxRating}</p>
            <p className="text-green-400">Total Problems Solved: {totalSolved1}</p>
          </div>
        )}

        {user2 && (
          <div className="flex-1 bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{user2.handle}</h3>
            <p>Rank: {user2.rank}</p>
            <p>Rating: {user2.rating}</p>
            <p>Max Rating: {user2.maxRating}</p>
            <p className="text-green-400">Total Problems Solved: {totalSolved2}</p>
          </div>
        )}
      </div>

      {/* Comparison Results */}
      {user1 && user2 && (
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold">Comparison Result:</h3>
          <p className="mt-2">
            {user1.rating > user2.rating ? `${user1.handle} has a higher rating! 🎉` :
             user1.rating < user2.rating ? `${user2.handle} has a higher rating! 🎉` :
             "Both users have the same rating! 🔥"}
          </p>
          <p>
            {totalSolved1 > totalSolved2 ? `${user1.handle} has solved more problems! 💪` :
             totalSolved1 < totalSolved2 ? `${user2.handle} has solved more problems! 💪` :
             "Both have solved the same number of problems! ⚡"}
          </p>
        </div>
      )}

      {/* Display Recent Submissions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {submissions1.length > 0 && (
          <div className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{handle1}'s Recent Submissions:</h3>
            <ul className="space-y-2">
              {submissions1.map((sub, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <p>Problem: {sub.problem.name}</p>
                  <p>Verdict: {sub.verdict}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {submissions2.length > 0 && (
          <div className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{handle2}'s Recent Submissions:</h3>
            <ul className="space-y-2">
              {submissions2.map((sub, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <p>Problem: {sub.problem.name}</p>
                  <p>Verdict: {sub.verdict}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Display Recent Rating Changes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ratingChanges1.length > 0 && (
          <div className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{handle1}'s Recent Rating Changes:</h3>
            <ul className="space-y-2">
              {ratingChanges1.map((change, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <p>Contest: {change.contestName}</p>
                  <p>Old Rating: {change.oldRating}</p>
                  <p>New Rating: {change.newRating}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {ratingChanges2.length > 0 && (
          <div className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{handle2}'s Recent Rating Changes:</h3>
            <ul className="space-y-2">
              {ratingChanges2.map((change, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <p>Contest: {change.contestName}</p>
                  <p>Old Rating: {change.oldRating}</p>
                  <p>New Rating: {change.newRating}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeforcesProfile;
