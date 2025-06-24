import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';
import PromotedTrip from '../components/PromotedTrip';
import BestTrips from '../components/BestTrips';
import ScrollToTop from "../components/ScrollToTop";
import Card from '../components/Card';
import NearestTrip from '../components/NearestTrip';

const Home = () => {
    return (
        <div className="bg-white w-screen overflow-hidden">

            <Navbar />
            {/* Sesi awal */}
            <section className="bg-[url('/images/AboutGede.jpg')] bg-cover w-full h-screen relative bg-center">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6 lg:px-8">
                    <div className="bg-black/30 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto text-center">
                        <p className="font-poppins-semibold tracking-wider text-white text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl leading-tight sm:leading-normal mb-3 sm:mb-4">
                            Nikmati perjalanan mendaki dengan agen favoritmu!
                            <span className="sm:hidden"> </span>
                        </p>
                        <p className="text-white/90 tracking-wider text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                            Carilah pengalaman anda dengan kami
                        </p>
                    </div>
                </div>
            </section>

            {/* Mengapa harus memilih kami */}
            <WhyUs />

            {/* List trip terbaik */}
            <section className="w-full mb-10 relative">
                <div className="w-full h-20 relative">
                    <p className="absolute top-1/3 md:top-1/3 -translate-y-1/3 md:-translate-y-1/3 left-1/2 -translate-x-1/2 md:left-30 font-bold text-xl sm:text-3xl text-black">
                        Trip terbaik
                    </p>
                </div>

                <div className='w-full flex gap-5 justify-start overflow-x-auto whitespace-nowrap scrollbar-hide px-9 pt-2.5 pb-14'>
                    <BestTrips />
                </div>
            </section>

            <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 mb-10 rounded-full bg-[#D9D9D9] mx-auto"></div>


            {/* Promosi trip ke gunung tertentu */}
            <PromotedTrip />

            <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 mt-3 sm:mt-5 rounded-full bg-[#D9D9D9] mx-auto"></div>


            {/* Jadwal terdekat */}
            <section className="w-full mt-5">
                <div>
                    <p className="text-black text-xl sm:text-3xl font-bold text-center md:text-left py-5 px-9">Jadwal terdekat</p>
                </div>

                <div className='w-full flex gap-5 justify-start overflow-x-auto whitespace-nowrap scrollbar-hide px-9 pt-4 pb-14'>
                    <NearestTrip />
                </div>
            </section>

            <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 rounded-full bg-[#D9D9D9] mx-auto"></div>


            {/* Trip lainnya */}
            <section className='w-full mb-10'>
                <div>
                    <p className="text-black text-xl sm:text-3xl font-bold text-center md:text-left py-5 px-9">Trip lainnya</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-24'>
                    <Card />
                </div>

                <Link to="/more-trip">
                    <div className='w-36 h-10 bg-[#31511E] hover:bg-[#78A45E] hover:shadow-md transition-all duration-300 hover:scale-105 rounded-full mt-7 mx-auto'>
                        <p className='text-white py-2 font-bold'>Lihat semua</p>
                    </div>
                </Link>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;