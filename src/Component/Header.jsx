import { Link } from "react-router-dom"
import { useState } from "react";

const Header = () => {
  const [opensell, setOpensell] = useState(false);

  return (
    <div className="fixed bg-white px-10 h-18 py-3"> 
      <div className="flex justify-around pr-10">
        <Link to="/">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            alt="Country Roof"
            className="w-1/8"
          />
        </Link>

        <button
          onClick={() => setOpensell(!opensell)}
          className={`cursor-pointer ${opensell ? "text-red-700 text-lg" : "text-blue-400 hover:text-red-500 text-xl font-Poppins"}`} 
          style={{
            display: "flex"
          }}
        >
        <i className="fa-regular fa-user relative text-2xl"  > 
        </i>
          <i className="fa-solid fa-circle absolute text-[8px] text-red-500 right-21 top-1.1 animate-ping inline-flex opacity-75"></i>
        </button>

        {opensell && (
          <div className="flex mt-10 right-6 absolute shadow-2xl w-60 px-10 h-70 py-5 rounded-lg bg-blue-100">
            <div>
              <ul className="text-lg font-Poppins font-medium ">
                <li className="hover:text-blue-500">My Activity</li>
                <li className="hover:text-blue-500">Plot </li>
                <li className="hover:text-blue-500"><Link to="/">
                <a href="#newlaunch">New Launch</a>
                </Link>
                  </li>
                 <li className="hover:text-blue-500 pb-2"> Upcomming Projects </li>
              </ul>
              <hr style={
                {
                  opacity:"30%"
                }
              }/>
               <h1 className="pt-1">My Profile</h1>
              <button className="bg-red-500 text-white mt-6 px-3 py-2 rounded-lg text-sm  font-light font-Poppins">
                Login/sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
