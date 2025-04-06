import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Advantages from "../components/Home/Advantages/Advantages";
import Hero from "../components/Home/Hero/Hero";
import OfferBanner from "../components/Home/OfferBanner/OfferBanner";
import PopularThings from "../components/Home/PopularThings/PopularThings";
import PopularTours from "../components/Home/PopularTours/PopularTours";
import TopTrending from "../components/Home/TopTrending/TopTrending";
import TrendingDestinations from "../components/Home/TrendingDestinations/TrendingDestinations";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 120,
      easing: "ease-in-out",
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div data-aos="fade-down">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Advantages />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TrendingDestinations />
      </div>

      <div data-aos="fade-right" data-aos-delay="100">
        <PopularTours />
      </div>

      <div data-aos="fade-left" data-aos-delay="100">
        <PopularThings />
      </div>

      <div data-aos="fade-down" data-aos-delay="200">
        <OfferBanner />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TopTrending />
      </div>
    </>
  );
};

export default Home;
