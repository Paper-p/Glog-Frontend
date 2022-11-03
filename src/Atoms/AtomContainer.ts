import { atom } from "recoil";

interface TagType {
  id: number;
  name: string;
}

export const loggedAtom = atom({
  key: "logged",
  default: false,
});

export const writeModalAtom = atom({
  key: "writeModal",
  default: false,
});

export const titleAtom = atom({
  key: "title",
  default: "",
});

export const contentAtom = atom({
  key: "content",
  default: "",
});

export const thumbnailUrlAtom = atom({
  key: "thumbnailUrl",
  default: "",
});

export const tagAtom = atom<TagType[]>({
  key: "tag",
  default: [],
});
