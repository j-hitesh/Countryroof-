import { useProperties } from "../Context/PropertyContext";
import { useRef, useState } from "react";

const ValueAddedServices = () => {
  const { properties } = useProperties();
  const sliderRef = useRef(null);
  const [showDes, setShowDes ] = useState(false)

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  const desc = properties.filter((p) => p.description); 

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-20 mt-10 bg-blue-200 rounded-3xl mb-10 pt-6 pb-10">
      
      <h2 className="text-xl font-bold text-gray-900 mb-4">Value-Added Services</h2>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 
          rounded-full justify-center items-center hover:bg-red-200 z-10"
        >
          <svg width="18" height="20" stroke="currentColor" fill="none" strokeWidth="3">
            <path d="M12 4l-6 8 6 8" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-5 py-2"
        >
          {desc.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md min-w-[300px] md:min-w-[360px] p-3"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = '/assets/fallback.jpg')}
                />
              </div>

              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.location}</p>

              <p className="text-gray-500 text-sm">{item.price}</p>
              <button
                onClick={() => setShowDes(prev => !prev)}
                className="text-lg text-blue-600 mt-2"
              >
                Description
              </button>

              {showDes && (
                <p className="text-gray-600 text-sm mt-2 shadow-2xl bg-red-200 w-fill
                 px-5 py-2 rounded-xl">{item.description}</p>
              )}

              <a
                href={`/property/${item.id}`}
                className="block text-center bg-red-600 text-white py-2 mt-3 rounded-md hover:bg-red-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 
          rounded-full justify-center items-center hover:bg-red-200 z-10"
        >
          <svg width="18" height="22" stroke="currentColor" fill="none" strokeWidth="3">
            <path d="M8 4l6 8-6 8" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default ValueAddedServices;
