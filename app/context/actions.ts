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
