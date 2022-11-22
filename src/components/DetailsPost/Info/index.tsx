import InfoBox from "components/Common/PostBox/Common";
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
  const leftPad = (value: any) => {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  };

  const toStringByFormatting = (source: Date, delimiter = "-") => {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  };

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
          <S.createdAt>{toStringByFormatting(new Date(createdAt))}</S.createdAt>
        </S.Author>
      </S.AuthorInfo>
      <S.PostInfo>
        <InfoBox like={like} hit={hit} />
      </S.PostInfo>
    </S.DetailsPostInfoLayout>
  );
}

export default DetailsPostInfo;
