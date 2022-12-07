import React from "react";
import * as S from "./style";
import BottomSection from "../Common/BottomSection";
import TextSection from "../Common/TextSection";
import { PostInterface } from "interfaces/PostInterface";
import { Link } from "react-router-dom";

function HotPostBox({
  id,
  title,
  content,
  thumbnail,
  like,
  hit,
}: PostInterface) {
  return (
    <Link to={`post/${id}`}>
      <S.HotPostBoxLayout>
        <S.Thumbnail src={thumbnail} />
        <S.PostInfoSection>
          <TextSection title={title} content={content} />
          <BottomSection like={like} hit={hit} />
        </S.PostInfoSection>
      </S.HotPostBoxLayout>
    </Link>
  );
}

export default HotPostBox;
