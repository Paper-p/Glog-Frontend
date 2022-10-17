import * as S from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "../Logo";
import React from "react";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";

function Header() {
  const { pathname } = useLocation();
  const [logged] = useRecoilState(loggedAtom);
  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

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
          <Link to={"/feed"}>
            <S.HeaderElements css={select("/feed")}>
              게시물 작성
            </S.HeaderElements>
          </Link>
        </S.HeaderElementsList>
      </S.Header>
      <S.Header className="right-part">
        {logged ? (
          <S.HeaderElementsList>
            <S.HeaderElements>
              <Link to={"/my"}>
                <S.Profile src="/images/profile.jpeg" alt="profile" />
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
