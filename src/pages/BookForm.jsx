import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Api from '../api';
import "../components/BlackButton.css";

const BookForm = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [tripPrice, setTripPrice] = useState(0); // harga trip
  const [ticketCount, setTicketCount] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch schedules sesuai tripId
  useEffect(() => {
    Api.get(`/schedules?trip_id=${tripId}`)
      .then((res) => setSchedules(res.data.data || []))
      .catch(() => setError('Gagal memuat data jadwal'));
  }, [tripId]);

  // Fetch trip price sesuai tripId
  useEffect(() => {
    Api.get(`/trips/${tripId}`)
      .then((res) => setTripPrice(res.data.data.price)) // simpan harga trip
      .catch(() => setError('Gagal memuat data trip'));
  }, [tripId]);

  const increaseTicket = () => {
    if (selectedSchedule && ticketCount < selectedSchedule.quota) {
      setTicketCount(ticketCount + 1);
    }
  };

  const decreaseTicket = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  const handleScheduleChange = (e) => {
    const scheduleId = parseInt(e.target.value);
    const schedule = schedules.find((s) => s.id === scheduleId);
    setSelectedSchedule(schedule || null);
    setTicketCount(1); // reset jumlah tiket
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSchedule) {
      setError('Pilih jadwal dulu');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (!savedUser?.id) {
        throw new Error('User tidak terautentikasi. Silakan login.');
      }

      const payload = {
        user_id: savedUser.id,
        schedule_id: selectedSchedule.id,
        customer_name: customerName,
        customer_email: customerEmail,
        quantity: ticketCount,
        total_price: tripPrice * ticketCount,
      };

      // 1️⃣ Buat booking di DB
      const bookingRes = await Api.post('/bookings', payload);
      const { data: bookingData, snapToken } = bookingRes.data;

      // 3️⃣ Panggil Midtrans Snap Popup
      window.snap.pay(snapToken, {
      onSuccess: (result) => {
        navigate('/', { state: { bookingId: bookingData.id } });
      },
      onPending: () => { setError('Pembayaran tertunda.'); setLoading(false); },
      onError: () => { setError('Pembayaran gagal.'); setLoading(false); },
      onClose: () => { setError('Anda menutup pop-up.'); setLoading(false); },
    });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Gagal membuat booking atau memproses pembayaran. Coba lagi.');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <section className="relative w-full py-12">
        <div className="container my-20 px-4 mx-auto w-11/12">
          <div className="bg-white rounded-2xl shadow-lg border-t-2 border-gray-100 p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-8">Detail Pemesanan</p>
              {error && (
                <p className="text-red-500 mb-4 p-3 bg-red-50 rounded-lg">{error}</p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full text-sm px-5 py-3 border border-gray-300 rounded-full focus:outline-none"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full text-sm px-5 py-3 border border-gray-300 rounded-full focus:outline-none"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                />

                {/* Tanggal */}
                <select
                  className="w-full text-sm px-4 py-3 border border-gray-300 rounded-full focus:outline-none"
                  value={selectedSchedule ? selectedSchedule.id : ''}
                  onChange={handleScheduleChange}
                  required
                >
                  <option value="" disabled>Pilih tanggal keberangkatan</option>
                  {schedules.map((schedule) => (
                    <option key={schedule.id} value={schedule.id}>
                      {formatDate(schedule.departure_date)}
                    </option>
                  ))}
                </select>

                {/* Jumlah Tiket */}
                <div className="flex justify-between items-center w-full">
                  <label className="text-base font-medium text-black">Jumlah Tiket</label>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={decreaseTicket}
                      disabled={ticketCount <= 1}
                      className="w-8 h-8 submit-button bg-gray-200 text-gray-700 rounded-full flex items-center justify-center disabled:opacity-50"
                    >

                      <span className='text-white text-xl p-3 font-semibold'>-</span>
                      
                    </button>
                    <span className="text-lg">{ticketCount}</span>
                    <button
                      type="button"
                      onClick={increaseTicket}
                      disabled={!selectedSchedule || ticketCount >= (selectedSchedule?.quota || 1)}
                      className="w-8 h-8 submit-button bg-gray-200 text-gray-700 rounded-full flex items-center justify-center disabled:opacity-50"
                    >
                      
                      <span className='text-white text-xl p-3 font-semibold'>+</span>

                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full submit-button bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Memproses...' : 'Kirim Booking'}
                </button>
              </form>
            </div>

            {/* Detail Trip */}
            <div className="bg-white border-3 border-dashed border-gray-300 shadow-xl rounded-xl p-5">
              <h3 className="text-lg text-black font-poppins-semibold mt-5 mb-8">Rincian Trip</h3>
              {selectedSchedule ? (
                <>
                <div className='flex flex-col gap-4 justify-center'>
                  <div className='flex justify-between'>
                    <span className='font-poppins-semibold text-black'>Tanggal :</span>
                    <p className='font-mono'>{formatDate(selectedSchedule.departure_date)}</p>
                  </div>

                  <div className='flex justify-between'>
                    <span className='font-poppins-semibold text-black'>Kuota tersedia :</span>
                    <p className='font-mono'>{selectedSchedule.quota}</p>
                  </div>
                  
                  <div className='flex justify-between'>
                    <span className='font-poppins-semibold text-black'>Jumlah tiket :</span>
                    <p className='font-mono'>{ticketCount}</p>
                  </div>

                  <div className='flex justify-between'>
                    <span className='font-poppins-semibold text-black'>Harga per tiket :</span>
                    <p className='font-mono'>Rp {tripPrice.toLocaleString('id-ID')}</p>
                  </div>

                  <div className='flex justify-between'>
                    <span className='font-poppins-semibold text-black'>Total harga :</span>
                    <p className='font-mono'>Rp {(tripPrice * ticketCount).toLocaleString('id-ID')}</p>
                  </div>
                </div>
                </>
              ) : (
                <p className="text-gray-500">Pilih jadwal keberangkatan untuk melihat detail</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookForm;