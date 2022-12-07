import { useEffect, useState } from "react";
import * as S from "./style";
import BottomSection from "../Common/BottomSection";
import TextSection from "../Common/TextSection";
import { PostInterface } from "interfaces/PostInterface";
import { Link } from "react-router-dom";

function NormalPostBox({
  id,
  title,
  content,
  thumbnail,
  like,
  hit,
}: PostInterface) {
  const [image, setImage] = useState<string>("");
  const writePostModalPreviewThumbnail: string =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

  useEffect(() => {
    if (thumbnail === "PREVIEW") {
      setImage(writePostModalPreviewThumbnail);
    } else {
      setImage(thumbnail);
    }
  }, [thumbnail]);

  return (
    <Link to={`post/${id}`}>
      <S.NormalPostBoxLayout backgroundImage={image}>
        <TextSection title={title} content={content} />
        <BottomSection isNormal={true} like={like} hit={hit} />
      </S.NormalPostBoxLayout>
    </Link>
  );
}

export default NormalPostBox;
