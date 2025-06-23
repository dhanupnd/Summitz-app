import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";

const TripTabs = () => {
  const { id } = useParams(); // Ambil id dari URL, misalnya /trips/1
  const [trip, setTrip] = useState(null); // Simpan data trip spesifik
  const [itineraries, setItineraries] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("deskripsi");

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        setLoading(true);
        // Ambil data dari semua endpoint secara paralel
        const [tripResponse, rundownResponse, facilitiesResponse] = await Promise.all([
          Api.get('/trips'), // Endpoint mengembalikan array semua trips
          Api.get('/itineraries'), // Endpoint mengembalikan array semua itineraries
          Api.get('/facilities'), // Endpoint mengembalikan array semua facilities
        ]);

        // Filter trip berdasarkan id
        const selectedTrip = tripResponse.data.data.find(trip => trip.id === parseInt(id));

        // Simpan data ke state
        setTrip(selectedTrip || null);
        setItineraries(rundownResponse.data.data || []);
        setFacilities(facilitiesResponse.data.data || []); 
        setLoading(false);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data trip");
        setLoading(false);
      }
    };

    fetchTripData();
  }, [id]); // Jalankan ulang jika id berubah

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }
  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }
  if (!trip) {
    return <p className="text-center text-gray-600">Data trip tidak ditemukan</p>;
  }

  return (
    <div className="w-full mx-auto py-8">
      {/* Tab Headers */}
      <div className="flex border-b mb-4">
        <div
          className={`px-4 py-2 ${activeTab === "deskripsi" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("deskripsi")}
          style={{ cursor: "pointer" }}
        >
          Deskripsi
        </div>
        <div
          className={`px-4 py-2 ${activeTab === "rundown" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("rundown")}
          style={{ cursor: "pointer" }}
        >
          Rundown
        </div>
        <div
          className={`px-4 py-2 ${activeTab === "fasilitas" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("fasilitas")}
          style={{ cursor: "pointer" }}
        >
          Fasilitas
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white rounded-lg shadow">
        {activeTab === "deskripsi" && (
          <div>
            <p className="text-black text-baseline text-start">
              {trip.mountain.description || "Tidak ada deskripsi tersedia"}
            </p>
          </div>
        )}
        {activeTab === "rundown" && (
          <div>
            <ul className="list-disc pl-5 text-black text-baseline text-start">
              {itineraries.length > 0 ? (
                itineraries.map((item, index) => (
                  <li key={index}>{item.activity}</li> // Sesuaikan dengan struktur data
                ))
              ) : (
                <li>Tidak ada rundown tersedia</li>
              )}
            </ul>
          </div>
        )}
        {activeTab === "fasilitas" && (
          <div>
            <ul className="list-disc pl-5 text-black text-baseline text-start">
              {facilities.length > 0 ? (
                facilities.map((facility, index) => (
                  <li key={index}>{facility.item}</li> // Sesuaikan dengan struktur data
                ))
              ) : (
                <li>Tidak ada fasilitas tersedia</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripTabs;