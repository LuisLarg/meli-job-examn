import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_ITEM,
  RECEIVE_ITEM
} from "../constants/App";

const initialState = {
  isFetchingItems: false,
  isFetchingItem: false,
  items: [],
  item: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {
        ...state,
        isFetchingItems: true
      };

    case RECEIVE_ITEMS:
      const items = action.payload;

      return {
        ...state,
        items,
        isFetchingItems: false
      };

    case REQUEST_ITEM:
      return {
        ...state,
        isFetchingItem: true
      };

    case RECEIVE_ITEM:
      const item = action.payload;

      return {
        ...state,
        item,
        isFetchingItem: false
      };

    default:
      return state;
  }
}
