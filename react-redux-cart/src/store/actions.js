
export const ADD_TO_CART = 'ADD_TO_CART';
export const ITEMS_IN_CART = 'ITEMS_IN_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addToCart = (item) => ({ type: ADD_TO_CART, payload: item })
export const addItemsInCart = (item) => ({ type: ITEMS_IN_CART, payload: item })
export const addItemRemove = (item) => ({ type: REMOVE_ITEM, payload: item })
