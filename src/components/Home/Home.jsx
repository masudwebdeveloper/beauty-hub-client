import React from "react";
import Banner from "./Banner/Banner";
import DermoBanner from "./Banner/DermoBanner";
import BestSellingProducts from "./BestSellingProducts";
import Categories from "./Categories";
import FeatureProducts from "./FeatureProducts";
import NewArrival from "./NewArrival";
import Treatments from "./Treatments";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Categories></Categories>
      <FeatureProducts></FeatureProducts>
      <NewArrival></NewArrival>
      <DermoBanner></DermoBanner>
      <BestSellingProducts></BestSellingProducts>
      <Treatments></Treatments>
    </main>
  );
};

export default Home;
