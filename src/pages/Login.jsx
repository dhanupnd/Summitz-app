import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/login', {email, password});
      const { user, token } = response.data;
      localStorage.setItem('is_admin', user.is_admin);
      localStorage.setItem('token', token);

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
        
        {/* Sesi kiri */}
        <section className="w-1/2 flex flex-col justify-center items-center bg-blue-700 rounded-r-4xl">
          <div className="w-full flex flex-col justify-center mb-20">
            <h1 className="font-poppins-semibold text-white p-10">Sign in</h1>
          </div>

          <form onSubmit={handleLogin} className="w-3/4 flex flex-col justify-center">
            <div className="mb-5">
              <input 
                type="text" 
                className="w-full h-14 rounded-full text-black font-poppins-semibold bg-white p-6"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <input 
                type="password" 
                className="w-full h-14 rounded-full text-black font-poppins-semibold bg-white p-6" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <div 
                role="button"
                style={{cursor: 'pointer'}}
                onClick={handleLogin}
                type="submit"
                className="w-full h-12 md:h-14 rounded-full bg-blue-800 hover:bg-blue-900 text-white font-poppins-semibold transition duration-300 justify-center items-center flex text-center py-4 px-6"
              >
                Sign in
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <p className="font-poppins-semibold text-sm text-white">Belum punya akun? <Link to="/sign-up">Daftar sekarang!</Link></p>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}

export default Login;