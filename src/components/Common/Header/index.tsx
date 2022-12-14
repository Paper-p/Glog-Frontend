import * as S from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "../Logo";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";
import user from "data/request/user";
import Input from "../Input";
import { searchAtom, myInfoAtom } from "atoms/AtomContainer";
import TokenService from "util/TokenService";

interface Props {
  isNeedSearch?: boolean;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

function Header({ isNeedSearch, onKeyPress }: Props) {
  const { pathname } = useLocation();
  const [, setSearch] = useRecoilState(searchAtom);
  const [myInfo, setMyInfo] = useRecoilState(myInfoAtom);
  const [logged, setLogged] = useRecoilState(loggedAtom);

  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

  const getMiniProfile = async () => {
    if (logged) {
      try {
        const res: any = await user.getMiniProfile(
          TokenService.getLocalAccessToken()
        );

        setMyInfo({
          nickname: res.data.nickname,
          profileUrl: res.data.profileImageUrl,
        });
      } catch (e: any) {
        console.log(e);
      }
    } else {
      setLogged(false);
      TokenService.removeUser();
    }
  };

  useEffect(() => {
    if (TokenService.getLocalAccessToken() === undefined) {
      setLogged(false);
    }

    getMiniProfile();
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
        <S.HeaderElements className="search-section">
          {isNeedSearch ? (
            <Input
              purpose="searchBar"
              placeholder="찾고싶은 주제를 입력해주세요"
              onKeyPress={onKeyPress}
              onChange={onSearchChange}
            />
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </S.HeaderElements>
        <S.HeaderElements>
          <S.HeaderBox className="right ">
            {logged ? (
              <>
                <Link to={`/${myInfo.nickname}`}>
                  <p className="user-name">{myInfo.nickname}</p>
                </Link>
                <Link to={`/${myInfo.nickname}`}>
                  <S.Profile src={myInfo.profileUrl} alt="" />
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
