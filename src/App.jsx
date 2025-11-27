import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripDetail from './pages/tripDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MoreTrips from './pages/moreTrips';
import BestTrips from './components/BestTrips';
import BookForm from './pages/BookForm';
import Profile from './pages/Profile';
import './App.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { Outlet } from 'react-router-dom';

// Komponen layout untuk halaman yang membutuhkan Navbar
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Outlet menampilkan komponen anak sesuai rute */}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rute dengan Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trips/:id" element={<TripDetail />} />
            <Route path="/more-trip" element={<MoreTrips />} />
            <Route path="/best-trip" element={<BestTrips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-form" element={<BookForm />} />
            <Route path="/book-form/:tripId" element={<BookForm />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Rute tanpa Navbar */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
