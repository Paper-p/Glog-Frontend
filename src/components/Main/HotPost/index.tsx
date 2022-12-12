import { loggedAtom } from "atoms";
import { Category, HotPostBox } from "components/Common";
import feed from "data/request/feed";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TokenService from "util/TokenService";
import HotPostsSkeleton from "../Skeleton/Hot";
import * as S from "./style";

function MainPageHotPosts() {
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [logged] = useRecoilState(loggedAtom);
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    setIsLoad(true);
    const getHotPosts = async () => {
      try {
        const res: any = await feed.getHotPostsList(
          logged && TokenService.getLocalAccessToken()
        );
        setList(res.data.list);
        setIsLoad(false);
      } catch (e: any) {
        console.log(e);
      }
    };
    getHotPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.HotPostsLayout>
      {!isLoad && (
        <S.CategoryBox>
          <Category>🔥 HOT’</Category>
        </S.CategoryBox>
      )}
      <S.HotPostList>
        <>
          {list.map((idx) => (
            <div key={idx.id}>
              <HotPostBox
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
        </>
      </S.HotPostList>
      {isLoad && <HotPostsSkeleton />}
    </S.HotPostsLayout>
  );
}

export default MainPageHotPosts;
