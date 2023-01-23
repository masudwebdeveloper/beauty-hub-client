import React from "react";
import Banner from "./Banner/Banner";
import DermoBanner from "./Banner/DermoBanner";
import BestSellingProducts from "./BestSellingProducts";
import Categories from "./Categories";
import DemoGrid from "./DemoGrid";
import FeatureProducts from "./FeatureProducts";
import GiftExplore from "./GiftExplore/GiftExplore";
import NewArrival from "./NewArrival";
import Testimonal from "./Testimonal/Testimonal";
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
      {/* <DemoGrid></DemoGrid> */}
      <Testimonal></Testimonal>
      <GiftExplore></GiftExplore>
    </main>
  );
};

export default Home;
