export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'REMOVE_ITEM';
export const PRICE_UPDATED = 'PRICE_UPDATED';
export const QUANTITY_UPDATED = 'QUANTITY_UPDATED';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: {
    uuid
  }
});

export const updatePrice = (uuid, price) => ({
  type: PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});

export const updateQuantity = (uuid, quantity) => ({
  type: QUANTITY_UPDATED,
  payload: {
    uuid,
    quantity
  }
});
