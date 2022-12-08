import {
  deletePostModalAtom,
  editProfileModalAtom,
  logoutModalAtom,
} from "atoms";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import * as S from "./style";
import * as I from "assets/svg";
import Category from "components/Common/Category";
import DeletePostModal from "components/Modal/DeletePostModal";
import EditProfileModal from "components/Modal/EditProfileModal";
import LogoutModal from "components/Modal/LogoutModal";
import Page404 from "components/NotFound";
import user from "data/request/user";
import { DEFAULT_PROFILE_IMAGE } from "shared/config";
import UserPost from "../UserPost";
import MyLikePost from "../MyLikePost";
import UserProfilePageSkeleton from "../Skeleton";
import TokenService from "util/TokenService";
import Header from "components/Common/Header";

type PostType = "내 게시물" | "좋아요 한 게시물";

export default function UserPropfile() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>(DEFAULT_PROFILE_IMAGE);
  const [isMine, setIsMine] = useState<boolean>(false);
  const [, setPostsNull] = useState<boolean>(false);
  const [is404, setIs404] = useState<boolean>(false);
  const [postType, setPostType] = useState<PostType>("내 게시물");
  const params = useParams();

  const [logoutModal, setLogoutModal] = useRecoilState(logoutModalAtom);
  const [deletePostModal] = useRecoilState(deletePostModalAtom);
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);

  useEffect(() => {
    const getUserInfo = async () => {
      setIsLoading(true);
      try {
        const res: any = await user.getUserInfo(
          TokenService.getLocalAccessToken(),
          String(params.nickname)
        );

        setProfileImg(res.data.profileImageUrl);
        setIsMine(res.data.isMine);
        setUserInfo(res.data);
        setIsLoading(false);

        if (res.data.feedList.length === 0) {
          setPostsNull(true);
        }
      } catch (e: any) {
        if (e.response.status === 404) {
          setIs404(true);
        }
      }
    };
    getUserInfo();
  }, [params.nickname, params.ninkname]);

  const clickMyPost = () => {
    setPostType("내 게시물");
  };

  const clickMyLike = () => {
    setPostType("좋아요 한 게시물");
  };

  return (
    <>
      <Header />
      {is404 ? (
        <Page404 />
      ) : (
        <>
          <S.ProfileLayout>
            {logoutModal && <LogoutModal />}
            {deletePostModal && <DeletePostModal />}
            {editProfileModal && (
              <EditProfileModal
                userImage={userInfo.profileImageUrl}
                nickname={userInfo.nickname}
              />
            )}
            <S.ProfileBox>
              <S.ProfileImage src={profileImg} />
              <S.ProfileName>{userInfo.nickname}</S.ProfileName>
              {isMine && (
                <>
                  <S.EditProfileButton
                    onClick={() => setEditProfileModal(true)}
                  >
                    프로필 변경하기
                  </S.EditProfileButton>
                  <S.Logout onClick={() => setLogoutModal(true)}>
                    로그아웃
                  </S.Logout>
                </>
              )}
            </S.ProfileBox>
          </S.ProfileLayout>
          <S.UserPostsLayout>
            <S.CategoryBox>
              {isMine ? (
                // 마이페이지일때
                <S.MyCategoryBox>
                  <S.MyCategory
                    clicked={postType === "내 게시물"}
                    onClick={clickMyPost}
                  >
                    💻내 게시물's
                  </S.MyCategory>
                  <S.MyCategory
                    clicked={postType === "좋아요 한 게시물"}
                    onClick={clickMyLike}
                  >
                    <I.Like /> 하트
                  </S.MyCategory>
                </S.MyCategoryBox>
              ) : (
                <Category>{`💻 ${userInfo.nickname}님의 게시물's`}</Category>
              )}
            </S.CategoryBox>
            {isLoading && <UserProfilePageSkeleton />}
            {postType === "내 게시물" && <UserPost />}
            {postType === "좋아요 한 게시물" && <MyLikePost />}
          </S.UserPostsLayout>
        </>
      )}
    </>
  );
}
