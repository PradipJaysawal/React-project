import React from "react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
    <TopBar />
    <Navbar />
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-gray-200 shadow-lg rounded-2xl p-8 w-96">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Register</h1>

        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="fullname"
          placeholder="Full Name"
        />
        
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="email"
          placeholder="Email"
        />
        
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="phone"
          placeholder="Phone"
        />
        
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="address"
          placeholder="Address"
        />
        
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="password"
          placeholder="Password"
        />
        
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
          name="cpassword"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer">
          Register
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-semibold hover:text-orange-600 hover:underline">
              Login Now
            </a>
          </p>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Register;