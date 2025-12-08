import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import FeaturedList from '../Component/FeaturedList';
import HotDeals from '../Component/HotDeals';
import Reviews from '../Component/Review';
import ValueAddedServices from '../Component/ValueAddedServices';
import { useState } from 'react';
import BuyDelhi from '../Component/BuyDelhi';
import BuyGurugram from '../Component/BuyGurugram';
import BuyNoida from '../Component/BuyNoida';


const Home = () => {
  const [city, setCity] = useState("Delhi");
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar city={city} setCity={setCity} />
      <Banner city={city} setCity={setCity} searchText={searchText} setSearchText={setSearchText} />
      {city === "Delhi" && <BuyDelhi setSearchText={setSearchText} /> }
      {city === "Gurugram" && <BuyGurugram setSearchText={setSearchText} />}
      {city === "Noida" && <BuyNoida setSearchText={setSearchText} />}
     <FeaturedList />
      <HotDeals />
      <ValueAddedServices />
      <Reviews />
    </div>
  );
};

export default Home
