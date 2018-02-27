import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_ITEM,
  RECEIVE_ITEM
} from "../constants/App";

function requestItems() {
  return {
    type: REQUEST_ITEMS
  };
}

function receiveItems(data) {
  return {
    type: RECEIVE_ITEMS,
    payload: data
  };
}

function requestItem() {
  return {
    type: REQUEST_ITEM
  };
}

function receiveItem(data) {
  return {
    type: RECEIVE_ITEM,
    payload: data
  };
}

export function fetchItems(query) {
  return dispatch => {
    dispatch(requestItems());

    return fetch(`/api/items?query=${query}`)
      .then(res => res.json())
      .then(data => dispatch(receiveItems(data)))
      .catch(err => console.error("ERROR", err));
  };
}

export function fetchItem(id) {
  return dispatch => {
    dispatch(requestItem());

    return fetch(`/api/items/${id}`)
      .then(res => res.json())
      .then(data => dispatch(receiveItem(data)))
      .catch(err => console.error("ERROR", err));
  };
}
