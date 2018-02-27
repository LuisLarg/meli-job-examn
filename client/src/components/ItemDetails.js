import React from "react";
import { parseCondition, formatPrice } from "../constants/App";

import "../styles/ItemDetails.css";

const ItemDetails = ({ item }) => (
  <div id="item-details">
    <div className="top">
      <div className="image">
        <img src={item.picture} alt="" />
      </div>
      <div className="info">
        <div className="status">
          {parseCondition(item.condition)} - {item.sold_quantity}
        </div>
        <div className="title">{item.title}</div>
        <div className="price">{formatPrice(item.price)}</div>
        <button>Comprar</button>
      </div>
    </div>
    <div className="bottom">
      <div className="desc-title">Descripcion del Producto</div>

      <div className="desc-text">{item.description}</div>
    </div>
  </div>
);

export default ItemDetails;
