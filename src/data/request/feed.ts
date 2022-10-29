import { getFeed } from "data/url/getUrl";
import { WriteType } from "types/feedType";
import AxiosInstance from "util/axiosInstance";

class Feed {
  writeFeed(data: WriteType) {
    try {
      AxiosInstance(
        {
          method: "POST",
          url: getFeed.writeFeed(),
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
}

export default new Feed();
