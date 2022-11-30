import { loggedAtom } from "atoms";
import { Category, PostBox } from "components/Common";
import feed from "data/request/feed";
import { marked } from "marked";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TokenService from "util/TokenService";
import * as S from "./style";

function MainPageHotPosts() {
  const [logged] = useRecoilState(loggedAtom);
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    const getHotPosts = async () => {
      try {
        const res: any = await feed.getHotPostsList(
          logged && TokenService.getLocalAccessToken()
        );

        setList(res.data.list);
      } catch (e: any) {
        console.log(e);
      }
    };
    getHotPosts();
  }, []);

  return (
    <S.HotPostsLayout>
      <S.CategoryBox>
        <Category>🔥 HOT’</Category>
      </S.CategoryBox>
      <S.HotPostList>
        <>
          {list.map((idx) => (
            <div key={idx.id}>
              <PostBox
                isDefault={false}
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
      </S.HotPostList>
    </S.HotPostsLayout>
  );
}

export default MainPageHotPosts;
