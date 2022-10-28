import { atom } from "recoil";

export const loggedAtom = atom({
  key: "logged",
  default: false,
});

export const imageModalAtom = atom({
  key: "imageModal",
  default: false,
});
