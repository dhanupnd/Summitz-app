import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Api from '../api';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirm,
      });
      alert('Success:', response.data.message || 'Registration successful');
      navigate('/sign-in');
      // Redirect atau beri notifikasi sukses jika diperlukan
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <section className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="flex w-full h-screen mx-auto bg-[url('/images/bromo.jpg')] bg-cover overflow-hidden">
        {/* Sesi kiri (gambar) */}
        <div className="w-full md:w-1/2 bg-transparent"></div>
        {/* Sesi kanan (form) */}
        <section className="w-full md:w-1/2 flex flex-col justify-center items-center bg-blue-700 rounded-l-4xl p-6 md:p-10">
          <div className="w-full flex flex-col justify-center mb-6 md:mb-10">
            <h1 className="font-poppins-semibold text-white text-2xl md:text-3xl p-4 md:p-6 text-center">Sign up</h1>
          </div>

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

            <div className="mb-4">
              <input
                type="password"
                className="w-full h-12 md:h-14 rounded-full text-black font-poppins-semibold bg-white py-4 px-6"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <div
                onClick={handleRegister}
                role="button"
                style={{cursor: 'pointer'}}
                type="submit"
                className="w-full h-12 md:h-14 rounded-full bg-blue-800 hover:bg-blue-900 text-white font-poppins-semibold transition duration-300 justify-center items-center flex text-center py-4 px-6"
              >
                Sign up
              </div>
            </div>

            <div className="flex mt-4">
              <p className="font-poppins-semibold text-sm md:text-base text-white text-start">
                Sudah punya akun? <Link to="/sign-in" className="text-blue-200 hover:underline">Sign in!</Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default SignUp;