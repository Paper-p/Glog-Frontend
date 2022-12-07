import { getComment } from "data/url/getUrl";
import AxiosInstance from "util/AxiosInstance";
import TokenService from "util/TokenService";

class Comment {
  addComment(feedId: number, comment: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getComment.commentUrl() + `/${feedId}`,
          data: {
            content: comment,
          },
        },
        TokenService.getLocalAccessToken()
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
        TokenService.getLocalAccessToken()
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
        TokenService.getLocalAccessToken()
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Comment();
