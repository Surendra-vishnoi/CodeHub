import CodeforcesProfile from "../components/CodeforcesProfile";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const Codeforces = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1e1e2e] text-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-[#00c2ff] mb-4">
          Codeforces Stats & Comparison
        </h1>

       
        <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
          Dive into your Codeforces journey—track ratings, performance, and improvements.  
          Compare with others and see where you stand in the coding arena!
        </p>

        <div className="bg-[#2a2a3a] p-6 rounded-lg shadow-lg w-full max-w-2xl border border-[#00c2ff]">
          <CodeforcesProfile />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Codeforces;
