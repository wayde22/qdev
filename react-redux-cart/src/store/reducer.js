import { ADD_TO_CART, REMOVE_ITEM } from "./actions";

import robot from '../images/robot.jpeg'


const items = [
  {
    id: 1,
    itemName: 'shirt1',
    itemPrice: 1.00,
    image: robot,
  },
  {
    id: 2,
    itemName: 'shirt2',
    itemPrice: 2.00
  },
  {
    id: 3,
    itemName: 'shirt3',
    itemPrice: 3.00
  },
  {
    id: 4,
    itemName: 'shirt4',
    itemPrice: 4.00
  },
  {
    id: 5,
    itemName: 'shirt5',
    itemPrice: 5.00
  },
  {
    id: 1,
    itemName: 'shirt1',
    itemPrice: 1.00,
  },
  {
    id: 2,
    itemName: 'shirt2',
    itemPrice: 2.00
  },
  {
    id: 3,
    itemName: 'shirt3',
    itemPrice: 3.00
  },
  {
    id: 4,
    itemName: 'shirt4',
    itemPrice: 4.00
  },
];

const initialState = {
  items: items,
  cart: [],
  total: '',
};


export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
    console.log([...state.cart, action.payload])
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      case REMOVE_ITEM:
        const newCart = state.cart.filter( (item) => {
          return item.id !== action.payload.id
        })
        return {
          ...state,
          cart: newCart
        }
    default:
      return state;
  }
}