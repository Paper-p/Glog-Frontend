import * as S from "./style";

interface DetailsPostThumbnailProps {
  imageUrl: string;
}

function DetailsPostThumbnail({ imageUrl }: DetailsPostThumbnailProps) {
  return (
    <S.Thumbnail>
      <img src={imageUrl} alt="" />
    </S.Thumbnail>
  );
}

export default DetailsPostThumbnail;
