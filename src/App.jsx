import React from "react";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Checkout from "./components/checkout/checkout.jsx";
import Video from "./components/video/video.jsx";
import Verify from "./components/verification/verify.jsx";
import Usage from "./components/usage/usage.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Checkout />
      <Video />
      <Verify />
      <Usage />
      <Footer />
    </>
  );
};

export default App;
