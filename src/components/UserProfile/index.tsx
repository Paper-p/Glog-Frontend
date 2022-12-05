import { deletePostModalAtom, loggedAtom, MyPostAtom } from "atoms";
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
  const [myPost] = useRecoilState(MyPostAtom);
  const [deletePostModal] = useRecoilState(deletePostModalAtom);

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

  return (
    <>
      <S.ProfileLayout>
        {deletePostModal && <DeletePostModal />}
        <S.ProfileBox>
          <S.ProfileImage src={userInfo.profileImageUrl} />
          <S.ProfileName>{userInfo.nickname}</S.ProfileName>
        </S.ProfileBox>
      </S.ProfileLayout>
      {myPost ? <MyPost /> : <MyLikePost></MyLikePost>}
    </>
  );
}
