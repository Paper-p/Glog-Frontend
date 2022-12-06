import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import React, { useState } from "react";
import InfoBox from "./Common";
import * as I from "assets/svg";
import { useRecoilState } from "recoil";
import { deletePostId, deletePostModalAtom } from "atoms";

interface Props {
  isDefault: boolean;
  id?: number;
  imageUrl: string;
  title: string;
  content: string;
  like: number;
  view: number;
  isMine?: boolean;
  isPreview?: boolean;
  inUserPage?: boolean;
}

function PostBox({
  isDefault,
  id,
  imageUrl,
  title,
  content,
  like,
  view,
  isMine,
  isPreview,
  inUserPage,
}: Props) {
  const [modify, setModify] = useState<boolean>(false);
  const [, setDeletePostModal] = useRecoilState(deletePostModalAtom);
  const [postId, setPostId] = useRecoilState(deletePostId);
  const navigate = useNavigate();
  const onDeletePost = () => {
    setDeletePostModal(true);
    setPostId(Number(id));
  };

  const onEditPost = () => {
    navigate("/write", {
      state: {
        id: id,
      },
    });
  };

  return (
    <React.Fragment>
      <S.PostBoxLayout isPreview={isPreview}>
        <div>
          {isDefault ? (
            <Link to={`post/${id}`}>
              <S.PostBox url={imageUrl} className="preview">
                <S.PostTitle className="default">{title}</S.PostTitle>
                <S.PostContent className="default">{content}</S.PostContent>
                <S.InfoBox>
                  <InfoBox like={like} hit={view} />
                </S.InfoBox>
              </S.PostBox>
            </Link>
          ) : (
            <S.PostBox inUserPage={inUserPage} className="not-default">
              <Link to={`/post/${id}`}>
                <S.Thumbnail src={imageUrl} />
              </Link>
              <S.TextBox>
                <Link to={`/post/${id}`}>
                  <S.PostTitle>{title}</S.PostTitle>
                </Link>
                <Link to={`/post/${id}`}>
                  <S.PostContent>{content}</S.PostContent>
                </Link>
                <S.PostFooter>
                  <InfoBox like={like} hit={view} />
                  {isMine ? (
                    <S.ModifyBox modify={modify}>
                      <div>
                        <S.Modify onClick={onEditPost}>수정</S.Modify>
                        <S.Delete onClick={onDeletePost}>삭제 </S.Delete>
                      </div>
                      <S.KebobBox
                        onClick={() => {
                          setModify(!modify);
                        }}
                      >
                        <I.Kebob />
                      </S.KebobBox>
                    </S.ModifyBox>
                  ) : (
                    <></>
                  )}
                </S.PostFooter>
              </S.TextBox>
            </S.PostBox>
          )}
        </div>
      </S.PostBoxLayout>
    </React.Fragment>
  );
}

export default PostBox;
