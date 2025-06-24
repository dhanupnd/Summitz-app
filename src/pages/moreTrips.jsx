import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MoreTrips = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/trips")
      .then((response) => {
        const tripsData = response.data.data;
        const provinceNames = Array.from(
          new Set(tripsData.map((trip) => trip.mountain.province.province_name))
        );

        setTrips(tripsData);
        setFilteredTrips(tripsData); // awalnya tampil semua
        setProvinces(provinceNames); // provinsi unik
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleFilter = (province) => {
    setSelectedProvince(province);
    if (province === "Semua") {
      setFilteredTrips(trips); // reset ke semua
    } else {
      setFilteredTrips(
        trips.filter((trip) => trip.mountain.province.province_name === province)
      );
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }
  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="w-screen bg-white">
      <Navbar />

      <p className="text-black text-xl font-poppins-semibold mt-20 mb-8">Pilih jadwal trip pendakian favoritmu!</p>

      {/* === Filter Buttons === */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {/* Button "Semua" */}
        <div
          role="button"
          style={{ cursor: "pointer" }}
          className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
            selectedProvince === "Semua"
              ? "bg-[#31511E] text-white text-sm border[#31511E]"
              : "bg-white text-gray-700 text-sm hover:bg-[#78A45E] hover:text-white border-gray-300"
          }`}
          onClick={() => handleFilter("Semua")}
        >
          Semua
        </div>

        {/* Buttons province */}
        {provinces.map((province) => (
          <div
            key={province}
            role="button"
            style={{ cursor: "pointer" }}
            className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
              selectedProvince === province
                ? "bg-[#31511E] text-white text-sm border-[#31511E]"
                : "bg-white text-gray-700 text-sm hover:bg-[#78A45E] hover:text-white border-gray-300"
            }`}
            onClick={() => handleFilter(province)}
          >
            {province}
          </div>
        ))}
      </div>

      {/* === List Trips === */}
      <div className="flex flex-wrap gap-4 justify-center p-5 mb-10">
        {filteredTrips.map((trip) => (
          <Link to={`/trips/${trip.id}`} key={trip.id} className="w-60 h-[400px]">
            <div className="w-60 h-[400px] bg-white flex flex-col shadow-2xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-full h-60 rounded-2xl overflow-hidden">
                <img
                  src={`http://localhost:8000/storage/${trip.main_image}`}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-3 bg-yellow-50">
                <p className="text-black text-start font-poppins-semibold">
                  {trip.title}
                </p>
                <p className="text-black text-start text-sm font-light">
                  {trip.duration_day}
                </p>
                <p className="text-black text-start text-sm font-light">
                  {trip.mountain.province.province_name}
                </p>
                <p className="text-black text-start text-sm">
                  IDR {trip.price} / person
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MoreTrips;
