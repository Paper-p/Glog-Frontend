import { getComment } from "data/url/getUrl";
import AxiosInstance from "util/AxiosInstance";

class Comment {
  addComment(feedId: number, comment: string) {
    console.log(feedId, comment);

    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getComment.commentUrl() + `/${feedId}`,
          data: {
            content: comment,
          },
        },
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
    } catch (error) {
      return error;
    }
  }

  editComment(commentId: number, text: string) {
    try {
      return AxiosInstance(
        {
          method: "PATCH",
          url: getComment.commentUrl() + `/${commentId}`,
          data: {
            content: text,
          },
        },
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
    } catch (error) {
      return error;
    }
  }

  removeComment(commentId: number) {
    try {
      return AxiosInstance(
        {
          method: "DELETE",
          url: getComment.commentUrl() + `/${commentId}`,
        },
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Comment();
