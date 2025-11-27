import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  // const [showMenuBar, setShowMenuBar] = useState(false);
   const [open, setOpen] = useState(false);
   const [opensell,setOpensell] = useState(false);

  const menushow = () => {
    setShowMenuBar((prev) => !prev);
  };

  return (
    
      <div className="flex justify-between w-full h-15 sm:h-auto bg-transparent px-4 py-4 top-0 z-1 absolute font-Open-Sans">
        <div className="w-1/3 md:w-1/8">
          <Link to="/">
        <img src="https://countryroof.in/upload/logo/1819668946722953.png" 
        alt="InfoBirth log" 
          />
          </Link>
        </div>
        
         <div className="flex md:gap-x-30">

          {/* <ul
          className={`absolute top-12 right-0 shadow-xl shadow-gray-400 rounded-r-lg pt-5 px-5 w-64 text-2xl transition-all duration-300 
            ${showMenuBar ? "h-screen bg-white sm:hidden" : "hidden"}`}
        >
          <li
            onClick={() => setMenu("Buy")}
            className={menu === "Buy" ? "text-blue-500" : "text-black hover:text-red-500"}
          >
            <Link to="Buy">
              <button onClick={menushow}>Buy</button>
            </Link>
          </li>
           <li
            onClick={() => setMenu("Sell")}
            className={menu === "Sell" ? "text-blue-500" : "text-black hover:text-red-500"}
          >
            <Link to="Sell">
              <button onClick={menushow}>Sell</button>
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={menu === "Projects" ? "text-blue-500" : " text-black hover:text-red-500"}
          >
            <Link to="/Projects">
              <button onClick={menushow}>Projects</button>
            </Link>
          </li>

          <li
            onClick={() => setMenu("News")}
            className={menu === "News" ? "text-blue-500" : "text-black hover:text-red-500"}
          >
            <Link to="/News">
              <button onClick={menushow}>News</button>
            </  Link>
          </li>
           <li
            onClick={() => setMenu("Buy")}
            className={menu === "Buy" ? "text-blue-500" : "hover:text-red-500"}
          >
            <Link to="">
              <button onClick={menushow}>City Selector</button>
            </Link>
          </li>
          <li className="pt-100 text-lg">
             <h4>Contact Info</h4>
                    <ul className="text-black">
                        <li>IRIS Tech Park, Unit No. 407</li>
                        <li><a href="tel:9355500043">+91-9355500043</a></li>
                        <li><a href="mailto:info@countryroof.in">info@countryroof.in</a></li>
                    </ul>
          </li>
           
        </ul> */}

        
        <ul className="sm:flex gap-x-10 text-md lg:text-2xl sm:text-xl hidden">
          <li
            onClick={() => setOpen(!open)}
            className={`cursor-pointer ${open ? "text-red-700 text-lg" : "text-gray-600 hover:text-red-500"}`}
          >
          For Buy
          </li>
            
              {open && (
            <div className="flex mt-20 left-30 absolute gap-x-50 shadow-2xl w-5/6 px-20 h-70 py-15 rounded-lg bg-white">
              {/* <Link to="/Buy" onClick={() => { menushow(); setOpen(false); }}>Buy</Link><br />
              <Link to="/Sell" onClick={() => { menushow(); setOpen(false); }}>Sell</Link> */}
              <ul className="text-black text-xs">
               <li className="text font-extralight">
                PROPERTIES IN GURUGRAM
               </li>
               <li className="font-semibold pt-1"><a href="#">Flats</a></li>      
               <li className="font-semibold"><a href="#">Builder Floor</a></li>
               <li className="font-semibold"><a href="#">Plot in Gurugram</a></li>
               <li className="font-semibold"><a href="#">Serviced Apartments</a></li>
               {/* <li><a href="#"></a></li> */}

              </ul>
              <ul className="text-black text-sm">
                  <li className="text-sm text font-extralight">
                    POPULAR SEARCHES
                  </li>
                  <li className="font-semibold pt-1"><a href="#">Property in Gurugram</a></li>
                  <li className="font-semibold"><a href="#">Verified Property in Gurugram</a></li>
                  <li className="font-semibold"><a href="#">New Projects in Gurugram</a></li>
              </ul>
              <div className="bg-blue-100 rounded-lg w-80 h-50 px-4 pt-8">
               {/* <img src="" alt="arrow" /> */}
                <div className="flex gap-x-3">
                <img src="https://static.99acres.com/universalapp/img/deskIn.png" alt="Insights logo" />
                 <div>
                  <h2 className="text-blue-500 text-sm">Insights</h2>
                  <h6 className="text-black text-xl font-bold">INTRODUCING</h6>
                 </div>
                </div>
                 <ul className="text-sm text-gray-600 pt-3 px-3 ">
                  <li>Understand localities</li>
                  <li>read Resident Reviews </li>
                  <li> Check Price Trends</li>
                  <li>Tools, Utilities& more</li>
                 </ul>
                
              </div>
            </div>
          )}

           <li
            onClick={() => setOpensell(!opensell)}
            className={`cursor-pointer ${opensell ? "text-red-700 text-lg" : "text-gray-600 hover:text-red-500"}`}
          >
          For Sell
          </li>
           
            {opensell && (
            <div className="flex mt-20 right-30 absolute gap-x-20 shadow-2xl w-3/6 px-20 h-70 py-12 rounded-lg bg-white">
              {/* <Link to="/Buy" onClick={() => { menushow(); setOpen(false); }}>Buy</Link><br />
              <Link to="/Sell" onClick={() => { menushow(); setOpen(false); }}>Sell</Link> */}
              <ul className="text-black text-xs">
               <li className="text font-extralight">
                OWNER OFFERINGS
               </li>
               <li className="font-semibold pt-4">
                <Link to="/Post">
                Post Property
                </Link>
                </li>      
               <li className="font-semibold pt-0.5"><a href="#">Owner Property</a></li>
               <li className="font-semibold pt-0.5"><a href="#">Owner Service</a></li>
               <li className="font-semibold pt-0.5"><a href="#">View Response</a></li>
               {/* <li><a href="#"></a></li> */}

              </ul>
             
              <div className="rounded-lg w-80 h-50 px-4 pt-8 bg-[linear-gradient(291deg,_#C0E1D0_1.54%,_#FDFCF6_103.38%)]">
               {/* <img src="" alt="arrow" /> */}
                <h1 className="text-base font-bold text-black">
                  Sell or rent faster at the right price!
                </h1>
                 <p className="text-sm font-normal text-black">
                  List your property now for free
                 </p>

                <div className="flex gap-x-10">
                <button>
                  <Link to = "/Post"
                  className="bg-blue-500 rounded-lg font-semibold text-base px-2 py-3 italic ">
                    Post Property
                  </Link>
                </button>
                <img src="https://www.99acres.com/universalapp/img/hp_ppf_banner.png" alt="Insights logo" className="w-1/4"/>
                </div>
                                
              </div>
            </div>
          )}

          <li className={menu === "News" ? "text-red-700" : "text-gray-600 hover:text-red-500"}>
            <a href="https://countryroof.in/blog">News</a>
          </li>

           {/* <li
            onClick={() => setMenu("Projects")}
            className={menu === "Projects" ? "text-red-700" : "text-blue-500 hover:text-red-500"}
          >
            <Link to="/Projects">Projects</Link>
          </li>

          <li
            onClick={() => setMenu("City")}
            className={menu === "News" ? "text-red-700" : "text-blue-500 hover:text-red-500"}
          >
            <Link to="/City">City Selector</Link>
          </li> */}
           
          </ul>
         <div className="bg-blue-300 px-1 py-2 pb-4 pt-1 mr-1 md:py-2 rounded animate-bounce">
               <Link 
              to="/post" 
                 className="font-medium relative inline-block hover:text-blue-500"
                   >
                   Post Property
                  </Link>

            </div> 

            <button onClick={menushow} className="block sm:hidden">
              <i className="fa-solid fa-bars text-2xl text-black"></i>
            </button>

         </div>
      </div>

  );
};

export default Navbar;
 