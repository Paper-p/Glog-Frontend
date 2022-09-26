import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

  return (
    <S.HeaderBox>
      <S.Header>
        <S.HeaderElementsList>
          <S.HeaderElements>
            <I.GlogLogo />
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
        <S.HeaderElementsList>
          <Link to={"/signin"}>
            <S.HeaderElements css={select("/signin")}>로그인</S.HeaderElements>
          </Link>
          <Link to={"/signup"}>
            <S.HeaderElements css={select("/signup")}>
              회원가입
            </S.HeaderElements>
          </Link>
        </S.HeaderElementsList>
      </S.Header>
    </S.HeaderBox>
  );
};

export default Header;
