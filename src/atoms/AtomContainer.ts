import { UserInfoInterface } from "interfaces/UserInfoInterface";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DEFAULT_PROFILE_IMAGE } from "shared/config";
import { TagType } from "types/WritePostType";
const { persistAtom } = recoilPersist();

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

export const editProfileModalAtom = atom({
  key: "editProfileModal",
  default: false,
});

export const logoutModalAtom = atom({
  key: "logoutModal",
  default: false,
});

export const deletePostId = atom({
  key: "postId",
  default: 0,
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

export const myInfoAtom = atom<UserInfoInterface>({
  key: "myInfo",
  default: {
    nickname: "",
    profileUrl: DEFAULT_PROFILE_IMAGE,
  },
});
