import { searchAtom } from "atoms";
import { Category, Header, NormalPostBox } from "components/Common";
import feed from "data/request/feed";
import { marked } from "marked";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import MainSkeleton from "../Skeleton";
import * as S from "./style";
import uuid from "react-uuid";
import MainPageHotPosts from "../HotPost";

export default function Main() {
  const page = useRef<number>(0);
  const [list, setList] = useState<any[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [searchFailed, setSearchFailed] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [search] = useRecoilState(searchAtom);

  const getFeedList = useCallback(async () => {
    try {
      setIsLoad(true);
      const res: any = await feed.getFeedList({
        size: 12,
        page: page.current,
        keyword: search && search,
      });
      if (search && res.data.list.length < 1) {
        setSearchFailed(true);
        setSearchText(`"${search}"`);
      } else {
        setSearchFailed(false);
        setSearchText("");
      }
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
    <S.MainPageLayout>
      <Header isNeedSearch={true} onKeyPress={onSearch} />
      <MainPageHotPosts />
      <S.MainPageNormalPosts>
        <S.CategoryBox>
          <Category>💻 게시물’s</Category>
        </S.CategoryBox>
        <S.PostListSection>
          <>
            {list.map((idx) => (
              <div key={uuid()}>
                <NormalPostBox
                  id={idx.id}
                  thumbnail={idx.thumbnail}
                  title={idx.title}
                  content={
                    marked(idx.previewContent).replace(/<[^>]+>/g, "") + "..."
                  }
                  like={idx.likeCount}
                  hit={idx.hit}
                />
              </div>
            ))}
            <div ref={observerTargetEl} />
          </>
        </S.PostListSection>
        {searchFailed && (
          <S.SearchResultIsNone>
            <S.SearchText>{searchText}</S.SearchText>
            <p>에 대한 검색결과가 없습니다</p>
          </S.SearchResultIsNone>
        )}
      </S.MainPageNormalPosts>

      {isLoad && <MainSkeleton />}
    </S.MainPageLayout>
  );
}
