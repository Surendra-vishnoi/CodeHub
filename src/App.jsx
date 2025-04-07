import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Codeforces from "./pages/Codeforces";
import Github from "./pages/Github";
import RandomData from "./pages/RandomData";
import Memes from "./pages/Memes";
import Algorithm from "./pages/Algorithm";
import Books from "./pages/Books";
import DailyQuestion from "./pages/DailyQuestion";
import OpenSource from "./pages/OpenSource";
import Tips from "./pages/Tips";
import About from "./pages/About";
import Login from "./pages/Login"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codeforces" element={<Codeforces />} />
      <Route path="/github" element={<Github />} />
      <Route path="/randomdata" element={<RandomData />} />
      <Route path="/memes" element={<Memes />} />
      <Route path="/algorithm" element={<Algorithm />} />
      <Route path="/books" element={<Books />} />
      <Route path="/dailyquestion" element={<DailyQuestion />} />
      <Route path="/opensource" element={<OpenSource />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
  );
}

export default App;
