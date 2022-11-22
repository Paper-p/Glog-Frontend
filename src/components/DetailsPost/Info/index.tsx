import InfoBox from "components/Common/PostBox/Common";
import { useDate } from "hooks/useDate";
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

interface Props {
  author: {
    userId: string;
    nickname: string;
    profileImageUrl: string;
  };
  createdAt: Date;
  like: number;
  hit: number;
}

function DetailsPostInfo({ author, createdAt, like, hit }: Props) {
  const formatDate = useDate(new Date(createdAt));

  return (
    <S.DetailsPostInfoLayout>
      <S.AuthorInfo>
        <S.Profile>
          <Link to={`/${author?.nickname}`}>
            <img src={author?.profileImageUrl} alt="" />
          </Link>
        </S.Profile>
        <S.Author>
          <S.Name>{author?.nickname}</S.Name>
          <S.createdAt>{formatDate}</S.createdAt>
        </S.Author>
      </S.AuthorInfo>
      <S.PostInfo>
        <InfoBox like={like} hit={hit} />
      </S.PostInfo>
    </S.DetailsPostInfoLayout>
  );
}

export default DetailsPostInfo;
