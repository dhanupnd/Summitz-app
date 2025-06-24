import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, setSearchQuery } = useAuth(); // Tambahkan setSearchQuery dari context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  console.log("Navbar user:", user); // Debugging untuk memeriksa status user

  // useEffect(() => {
  //   if (user) console.log('User loaded:', user);
  // }, [user]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative group px-3 py-2 transition-colors duration-200 ${
      isActive ? "text-blue-600 font-bold" : "text-black"
    }`;

  const underlineSpan = (
    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
  );

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Perbarui searchQuery di context
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`bg-white text-black w-full h-16 flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center w-32 h-16">
        <NavLink to="/">
          <img src="/images/logo.png" alt="Brand Logo" loading="lazy" />
        </NavLink>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>
          <NavLink to="/" className={navLinkClass}>
            <span className="relative text-black">Home{underlineSpan}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            <span className="relative text-black">About{underlineSpan}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more-trip" className={navLinkClass}>
            <span className="relative text-black">Trip{underlineSpan}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            <span className="relative text-black">Contact{underlineSpan}</span>
          </NavLink>
        </li>

        {/* Input Pencarian Animasi dengan Ikon */}
        <div className="relative group flex items-center border-2 border-gray-300 rounded-full transition-all duration-300 focus-within:w-64 w-40 overflow-hidden px-3 py-1 bg-white">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch} // Tambahkan event handler untuk pencarian
            className="ml-2 w-full bg-transparent focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Rendering Kondisional Berdasarkan Status Login */}
        {user ? (
          <li className="flex items-center gap-4">
            <NavLink to="/profile" className="flex items-center">
              <UserCircleIcon className="w-8 h-8 text-black transition-all duration-300 hover:scale-115" />
            </NavLink>
            <div
              role="button"
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
              className="w-20 h-10 px-2 py-1.5 bg-[#31511E] hover:bg-[#78A45E] transition-all duration-300 hover:scale-105 font-medium text-white rounded-full text-center"
            >
              Logout
            </div>
          </li>
        ) : (
          <li>
            <NavLink to="/sign-in">
              <div className="w-20 h-10 px-2 py-1.5 bg-[#31511E] hover:bg-[#78A45E] transition-all duration-300 hover:scale-105 text-white rounded-full text-center">
                Sign in
              </div>
            </NavLink>
          </li>
        )}
      </ul>

      {/* Tombol Toggle Menu Mobile */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Panel Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 md:hidden z-40">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative">Home{underlineSpan}</span>
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative">About{underlineSpan}</span>
          </NavLink>
          <NavLink
            to="/more-trip"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative">Trip{underlineSpan}</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative">Contact{underlineSpan}</span>
          </NavLink>
          <div className="w-12/12 h-0.5 sm:h-1 sm:mt-10 rounded-full bg-gray-300 mx-auto"></div>

          {/* Rendering Kondisional untuk Menu Mobile */}
          {user ? (
            <>
              <NavLink
                to="/profile"
                className={navLinkClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">Profil{underlineSpan}</span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-20 text-center py-2 bg-red-600 text-white rounded-full"
              >
                Keluar
              </button>
            </>
          ) : (
            <NavLink to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-20 text-center py-2 bg-[#3559C7] text-white rounded-full">
                Masuk
              </div>
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;