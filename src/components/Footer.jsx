import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-[#212121] w-full flex flex-col justify-center py-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 pb-10 justify-between items-center">
                {/* Logo + Slogan */}
                <div className="flex flex-col justify-center items-center md:items-start gap-5">
                    <img src="/images/logo.png" alt="Logo" className="w-64" />
                </div>

                <div className='flex gap-4 justify-center items-center'>
                    <p className="text-white text-start text-sm mt-2 md:mt-0">© Summitz 2025</p>
                </div>

                {/* Bottom Menu */}
                <div className="flex flex-col md:flex-row justify-end items-center gap-4">
                    <nav className="flex gap-8 font-semibold text-base">
                        <Link to="/"><span className='text-white font-poppins-semibold'>Home</span></Link>
                        <Link to="/about"><span className='text-white font-poppins-semibold'>About</span></Link>
                        <Link to="/more-trip"><span className='text-white font-poppins-semibold'>Trip</span></Link>
                        <Link to="/contact"><span className='text-white font-poppins-semibold'>Contact</span></Link>
                    </nav>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-white mx-10 my-2" />

            {/*kontak */}
                {/* Contact and Social Media */}
            <div className="flex flex-col md:flex-row justify-between items-center px-10 text-white text-sm py-4">
                {/* Contact Info */}
                <div className="flex gap-15">
                    <div className="flex items-center gap-1">
                        <PhoneIcon className="w-5 h-5" />
                        <span className='font-poppins-semibold'>+62 8423334343</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <EnvelopeIcon className="w-5 h-5" />
                        <span className='font-poppins-semibold'>summitz@gmail.com</span>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4">
                    <a href="#" aria-label="TikTok">
                        <AiFillTikTok className="w-8 h-8 text-white hover:text-gray-300" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagramSquare className="w-8 h-8 text-white hover:text-gray-300" />
                    </a>
                    <a href="#" aria-label="X">
                        <FaSquareXTwitter className="w-8 h-8 text-white hover:text-gray-300" />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <FaFacebookSquare className="w-8 h-8 text-white hover:text-gray-300" />
                    </a>
                </div>
            </div>

            {/* Social Media */}


        </footer>
    );
};

export default Footer;
