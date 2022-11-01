import * as S from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import Logo from "../Logo";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";
import user from "data/request/user";

function Header() {
  const { pathname } = useLocation();
  const [logged] = useRecoilState(loggedAtom);
  const [nickname, setNickname] = useState<string>("");
  const [profileImg, setprofileImg] = useState<string>("");
  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

  useEffect(() => {
    if (logged == true) {
      const getMiniProfile = async () => {
        try {
          const res: any = await user.getMiniProfile(
            String(window.localStorage.getItem("access-token"))
          );
          setNickname(res.data.nickname);
          setprofileImg(res.data.profileImageUrl);
        } catch (e: any) {
          console.log(e);
        }
      };
      getMiniProfile();
    }
  }, [logged]);

  return (
    <S.HeaderBox>
      <S.Header>
        <S.HeaderElementsList>
          <S.HeaderElements>
            <Link to={"/"}>
              <Logo width={90} height={25} />
            </Link>
          </S.HeaderElements>
          <Link to={"/"}>
            <S.HeaderElements css={select("/")}>홈</S.HeaderElements>
          </Link>
          <Link to={"/write"}>
            <S.HeaderElements css={select("/write")}>
              게시물 작성
            </S.HeaderElements>
          </Link>
        </S.HeaderElementsList>
      </S.Header>
      <S.Header className="right-part">
        {logged ? (
          <S.HeaderElementsList>
            <S.HeaderElements>
              <Link to={"/my"} className="user-profile">
                <S.Username>{nickname}님</S.Username>
                <S.Profile src={profileImg} alt="profile" />
              </Link>
            </S.HeaderElements>
          </S.HeaderElementsList>
        ) : (
          <S.HeaderElementsList>
            <Link to={"/signin"}>
              <S.HeaderElements css={select("/signin")}>
                로그인
              </S.HeaderElements>
            </Link>
            <Link to={"/signup/main"}>
              <S.HeaderElements css={select("/signup/main")}>
                회원가입
              </S.HeaderElements>
            </Link>
          </S.HeaderElementsList>
        )}
      </S.Header>
    </S.HeaderBox>
  );
}

export default React.memo(Header);
