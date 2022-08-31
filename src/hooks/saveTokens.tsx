const saveTokens = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export default saveTokens;
