export const saveTokens = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getTokens = (key: string) => {
  return window.localStorage.getItem(key);
};
