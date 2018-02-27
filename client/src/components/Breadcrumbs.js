import React from "react";

import "../styles/Breadcrumbs.css";

const Breadcrumbs = ({ categories }) => (
  <div id="breadcrumb">
    {categories.map((category, i) => {
      return (
        <p key={i}>{category + (categories.length === i + 1 ? "" : " >")}</p>
      );
    })}
  </div>
);

export default Breadcrumbs;
