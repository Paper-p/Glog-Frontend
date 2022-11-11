import InfoBox from "components/Common/PostBox/Common";
import React from "react";
import * as S from "./style";

function DetailsPostInfo() {
  return (
    <S.DetailsPostInfoLayout>
      <S.AuthorInfo>
        <S.Profile>
          <img src="/images/profile.jpeg" alt="" />
        </S.Profile>
        <S.Author>
          <S.Name>안진형</S.Name>
          <S.createdAt>2022.08.30</S.createdAt>
        </S.Author>
      </S.AuthorInfo>
      <S.PostInfo>
        <InfoBox like={10} hit={10} />
      </S.PostInfo>
    </S.DetailsPostInfoLayout>
  );
}

export default DetailsPostInfo;
