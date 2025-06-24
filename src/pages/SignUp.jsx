import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../api';
import "../components/BlackButton.css";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi password match
    if (password !== passwordConfirm) {
      setError('Password dan konfirmasi password harus sama');
      return;
    }

    try {
      const response = await Api.post('/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirm,
      });

      alert(response.data.message || 'Registration successful');
      navigate('/sign-in'); // arahkan ke login
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <section className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="flex w-full h-screen bg-[url('/images/gunungRinjani.jpg')] bg-cover overflow-hidden">
        {/* Sisi kiri */}
        <div className="w-full md:w-1/2 bg-transparent"></div>

        {/* Sisi kanan */}
        <section className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#31511E] rounded-l-4xl p-6 md:p-10">
          <h1 className="font-poppins-semibold text-white text-2xl md:text-3xl p-4 md:p-6 text-center">Sign Up</h1>

          <form onSubmit={handleRegister} className="w-full md:w-3/4 flex flex-col justify-center">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="mb-4">
              <input
                type="text"
                className="w-full h-12 md:h-14 rounded-full text-black font-poppins-semibold bg-white py-4 px-6"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full h-12 md:h-14 rounded-full text-black font-poppins-semibold bg-white py-4 px-6"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="w-full h-12 md:h-14 rounded-full text-black font-poppins-semibold bg-white py-4 px-6"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="w-full h-12 md:h-14 rounded-full text-black font-poppins-semibold bg-white py-4 px-6"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 md:h-14 rounded-full submit-button bg-black hover:bg-gray-800 text-white font-poppins-semibold transition duration-300 text-center"
            >
              Sign up
            </button>

            <div className="flex mt-4 justify-start">
              <p className="font-poppins-semibold text-sm text-white">
                Sudah punya akun?{' '}
                <Link to="/sign-in" className="text-black text-sm hover:text-gray-800">
                  <span className='text-black hover:text-gray-900 transition-all duration-300'>
                    Sign in!
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default SignUp;