export const fetchMeme = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme/programmingmemes");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching meme:", error);
      return null;
    }
  };
  