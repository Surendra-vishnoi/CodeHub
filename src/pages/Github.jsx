import { useState } from "react";
import { fetchGitHubUser, fetchUserRepos } from "../utils/githubAPI";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const GithubProfile = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchData = async () => {
    const userData = await fetchGitHubUser(username);
    const userRepos = await fetchUserRepos(username);
    setUserInfo(userData);
    setRepos(userRepos);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-xl w-full bg-gray-800 text-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-400">GitHub Profile</h2>

          {/* Input field */}
          <input 
            type="text" 
            placeholder="Enter GitHub username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={fetchData} 
            className="bg-blue-600 px-4 py-2 rounded w-full hover:bg-blue-700 transition"
          >
            Fetch Profile
          </button>

          {userInfo && (
            <div className="mt-4 text-center">
              <img src={userInfo.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto shadow-lg" />
              <h3 className="text-lg font-bold text-blue-300">{userInfo.name || userInfo.login}</h3>
              <p className="text-gray-300">{userInfo.bio}</p>
              <p className="text-gray-400">Followers: {userInfo.followers} | Following: {userInfo.following}</p>
              <p className="text-gray-400">Public Repos: {userInfo.public_repos}</p>
            </div>
          )}

          {repos.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-400">Recent Repositories:</h3>
              <ul className="space-y-2">
                {repos.map((repo) => (
                  <li key={repo.id} className="bg-gray-700 p-2 rounded">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                      {repo.name}
                    </a> - ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GithubProfile;
