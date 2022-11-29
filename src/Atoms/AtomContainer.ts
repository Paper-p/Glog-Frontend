import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

interface TagType {
  id: number;
  name: string;
}

export const loggedAtom = atom({
  key: "logged",
  default: false,
  effects_UNSTABLE: [persistAtom], //새로고침시에도 데이터유지
});

export const writeModalAtom = atom({
  key: "writeModal",
  default: false,
});

export const commentIdAtom = atom({
  key: "commentId",
  default: 0,
});

export const removeCommentModalAtom = atom({
  key: "removeCommentModal",
  default: false,
});

export const deletePostModalAtom = atom({
  key: "deletePostModal",
  default: false,
});

export const titleAtom = atom({
  key: "title",
  default: "",
});

export const contentAtom = atom<any>({
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

export const searchAtom = atom({
  key: "search",
  default: "",
});
