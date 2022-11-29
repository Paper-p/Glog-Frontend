import { loggedAtom } from "atoms";
import { getFeed } from "data/url/getUrl";
import { useRecoilState } from "recoil";
import { WriteType } from "types/feedType";
import AxiosInstance from "util/AxiosInstance";

class Feed {
  writeFeed(data: WriteType) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getFeed.feed(),
          data: {
            title: data.title,
            content: data.content,
            thumbnail: data.thumbnail,
            tags: data.tags,
          },
        },
        data.token
      );
    } catch (error) {
      return error;
    }
  }

  getFeedList(size: number, page: number, keyword?: string, token?: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getFeed.getFeedlist(),
          params: {
            size: size,
            page: page,
            keyword: keyword,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  getDetailsPost(id: number, token?: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getFeed.feed() + `/${id}`,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  deletePost(id: number) {
    try {
      return AxiosInstance(
        {
          method: "DELETE",
          url: getFeed.feed() + `/${id}`,
        },
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
