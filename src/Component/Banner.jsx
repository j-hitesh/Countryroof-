import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Commercial from "./Commercial";

const Banner = () => {
  const images = [
    "https://countryroof.in/frontend/assets/images/banner/1.png",
    "https://countryroof.in/frontend/assets/images/banner/2.png",
    "https://countryroof.in/frontend/assets/images/banner/3.png",
    "https://countryroof.in/frontend/assets/images/banner/4.png",
    "https://countryroof.in/frontend/assets/images/banner/6.png",
  ];

  const [current, setCurrent] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
        case "Commercial":
         return <Commercial/>;
    }
  };

  return (
    <div className="w-full h-[450px] sm:h-[650px]">

       {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="banner"
          className={`absolute inset-0 w-fit md:w-full md:h-[70%] h-[40%] object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
         />
      ))}

      <div className="absolute top-[30%] md:top-[55%] sm:top-[60%] left-1/2 -translate-x-1/2 w-[92%] sm:w-[75%] md:w-[60%] bg-white rounded-xl shadow-2xl p-4 sm:p-6">

        
        <div className="flex flex-wrap gap-y-4 gap-x-10 px-2 md:px-25 text-sm sm:text-lg font-semibold mb-4">
          {/* <button
            onClick={() => setActiveSection("buy")}
            className={`cursor-pointer ${
              activeSection === "buy" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Buy
          </button> */}
{/* 
          <button
            onClick={() => setActiveSection("sell")}
            className={`cursor-pointer ${
              activeSection === "sell" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Sell
          </button> */}
          
           <button onClick={()=> setActiveSection("Commercial")}
             className={`cursor-pointer ${
              activeSection === "Commercial" ? "text-blue-600" : "text-gray-700"
            }`}>
            Commercial
           </button>
          <button className="cursor-pointer text-gray-700">
            Projects
          </button>
          <Link
            to="/Post"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Post Property
          </Link>
        </div>

        {/* Search Input */}
        <div className="mt-4 flex items-center gap-2">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border rounded-lg px-10 py-2 focus:outline-none"
              placeholder="Search property..."
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-500"></i>
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-lg">
            Search
          </button>
        </div>
      </div>

            <div className="mt-10 sm:mt-[40%]">{renderContent()}</div>
    </div>
  );
};

export default Banner;
