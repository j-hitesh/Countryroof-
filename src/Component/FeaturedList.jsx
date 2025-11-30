import { useProperties } from "../Context/PropertyContext";
import { useRef } from "react";

const FeaturedList = () => {
  const { properties } = useProperties();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -450 : 450,
      behavior: "smooth",
    });
  };

  const FeatureProperty = properties.filter((p) => p.feature);

  return (
    <div className="py-20 max-w-6xl mx-auto px-4 md:px-20 my-10 bg-blue-50 rounded-3xl">

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Featured Listings
      </h2>

      <div className="relative mt-4">

        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg shadow-blue-300 w-10 h-10 
          rounded-full justify-center items-center hover:bg-blue-100 z-10"
        >
          <svg width="18" height="20" stroke="currentColor" fill="none" strokeWidth="3">
            <path d="M12 4l-6 8 6 8" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-6 py-4"
        >
          {FeatureProperty.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md shadow-blue-200 
              min-w-[320px] md:min-w-[380px] p-4"
            >

              <div className="relative w-full h-44 rounded-lg overflow-hidden">

                <span
                  className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 
                  rounded-sm shadow-md animate-slide-left animate-soft-slide"
                >
                  NEW LAUNCH
                </span>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = '/assets/fallback.jpg')}
                />
              </div>

              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-600">{item.location}</p>

              <p className="text-blue-600 text-lg font-bold mt-2">{item.price}</p>

              <div className="flex space-x-2 mt-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">RERA</span>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">HIRA</span>
              </div>

              <div className="my-4 border-t border-gray-200"></div>

              <p className="text-sm text-gray-700 flex items-center">
                <span className="text-blue-600 mr-2">📘</span>
                Get preferred options @zero brokerage
              </p>

              <a
                href={`/property/${item.id}`}
                className="block text-center bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg shadow-blue-300 w-10 h-10 
          rounded-full justify-center items-center hover:bg-blue-100 z-10"
        >
          <svg width="18" height="22" stroke="currentColor" fill="none" strokeWidth="3">
            <path d="M8 4l6 8-6 8" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default FeaturedList;
  