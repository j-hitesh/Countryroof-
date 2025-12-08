import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Commercial from "./Commercial";
import Residencial from "./Residencial";
import FeaturedList from "./FeaturedList";


const Banner = ({ setCity, searchText, setSearchText }) => {
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchText.toLowerCase().includes("gur")) setCity("Gurugram");
    else if (searchText.toLowerCase().includes("noi")) setCity("Noida");
    else setCity("Delhi"); 
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Commercial":
        return <Commercial />;

      case "Residencial":
      return <Residencial/>;
      
      case "FeaturedList":
      return <FeaturedList/>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full relative font-poppins min-h-[450px] sm:min-h-[550px]">

      <div className="relative h-[450px] sm:h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="
        absolute 
       -translate-y-1/2 left-1/2 -translate-x-1/2
      w-[92%] sm:w-[80%] md:w-[60%]
      bg-white shadow-2xl rounded-xl
      p-4 sm:p-6
      ">

        <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm sm:text-lg font-semibold mb-4 px-2">
          
          <button onClick={
               ()=> setActiveSection("Residencial")}
          className={`cursor-pointer ${
              activeSection === "Residencial" ? "text-blue-600" : "text-gray-700"
            }`}>
            Residencial
          </button>
          <button
            onClick={() => setActiveSection("Commercial")}
            className={`cursor-pointer ${
              activeSection === "Commercial" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Commercial
          </button>

          <button  onClick={() => setActiveSection("FeaturedList")}
            className={`cursor-pointer ${
              activeSection === "FeaturedList" ? "text-blue-600" : "text-gray-700"
            }`}>
            New Launch</button>
          
        </div>

       <div className="mt-2 flex items-center gap-2">
  <div className="relative w-full">
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="
        w-full border rounded-lg px-10 py-2 
        focus:outline-none font-medium
      "
      placeholder="Search properties like Delhi, Gurugram, Noida..."
    />

    <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-500"></i>

    {searchText.length > 0 && (
      <button
        onClick={() => {
          setSearchText("");
          setCity("Delhi"); 
        }}
        className="absolute right-3 top-2 text-gray-500 hover:text-black text-lg"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    )}
  </div>

  <button
    onClick={handleSearch}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-lg"
  >
    Search
  </button>
</div>
      </div>
       
      <div className="relative mt-[90px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Banner;
