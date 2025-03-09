import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>{ setShowPassword(!showPassword);
  }

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-4 mb-4 bg-gray-200 px-8 py-8 rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-2xl mb-4 mt-4">Login</h1>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Email' required />
          </div>

          <div className="mb-6 relative">
            <input type={showPassword ? "text" : "password"} id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Password' required/>
            <div onClick={handleShowPassword}> 
              {showPassword ?
              <RiEyeOffFill className='absolute top-3 right-3 text-gray-500 cursor-pointer' /> :
              <RiEyeLine className='absolute top-3 right-3 text-gray-500 cursor-pointer' />
            }
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button type="submit" className="w-full bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
              Login
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p>Don't have an account?
            <a href="/register" className="text-blue-500 font-semibold hover:text-orange-600 hover:underline"> Register Now</a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;