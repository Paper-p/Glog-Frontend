import basicApiForm from "../Utils/basicApiForm";
import { getFeed } from "../Utils/getEndPoints";

class Feed {
  getList(page: number, size: number) {
    try {
      return basicApiForm({
        method: "GET",
        url: getFeed.getList() + `?page=${page}&size=${size}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
