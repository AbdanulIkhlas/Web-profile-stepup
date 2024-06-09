import { useState, useEffect, useRef } from "react";
import PartnerCard from "./PartnerCard";
import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";

const Carousel = ({
  data,
  srcLeftButtonPath,
  srcRightButtonPath,
  chooseFragment,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideInterval = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setCardsPerSlide(1);
      } else if (window.innerWidth >= 425 && window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        if (chooseFragment === "review") {
          setCardsPerSlide(2);
        } else if (chooseFragment === "partner") {
          setCardsPerSlide(1);
        } 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [chooseFragment]);

  useEffect(() => {
    autoSlideInterval.current = setInterval(slideRight, 3000);
    return () => clearInterval(autoSlideInterval.current);
  }, [currentSlide]);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        if (currentSlide === data.length / cardsPerSlide) {
          setIsTransitioning(false);
          setCurrentSlide(0);
        } else if (currentSlide === -1) {
          setIsTransitioning(false);
          setCurrentSlide(data.length / cardsPerSlide - 1);
        } else {
          setIsTransitioning(false);
        }
      }, 700);
    }
  }, [currentSlide, isTransitioning, data.length, cardsPerSlide]);

  const totalSlides = Math.ceil(data.length / cardsPerSlide);
  const bgVariant =
    chooseFragment === "layanan"
      ? "bg-[#4E4E4E]"
      : chooseFragment === "partner"
      ? "bg-[#4E4E4E]"
      : "bg-[#4E4E4E]";

  const slideLeft = () => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
    );
    setIsTransitioning(true);
  };

  const slideRight = () => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
    );
    setIsTransitioning(true);
  };

  const goToSlide = (index) => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide(index);
    setIsTransitioning(true);
  };

  const handleTouchStart = (e) => {
    clearInterval(autoSlideInterval.current);
    const touchStartX = e.touches[0].clientX;
    slideRef.current = touchStartX;
  };

  const handleTouchMove = (e) => {
    if (!slideRef.current) return;
    const touchCurrentX = e.touches[0].clientX;
    const distance = touchCurrentX - slideRef.current;
    if (distance > 50) {
      slideLeft();
      slideRef.current = null;
    } else if (distance < -50) {
      slideRight();
      slideRef.current = null;
    }
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="flex items-center overflow-hidden">
        {/* button left */}
        <button
          className={`absolute left-2 z-10 bg-transparent transition-opacity duration-500 ${
            totalSlides === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={slideLeft}
          disabled={isTransitioning}
        >
          <img
            src={srcLeftButtonPath}
            alt="left arrow"
            className="w-8 h-8 fill-current text-[#2C946C]"
          />
        </button>
        {/* card slider */}
        <div className="w-full overflow-hidden">
          <div
            className={`flex transition-transform duration-700 ease-in-out ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / cardsPerSlide
              }%)`,
            }}
          >
            {data.map((item) => {
              if (chooseFragment === "partner") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center mx-auto min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]"
                  >
                    <PartnerCard {...item} />
                  </div>
                );
              }  
              else if (chooseFragment === "review") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center px-6 mb-6 min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/2)]"
                  >
                    <ReviewCard {...item} />
                  </div>
                );
              } 
              else {
                return null;
              }
            })}
          </div>
        </div>
        {/* button right */}
        <button
          className={`absolute right-2 z-10 bg-transparent transition-opacity duration-500 ${
            totalSlides === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={slideRight}
          disabled={isTransitioning}
        >
          <img
            src={srcRightButtonPath}
            alt="right arrow"
            className="w-8 h-8 fill-current text-[#2C946C]"
          />
        </button>
      </div>
      {/* bullets nav */}
      <div
        className={`flex justify-center mt-2 space-x-2 ${
          totalSlides === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? bgVariant : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// PropTypes data
Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  srcLeftButtonPath: PropTypes.string.isRequired,
  srcRightButtonPath: PropTypes.string.isRequired,
  chooseFragment: PropTypes.string.isRequired,
};

export default Carousel;
