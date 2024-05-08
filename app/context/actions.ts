export const setUser = (user: any) => {
  return { type: "SET_USER", payload: user };
};

export const setAccessToken = (token: string) => {
  return { type: "SET_ACCESS_TOKEN", payload: token };
};

export const removeAccessToken = () => ({
  type: "REMOVE_ACCESS_TOKEN",
});

export const removeUser = () => ({
  type: "REMOVE_USER",
});

export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
