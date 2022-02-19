import React from "react";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import "../helper.css";

const Home = () => {
  return (
    <>
      {/* <div className="text-center">
        <AliceCarousel
          autoPlay
          disableButtonsControls
          infinite
          autoPlayInterval="4000"
        >
          <Link to="/category/adotmnzly">
            <div className="cover-image1"></div>
          </Link>
          <Link to="/category/kssortoghzlkmbyotr">
            <div className="cover-image2"></div>
          </Link>
          <Link to="/shop">
            <div className="cover-image3"></div>
          </Link>
        </AliceCarousel>
      </div> */}

      <h3 className="text-center p-3 mt-5 mb-5 display-4 home-background">
        <b>New Arrivals</b>
      </h3>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 home-background">
        <b> Best Sellers</b>
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 home-background">
        <b> Categories</b>
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 home-background">
        <b> Sub Categories</b>
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
