import { getFeed } from "data/url/getUrl";
import { WriteType } from "types/feedType";
import AxiosInstance from "util/axiosInstance";

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
          url: `${getFeed.feed()}/${id}`,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
