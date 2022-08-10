import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/1stblock";
import FeaturesHome from "../partials/3rdblock";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/2ndblock";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <Testimonials />
        <FeaturesHome />
        {/* <FeaturesBlocks /> */}
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;