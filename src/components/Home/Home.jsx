import React from "react";
import Banner from "./Banner/Banner";
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
    </main>
  );
};

export default Home;
