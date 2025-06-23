import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../api";

const Card = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/trips")
      .then((response) => {
        setTrips(response.data.data);
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

  return (
    <>
      {trips.map((trip) => (
        <Link to={`/trips/${trip.id}`} key={trip.id}>
          <div className="w-60 h-[400px] bg-white flex flex-col shadow-2xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-60 rounded-2xl overflow-hidden">
              <img
                src={trip.main_image}
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
    </>
  );
};

export default Card;