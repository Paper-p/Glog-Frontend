import { deletePostModalAtom, loggedAtom, MyLikeAtom, MyPostAtom } from "atoms";
import { PostBox } from "components/Common";
import Category from "components/Common/Category";
import PostIsNull from "components/PostIsNull";
import DeletePostModal from "components/Modal/DeletePostModal";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";
import * as I from "assets/svg";
import MyPost from "./MyPost";
import MyLikePost from "./MyLikePost";

export default function UserPropfile() {
  const params = useParams();
  const [isMine, setIsMine] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);
  const navigator = useNavigate();
  const [userInfo, setUserInfo] = useState<any>({});
  const [deletePostModal] = useRecoilState(deletePostModalAtom);
  const [myPost, setMyPost] = useRecoilState(MyPostAtom);
  const [myLike, setMyLike] = useRecoilState(MyLikeAtom);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res: any = await user.getUserInfo(
          JSON.parse(localStorage.getItem("token") || "{}").accessToken,
          String(params.nickname)
        );
        setIsMine(res.data.isMine);
        setUserInfo(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };
    getUserInfo();
  }, [params.ninkname]);

  useEffect(() => {
    if (isMine) {
      if (!logged) {
        navigator("/signin");
      }
    }
  }, [params.nickname]);

  const clickMyPost = () => {
    setMyPost(true);
    setMyLike(false);
  };

  const clickMyLike = () => {
    setMyPost(false);
    setMyLike(true);
  };

  return (
    <>
      <S.ProfileLayout>
        {deletePostModal && <DeletePostModal />}
        <S.ProfileBox>
          <S.ProfileImage src={userInfo.profileImageUrl} />
          <S.ProfileName>{userInfo.nickname}</S.ProfileName>
        </S.ProfileBox>
      </S.ProfileLayout>
      <S.MyPostsLayout>
        <S.CategoryBox>
          {isMine ? (
            <S.MyCategoryBox>
              <S.MyCategory clicked={myPost} onClick={clickMyPost}>
                💻내 게시물's
              </S.MyCategory>
              <S.MyCategory clicked={myLike} onClick={clickMyLike}>
                <I.Like /> 하트
              </S.MyCategory>
            </S.MyCategoryBox>
          ) : (
            <Category>
              {isMine
                ? "💻내 게시물's"
                : `💻 ${userInfo.nickname}님의 게시물's`}
            </Category>
          )}
        </S.CategoryBox>
        {myPost ? <MyPost /> : <MyLikePost />}
      </S.MyPostsLayout>
    </>
  );
}
