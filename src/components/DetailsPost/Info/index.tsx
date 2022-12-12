import { useDate } from "hooks/useDate";
import { Link } from "react-router-dom";
import * as S from "./style";
import * as I from "assets/svg";

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
      <S.AuthorInfoSection>
        <S.Profile>
          <Link to={`/${author?.nickname}`}>
            <img
              src={author?.profileImageUrl}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </Link>
        </S.Profile>
        <S.Author>
          <S.Name>{author?.nickname}</S.Name>
          <S.createdAt>{formatDate}</S.createdAt>
        </S.Author>
      </S.AuthorInfoSection>
      <S.PostInfoSection>
        <S.ItemBox>
          <S.Svg className="like">
            <I.Like />
          </S.Svg>
          <S.ItemValue>{like}</S.ItemValue>
        </S.ItemBox>
        <S.ItemBox>
          <S.Svg>
            <I.Hit />
          </S.Svg>
          <S.ItemValue>{hit}</S.ItemValue>
        </S.ItemBox>
      </S.PostInfoSection>
    </S.DetailsPostInfoLayout>
  );
}

export default DetailsPostInfo;
