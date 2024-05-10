interface Action {
  type: string;
  payload?: any;
}
// import { SET_CART, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actions";

// export const authReducer = (state: any, action: Action) => {
//   if (action.type === "SET_USER") {
//     return { ...state, user: action.payload };
//   } else if (action.type === "SET_ACCESS_TOKEN") {
//     return { ...state, accessToken: action.payload };
//   } else if (action.type === "REMOVE_USER") {
//     return { ...state, user: null };
//   } else if (action.type === "REMOVE_ACCESS_TOKEN") {
//     return { ...state, accessToken: null };
//   } else {
//     return state;
//   }
// };

// reducers.ts
import { SET_CART, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actions";

type CartItem = {
  productId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
};

export const authReducer = (state: any, action: Action) => {
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  } else if (action.type === "SET_ACCESS_TOKEN") {
    return { ...state, accessToken: action.payload };
  } else if (action.type === "REMOVE_USER") {
    return { ...state, user: null };
  } else if (action.type === "REMOVE_ACCESS_TOKEN") {
    return { ...state, accessToken: null };
  } else if (action.type === SET_CART) {
    return { ...state, cart: action.payload };
  } else if (action.type === ADD_TO_CART) {
    console.log("Add to cart");
    const existingItemIndex = state.cart.findIndex(
      (item: any) => item.product._id === action.payload.product._id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...state.cart];
      console.log({ updatedCart });
      console.log(updatedCart[existingItemIndex].quantity++);
      console.log(updatedCart);
      return { ...state, cart: updatedCart };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
  } else if (action.type === REMOVE_FROM_CART) {
    const updatedCart = state.cart.filter(
      (item: CartItem) => item.productId !== action.payload
    );
    return { ...state, cart: updatedCart };
  } else if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  } else {
    return state;
  }
};
