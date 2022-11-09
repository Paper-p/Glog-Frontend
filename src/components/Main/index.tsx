import { loggedAtom } from "atoms";
import { PostBox } from "components/Common";
import Header from "components/Common/Header";
import feed from "data/request/feed";
import useInputs from "hooks/useInputs";
import { marked } from "marked";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";

export default function Main() {
  const [{ keyword }, onChange, setNull] = useInputs({
    keyword: "",
  });
  const [list, setList] = useState<any[]>([]);
  const [logged] = useRecoilState(loggedAtom);

  useEffect(() => {
    const getFeedList = async () => {
      try {
        const res: any = await feed.getFeedList(
          0,
          10,
          "",
          logged
            ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
            : ""
        );
        console.log(res.data.list);

        setList(res.data.list);
      } catch (e: any) {
        console.log(e);
      }
    };
    getFeedList();
  }, []);

  return (
    <>
      <Header isNeedSearch={true} onChange={onChange} />
      <S.CategoryBox>
        <S.Catrgory>💻 게시물’s</S.Catrgory>
      </S.CategoryBox>
      <S.PostListSection>
        <>
          {list.map((idx) => (
            <div key={idx.id}>
              <PostBox
                imageUrl={idx.thumbnail}
                title={idx.title}
                content={
                  marked(idx.previewContent).replace(/<[^>]+>/g, "") + "..."
                }
                like={idx.likeCount}
                view={idx.hit}
              />
            </div>
          ))}
        </>
      </S.PostListSection>
    </>
  );
}
