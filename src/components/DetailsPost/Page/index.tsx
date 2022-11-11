import { loggedAtom } from "atoms";
import { Header } from "components/Common";
import feed from "data/request/feed";
import useInputs from "hooks/useInputs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import DetailsPostContent from "../Content";
import DetailsPostInfo from "../Info";
import DetailsPostThumbnail from "../Thumbnail";
import PostTitle from "../Title";
import * as S from "./style";

function DetailsPostPage() {
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [logged] = useRecoilState(loggedAtom);

  const [{ title }, onChange, setNull] = useInputs({
    title: "",
  });

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
        <PostTitle title={response.title} />
        <S.TagList>
          {response.tagList?.map((item: string) => (
            <React.Fragment key={item}>
              <S.Tag>{item}</S.Tag>
            </React.Fragment>
          ))}
        </S.TagList>
        <DetailsPostInfo />
        <DetailsPostThumbnail imageUrl={response.thumbnail} />
        <DetailsPostContent content={response.content} />
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPostPage;
