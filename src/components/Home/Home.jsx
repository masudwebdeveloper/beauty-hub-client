import React from "react";
import Banner from "./Banner/Banner";
import DermoBanner from "./Banner/DermoBanner";
import BestSellingProducts from "./BestSellingProducts";
import Categories from "./Categories";
import FeatureProducts from "./FeatureProducts";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Categories></Categories>
      <FeatureProducts></FeatureProducts>
      <NewArrival></NewArrival>
      <DermoBanner></DermoBanner>
      <BestSellingProducts></BestSellingProducts>
    </main>
  );
};

export default Home;
