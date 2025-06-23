// import semua yang dibutuhkan
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
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="/more-trip" element={<MoreTrips />} />
        <Route path="/best-trip" element={<BestTrips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-form" element={<BookForm />} />

        {/* Main Layout for pages that need the Navbar */}

        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;