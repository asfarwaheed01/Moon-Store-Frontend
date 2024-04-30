interface Action {
  type: string;
  payload?: any;
}

export const authReducer = (state: any, action: Action) => {
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  } else if (action.type === "SET_ACCESS_TOKEN") {
    return { ...state, accessToken: action.payload };
  } else if (action.type === "REMOVE_USER") {
    return { ...state, user: null };
  } else if (action.type === "REMOVE_ACCESS_TOKEN") {
    return { ...state, accessToken: null };
  } else {
    return state;
  }
};
