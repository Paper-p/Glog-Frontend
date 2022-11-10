import { Header } from "components/Common";
import React, { useEffect } from "react";
import * as S from "./style";

function DetailsPost() {
  useEffect(() => {});

  return (
    <React.Fragment>
      <Header isNeedSearch={false} />
      <S.DetailsPostLayout>
        <S.Title></S.Title>
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPost;
