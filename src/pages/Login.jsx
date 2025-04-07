import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success(`Welcome, ${data.username}! 🚀`, {
      style: {
        background: "#1f1f1f",
        color: "#fff",
        border: "1px solid #22d3ee",
      },
    });
  };

  return (
    <>
      <Navbar />
      <Helmet>
      <title>Login </title>
      <meta name="description" content="Get to know the minds behind CodeHub." />
    </Helmet>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f0f0f] text-white px-4">
        <Toaster position="top-center" />
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1a1a1a] border border-cyan-600 shadow-lg rounded-xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">
            Login
          </h2>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Username</label>
            <div className="flex items-center bg-[#2a2a2a] rounded px-3">
              <FaUser className="text-gray-400 mr-2" />
              <input
                {...register("username", { required: true })}
                className="bg-transparent w-full p-2 outline-none text-white"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                Username is required
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="flex items-center bg-[#2a2a2a] rounded px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                {...register("password", { required: true })}
                className="bg-transparent w-full p-2 outline-none text-white"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password is required
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105"
          >
            Login
          </button>
        </motion.form>
      </div>
      <Footer />
    </>
  );
};


export default Login;
