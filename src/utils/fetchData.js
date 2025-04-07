export const fetchRandomData = async (category, count) => {
    let url = "";
    
    switch (category) {
      case "users":
        url = `https://randomuser.me/api/?results=${count}`;
        break;
      case "posts":
        url = `https://jsonplaceholder.typicode.com/posts?_limit=${count}`;
        break;
      case "products":
        url = `https://fakestoreapi.com/products?limit=${count}`;
        break;
      default:
        return [];
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  