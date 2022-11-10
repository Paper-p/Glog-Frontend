import { loggedAtom } from "atoms";
import { Header } from "components/Common";
import feed from "data/request/feed";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";

function DetailsPost() {
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [logged] = useRecoilState(loggedAtom);

  useEffect(() => {
    const getDetailsPost = async () => {
      try {
        const res: any = await feed.getDetailsPost(
          Number(params.postId),
          logged
            ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
            : ""
        );
        setResponse(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    getDetailsPost();
  }, []);

  return (
    <React.Fragment>
      <Header isNeedSearch={false} />
      <S.DetailsPostLayout>
        <S.Title>{response.title}</S.Title>
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPost;
