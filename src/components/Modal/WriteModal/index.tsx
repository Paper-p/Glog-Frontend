import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { PostBox, Button, ModalLayout } from "components/Common";
import { useRecoilState } from "recoil";
import {
  writeModalAtom,
  thumbnailUrlAtom,
  tagAtom,
  contentAtom,
  titleAtom,
} from "atoms";
import { Upload } from "assets/svg";
import image from "data/request/image";
import feed from "data/request/feed";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";
import { toast } from "react-toastify";
import TokenService from "util/TokenService";

interface Props {
  mode: "작성하기" | "수정하기";
  editPostId?: number;
  editor?: string;
}

export function WriteModal({ mode, editPostId, editor }: Props) {
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [, setWriteModal] = useRecoilState(writeModalAtom);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [content, setContent] = useRecoilState(contentAtom);
  const [tag, setTag] = useRecoilState(tagAtom);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [contentPreview, setContentPreiview] = useState<string>("");
  const [onlyNameList, setOnlyNameList] = useState<string[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);
  const setProfileImage = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setContentPreiview(marked(content).replace(/<[^>]+>/g, ""));
    if (isClick) {
      request();
      setIsClick(false);
    }
  }, [isClick]);

  const saveTag = () => {
    setOnlyNameList(
      tag.map(({ name }) => {
        return name;
      })
    );
    setIsClick(true);
  };

  const request = async () => {
    if (thumbnailUrl !== "") {
      try {
        if (mode === "작성하기") {
          await feed.writeFeed({
            title,
            content,
            thumbnail: thumbnailUrl,
            tags: onlyNameList,
            token: TokenService.getLocalAccessToken(),
          });

          toast.success("게시물이 출간되었습니다", {
            autoClose: 2000,
          });
          navigate("/");
        }

        if (mode === "수정하기") {
          await feed.editPost(Number(editPostId), {
            title: title,
            content: content,
            thumbnail: thumbnailUrl,
            tags: onlyNameList,
            token: TokenService.getLocalAccessToken(),
          });

          toast.success("게시물이 수정되었습니다", {
            autoClose: 2000,
          });
          navigate(`/${editor}`);
        }

        setWriteModal(false);
        setTitle("");
        setContent("");
        setTag([]);
        setThumbnailUrl("");
      } catch (e: any) {
        console.log(e);
      }
    } else {
      setErrorMessage("썸네일 이미지가 없어요");
    }
  };

  const imgHandler = async (e: any) => {
    try {
      let blob = new Blob([new ArrayBuffer(e.target.files[0])], {
        type: "image/png",
      });
      setThumbnailUrl(URL.createObjectURL(blob));
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const res: any = await image.uploadImage(
        formData,
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
      setThumbnailUrl(res.data.imageUrl);
    } catch (e: any) {
      setErrorMessage("잘못된 이미지에요");
      setThumbnailUrl("");
      console.log(e);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setProfileImage.current?.click();
  };

  return (
    <ModalLayout setModal={setWriteModal}>
      <S.WriteModal onClick={(e) => e.stopPropagation()}>
        <S.Text>게시글 프리뷰</S.Text>
        <S.UploadSvgBox onClick={imgBtnClick}>
          <S.UploadSvg>
            <Upload />
          </S.UploadSvg>
          <p>썸네일 변경</p>
        </S.UploadSvgBox>
        <PostBox
          isDefault={true}
          imageUrl={thumbnailUrl}
          title={title}
          content={contentPreview}
          like={3192}
          view={8321}
          isPreview={true}
        />
        <S.UploadThumbnail>
          <input
            ref={setProfileImage}
            type={"file"}
            id={"profile"}
            accept={"image/*"}
            name={"file"}
            onChange={imgHandler}
          />
          <Button onClick={saveTag}>{mode}</Button>
        </S.UploadThumbnail>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </S.WriteModal>
    </ModalLayout>
  );
}
