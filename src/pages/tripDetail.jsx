import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TripTabs from "../components/TripTabs";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Api from "../api";
import { Link } from "react-router-dom";
import React from "react";

const TripDetail = () => {
  const { id } = useParams();
  const [tripData, setTripData] = useState([]); // Tetap array karena mengambil semua trip
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [refreshReviews, setRefreshReviews] = useState(false);

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

  const allImages = selectedTrip.galleries
    ? selectedTrip.galleries.flatMap(gallery => gallery.image_urls || [])
    : [];
  const firstFiveImages = allImages.slice(0, 5);
  const sixthImage = allImages[5];
  
  return (
    <div className="w-screen bg-white">
      <Navbar />
      <section className="pt-24">
        <div className="container w-11/12 h-96 mx-auto grid grid-cols-5 grid-rows-2 gap-1 rounded-2xl overflow-hidden">

          {firstFiveImages[0] && (
            <div className="col-span-2 row-span-2">
              <img
                src={firstFiveImages[0]}
                alt="main-trip-img"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {firstFiveImages.slice(1).map((imageUrl, index) => (
            <img
              key={`image-${index}`}
              src={imageUrl}
              alt={`image-${index}`}
              className="w-full h-full object-cover"
            />
          ))}

          {sixthImage && (
            <div
              className="col-span-2 row-span-1 relative cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src={sixthImage}
                alt="lihat-lainnya"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
                Lihat lainnya
              </span>
            </div>
          )}

        </div>
      </section>

      {/* Ini perubahan di TripDetail */}
      <section className="h-28 justify-center items-center my-auto relative">
        <p className="text-start text-2xl text-black font-poppins-semibold px-14 absolute top-1/2 transform -translate-y-1/2">
          {selectedTrip.title || "Judul Tidak Tersedia"}
        </p>
      </section>

      <section className="w-11/12 mx-auto">
        <TripTabs />
      </section>

      <section className="w-11/12 mx-auto">
      <Link to={`/book-form/${selectedTrip.id}`} className="px-4 py-2 bg-[#31511E] hover:bg-[#78A45E] transition-all duration-300 hover:scale-105 rounded-full text-center justify-center items-center">
          <span className="text-white text-sm font-poppins-semibold">Booking sekarang</span>
        </Link>
      </section>

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 my-10 rounded-full bg-[#D9D9D9] mx-auto"></div>

      <section className="w-11/12 mx-auto mt-8 gap-5">
        <ReviewForm />
        <ReviewList tripId={selectedTrip.id} refresh={refreshReviews}/>
      </section>

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 my-10 rounded-full bg-[#D9D9D9] mx-auto"></div>

      <div className="w-11/12 flex flex-col gap-3 mx-auto my-10">
        <p className="text-black text-start text-3xl font-poppins-semibold">Trip relevan lainnya</p>
        <p className="text-black text-start text-baseline font-light">Temukan jadwal pendakian menarik lainnya!</p>
      </div>

      <section className="w-full flex overflow-x-auto gap-5 ml-5  scrollbar-hide px-8 pt-2.5 pb-14">
        <Card trips={tripData.filter(trip => trip.id !== parseInt(id))} /> {/* Tampilkan trip lain */}
      </section>

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 mb-10 rounded-full bg-[#D9D9D9] mx-auto"></div>

      <Footer />
    </div>
  );
};

export default TripDetail;