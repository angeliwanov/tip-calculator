import { ITEM_ADDED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const newItem = { uuid: id++, ...action.payload, quantity: 1 };
    return [...state, newItem];
  }
  return state;
};

export default reducer;
