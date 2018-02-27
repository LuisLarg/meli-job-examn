import React from "react";

import "../styles/SearchBox.css";

const SearchBox = ({ onSubmit, onInputChange, logoLink }) => (
  <div id="search-box">
    <form onSubmit={onSubmit}>
      <a className="logo" href={logoLink}>
        Mercado Libre Argentina - Donde comprar y vender de todo
      </a>
      <input
        type="text"
        onChange={onInputChange}
        placeholder="Nunca dejes de buscar"
      />
      <button type="submit">
        <i className="icon" />
      </button>
    </form>
  </div>
);

export default SearchBox;
