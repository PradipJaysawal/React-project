import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri';
import axios from 'axios';
import { API_URL } from '../constants/apiConstant';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //success message
    const [success, setSuccess] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
    const handleSubmit = async (e) => { 
      e.preventDefault();
      //login logic here
      const res = await axios.post(`${API_URL}/login`, { 
        email: email,
        password: password,
      })
      if (res.status === 200){
        //handle successful login here
        setSuccess('Login successful! Redirecting...')
        setTimeout(() => {
          localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        location.href = '/'
        }
        , 1000)

      }else {
        //handle error here
        console.log('login failed')
      }
    }

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }
  
    //redirect to home page if user is already logged in
    const logintoken = localStorage.getItem('token')
    if(logintoken) {
      location.href = '/'
    }

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-4 mb-4 bg-gray-200 px-8 py-8 rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-2xl mb-4 mt-4">Login</h1>
      <p className='text-green-600 text-sm mb-5'>{success}</p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="email" value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Email' required onChange={handleEmailChange} />
          </div>

          <div className="mb-6 relative">
            <input type={showPassword ? "text" : "password"} value={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Password' required onChange={handlePasswordChange}/>
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