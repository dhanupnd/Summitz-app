import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import Api from "../api";
import "../components/BlackButton.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/login', { email, password });
      const { user, token } = response.data;

      // simpan semua info user, bukan hanya name/email
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('is_admin', user.is_admin);

      // pass user lengkap ke AuthContext
      login(user); // sekarang AuthContext punya id, name, email, dll.

      // arahkan sesuai peran
      if (user.is_admin) {
        window.location.href = 'http://127.0.0.1:8000/admin';
      } else {
        navigate('/');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  }

  return (
    <section className="w-screen h-screen bg-white">
      <div className="flex w-screen h-screen mx-auto bg-[url('/images/gunungRinjani.jpg')] bg-cover">
        <section className="w-1/2 flex flex-col justify-center items-center bg-[#31511E] rounded-r-4xl">
          <h1 className="font-poppins-semibold text-white p-10">Sign In</h1>
          <form onSubmit={handleLogin} className="w-3/4 flex flex-col justify-center">
            <input
              type="text"
              className="w-full h-14 rounded-full font-poppins-semibold text-black bg-white p-6 mb-5"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full h-14 rounded-full font-poppins-semibold text-black bg-white p-6 mb-5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Pakai button submit */}
            <button
              type="submit"
              className="w-full h-12 rounded-full submit-button bg-black hover:bg-gray-800 text-white font-poppins-semibold"
            >
              Sign in
            </button>

            <p className="font-poppins-semibold text-sm text-white mt-5 text-right">
              Belum punya akun?{" "}
              <Link to="/sign-up">
                <span className="text-black hover:text-gray-900 transition-all duration-300">
                  Daftar sekarang!
                </span>
              </Link>
            </p>
          </form>
        </section>
      </div>
    </section>
  )
}

export default Login;
