import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    "https://countryroof.in/frontend/assets/images/banner/1.png",
    "https://countryroof.in/frontend/assets/images/banner/2.png",
    "https://countryroof.in/frontend/assets/images/banner/3.png",
    "https://countryroof.in/frontend/assets/images/banner/4.png",
    "https://countryroof.in/frontend/assets/images/banner/6.png",
  ];

  const [current, setCurrent] = useState(0);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[450px] sm:h-[650px] overflow-hidden">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="banner"
          className={`absolute inset-0 w-full h-4/6 object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-60 md:top-90 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[60%] bg-white rounded-xl shadow-2xl p-4 sm:p-6">

        <ul className="flex gap-x-3 md:gap-x-10 lg:gap-x-20 text-sm sm:text-lg md:text-xl font-semibold px-15 lg:px-30">
          <li className={menu === "Buy" ? "text-red-700" : "text-blue-500 hover:text-red-500"}>
            <Link to="/Buy" onClick={() => setMenu("Buy")}>Buy</Link>
          </li>

          <li className={menu === "Sell" ? "text-red-700" : "text-blue-500 hover:text-red-500"}>
            <Link to="/Sell" onClick={() => setMenu("Sell")}>Sell</Link>
          </li>

          <li className={menu === "Commercial" ? "text-red-700" : "text-blue-500 hover:text-red-500"}>
            <Link to="/Commercial" onClick={() => setMenu("Commercial")}>Commercial</Link>
          </li>

          <li className={menu === "Projects" ? "text-red-700" : "text-blue-500 hover:text-red-500"}>
            <Link to="/Projects" onClick={() => setMenu("Projects")}>Projects</Link>
          </li>
        </ul>

        <div className="mt-5 flex items-center gap-2">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border rounded-lg px-10 py-2"
              placeholder="Search property..."
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-2 text-gray-500"></i>
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
