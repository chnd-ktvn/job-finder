import React from "react";
import HeaderCollapse from "../Components/Header-Collapse";
import Footer from "../Components/Footer";
import CardList from "../Components/CardList";

const Search = () => {
  return (
    <div>
      <HeaderCollapse sticky="top" />
      <CardList />
      <Footer fixed="bottom" />
    </div>
  )
}
export default Search;