import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import BuyDelhi from "./BuyDelhi";
// import BuyNoida from "./BuyNoida";
import BuyGurugram from "../Component/BuyGurugram";

const Banner = () => {
  const images = [
    "https://countryroof.in/frontend/assets/images/banner/1.png",
    "https://countryroof.in/frontend/assets/images/banner/2.png",
    "https://countryroof.in/frontend/assets/images/banner/3.png",
    "https://countryroof.in/frontend/assets/images/banner/4.png",
    "https://countryroof.in/frontend/assets/images/banner/6.png",
  ];

  const [current, setCurrent] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (city) {
      case "Delhi":
        return <BuyDelhi />;
      case "Noida":
        return <BuyNoida />;
      case "Gurugram":
        return <BuyGurugram />;
      default:
        return <div className="text-center text-gray-500 mt-10">
          Please select a city
        </div>;
    }
  };

  return (
    <div className="w-full h-[450px] sm:h-[650px] relative">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="banner"
          className={`absolute inset-0 w-fit md:w-full md:h-[70%] h-[40%]
            object-cover transition-opacity duration-700 
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute top-[30%] md:top-[55%] sm:top-[60%] 
        left-1/2 -translate-x-1/2 w-[92%] sm:w-[75%] md:w-[60%]
        bg-white rounded-xl shadow-2xl p-4 sm:p-6">

        {/* Dropdown */}
        <div className="flex gap-4 mb-4">
          <select
            className="border px-3 py-2 rounded-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>

          <button className="cursor-pointer text-gray-700">Projects</button>

          <Link
            to="/Post"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Post Property
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border rounded-lg px-10 py-2 focus:outline-none"
              placeholder="Search property..."
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-500"></i>
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Search
          </button>
        </div>
      </div>

      {/* Dynamic Component Output */}
      <div className="mt-10 sm:mt-[40%]">{renderContent()}</div>
    </div>
  );
};

export default Banner;
