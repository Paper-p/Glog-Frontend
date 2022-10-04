import { atom } from "recoil";

export const loggedAtom = atom({
  key: "logged",
  default: false,
});
