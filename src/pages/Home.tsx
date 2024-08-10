import Advantages from "../components/Home/Advantages/Advantages"
import Hero from "../components/Home/Hero/Hero"
import OfferBanner from "../components/Home/OfferBanner/OfferBanner"
import PopularThings from "../components/Home/PopularThings/PopularThings"
import PopularTours from "../components/Home/PopularTours/PopularTours"
import TopTrending from "../components/Home/TopTrending/TopTrending"
import TrendingDestinations from "../components/Home/TrendingDestinations/TrendingDestinations"

const Home = () => {
  return (
    <>
    <Hero/>
    <Advantages/>
    <TrendingDestinations/>
    <PopularTours/>
    <PopularThings/>
    <OfferBanner/>
    <TopTrending/>
    </>
  )
}

export default Home