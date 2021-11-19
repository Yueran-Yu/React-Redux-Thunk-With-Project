import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";


/*
when you actually make an async api call in your action creator,
you need to convert your action creator from a synchronous action creator to an asynchronous action creator.
This conversion can be possible if we use a middleware and that is where we are going to use redux thunk.
 */
export const fetchProducts = async () => {

  const response = await fakeStoreApi.get('/products')
  console.log(response)
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: response,
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};