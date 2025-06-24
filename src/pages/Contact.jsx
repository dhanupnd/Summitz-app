import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from 'react';

const Contact = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/6282114650210', '_blank');
    };

    const questions = {
        'Apa itu summitz?': 'Summitz adalah platform yang menyediakan informasi dan layanan terkait pendakian gunung, termasuk open trip, pendaftaran, dan pembayaran. Kami bertujuan untuk memudahkan para pendaki dalam merencanakan dan mengikuti trip pendakian.',
        'Bagaimana cara mengikuti open trip yang ada di Summitz?': 'Untuk mengikuti open trip di Summitz, Anda dapat mengunjungi halaman open trip di website kami, memilih trip yang Anda minati, dan mengikuti langkah-langkah pendaftaran yang tertera di halaman tersebut. Pastikan Anda telah membaca semua informasi terkait trip sebelum mendaftar.',
        'Apa sajakah yang peserta dapatkan dalam paket pendakian?': 'Peserta akan mendapatkan transportasi, makan selama pendakian, tenda dan peralatan camping, serta pemandu lokal.',
        'Bagaimana cara mendaftarkan akun?': 'Anda dapat mendaftarkan akun dengan mengklik tombol "Sign in" di website kami dan mengisi formulir pendaftaran dengan data yang diperlukan.',
        'Metode pembayaran apa saja yang tersedia?': 'Kami menyediakan pembayaran melalui transfer bank, e-wallet, dan kartu kredit.',
        'Apakah ada biaya tambahan diluar harga yang tertera?': 'Tidak ada biaya tambahan kecuali ada permintaan khusus dari peserta.',
        'Bagaimana cara menghubungi tim Summitz?': 'Anda dapat menghubungi kami melalui WhatsApp, email, atau nomor telepon yang tertera di halaman ini.',
        'Kapan waktu operasional customer service Summitz?': 'Customer service kami beroperasi setiap hari dari pukul 08:00 hingga 20:00 WIB.'
    };

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (question) => {
        setOpenQuestion(openQuestion === question ? null : question);
    };

    return (
        <section className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
            <Navbar />
            <div className="w-full max-w-5xl mx-auto my-20 px-4">
                <div className="shadow-xl rounded-2xl bg-white overflow-hidden">
                    <div className="bg-[#31511E] w-full rounded-t-2xl flex items-center justify-center py-6">
                        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-poppins-semibold text-center px-4">
                            Apa yang bisa kami bantu ?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 my-8">
                        <div className="h-24 flex flex-row bg-white shadow-lg rounded-xl items-center hover:bg-gray-100 transition-all duration-200">
                            <PhoneIcon className="text-black w-10 h-10 mx-4" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black text-lg font-poppins-semibold">Hubungi Kami</p>
                                <p className="text-gray-600 text-sm font-poppins-light">+62 123 4567 890</p>
                            </div>
                        </div>

                        <div
                            className="h-24 flex flex-row bg-white shadow-lg rounded-xl items-center cursor-pointer hover:bg-gray-100 transition-all duration-200"
                            role="button"
                            onClick={handleWhatsAppClick}
                        >
                            <ChatBubbleLeftRightIcon className="text-black w-10 h-10 mx-4" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black text-lg font-poppins-semibold">WhatsApp kami</p>
                                <p className="text-gray-600 text-sm font-poppins-light">wa.me/6282114650210</p>
                            </div>
                        </div>

                        <div className="h-24 flex flex-row bg-white shadow-lg rounded-xl items-center hover:bg-gray-100 transition-all duration-200">
                            <EnvelopeIcon className="text-black w-10 h-10 mx-4" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black text-lg font-poppins-semibold">Email Kami</p>
                                <p className="text-gray-600 text-sm font-poppins-light">summitz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-black font-poppins-semibold text-2xl md:text-3xl text-start mb-6">
                        Pertanyaan umum tentang Summitz
                    </p>

                    <div className="space-y-6">
                        {/* Aspek pertanyaan 1 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-gray-500 font-poppins-semibold text-lg md:text-xl mb-4">
                                Summitz dan pendakian
                            </p>

                            {['Apa itu summitz?', 'Bagaimana cara mengikuti open trip yang ada di Summitz?', 'Apa sajakah yang peserta dapatkan dalam paket pendakian?'].map((question) => (
                                <div key={question}>
                                    <div
                                        className="flex justify-between items-center w-full bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                                        onClick={() => toggleQuestion(question)}
                                        role="button"
                                    >
                                        <p className="text-black text-sm md:text-md font-medium">{question}</p>
                                        <span className={`transform transition-transform duration-300 ${openQuestion === question ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div
                                        className={`text-start overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === question ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="bg-gray-50 shadow-inner rounded-b-lg p-4">
                                            <p className="text-gray-500 text-sm md:text-sm font-light">{questions[question]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Aspek pertanyaan 2 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-gray-500 font-poppins-semibold text-lg md:text-xl mb-4">
                                Pendaftaran dan pembayaran
                            </p>

                            {['Bagaimana cara mendaftarkan akun?', 'Metode pembayaran apa saja yang tersedia?', 'Apakah ada biaya tambahan diluar harga yang tertera?'].map((question) => (
                                <div key={question}>
                                    <div
                                        className="flex justify-between items-center w-full bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                                        onClick={() => toggleQuestion(question)}
                                        role="button"
                                    >
                                        <p className="text-black text-sm md:text-md font-medium">{question}</p>
                                        <span className={`transform transition-transform duration-300 ${openQuestion === question ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div
                                        className={`text-start overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === question ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="bg-gray-50 shadow-inner rounded-b-lg p-4">
                                            <p className="text-gray-700 text-sm md:text-sm font-light">{questions[question]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Aspek pertanyaan 3 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-gray-500 font-poppins-semibold text-lg md:text-xl mb-4">
                                Kontak dan bantuan
                            </p>

                            {['Bagaimana cara menghubungi tim Summitz?', 'Kapan waktu operasional customer service Summitz?'].map((question) => (
                                <div key={question}>
                                    <div
                                        className="flex justify-between items-center w-full bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                                        onClick={() => toggleQuestion(question)}
                                        role="button"
                                    >
                                        <p className="text-black text-sm md:text-md font-medium">{question}</p>
                                        <span className={`transform transition-transform duration-300 ${openQuestion === question ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div
                                        className={`text-start overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === question ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="bg-gray-50 shadow-inner rounded-b-lg p-4">
                                            <p className="text-gray-700 text-sm md:text-sm font-light">{questions[question]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;