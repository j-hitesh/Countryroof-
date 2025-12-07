import { useRef } from "react";
import { useProperties } from "../Context/PropertyContext";

export default function BuyDelhi() {
  const { properties } = useProperties();
  const buyList = properties.filter((p) => p.location === "Delhi");

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-15 font-poppins">
      <h2 className="text-2xl font-semibold mb-6">Properties in Delhi</h2>

      <div className="sm:hidden flex overflow-x-auto gap-4 pb-4 scroll-smooth">
        {buyList.map((item) => (
          <div
            key={item.id}
            className="min-w-[260px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={item.image} className="w-full h-40 object-cover" />
            <div className="p-3">
              <p className="text-blue-600 text-lg font-bold mt-1">{item.price}</p>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.feature}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block relative">

        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 
          bg-white shadow-md w-10 h-10 flex items-center justify-center 
          rounded-full text-xl hover:bg-gray-100 z-20"
        >
         <i class="fa-solid fa-angle-left"></i>
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-4 scroll-smooth no-scrollbar"
        >
          {buyList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition 
              min-w-[33%] max-w-[33%] h-[70vh]"
            >
              <img
                src={item.image}
                className="w-full h-75 object-cover"
                alt={item.title}
              />

              <div className="p-4">
                <p className="text-blue-600 text-xl font-bold mt-2">
                  {item.price}
                </p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.feature}</p>


                <a
                  href={`/property/${item.id}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 
          bg-white shadow-md w-10 h-10 flex items-center justify-center 
          rounded-full text-xl hover:bg-gray-100 z-20"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

      </div>
    </div>
  );
}
