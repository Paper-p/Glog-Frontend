import { getProfileAtom, searchAtom } from "atoms";
import { PostBox, Category, Header } from "components/Common";
import feed from "data/request/feed";
import { marked } from "marked";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import MainSkeleton from "../Skeleton";
import * as S from "./style";
import uuid from "react-uuid";

export default function Main() {
  const page = useRef<number>(0);
  const [list, setList] = useState<any[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [search] = useRecoilState(searchAtom);
  const [, setGetProfile] = useRecoilState(getProfileAtom);

  const getFeedList = useCallback(async () => {
    try {
      setIsLoad(true);
      const res: any = await feed.getFeedList({
        size: 12,
        page: page.current,
        keyword: search && search,
      });

      setGetProfile(true); //miniprofile 요청
      setList((prevPosts) => [...prevPosts, ...res.data.list]);
      setHasNextPage(res.data.list.length === 12);
      setIsLoad(false);

      if (res.data.list.length) {
        page.current += 1;
      }
    } catch (e: any) {
      console.error(e);
    }
  }, [search]);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && !isLoad) {
        getFeedList();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, getFeedList, isLoad]);

  const onSearch = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      page.current = 0;
      setList([]);
      getFeedList();
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
            <div key={uuid()}>
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
          <div ref={observerTargetEl} />
        </>
      </S.PostListSection>
      {isLoad && <MainSkeleton />}
    </>
  );
}
