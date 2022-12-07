import * as S from "./style";
import BottomSection from "../../Common/BottomSection";
import TextSection from "../../Common/TextSection";
import UserPagePostBoxControl from "../Control";
import { PostInterface } from "interfaces/PostInterface";
import { Link } from "react-router-dom";

function UserPagePostBox({
  id,
  title,
  content,
  thumbnail,
  like,
  hit,
  isMine,
}: PostInterface) {
  return (
    <S.UserPagePostBoxLayout>
      <Link to={`/post/${id}`}>
        <S.Thumbnail src={thumbnail} />
      </Link>
      <S.PostInfoSection>
        <Link to={`/post/${id}`}>
          <TextSection title={title} content={content} />
        </Link>
        <BottomSection like={like} hit={hit}>
          {isMine ? <UserPagePostBoxControl id={Number(id)} /> : <></>}
        </BottomSection>
      </S.PostInfoSection>
    </S.UserPagePostBoxLayout>
  );
}

export default UserPagePostBox;
