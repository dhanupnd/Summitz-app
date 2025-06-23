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

                <div className='w-full flex justify-start'>
                    <ul className="list-none flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide px-9">
                        {/* Trip Card 1 */}
                        <li>
                            <Link to="/trips/merbabu">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/0b/4d/48/0b4d48e6bd81aba5af6ae5de22a168c9.jpg)] bg-contain w-70 h-70 rounded-2xl"></section>
                                    <section className="w-70 h-40">
                                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Merbabu</p>
                                        <p className="text-start font-light text-black mx-3">Kab. Magelang</p>
                                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 700.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        {/* Trip Card 2 */}
                        <li>
                            <Link to="/trips/prau">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/c7/0b/b1/c70bb1c54d24a8d2e07dc03d017a7596.jpg)] bg-contain w-70 h-70 rounded-2xl"></section>
                                    <section>
                                            <p className="text-start text-lg text-black mx-3 mt-3 mb-1">Gunung Prau</p>
                                            <p className="flex items-center text-start font-light text-black mx-3">
                                                <MapPinIcon className="w-4 h-4 text-black mr-1" />
                                                Kab. Wonosobo
                                            </p>
                                            <p className="text-start text-black text-lg mx-3 mt-14">IDR 500.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        {/* Trip Card 3 */}
                        <li>
                            <Link to="/trips/bromo">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/01/71/ec/0171ec206cfa618cf917ba68c47e0d6f.jpg)] bg-contain w-70 h-70 rounded-2xl"></section>
                                    <section>
                                        <p className="text-start text-lg text-black mx-3 mt-3 mb-1">Gunung Bromo</p>
                                        <p className="flex items-center text-start font-light text-black mx-3">
                                                <MapPinIcon className="w-4 h-4 text-black mr-1" />
                                                Kab. Wonosobo
                                        </p>
                                        <p className="flex items-center text-start font-light text-black mx-3">
                                                <ClockIcon className="w-4 h-4 text-black mr-1" />
                                                2 hari
                                        </p>
                                        <p className="text-start text-black text-lg mx-3 mt-8">IDR 900.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/trips/ungaran">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/2e/9c/36/2e9c3698312eed0b1fd407fc7e7703fd.jpg)] bg-cover w-70 h-70 rounded-2xl"></section>
                                    <section>
                                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Ungaran</p>
                                        <p className="text-start font-light text-black mx-3">Kab. Semarang</p>
                                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 450.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/trips/andong">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/2d/db/8e/2ddb8e5474e3bcd0f5d78520965c63c9.jpg)] bg-contain w-70 h-70 rounded-2xl"></section>
                                    <section>
                                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Andong</p>
                                        <p className="text-start font-light text-black mx-3">Kab. Magelang</p>
                                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 400.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>


            {/* Promosi trip ke gunung tertentu */}
            <PromotedTrip />

            {/* Jadwal terdekat */}
            <section className="w-full mb-10">
                <div>
                    <p className="text-black text-3xl font-bold text-left py-5 px-9">Jadwal terdekat</p>
                </div>

                <div className='w-full flex justify-start'>
                    <ul className='list-none flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide px-9'>
                        <li>
                            <Link to="/trips/kembang">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/54/be/f7/54bef7a52895fd386d48b3983221fb11.jpg)] bg-cover w-70 h-70 rounded-2xl"></section>
                                    <section>
                                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Kembang</p>
                                        <p className="text-start font-light text-black mx-3">Kab. Wonosobo</p>
                                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 450.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/trips/lawu">
                                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                                    <section className="bg-[url(https://i.pinimg.com/736x/5b/66/8a/5b668ae0c81d7dd68491ff1c849ce21b.jpg)] bg-cover w-70 h-70 rounded-2xl"></section>
                                    <section>
                                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Lawu</p>
                                        <p className="text-start font-light text-black mx-3">Kab. Karanganyar</p>
                                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 800.000</p>
                                    </section>
                                </div>
                            </Link>
                        </li>

                        <li>

                        </li>
                    </ul>
                </div>
            </section>

            {/* Trip lainnya */}
            <section className='w-full mb-10'>
                <div>
                    <p className="text-black text-3xl font-bold text-left py-5 px-9">Trip lainnya</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-9'>
                    <Card />
                </div>

                <Link to="/more-trip">
                    <div className='w-44 h-10 bg-blue-700 rounded-full mt-7 mx-auto'>
                        <p className='text-white py-2 font-bold'>Lihat lebih banyak</p>
                    </div>
                </Link>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;
