import { loggedAtom, searchAtom } from "atoms";
import { PostBox } from "components/Common";
import Category from "components/Common/Category";
import Header from "components/Common/Header";
import feed from "data/request/feed";
import { marked } from "marked";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";

export default function Main() {
  const [list, setList] = useState<any[]>([]);
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);
  const [search] = useRecoilState(searchAtom);

  const getFeedList = async (keyword?: string) => {
    try {
      const res: any = await feed.getFeedList(
        10,
        0,
        keyword ? keyword : "",
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setList(res.data.list);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFeedList();
  }, []);

  useEffect(() => {
    if (isEnter) {
      setIsEnter(false);
      getFeedList(search);
    }
  }, [isEnter]);

  const onSearch = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setIsEnter(true);
    }
  };

  return (
    <>
      <Header isNeedSearch={true} onKeyPress={onSearch} />
      <S.CategoryBox>
        <Category>💻 게시물’s</Category>
      </S.CategoryBox>
      <S.PostListSection>
        <>
          {list.map((idx) => (
            <div key={idx.id}>
              <PostBox
                isDefault={true}
                id={idx.id}
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
