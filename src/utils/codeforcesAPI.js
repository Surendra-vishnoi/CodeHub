export const fetchUserInfo = async (handle) => {
  const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
  const data = await res.json();
  return data.result[0];
};

export const fetchUserSubmissions = async (handle) => {
  const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
  const data = await res.json();
  return data.result;
};

export const fetchUserRatingChanges = async (handle) => {
  const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
  const data = await res.json();
  return data.result;
};
