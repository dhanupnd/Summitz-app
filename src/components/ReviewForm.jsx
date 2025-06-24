import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import './Buttons.css';

const ReviewForm = ({ onReviewSubmitted }) => {
    const { id } = useParams();
  const [userId, setUserId] = useState(null); 
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Ambil user dari localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
      console.log("user =", user.id)
      console.log("trip id =", id)
    } else {
      setMessage("User belum login. Harap login terlebih dahulu.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !id) {
      setMessage("Data user atau trip belum lengkap.");
      return;
    }

    if (rating === 0) {
      setMessage("Pilih rating bintang terlebih dahulu!");
      return;
    }

    try {
      const res = await Api.post("/reviews", {
        user_id: userId,
        trip_id: id,
        rating,
        comment,
      });

      setMessage("Ulasan berhasil dikirim!");
      setRating(0);
      setComment("");
      onReviewSubmitted?.(res.data.data); // callback kalau mau refetch
    } catch (error) {
      setMessage(
        "Gagal mengirim ulasan: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border-1 border-gray-200 p-4 shadow-xl rounded-xl space-y-4">
      <p className="text-lg text-black font-poppins-semibold my-5">Beri Ulasan Anda</p>

      <textarea
        placeholder="Tulis ulasan Anda"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full text-sm bg-gray-100 hover:bg-gray-200 transition-all duration-300 py-3 px-5 rounded-xl"
      />

      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none star-button rounded-f"
            >
              <svg
                className={`w-8 h-8 ${
                  hover >= starValue || rating >= starValue
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill={hover >= starValue || rating >= starValue ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </button>
          );
        })}
        <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
      </div>

      {message && <p className="text-center text-sm mt-2">{message}</p>}

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 my-3 submit-btn hover:bg-green-600"
      >
        <span className="text-white font-poppins-semibold">
          Kirim Ulasan
        </span>
        
      </button>
    </form>
  );
};

export default ReviewForm;
