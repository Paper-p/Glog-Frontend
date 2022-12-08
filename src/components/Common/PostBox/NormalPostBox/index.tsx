import * as S from "./style";
import BottomSection from "../Common/BottomSection";
import TextSection from "../Common/TextSection";
import { PostInterface } from "interfaces/PostInterface";
import { Link } from "react-router-dom";

interface Props extends PostInterface {
  isPreview?: boolean;
}

function NormalPostBox({
  id,
  title,
  content,
  thumbnail,
  like,
  hit,
  isPreview,
}: Props) {
  return (
    <S.NormalPostBoxLayout className={isPreview ? "preview" : ""}>
      <Link to={`post/${id}`}>
        <S.NormalPost
          className={isPreview ? "preview" : ""}
          backgroundImage={thumbnail}
        >
          <TextSection title={title} content={content} />
          <BottomSection isNormal={true} like={like} hit={hit} />
        </S.NormalPost>
      </Link>
    </S.NormalPostBoxLayout>
  );
}

export default NormalPostBox;
