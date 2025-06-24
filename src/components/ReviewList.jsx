import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";

const ReviewList = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await Api.get(`/reviews?trip_id=${id}`); // sesuaikan endpoint backend-mu
        setReviews(res.data.data || []);
      } catch (err) {
        setError(
          err.response?.data?.message || "Gagal memuat ulasan"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  if (loading) return <div>Memuat ulasan...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="mt-6 flex flex-col rounded-xl gap-5 bg-white border-1 border-gray-200 shadow-xl p-5">
      <p className="text-lg text-black font-poppins-semibold mb-2">Ulasan Pengunjung</p>
      {reviews.length === 0 ? (
        <p>Belum ada ulasan untuk trip ini.</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white flex justify-between text-center p-4 border border-gray-200 rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-3 justify-start">
                <span className="text-black text-base text-start font-semibold">Anonymus</span>
                <p className="text-gray-800 text-start">{review.comment}</p>
            </div>
            <div className="flex items-center mb-1">
              {/* Bintang */}
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
