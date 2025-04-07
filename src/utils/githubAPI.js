export const fetchGitHubUser = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  export const fetchUserRepos = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`);
      if (!res.ok) throw new Error("Repositories not found");
      return await res.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  