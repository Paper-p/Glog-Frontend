import { atom } from "recoil";

interface TagType {
  id: number;
  name: string;
}

export const loggedAtom = atom({
  key: "logged",
  default: false,
});

export const imageModalAtom = atom({
  key: "imageModal",
  default: false,
});

export const tagAtom = atom<TagType[]>({
  key: "tag",
  default: [],
});
