import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import FeaturedList from '../Component/FeaturedList'
import HotDeals from '../Component/HotDeals'
import Reviews from '../Component/Review'
import ValueAddedServices from '../Component/ValueAddedServices'

const Home = () => {
  return (
    <div className=''>
          <Navbar/>
          <Banner/>
          <FeaturedList/> 
          <HotDeals/>
          <ValueAddedServices/>
          <Reviews/>
    </div>
  )
}

export default Home
