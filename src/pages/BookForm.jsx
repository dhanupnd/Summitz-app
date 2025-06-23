import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Api from '../api'; 

const BookForm = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [departureDate, setDepartureDate] = useState('');

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
  };

  const increaseTicket = () => {
    if (ticketCount < 5) setTicketCount(ticketCount + 1);
  };

  const decreaseTicket = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ticketCount, departureDate });
    alert('Booking submitted! Check console for details.');
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <section className="relative w-full py-12">
        <div className="container my-20 px-4 mx-auto w-11/12 ">
          <div className="bg-white rounded-2xl shadow-lg border-t-2 border-gray-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side - Form */}
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-8">Detail Pemesanan</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-3 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder='E-mail'
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-start text-lg font-medium text-gray-700 mb-2">Tanggal Keberangkatan</label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <label className="text-lg font-medium text-gray-700">Jumlah Tiket</label>
                    <div className="flex items-center space-x-2">
                      <div
                        role='button'
                        type="button"
                        style={{ cursor: 'pointer' }}
                        onClick={decreaseTicket}
                        className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center font-semibold disabled:opacity-50"
                        disabled={ticketCount <= 1}
                      >
                        -
                      </div>
                      <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">{ticketCount}</span>
                      <div
                        role='button'
                        type="button"
                        style={{ cursor: 'pointer' }}
                        onClick={increaseTicket}
                        className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center font-semibold disabled:opacity-50"
                        disabled={ticketCount >= 5}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Side - Trip Details */}
              <div className="bg-gray-50 border-gray-200 border-2 shadow-lg rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🏔️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Dataran Tinggi Dieng</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Jumlah Tiket</span>
                    <span className="text-gray-800 font-medium">x{ticketCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Harga Per Orang</span>
                    <span className="text-gray-800 font-medium">Rp 756.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Tanggal Keberangkatan</span>
                    <span className="text-gray-800 font-medium">{formatDate(departureDate)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total Pembayaran</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        Rp {(756000 * ticketCount).toLocaleString('id-ID')}
                      </span>
                      <span className="text-gray-400">▼</span>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  onClick={() => alert('Redirecting to payment...')}
                >
                  Lanjut Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookForm;