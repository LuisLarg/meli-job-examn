export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const REQUEST_ITEM = "REQUEST_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const parseCondition = raw => {
  return raw === "new" ? "Nuevo" : raw === "used" ? "Usado" : "";
};

export const formatPrice = priceObj => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: priceObj.currency
  })
    .format(priceObj.amount)
    .slice(0, -3);
};
