import { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isPastThreshold = currentScrollY > 200;

      // Show circle only when scrolling down and past 200px
      setIsVisible(isScrollingDown && isPastThreshold);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideDown {
            from {
              transform: translateY(0);
              opacity: 1;
            }
            to {
              transform: translateY(20px);
              opacity: 0;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-2px);
            }
          }
          .animate-slide-up {
            animation: slideUp 0.3s ease-out forwards;
          }
          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
        `}
      </style>
      <div
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#31511E] border-1 border-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isVisible
            ? "opacity-100 animate-slide-up scale-100"
            : "opacity-0 animate-slide-down scale-100 pointer-events-none"
        } hover:scale-110 active:scale-95 hover:bg-[#78A45E] focus:outline-none focus:ring-2 focus:ring-white`}
        onClick={scrollToTop}
        role="button"
        aria-label="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <ChevronDoubleUpIcon
          className={`h-6 w-6 items-center text-white ${isVisible ? "animate-bounce" : ""}`}
        />
      </div>
    </>
  );
};

export default ScrollToTop;
