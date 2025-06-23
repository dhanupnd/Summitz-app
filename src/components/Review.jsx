import { useState } from "react";

const Review = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <section className="w-full h-full mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="w-full mx-auto flex justify-between">
                <span className="justify-start my-auto font-poppins-semibold text-black text-2xl">Ulasan</span>

                <div className="w-20 h-10 flex justify-center items-center bg-gray-400 rounded-full" style={{ cursor: 'pointer' }}>
                    <span className="text-black font-semibold">Filter</span>
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-4 mt-4">
                <p className="text-black text-start ">Berikan ulasan Anda disini!</p>
                <form>
                    <input
                        type="text"
                        placeholder="Ulasan"
                        className="w-full focus:outline-none transition-all duration-300 bg-gray-200 hover:bg-gray-100 text-black p-7 rounded-2xl shadow-lg"
                    />

                    {/* Input Bintang */}
                    <div className="flex items-center justify-start mt-4 space-x-1">
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            const isFilled = hover >= starValue || rating >= starValue;

                            return (
                                <div
                                    key={index}
                                    type="button"
                                    onClick={() => setRating(starValue)}
                                    onMouseEnter={() => setHover(starValue)}
                                    onMouseLeave={() => setHover(0)}
                                    className="focus:outline-none"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-7 h-7 transition-colors ${
                                            isFilled ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                        fill={isFilled ? "currentColor" : "none"}
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
                                </div>
                            );
                        })}
                        <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
                    </div>

                    <div className="w-1/12 text-white text-sm font-poppins-semibold px-3 py-2 mt-5 mx-auto bg-blue-500 rounded-full">
                        Kirim
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Review;