import * as S from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "../Logo";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";
import user from "data/request/user";
import Input from "../Input";
import { searchAtom } from "atoms/AtomContainer";
import { useQuery } from "react-query";

interface Props {
  isNeedSearch?: boolean;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

function Header({ isNeedSearch, onKeyPress }: Props) {
  const { pathname } = useLocation();
  const [, setSearch] = useRecoilState(searchAtom);
  const [logged, setLogged] = useRecoilState(loggedAtom);
  const [nickname, setNickname] = useState<string>("");
  const [profileImg, setprofileImg] = useState<string>("");

  const select = (currentPath: string) =>
    currentPath === pathname && css({ color: "#E0E0E0" });

  const getMiniProfile = async () => {
    try {
      if (logged) {
        const res: any = await user.getMiniProfile(
          JSON.parse(localStorage.getItem("token") || "{}").accessToken
        );
        setNickname(res.data.nickname);
        setprofileImg(res.data.profileImageUrl);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("token") || "{}").accessToken !==
      undefined
    ) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  useEffect(() => {
    console.log(logged);

    if (logged) {
      getMiniProfile();
    }
  }, [logged]);

  const profileQuery = useQuery({
    queryKey: "post",
    queryFn: () => getMiniProfile,
  });

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
                <Link to={`/${nickname}`}>
                  <p className="user-name">{nickname}</p>
                </Link>
                <Link to={`/${nickname}`}>
                  <S.Profile src={profileImg} alt="" />
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
