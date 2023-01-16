import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Categories></Categories>
      <FeatureProducts></FeatureProducts>
    </main>
  );
};

export default Home;
