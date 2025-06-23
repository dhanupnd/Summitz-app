import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TripTabs from "../components/TripTabs";
import Review from "../components/Review";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Api from "../api";
import { Link } from "react-router-dom";

const TripDetail = () => {
  const { id } = useParams();
  const [tripData, setTripData] = useState([]); // Tetap array karena mengambil semua trip
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get('/trips')
      .then((response) => {
        setTripData(response.data.data || []); // Pastikan array tidak undefined
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Terjadi kesalahan saat mengambil data trip");
        setLoading(false);
      });
  }, []);

  // Filter trip berdasarkan id
  const selectedTrip = tripData.find((trip) => trip.id === parseInt(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} - Periksa endpoint atau hubungi rekanmu</div>;
  if (!selectedTrip) return <div>Trip not found</div>;

  return (
    <div className="w-screen bg-white">
      <Navbar />
      <section className="pt-24">
        <div className="container w-11/12 h-96 mx-auto grid grid-cols-5 grid-rows-2 gap-2 rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2">
            <img
              src={selectedTrip.main_image || "/images/merbabu.jpg"} // Gunakan data dari trip yang dipilih
              alt={selectedTrip.title || "Trip Image"}
              className="w-full h-full bg-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <img
              src="/images/background.jpg"
              alt=""
              className="object-cover h-48"
            />
            <img
              src="/images/gunungGede.jpg"
              alt=""
              className="object-cover h-48"
            />
          </div>

          <div className="col-span-2 row-span-2 bg-[url(/images/gunungRinjani.jpg)] bg-cover relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
              Lihat lainnya
            </span>
          </div>
        </div>
      </section>

      <section className="h-28 justify-center items-center my-auto relative">
        <p className="text-start text-2xl text-black font-poppins-semibold px-14 absolute top-1/2 transform -translate-y-1/2">
          {selectedTrip.title || "Judul Tidak Tersedia"}
        </p>
      </section>

      <section className="w-11/12 mx-auto">
        <TripTabs />
      </section>

      <section className="w-11/12 mx-auto">
        <Link to="/book-form">
          <div className="w-1/6 bg-blue-500 text-white text-center py-2 rounded-full hover:bg-blue-600 mx-auto">
            <span>Booking sekarang</span>
          </div>
        </Link>
      </section>

      <section className="w-11/12 mx-auto mt-8">
        <Review />
      </section>

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 my-10 rounded-full bg-[#D9D9D9] mx-auto"></div>

      <div className="w-11/12 flex flex-col gap-3 mx-auto my-10">
        <p className="text-black text-start text-3xl font-poppins-semibold">Trip relevan lainnya</p>
        <p className="text-black text-start text-baseline font-light">Temukan jadwal pendakian menarik lainnya!</p>
      </div>

      <section className="w-11/12 flex overflow-x-auto gap-5 mx-auto my-10 scrollbar-hide">
        <Card trips={tripData.filter(trip => trip.id !== parseInt(id))} /> {/* Tampilkan trip lain */}
      </section>

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 my-10 rounded-full bg-[#D9D9D9] mx-auto"></div>

      <Footer />
    </div>
  );
};

export default TripDetail;