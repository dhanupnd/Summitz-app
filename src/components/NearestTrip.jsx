import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../api";
import { useAuth } from "../context/AuthContext";

const NearestTrip = () => {
  const { searchQuery } = useAuth(); // Ambil searchQuery dari AuthContext
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/trips")
      .then((response) => {
        const tripsData = response.data.data;

        const tripsWithEarliestDate = tripsData.map((trip) => {
          const earliestDate = trip.schedules && trip.schedules.length > 0
            ? trip.schedules
                .map((s) => new Date(s.departure_date))
                .sort((a, b) => a - b)[0]
            : new Date(9999, 0, 1);

          return { ...trip, earliestDepartureDate: earliestDate };
        });

        const sortedTrips = tripsWithEarliestDate.sort(
          (a, b) => a.earliestDepartureDate - b.earliestDepartureDate
        );

        setTrips(sortedTrips);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  // Filter trips berdasarkan searchQuery
  const filteredTrips = trips.filter((trip) =>
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.mountain.province.province_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredTrips.map((trip) => (
        <Link to={`/trips/${trip.id}`} key={trip.id}>
          <div className="w-60 h-auto bg-white flex flex-col shadow-2xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-60 rounded-2xl overflow-hidden">
              <img
                src={`http://localhost:8000/storage/${trip.main_image}`}
                alt={trip.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-3 bg-white h-auto">
              <p className="text-black text-start font-poppins-semibold break-words overflow-hidden">
                {trip.title}
              </p>
              <p className="text-black text-start text-sm font-light">{trip.duration_day}</p>
              <p className="text-black text-start text-sm font-light">
                {trip.mountain.province.province_name}
              </p>
              <p className="text-black text-start text-sm">IDR {trip.price} / person</p>
              <p className="text-black text-start text-sm font-medium mt-1">
                Berangkat:{" "}
                {trip.earliestDepartureDate
                  ? trip.earliestDepartureDate.toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "Jadwal belum tersedia"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NearestTrip;