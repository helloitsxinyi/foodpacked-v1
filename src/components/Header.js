import React from "react";

const Header = ({ tagline }) => (
  <section id="header" className="foodpacked-header">
    <h1>FoodPacked</h1>
    {/* <h3>
      <span>{tagline}</span>
      {/* no "this" in function */}
    {/* </h3> */}
  </section>
);

export default Header;
