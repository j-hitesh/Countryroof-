import { Link } from "react-router-dom"
import { useState } from "react";


const Header = () => {
  const [city, setCity] = useState("");
   const renderContent = () => {
    switch (city) {
      case "Delhi":
        return <BuyDelhi />;
      case "Noida":
        return <BuyNoida />;
      case "Gurugram":
        return <BuyGurugram />;
        case "Commercial":
          return <Commercial/>;
      default:
        return <BuyDelhi/>
    }
  };
  return (
    <div className=""> 
      {/* <div>
        <Link to="/">
        <img src="https://countryroof.in/upload/logo/1819668946722953.png" alt="Country Roof" />
        
        </Link>
         <div className="flex items-center gap-2">
          <select
            className="border px-3 py-2 rounded-lg font-Poppins text-blue-400 font-medium"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
              <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>
          <div className="relative w-full ">
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
      </div> */}
      {/* <div className="mt-10 sm:mt-[40%]">{renderContent()}</div> */}
    </div>
  )
}

export default Header
