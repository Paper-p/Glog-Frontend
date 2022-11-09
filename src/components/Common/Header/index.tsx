import * as S from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "../Logo";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";
import Input from "../Input";

interface Props {
  isNeedSearch?: boolean;
  onChange?: React.FormEventHandler<HTMLInputElement> | undefined;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

function Header({ isNeedSearch, onChange, onKeyPress }: Props) {
  const { pathname } = useLocation();
  const [logged, setLogged] = useRecoilState(loggedAtom);

  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

  useEffect(() => {
    const nowDate = new Date();
    const expiredAt: any = localStorage.getItem("expiredAt");

    if (expiredAt > nowDate.getTime().toString()) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [logged]);

  return (
    <S.HeaderLayout>
      <S.Header>
        <S.HeaderElements>
          <Link to={"/"}>
            <Logo width={90} height={25} />
          </Link>
          <S.HeaderBox>
            <Link to={"/"}>
              <p className="home" css={select("/")}>
                홈
              </p>
            </Link>
            <Link to={"/write"}>
              <p className="write-post" css={select("/write")}>
                게시물 작성
              </p>
            </Link>
          </S.HeaderBox>
        </S.HeaderElements>
        <S.HeaderElements className="search">
          {isNeedSearch ? (
            <Input
              purpose="searchBar"
              placeholder="찾고싶은 주제를 입력해주세요"
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </S.HeaderElements>
        <S.HeaderElements>
          <S.HeaderBox className="right ">
            {logged ? (
              <>
                <p className="user-name">오종진님</p>
                <Link to={"/my"}>
                  <S.Profile src="/images/profile.jpeg" alt="" />
                </Link>
              </>
            ) : (
              <>
                <Link to={"/signin"}>
                  <p css={select("/signin")}>로그인</p>
                </Link>
                <Link to={"/signup/main"}>
                  <p css={select("/signup/main")}>회원가입</p>
                </Link>
              </>
            )}
          </S.HeaderBox>
        </S.HeaderElements>
      </S.Header>
    </S.HeaderLayout>
  );
}

export default React.memo(Header);
