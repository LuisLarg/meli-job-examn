import React from "react";
import { parseCondition, formatPrice } from "../constants/App";

import "../styles/ItemList.css";

const Item = ({ data, onClick }) => (
  <div id="item">
    <div className="container" onClick={onClick}>
      <img src={data.picture} alt={data.title} />
      <div className="info">
        <p className="price">
          {formatPrice(data.price)} <i className="shipping" />
        </p>
        <p className="description">{data.title}</p>
        <p className="status">{parseCondition(data.condition)}</p>
      </div>
      <p className="location">{data.state}</p>
    </div>

    <div className="line" />
  </div>
);

const ItemList = ({ items, onClickItem }) => (
  <div id="item-list">
    {items.map(item => {
      return (
        <Item data={item} key={item.id} onClick={() => onClickItem(item.id)} />
      );
    })}
  </div>
);

export default ItemList;
