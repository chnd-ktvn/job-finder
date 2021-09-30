import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainHome from "../Components/MainHome"

const Home = () => {
  return (
    <div>
      <Header sticky="top" />
      <MainHome />
      <Footer fixed="bottom"/>
    </div>
  )
}
export default Home;